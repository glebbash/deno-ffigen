import { Command } from "https://deno.land/x/cliffy@v0.24.3/command/mod.ts";
import { m } from "https://raw.githubusercontent.com/glebbash/multiline-str/master/src/multiline-str.ts";

import { generateBindings } from "./mod.ts";

const LIB_VERSION = "v0.2.1";

const cmd = new Command()
  .name("ffigen")
  .description("FFI Bindings generator for Deno.")
  .version(LIB_VERSION)
  .option(
    "-s, --symbols <symbols-file>",
    "Exposed symbols file (readelf output).",
    {
      required: true,
    },
  )
  .option(
    "-d, --definitions <definitions-file>",
    "Definitions file. (c2ffi json output).",
    {
      required: true,
    },
  )
  .option(
    "-h, --headers <headers>",
    "Base url for the headers of target library.",
    {
      required: true,
    },
  )
  .option(
    "-n, --lib-name <lib-name>",
    "Name of the C library and generated namespace.",
    {
      required: true,
    },
  )
  .option(
    "-p, --lib-prefix [lib-prefix]",
    "Library prefix to strip from all symbols.",
  )
  .option("--no-lib-prefix", "Disable prefix stripping.")
  .helpOption("--help")
  .example(
    "headers",
    m`
      <headers> is used to generate links in description of each function.
      Example: "https://github.com/llvm/llvm-project/blob/release/14.x/llvm/include/"
    `,
  )
  .example(
    "prefix",
    m`
      <lib-name> is used to strip prefix from all symbols.
      For example if <lib-name> is LLVM and function name is LLVMContextCreate,
      the generated function will be accessible as LLVM.ContextCreate.
      You can set <lib-prefix> to set the specific prefix without
      changing the namespace name.
    `,
  )
  .arguments("[output-folder]");

const { args, options } = await cmd.parse();

await generateBindings({
  symbolsFile: options.definitions,
  exposedSymbolsFile: options.symbols,
  outputFolder: args[0] ?? options.libName,
  libName: options.libName,
  headersBaseUrl: options.headers,
  libPrefix: options.libPrefix === false ? "" : options.libPrefix as string,
});
