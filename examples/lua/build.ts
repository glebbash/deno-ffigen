import * as ffigen from "@glebbash/deno-ffigen";

using _ = ffigen.tmpChdir(import.meta.dirname!);

if (Deno.args.includes("-d")) {
  await ffigen.extractSymbolDefinitions({
    input: "input/lua.h",
    output: "input/lua.json",
  });
}

if (Deno.args.includes("-s")) {
  await ffigen.extractExposedSymbols({
    input: "input/liblua54.so",
    output: "input/lua_symbols.txt",
  });
}

await ffigen.generateBindings({
  libName: "LUA",
  libPrefix: "",
  symbolsFile: "input/lua.json",
  exposedSymbolsFile: "input/lua_symbols.txt",
  headersLocationMap: { "/data/": "./" },
  outputFolder: "lib",
});
