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
    mapName: stripPrefixOrAddDollar(libPrefix),
    formatLocation: linkLocationToSource(opts.headersPath),
    typeDefs: new Map(),
  };

  const symbols = await getLibSymbols(opts.symbolsFile, libPrefix);

  const enums = extractEnums(lib, symbols);
  console.log("Total enums:", enums.size);
  lib.typeDefs = new Map([...lib.typeDefs, ...enums]);

  const typeDefs = extractTypeDefs(lib, symbols);
  console.log("Total types:", typeDefs.size);
  lib.typeDefs = new Map([...lib.typeDefs, ...typeDefs]);

  const functions = extractFunctions(lib, symbols, opts.exposedFunctions);
  console.log("Total functions:", functions.size);

  const sources = generateSources(lib, typeDefs, enums, functions);

  await Deno.mkdir(opts.outputFolder, { recursive: true }).catch();
  await Deno.writeTextFile(`${opts.outputFolder}/mod.ts`, sources.mod);
  await Deno.writeTextFile(`${opts.outputFolder}/types.ts`, sources.types);
  await Deno.writeTextFile(`${opts.outputFolder}/symbols.ts`, sources.symbols);
  await Deno.writeTextFile(`${opts.outputFolder}/safe-ffi.ts`, sources.safeFFI);
}

function stripPrefixOrAddDollar(prefix: string): LibInfo["mapName"] {
  return (name: string) => {
    if (name.startsWith(prefix)) {
      return name.slice(prefix.length);
    }

    return "$" + name;
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
