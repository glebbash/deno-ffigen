import { exec } from "./utils.ts";

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

/**
 * Finds exposed functions names in pre-built `exposedSymbolsFile`
 * that contains readelf's text output.
 */
export async function getExposedFunctionNames(
  exposedSymbolsFile: string,
): Promise<string[]> {
  const output = await Deno.readTextFile(exposedSymbolsFile);

  const lines = output.split("\n");
  const functionsOfInterest = lines.slice(4, -1);

  const allFunctions = functionsOfInterest
    .filter((s) => s.includes(" FUNC "))
    .filter((s) => !s.includes(".localalias"))
    .map(getName)
    .map(stripVersion);

  return Array.from(new Set(allFunctions)).sort();
}

function getName(line: string): string {
  return line.slice(
    "   641: 000000000146c580   666 FUNC    GLOBAL DEFAULT   13 ".length,
  )!;
}

function stripVersion(name: string): string {
  return name.split("@")[0];
}
