import * as ffigen from "../../mod.ts";

using _ = ffigen.tmpCwd(import.meta.dirname!);

if (Deno.args.includes("-d")) {
  await ffigen.extractSymbolDefinitions({
    input: "input/raylib.h",
    output: "input/raylib.json",
  });
}

if (Deno.args.includes("-s")) {
  await ffigen.extractExposedSymbols({
    input: "input/libraylib.so",
    output: "input/raylib_symbols.txt",
  });
}

await ffigen.generateBindings({
  libName: "Raylib",
  libPrefix: "",
  symbolsFile: "input/raylib.json",
  exposedSymbolsFile: "input/raylib_symbols.txt",
  headersLocationMap: {
    "/data/input/": "https://github.com/raysan5/raylib/blob/5.5/src/",
  },
  outputFolder: "lib",
  getTypeInfo: (ctx, next) => {
    // raylib only accepts 64bits integers for `unsigned int` parameters
    if (ctx.type.tag === ":unsigned-int") {
      return { tsType: "number", nativeType: "u64" };
    }

    return next(ctx);
  },
});
