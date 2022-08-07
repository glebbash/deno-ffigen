import * as ffigen from "../../mod.ts";

if (Deno.args.includes("-d")) {
  await ffigen.extractDefinitions({
    input: "input/sqlite3.h",
    output: "input/sqlite3.json",
  });
}

if (Deno.args.includes("-s")) {
  await ffigen.extractSymbols({
    input: "input/libsqlite3.so.0.8.6",
    output: "input/sqlite3_symbols.txt",
  });
}

const ffiInfo = ffigen.introspect({
  libName: "SQLite3",
  libPrefix: "sqlite3_",
  exposedFunctions: await ffigen.getFunctionsFromSharedLib(
    "input/sqlite3_symbols.txt",
  ),
  headersPath: ".",
  symbols: await ffigen.getLibSymbols("input/sqlite3.json"),
  // processType: (ctx, next) => {
  //   if (ctx.type.tag.startsWith(":")) {
  //     console.log(ctx.type.tag);
  //   }
  //   return next(ctx);
  // },
});

const sources = ffigen.generateSources(ffiInfo);
await ffigen.printSources(sources, "lib");
