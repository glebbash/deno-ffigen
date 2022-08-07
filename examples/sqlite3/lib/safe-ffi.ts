// deno-lint-ignore-file
export type Opaque<BaseType, BrandType = unknown> = BaseType & {
  readonly [Symbols.base]: BaseType;
  readonly [Symbols.brand]: BrandType;
};

export type Pointer<T = string> = Opaque<bigint, T>;
export type FnPointer<T = string> = Pointer<T>;
export type StructPointer<T = string> = Pointer<T>;

namespace Symbols {
  export declare const base: unique symbol;
  export declare const brand: unique symbol;
}

export function alloc<T>(): Pointer<T> {
  return Deno.UnsafePointer.of(new BigUint64Array(1)) as Pointer<T>;
}

export function cstr(str: string) {
  return Deno.UnsafePointer.of(
    new TextEncoder().encode(str + "\0"),
  ) as Pointer<number>;
}

export function readCString(ptr: Pointer<number>): string {
  return new Deno.UnsafePointerView(ptr).getCString();
}
