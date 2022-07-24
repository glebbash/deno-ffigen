import { generateBindings } from "./generate-bindings.ts";
import { getFunctionsFromSharedLib } from "./get-functions-from-shared-lib.ts";

// TODO: improve cli
// TODO: clean up
// TODO: check what can be done on struct support

if (import.meta.main) {
  const [
    allSymbolsFile,
    exposedSymbolsFile,
    outputFolder,
    libName,
    baseSourcePath,
  ] = Deno.args;

  const exposedFunctions = await getFunctionsFromSharedLib(
    exposedSymbolsFile,
  );

  await generateBindings(
    allSymbolsFile,
    exposedFunctions,
    outputFolder,
    libName,
    baseSourcePath,
  );
}
