import { extractFFIInfo, LibInfo } from "./extract-ffi-info.ts";
import { generateSources, printSources } from "./generate-sources.ts";
import { CSymbol } from "./types.ts";

export type BindingsOptions = {
  libName: string;
  libPrefix?: string;
  headersPath: string;
  symbolsFile: string;
  exposedFunctions: string[];
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
    symbols: await getLibSymbols(opts.symbolsFile),
  });

  const sources = generateSources(ffiInfo);

  await printSources(sources, opts.outputFolder);
}

export async function getLibSymbols(symbolsFile: string) {
  return JSON.parse(
    await Deno.readTextFile(symbolsFile),
  );
}

export type IntrospectOptions = {
  libName: string;
  libPrefix?: string;
  headersPath: string;
  exposedFunctions: string[];
  symbols: CSymbol[];
  processType?: LibInfo["getTypeInfo"];
};

export function introspect(opts: IntrospectOptions) {
  const libPrefix = opts.libPrefix ?? opts.libName;

  const lib: LibInfo = {
    name: opts.libName,
    symbols: filterSymbolsByPrefix(opts.symbols, libPrefix),
    exposedFunctions: opts.exposedFunctions,
    typeDefs: new Map(),
    mapName: stripPrefix(libPrefix, "$"),
    formatLocation: linkLocationToSource(opts.headersPath),
    getTypeInfo: opts.processType ?? ((ctx, next) => next(ctx)),
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

function filterSymbolsByPrefix(
  symbols: CSymbol[],
  libPrefix: string,
): CSymbol[] {
  return symbols.filter((s) => s.name === "" || s.name.startsWith(libPrefix));
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
