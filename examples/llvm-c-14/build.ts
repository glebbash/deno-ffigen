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

/**
 * Generated files are:
 * - `llvm-c/mod.ts` - Bindings entry that also dlopens the shared lib
 * - `llvm-c/types.ts` - Namespace with all type/enum/function definitions
 * - `llvm-c/symbols.ts` - Exports object with lib definition for `Deno.dlopen`
 * - `llvm-c/safe-ffi.ts` - Type utils for making pointer typesafe
 */
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
