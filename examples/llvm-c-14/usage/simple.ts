import { loadLLVM } from "../llvm-c/mod.ts";
import { Pointer } from "../llvm-c/safe-ffi.ts";

const llvm = loadLLVM("/usr/lib/llvm-14/lib/libLLVM.so");

const ctx = llvm.ContextCreate();
const mod = llvm.ModuleCreateWithNameInContext(cstr("main"), ctx);

const data = llvm.PrintModuleToString(mod);
console.log(readCString(data));

llvm.DisposeModule(mod);
llvm.ContextDispose(ctx);

llvm.close();

// utils

function cstr(str: string) {
  return Deno.UnsafePointer.of(
    new TextEncoder().encode(str + "\0"),
  ) as Pointer<number>;
}

function readCString(ptr: Pointer<number>): string {
  return new Deno.UnsafePointerView(ptr).getCString();
}
