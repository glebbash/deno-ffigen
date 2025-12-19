import * as ffigen from "../../mod.ts";

using _ = ffigen.tmpCwd(import.meta.dirname!);

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
  symbolsFile: "./input/llvm-c.json",
  exposedSymbolsFile: "./input/llvm-c_symbols.txt",
  headersLocationMap: {
    "/data/input/./":
      "https://github.com/llvm/llvm-project/blob/release/14.x/llvm/include/",
    "/usr/include/llvm-c/":
      "https://github.com/llvm/llvm-project/blob/release/14.x/llvm/include/llvm-c/",
    "/usr/include/llvm/":
      "https://github.com/llvm/llvm-project/blob/release/14.x/llvm/include/llvm/",
  },
  outputFolder: "./lib",
});
