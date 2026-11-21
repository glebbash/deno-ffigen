import { stub } from "@std/testing/mock";
import { afterAll, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { extractFFIInfo } from "./ffi-info-extractor.ts";
import type { CSymbol } from "./types.ts";

const EXAMPLES_DIR = import.meta.dirname + "/../examples";

describe("ffigen", () => {
  if (!Deno.args.includes("--reload")) {
    expectSameContentFileWrites();
  }

  it("generates bindings for llvm-14", async () => {
    await import(EXAMPLES_DIR + "/llvm-c-14/build.ts");
  });

  it("generates bindings for sqlite3", async () => {
    await import(EXAMPLES_DIR + "/sqlite3/build.ts");
  });

  it("generates bindings for lua", async () => {
    await import(EXAMPLES_DIR + "/lua/build.ts");
  });

  it("generates bindings for raylib-5.5", async () => {
    await import(EXAMPLES_DIR + "/raylib-5.5/build.ts");
  });
});

function expectSameContentFileWrites() {
  const writeTextFile = stub(
    Deno,
    "writeTextFile",
    async (path, dataToWrite) => {
      const data = await Deno.readTextFile(path);

      expect(dataToWrite).toStrictEqual(data);
    },
  );

  afterAll(() => {
    writeTextFile.restore();
  });
}

describe("extractFunctions", () => {
  it("renames parameters that are reserved words in TypeScript", () => {
    const int = { tag: ":int", "bit-size": 32, "bit-alignment": 32 };
    const symbols = [{
      tag: "function",
      name: "demo_copy",
      location: "demo.h:1:6",
      inline: false,
      parameters: [
        { name: "out", type: int },
        { name: "in", type: int },
        { name: "new", type: int },
        { name: "", type: int },
      ],
      "return-type": { tag: ":void" },
    }] as unknown as CSymbol[];

    const info = extractFFIInfo({
      libName: "demo",
      typeDefs: {},
      symbols,
      exposedFunctions: ["demo_copy"],
      formatSymbol: (name) => name.replace("demo_", ""),
      formatLocation: (location) => location,
      getTypeInfo: (ctx, next) => next(ctx),
    });

    expect(info.functions.copy.parameters.map((p) => p.name)).toEqual([
      "out",
      "in_",
      "new_",
      "_3",
    ]);
  });
});
