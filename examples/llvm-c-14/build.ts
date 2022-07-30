import * as ffigen from "../../mod.ts";

if (Deno.args.includes("-d")) {
  await ffigen.extractDefinitions({
    input: "input/llvm-c.h",
    output: "input/llvm-c.json",
  });
}

if (Deno.args.includes("-s")) {
  await ffigen.extractSymbols({
    input: "/usr/lib/llvm-14/lib/libLLVM.so",
    output: "input/llvm-c_symbols.txt",
  });
}

await ffigen.generateBindings({
  libName: "LLVM",
  symbolsFile: "input/llvm-c.json",
  outputFolder: "llvm-c",
  exposedFunctions: await ffigen.getFunctionsFromSharedLib(
    "input/llvm-c_symbols.txt",
  ),
  headersPath: "https://github.com/llvm/llvm-project/blob" +
    "/release/14.x/llvm/include/",
});
