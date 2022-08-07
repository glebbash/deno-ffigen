import { SQLite3 } from "./types.ts";
import { SQLite3_SYMBOLS } from "./symbols.ts";

export * from "./safe-ffi.ts";
export type { SQLite3 };

export function loadSQLite3(path: string): typeof SQLite3 {
  const lib = Deno.dlopen(path, SQLite3_SYMBOLS);

  return { ...lib.symbols, close: () => lib.close() } as never;
}
