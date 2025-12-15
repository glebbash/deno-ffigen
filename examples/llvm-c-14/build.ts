import * as ffigen from "../../mod.ts";

const cwd = import.meta.dirname;

if (Deno.args.includes("-d")) {
  await ffigen.extractSymbolDefinitions({
    input: cwd + "/input/llvm-c.h",
    output: cwd + "/input/llvm-c.json",
  });
}

if (Deno.args.includes("-s")) {
  await ffigen.extractExposedSymbols({
    input: "/usr/lib/llvm-14/lib/libLLVM.so",
    output: cwd + "/input/llvm-c_symbols.txt",
  });
}

await ffigen.generateBindings({
  libName: "LLVM",
  libPrefix: "LLVM",
  symbolsFile: cwd + "/input/llvm-c.json",
  exposedSymbolsFile: cwd + "/input/llvm-c_symbols.txt",
  headersBaseUrl: "https://github.com/llvm/llvm-project/blob" +
    "/release/14.x/llvm/include/",
  outputFolder: cwd + "/lib",
});
