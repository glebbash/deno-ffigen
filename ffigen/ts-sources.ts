import { m } from "multiline-str";
import type {
  EnumDef,
  FFIInfo,
  FunctionDef,
  LibInfo,
  TypeDef,
} from "./ffi-extractor.ts";

export type LibSources = {
  mod: string;
  types: string;
  symbols: string;
  safeFFI: string;
};

/** Generates TypeScript source code from extracted FFI info. */
export function generateSources(
  { lib, typeDefs, enums, functions }: FFIInfo,
): LibSources {
  const modSource = buildMod(lib);
  const typesSource = buildTypes(lib, typeDefs, enums, functions);
  const symbolsSource = buildSymbols(lib, functions);
  const safeFFISource = buildSafeFFI();

  return {
    mod: modSource,
    types: typesSource,
    symbols: symbolsSource,
    safeFFI: safeFFISource,
  };
}

/** Prints TypeScript source code to files in target `folder`. */
export async function printSources(
  sources: LibSources,
  outputFolder: string,
) {
  await Deno.mkdir(outputFolder, { recursive: true }).catch();
  await Deno.writeTextFile(`${outputFolder}/mod.ts`, sources.mod);
  await Deno.writeTextFile(`${outputFolder}/types.ts`, sources.types);
  await Deno.writeTextFile(`${outputFolder}/symbols.ts`, sources.symbols);
  await Deno.writeTextFile(`${outputFolder}/safe-ffi.ts`, sources.safeFFI);
}

function buildSymbols(
  ctx: LibInfo,
  functions: Map<string, FunctionDef>,
): string {
  const symbolsGen = [...functions.entries()].map(([name, f]) => {
    const parameters = f.parameters
      .map((p) => `"${p.type.nativeType}"`)
      .join(", ");

    return m`
        ${name}: {
          name: "${f.fullName}",
          parameters: [${parameters}],
          result: "${f.result.nativeType}",
        }
      `;
  }).join(",\n");

  return m`
    // deno-fmt-ignore-file
    
    export const ${ctx.name}_SYMBOLS: Deno.ForeignLibraryInterface = {
    ${symbolsGen}
    } as const;

    `;
}

function buildTypes(
  ctx: LibInfo,
  typeDefs: Map<string, TypeDef>,
  enums: Map<string, EnumDef>,
  functions: Map<string, FunctionDef>,
): string {
  const typeDefsSource = buildTypeDefs(typeDefs);
  const enumsSource = buildEnums(enums);
  const functionsSource = buildFunctions(functions);

  const namespaceSource = m`
    // deno-lint-ignore-file
    // deno-fmt-ignore-file

    import { Pointer, FnPointer, StructPointer } from "./safe-ffi.ts";

    export namespace ${ctx.name} {
    ${typeDefsSource}

    ${enumsSource}

    ${functionsSource}

      export declare function $$close(): void;
    }

    `;

  return namespaceSource;
}

function buildMod(ctx: LibInfo): string {
  return m`
    import type { ${ctx.name} } from "./types.ts";
    import { ${ctx.name}_SYMBOLS } from "./symbols.ts";

    export * from "./safe-ffi.ts";
    export type { ${ctx.name} };

    export function load${ctx.name}(path: string): typeof ${ctx.name} {
      const lib = Deno.dlopen(path, ${ctx.name}_SYMBOLS);

      return { ...lib.symbols, $$close: () => lib.close() } as never;
    }

    `;
}

function buildSafeFFI() {
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

function buildTypeDefs(typeDefs: Map<string, TypeDef>): string {
  const typeDefsSource = [...typeDefs.entries()].map(([name, t]) => {
    return `  /** ${t.location} */\n` +
      `  export type ${name} = ${t.type.tsType};`;
  }).join("\n\n");

  return typeDefsSource;
}

function buildEnums(enums: Map<string, EnumDef>): string {
  const enumsSource = [...enums.entries()].map(([name, e]) => {
    const fieldsGen = e.fields
      .map((f) => `    ${f.name} = ${f.value}`)
      .join(",\n");

    return `  /** ${e.location} */\n` +
      `  export enum ${name} {\n` +
      `${fieldsGen},\n` +
      `  }`;
  }).join("\n\n");

  return enumsSource;
}

function buildFunctions(functions: Map<string, FunctionDef>): string {
  const functionsSource = [...functions.entries()].map(([name, f]) => {
    return `  /** ${f.location} */\n` +
      `  ${`export declare function ${name}(${
        f.parameters.map((p) => `${p.name}: ${p.type.tsType}`).join(", ")
      }): ${f.result.tsType};`}`;
  }).join("\n\n");

  return functionsSource;
}
