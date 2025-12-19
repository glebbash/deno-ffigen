import type { Raylib } from "./types.ts";
import { Raylib_SYMBOLS } from "./symbols.ts";

export * from "./safe-ffi.ts";
export type { Raylib };

export function loadRaylib(path: string): typeof Raylib {
  const lib = Deno.dlopen(path, Raylib_SYMBOLS);

  return { ...lib.symbols, $$close: () => lib.close() } as never;
}
