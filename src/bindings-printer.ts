import { m } from "multiline-str";
import type { FFIInfo } from "./mod.ts";

/**
 * Generates TypeScript FFI bindings source code files
 * in `outputFolder` based on FFI `info` provided.
 */
export async function printFFIBindings(info: FFIInfo, outputFolder: string) {
  await Deno.mkdir(outputFolder, { recursive: true }).catch();

  const mod = printMod(info);
  await Deno.writeTextFile(`${outputFolder}/mod.ts`, mod);

  const safeFFI = printSafeFFI();
  await Deno.writeTextFile(`${outputFolder}/safe-ffi.ts`, safeFFI);

  const types = printTypes(info);
  await Deno.writeTextFile(`${outputFolder}/types.ts`, types);

  const symbols = printSymbols(info);
  await Deno.writeTextFile(`${outputFolder}/symbols.ts`, symbols);
}

function printMod(info: FFIInfo): string {
  return m`
    import type { ${info.libName} } from "./types.ts";
    import { ${info.libName}_SYMBOLS } from "./symbols.ts";

    export * from "./safe-ffi.ts";
    export type { ${info.libName} };

    export function load${info.libName}(path: string): typeof ${info.libName} {
      const lib = Deno.dlopen(path, ${info.libName}_SYMBOLS);

      return { ...lib.symbols, $$close: () => lib.close() } as never;
    }

    `;
}

function printSafeFFI() {
  return m`
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
        new TextEncoder().encode(str + "\\0"),
      );
    }

    export function readCString(ptr: Pointer<number>): string {
      return new Deno.UnsafePointerView(ptr!).getCString();
    }

    `;
}

function printSymbols(info: FFIInfo): string {
  let output = "";

  output += `// deno-fmt-ignore-file\n`;
  output += `\n`;
  output += `export const ${info.libName}_SYMBOLS = {\n`;

  for (const [fnName, fnDef] of Object.entries(info.functions)) {
    output += `  ${fnName}: {\n`;
    output += `    name: "${fnDef.fullName}",\n`;

    output += `    parameters: [`;
    fnDef.parameters.forEach((param, i) => {
      if (i !== 0) output += ", ";

      output += `"${param.type.nativeType}"`;
    });
    output += `],\n`;

    output += `    result: "${fnDef.result.nativeType}",\n`;
    output += `  },\n`;
  }

  output += `} as const satisfies Deno.ForeignLibraryInterface;\n`;

  return output;
}

function printTypes(info: FFIInfo): string {
  let output = "";

  output += `// deno-lint-ignore-file\n`;
  output += `// deno-fmt-ignore-file\n`;
  output += `\n`;
  output +=
    `import { Pointer, FnPointer, StructPointer } from "./safe-ffi.ts";\n`;
  output += `\n`;
  output += `export namespace ${info.libName} {\n`;

  for (const [typeName, typeDef] of Object.entries(info.typeDefs)) {
    output += `  /** ${typeDef.location} */\n`;
    output += `  export type ${typeName} = ${typeDef.type.tsType};\n`;
    output += `\n`;
  }

  for (const [enumName, enumDef] of Object.entries(info.enums)) {
    output += `  /** ${enumDef.location} */\n`;

    output += `  export enum ${enumName} {\n`;
    for (const field of enumDef.fields) {
      output += `    ${field.name} = ${field.value},\n`;
    }
    output += `  }\n`;

    output += `\n`;
  }

  for (const [fnName, fnDef] of Object.entries(info.functions)) {
    output += `  /** ${fnDef.location} */\n`;

    output += `  export declare function ${fnName}(`;
    fnDef.parameters.forEach((param, i) => {
      if (i !== 0) output += ", ";

      output += `${param.name}: ${param.type.tsType}`;
    });
    output += `): ${fnDef.result.tsType};\n`;

    output += `\n`;
  }

  output += `  export declare function $$close(): void;\n`;
  output += `}\n`;

  return output;
}
