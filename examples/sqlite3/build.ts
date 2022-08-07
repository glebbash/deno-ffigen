import * as ffigen from "../../mod.ts";

if (Deno.args.includes("-d")) {
  await ffigen.extractDefinitions({
    input: "input/sqlite3.h",
    output: "input/sqlite3.json",
  });
}

if (Deno.args.includes("-s")) {
  await ffigen.extractSymbols({
    input: "input/libsqlite3.so.0.8.6",
    output: "input/sqlite3_symbols.txt",
  });
}

await ffigen.generateBindings({
  libName: "sqlite3",
  libPrefix: "",
  symbolsFile: "input/sqlite3.json",
  outputFolder: "lib",
  exposedFunctions: await ffigen.getFunctionsFromSharedLib(
    "input/sqlite3_symbols.txt",
  ),
  headersPath: ".",
});
