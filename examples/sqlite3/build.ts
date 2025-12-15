import * as ffigen from "../../mod.ts";

const cwd = import.meta.dirname;

if (Deno.args.includes("-d")) {
  await ffigen.extractSymbolDefinitions({
    input: cwd + "/input/sqlite3.h",
    output: cwd + "/input/sqlite3.json",
  });
}

if (Deno.args.includes("-s")) {
  await ffigen.extractExposedSymbols({
    input: cwd + "/input/libsqlite3.so.0.8.6",
    output: cwd + "/input/sqlite3_symbols.txt",
  });
}

await ffigen.generateBindings({
  libName: "SQLite3",
  libPrefix: "sqlite3_",
  symbolsFile: cwd + "/input/sqlite3.json",
  exposedSymbolsFile: cwd + "/input/sqlite3_symbols.txt",
  headersBaseUrl: ".",
  outputFolder: cwd + "/lib",
});
