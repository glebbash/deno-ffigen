import * as ffigen from "../../mod.ts";

if (Deno.args.includes("-d")) {
  await ffigen.extractSymbolDefinitions({
    input: "input/llvm-c.h",
    output: "input/llvm-c.json",
  });
}

if (Deno.args.includes("-s")) {
  await ffigen.extractExposedSymbols({
    input: "/usr/lib/llvm-14/lib/libLLVM.so",
    output: "input/llvm-c_symbols.txt",
  });
}

await ffigen.generateBindings({
  libName: "LLVM",
  libPrefix: "LLVM",
  symbolsFile: "input/llvm-c.json",
  exposedSymbolsFile: "input/llvm-c_symbols.txt",
  headersBaseUrl: "https://github.com/llvm/llvm-project/blob" +
    "/release/14.x/llvm/include/",
  outputFolder: "lib",
});
