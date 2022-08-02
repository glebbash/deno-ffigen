import {
  extractEnums,
  extractFunctions,
  extractTypeDefs,
  LibInfo,
} from "./extract-ffi-info.ts";
import { generateSources } from "./generate-sources.ts";
import { getLibSymbols } from "./get-lib-symbols.ts";

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
  const libPrefix = opts.libPrefix ?? opts.libName;
  const lib: LibInfo = {
    name: opts.libName,
    prefix: libPrefix,
    headersPath: opts.headersPath,
    typeDefs: new Map(),
  };

  const symbols = await getLibSymbols(opts.symbolsFile, libPrefix);

  const enums = extractEnums(lib, symbols);
  lib.typeDefs = new Map([...lib.typeDefs, ...enums]);

  const typeDefs = extractTypeDefs(lib, symbols);
  lib.typeDefs = new Map([...lib.typeDefs, ...typeDefs]);

  const functions = extractFunctions(lib, symbols, opts.exposedFunctions);

  const sources = generateSources(lib, typeDefs, enums, functions);

  await Deno.mkdir(opts.outputFolder, { recursive: true }).catch();
  await Deno.writeTextFile(`${opts.outputFolder}/mod.ts`, sources.mod);
  await Deno.writeTextFile(`${opts.outputFolder}/types.ts`, sources.types);
  await Deno.writeTextFile(`${opts.outputFolder}/symbols.ts`, sources.symbols);
  await Deno.writeTextFile(`${opts.outputFolder}/safe-ffi.ts`, sources.safeFFI);
}
