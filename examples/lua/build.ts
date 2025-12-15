import * as ffigen from "../../mod.ts";

const cwd = import.meta.dirname;

if (Deno.args.includes("-d")) {
  await ffigen.extractSymbolDefinitions({
    input: cwd + "/input/lua.h",
    output: cwd + "/input/lua.json",
  });
}

if (Deno.args.includes("-s")) {
  await ffigen.extractExposedSymbols({
    input: cwd + "/input/liblua54.so",
    output: cwd + "/input/lua_symbols.txt",
  });
}

await ffigen.generateBindings({
  libName: "LUA",
  libPrefix: "",
  symbolsFile: cwd + "/input/lua.json",
  exposedSymbolsFile: cwd + "/input/lua_symbols.txt",
  headersBaseUrl: ".",
  outputFolder: cwd + "/lib",
});
