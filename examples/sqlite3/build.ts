import * as ffigen from "@glebbash/deno-ffigen";

using _ = ffigen.tmpChdir(import.meta.dirname!);

if (Deno.args.includes("-d")) {
  await ffigen.extractSymbolDefinitions({
    input: "input/sqlite3.h",
    output: "input/sqlite3.json",
  });
}

if (Deno.args.includes("-s")) {
  await ffigen.extractExposedSymbols({
    input: "input/libsqlite3.so.0.8.6",
    output: "input/sqlite3_symbols.txt",
  });
}

await ffigen.generateBindings({
  libName: "SQLite3",
  libPrefix: "sqlite3_",
  symbolsFile: "input/sqlite3.json",
  exposedSymbolsFile: "input/sqlite3_symbols.txt",
  headersLocationMap: { "/data/": "./" },
  outputFolder: "lib",
});
