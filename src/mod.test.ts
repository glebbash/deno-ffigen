import { stub } from "@std/testing/mock";
import { afterAll, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

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
