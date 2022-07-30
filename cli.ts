import { Command } from "https://deno.land/x/cliffy@v0.24.3/command/mod.ts";
import { m } from "https://raw.githubusercontent.com/glebbash/multiline-str/master/src/multiline-str.ts";

import { generateBindings, getFunctionsFromSharedLib } from "./mod.ts";

const cmd = new Command()
  .name("ffigen")
  .description("FFI Bindings generator for Deno.")
  .version("v0.0.1beta")
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
    "-p, --lib-prefix <lib-prefix>",
    "Library prefix to strip from all symbols.",
    { default: "<lib-name>" },
  )
  .helpOption("--help")
  .example(
    "headers",
    m`
      Headers option is used to generate links in description of each function.
      Example: "https://github.com/llvm/llvm-project/blob/release/14.x/llvm/include/"
    `,
  )
  .arguments("[outputFolder]");

const { args, options } = await cmd.parse();

const exposedFunctions = await getFunctionsFromSharedLib(
  options.symbols,
);

await generateBindings(
  options.definitions,
  exposedFunctions,
  args[0] ?? options.libName,
  options.libName,
  options.headers,
  options.libPrefix ?? options.libName,
);
