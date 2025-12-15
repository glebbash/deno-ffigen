import type { LUA } from "./types.ts";
import { LUA_SYMBOLS } from "./symbols.ts";

export * from "./safe-ffi.ts";
export type { LUA };

export function loadLUA(path: string): typeof LUA {
  const lib = Deno.dlopen(path, LUA_SYMBOLS);

  return { ...lib.symbols, $$close: () => lib.close() } as never;
}
