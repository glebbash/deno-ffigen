import { stub } from "@std/testing/mock";
import { assertEquals } from "@std/assert";

Deno.test("it generates bindings for llvm-14", async () => {
  await stubWrites(async () => {
    const path = chdir("./examples/llvm-c-14");
    await import(`${path}/build.ts`);
  });
});

Deno.test("it generates bindings for sqlite3", async () => {
  await stubWrites(async () => {
    const path = chdir("./examples/sqlite3");
    await import(`${path}/build.ts`);
  });
});

Deno.test("it generates bindings for lua", async () => {
  await stubWrites(async () => {
    const path = chdir("./examples/lua");
    await import(`${path}/build.ts`);
  });
});

Deno.test("it generates bindings for raylib-5.5", async () => {
  await stubWrites(async () => {
    const path = chdir("./examples/raylib-5.5");
    await import(`${path}/build.ts`);
  });
});

// utils

async function stubWrites(fn: () => unknown) {
  if (Deno.args.includes("--reload")) {
    return await fn();
  }

  const writeTextFile = stub(
    Deno,
    "writeTextFile",
    async (path, dataToWrite) => {
      const data = await Deno.readTextFile(path);

      assertEquals(dataToWrite, data);
    },
  );

  try {
    await fn();
  } finally {
    writeTextFile.restore();
  }
}

function chdir(path: string) {
  const resolvedPath = import.meta
    .resolve(path)
    .slice("file://".length);

  Deno.chdir(resolvedPath);

  return resolvedPath;
}
