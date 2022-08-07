import { sqlite3 } from "./types.ts";
import { sqlite3_SYMBOLS } from "./symbols.ts";

export * from "./safe-ffi.ts";
export type { sqlite3 };

export function loadsqlite3(path: string): typeof sqlite3 {
  const lib = Deno.dlopen(path, sqlite3_SYMBOLS);

  return { ...lib.symbols, close: () => lib.close() } as never;
}
