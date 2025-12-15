import { extractFFIInfo, type FFIInfo, type LibInfo } from "./ffi-extractor.ts";
import { generateSources, printSources } from "./ts-sources.ts";
import { getExposedFunctionNames } from "./exposed-symbols.ts";
import type { CSymbol } from "./types.ts";

export type BindingsOptions = {
  /** Name of the library, will be used as the name of generated namespace */
  libName: string;

  /**
   * Prefix of C library's functions that will be stripped away.
   *
   * Functions that do not start with this prefix will instead
   * be prefixed with `$` (dollar sign).
   */
  libPrefix?: string;

  /**
   * Base url for the headers of target library.
   *
   * Used as a base url for links generated in description of each function.
   */
  headersBaseUrl: string;

  /** All symbols file (c2ffi json output). */
  symbolsFile: string;

  /** Exposed symbols file (readelf output). */
  exposedSymbolsFile: string;

  /** Folder where generated files will be saved. */
  outputFolder: string;
};

/**
 * Generates the following files in `outputFolder`:
 * - `mod.ts` - Bindings entry that also dlopens the shared lib
 * - `types.ts` - Namespace with all type/enum/function definitions
 * - `symbols.ts` - Exports object with lib definition for `Deno.dlopen`
 * - `safe-ffi.ts` - Type utils for making pointer typesafe
 */
export async function generateBindings(opts: BindingsOptions) {
  const ffiInfo = introspect({
    ...opts,
    symbols: JSON.parse(
      await Deno.readTextFile(opts.symbolsFile),
    ),
    exposedFunctions: await getExposedFunctionNames(opts.exposedSymbolsFile),
  });

  const sources = generateSources(ffiInfo);

  await printSources(sources, opts.outputFolder);
}

export type IntrospectOptions = {
  libName: string;
  libPrefix?: string;
  headersBaseUrl: string;
  exposedFunctions: string[];
  symbols: CSymbol[];
  getTypeInfo?: LibInfo["getTypeInfo"];
};

/** Extracts all FFI info from the library using the extraction config. */
export function introspect(opts: IntrospectOptions): FFIInfo {
  const lib: LibInfo = {
    name: opts.libName,
    symbols: opts.symbols,
    exposedFunctions: opts.exposedFunctions,
    typeDefs: new Map(),
    mapName: stripPrefix(opts.libPrefix ?? opts.libName, "$"),
    formatLocation: linkLocationToSource(opts.headersBaseUrl),
    getTypeInfo: opts.getTypeInfo ?? ((ctx, next) => next(ctx)),
  };

  return extractFFIInfo(lib);
}

function stripPrefix(prefix: string, otherPrefix: string): LibInfo["mapName"] {
  return (name: string) => {
    if (name.startsWith(prefix)) {
      return name.slice(prefix.length);
    }

    return otherPrefix + name;
  };
}

function linkLocationToSource(
  baseSourcePath: string,
): LibInfo["formatLocation"] {
  return (location) => {
    location = location.split(" <Spelling=")[0];
    location = fixLine(location);

    if (location.startsWith("/usr/include/")) {
      return baseSourcePath + location.slice("/usr/include/".length);
    }

    const LOCAL_FILE_SEP = "/./";
    const sepIndex = location.indexOf(LOCAL_FILE_SEP);
    if (sepIndex !== -1) {
      return baseSourcePath + location.slice(sepIndex + LOCAL_FILE_SEP.length);
    }

    return location;
  };
}

function fixLine(str: string): string {
  const [path, line] = str.split(":");
  return path + "#L" + line;
}
