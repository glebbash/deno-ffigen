// TODO: add release pipeline
// TODO: check what can be done on struct support

export * from "./bindings-printer.ts";
export * from "./ffi-info-extractor.ts";
export * from "./utils.ts";

import { exec } from "./utils.ts";
import * as extractor from "./ffi-info-extractor.ts";
import * as printer from "./bindings-printer.ts";

/**
 * Extracts symbol definitions from the header file at path `opts.input`
 * and writes them to `opts.output` file in c2ffi's json format.
 */
export async function extractSymbolDefinitions(
  opts: { input: string; output: string },
) {
  await exec(
    `docker run -v $(pwd):/data glebbash/deno-ffigen-c2ffi ` +
      `/data/${opts.input} > ${opts.output}`,
  );
}

/**
 * Extracts exposed symbols names from a dynamic library at path `opts.input`
 * and writes them to `opts.output` file in readelf text format.
 */
export async function extractExposedSymbols(
  opts: { input: string; output: string },
) {
  const program = Deno.build.os == "darwin" ? "greadelf" : "readelf";
  await exec(`${program} -Ws --dyn-syms ${opts.input} > ${opts.output}`);
}

export type FFIGenOptions = {
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
  headersLocationMap?: Record<string, string>;

  /** All symbols file (c2ffi json output). */
  symbolsFile: string;

  /** Exposed symbols file (readelf output). */
  exposedSymbolsFile: string;

  /** Folder where generated files will be saved. */
  outputFolder: string;

  /** Custom C to Deno FFI type mapper */
  getTypeInfo?: extractor.ExtractorOptions["getTypeInfo"];

  /** Used to disable logging */
  silent?: boolean;
};

/**
 * Generates the following files in `opts.outputFolder`:
 * - `mod.ts` - Bindings entry that also dlopens the shared lib
 * - `types.ts` - Namespace with all type/enum/function definitions
 * - `symbols.ts` - Exports object with lib definition for `Deno.dlopen`
 * - `safe-ffi.ts` - Type utils for making pointer typesafe
 */
export async function generateBindings(opts: FFIGenOptions) {
  const symbols = JSON.parse(await Deno.readTextFile(opts.symbolsFile));

  const exposedFunctions = extractor.extractExposedFunctions(
    await Deno.readTextFile(opts.exposedSymbolsFile),
  );

  const ffiInfo = extractor.extractFFIInfo({
    libName: opts.libName,
    typeDefs: {},
    symbols,
    exposedFunctions,
    formatSymbol: (sym) => formatSymbol(sym, opts.libPrefix ?? opts.libName),
    formatLocation: (loc) => formatLocation(loc, opts.headersLocationMap ?? {}),
    getTypeInfo: opts.getTypeInfo ?? ((ctx, next) => next(ctx)),
  });

  await printer.printFFIBindings(ffiInfo, opts.outputFolder);

  if (!opts.silent) {
    console.log("Total enums: " + Object.keys(ffiInfo.enums).length);
    console.log("Total unions: " + Object.keys(ffiInfo.unions).length);
    console.log("Total types: " + Object.keys(ffiInfo.typeDefs).length);
    console.log("Total functions: " + Object.keys(ffiInfo.functions).length);
  }
}

function formatSymbol(symbol: string, symbolPrefix: string) {
  if (symbol.startsWith(symbolPrefix)) {
    return symbol.slice(symbolPrefix.length);
  }

  return "$" + symbol;
}

function formatLocation(
  location: string,
  locationMap: Record<string, string>,
) {
  location = location.split(" <Spelling=")[0];

  const [path, line] = location.split(":");
  location = path + "#L" + line;

  for (const [toMatch, toReplaceWith] of Object.entries(locationMap)) {
    if (location.startsWith(toMatch)) {
      location = toReplaceWith + location.slice(toMatch.length);
      break;
    }
  }

  return location;
}
