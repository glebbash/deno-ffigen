import { cstr, loadLLVM, readCString } from "../lib/mod.ts";

const llvm = loadLLVM("/usr/lib/llvm-14/lib/libLLVM.so");

const ctx = llvm.ContextCreate();
const mod = llvm.ModuleCreateWithNameInContext(cstr("main"), ctx);

const data = llvm.PrintModuleToString(mod);
console.log(readCString(data));

llvm.DisposeModule(mod);
llvm.ContextDispose(ctx);

llvm.$$close();
