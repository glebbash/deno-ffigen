const p = Deno.run({
  cmd: [
    "deno",
    "run",
    "-A",
    "mod.ts",
    "examples/llvm-c-14/input/llvm-c.json",
    "examples/llvm-c-14/input/llvm-c_symbols.txt",
    "examples/llvm-c-14/llvm-c",
    "LLVM",
    "https://github.com/llvm/llvm-project/blob/release/14.x/llvm/include/",
  ],
});

await p.status();
