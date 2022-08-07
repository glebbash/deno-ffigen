import * as ffigen from "../../mod.ts";

if (Deno.args.includes("-d")) {
  await ffigen.extractDefinitions({
    input: "input/lua.h",
    output: "input/lua.json",
  });
}

if (Deno.args.includes("-s")) {
  await ffigen.extractSymbols({
    input: "input/liblua54.so",
    output: "input/lua_symbols.txt",
  });
}

await ffigen.generateBindings({
  libName: "LUA",
  libPrefix: "lua_",
  exposedFunctions: await ffigen.getFunctionsFromSharedLib(
    "input/lua_symbols.txt",
  ),
  headersPath: ".",
  symbolsFile: "input/lua.json",
  outputFolder: "lib",
});
