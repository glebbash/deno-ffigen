// deno-lint-ignore-file
// deno-fmt-ignore-file

export type Pointer<T = string> = Deno.PointerValue<T>;
export type FnPointer<T = string> = Pointer<T>;
export type StructPointer<T = string> = Pointer<T>;

export function alloc<T>(): Pointer<T> {
  return Deno.UnsafePointer.of(new BigUint64Array(1));
}

export function cstr(str: string): Pointer<number> {
  return Deno.UnsafePointer.of(
    new TextEncoder().encode(str + "\0"),
  );
}

export function readCString(ptr: Pointer<number>): string {
  return new Deno.UnsafePointerView(ptr!).getCString();
}
