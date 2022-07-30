import { CEnum, CFunction, CSymbol, CType, CTypeDef } from "./types.ts";
import { m } from "https://raw.githubusercontent.com/glebbash/multiline-str/master/src/multiline-str.ts";

type GenerationContext = {
  libName: string;
  libPrefix: string;
  baseSourcePath: string;
  typesInfo: TypesInfo;
  enumNames: Set<string>;
  functionsInfo: FunctionsInfo;
  libSymbols: CSymbol[];
};

type TypesInfo = Map<string, {
  location: string;
  type: { tsType: string; nativeType: string };
}>;

type FunctionsInfo = Map<string, {
  name: string;
  location: string;
  tsType: string;
  parameters: string[];
  result: string;
}>;

export type BindingsOptions = {
  libName: string;
  libPrefix?: string;
  headersPath: string;
  symbolsFile: string;
  exposedFunctions: string[];
  outputFolder: string;
};

/**
 * Generates the following files in `outputFolder`:
 * - `mod.ts` - Bindings entry that also dlopens the shared lib
 * - `types.ts` - Namespace with all type/enum/function definitions
 * - `symbols.ts` - Exports object with lib definition for `Deno.dlopen`
 * - `safe-ffi.ts` - Type utils for making pointer typesafe
 */
export async function generateBindings(opts: BindingsOptions) {
  const libPrefix = opts.libPrefix ?? opts.libName;
  const ctx: GenerationContext = {
    libName: opts.libName,
    libPrefix,
    baseSourcePath: opts.headersPath,
    enumNames: new Set(),
    typesInfo: new Map(),
    functionsInfo: new Map(),
    libSymbols: await getLibSymbols(opts.symbolsFile, libPrefix),
  };

  const modGen = buildMod(ctx);
  const typesSource = buildTypes(ctx, opts.exposedFunctions);
  const symbolsSource = buildSymbols(ctx);
  const safeFFISource = buildSafeFFI();

  await Deno.mkdir(opts.outputFolder, { recursive: true }).catch();
  await Deno.writeTextFile(`${opts.outputFolder}/mod.ts`, modGen);
  await Deno.writeTextFile(`${opts.outputFolder}/types.ts`, typesSource);
  await Deno.writeTextFile(`${opts.outputFolder}/symbols.ts`, symbolsSource);
  await Deno.writeTextFile(`${opts.outputFolder}/safe-ffi.ts`, safeFFISource);
}

async function getLibSymbols(symbolsFile: string, libPrefix: string) {
  const allSymbols: CSymbol[] = JSON.parse(
    await Deno.readTextFile(symbolsFile),
  );

  const rawLibSymbols = allSymbols.filter((s: CSymbol) =>
    s.name.startsWith(libPrefix) || (s.name === "" && s.tag === "enum")
  );

  return routeTypeDefs(rawLibSymbols);
}

function buildSymbols(ctx: GenerationContext): string {
  const symbolsInfo = [...ctx.functionsInfo.entries()];
  const symbolsGen = symbolsInfo.map(([name, info]) => {
    return `  ${info.name}: {\n` +
      `    name: "${name}",\n` +
      `    parameters: [${
        info.parameters.map((p) => `"${p}"`).join(", ")
      }],\n` +
      `    result: "${info.result}"\n  }`;
  }).join(",\n");

  const symbolsSource = `export const ${ctx.libName}_SYMBOLS = {\n` +
    symbolsGen +
    "\n} as const;\n";

  return symbolsSource;
}

function buildTypes(
  ctx: GenerationContext,
  exposedFunctions: string[],
): string {
  const typeDefsSource = buildTypeDefs(ctx);
  const enumsSource = buildEnums(ctx);
  const functionsSource = buildFunctions(ctx, exposedFunctions);

  const namespaceSource = m`
    // deno-lint-ignore-file
    import { Pointer, FnPointer, StructPointer } from "./safe-ffi.ts";

    export namespace ${ctx.libName} {
    ${typeDefsSource}

    ${enumsSource}

    ${functionsSource}

      export declare function close(): void;
    }

    `;

  return namespaceSource;
}

function buildMod(ctx: GenerationContext): string {
  return m`
    import { ${ctx.libName} } from "./types.ts";
    import { ${ctx.libName}_SYMBOLS } from "./symbols.ts";

    export type { ${ctx.libName} };

    export function load${ctx.libName}(path: string): typeof ${ctx.libName} {
      const lib = Deno.dlopen(path, ${ctx.libName}_SYMBOLS);

      return { ...lib.symbols, close: () => lib.close() } as never;
    }

    `;
}

function buildSafeFFI() {
  return m`
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

    `;
}

function buildTypeDefs(ctx: GenerationContext): string {
  const typeDefs = ctx.libSymbols.filter((s): s is CTypeDef =>
    s.tag === "typedef"
  );
  console.log("Total types:", typeDefs.length);

  const { typesInfo } = ctx;
  for (const t of typeDefs) {
    const name = t.name.slice(ctx.libPrefix.length);
    typesInfo.set(name, {
      location: linkLocationToSource(t.location, ctx.baseSourcePath),
      type: getTypeInfo(t.type, name, ctx),
    });
  }

  const typeDefsSource = [...typesInfo.entries()].map(([name, info]) => {
    return `  /** ${info.location} */\n` +
      `  export type ${name} = ${info.type.tsType};`;
  }).join("\n\n");

  return typeDefsSource;
}

function buildEnums(ctx: GenerationContext): string {
  const enums = ctx.libSymbols.filter((s): s is CEnum => s.tag === "enum");
  console.log("Total enums:", enums.length);

  ctx.enumNames = new Set(
    enums.map((e) => e.name.slice(ctx.libPrefix.length)),
  );

  const enumsSource = enums.map((e) => {
    const fieldsGen = e.fields
      .map((f) => `    ${f.name} = ${f.value}`)
      .join(",\n");

    return `  /** ${
      linkLocationToSource(e.location, ctx.baseSourcePath)
    } */\n` +
      `  export enum ${e.name.slice(ctx.libPrefix.length)} {\n` +
      `${fieldsGen},\n` +
      `  }`;
  }).join("\n\n");

  return enumsSource;
}

function buildFunctions(
  ctx: GenerationContext,
  exposedFunctions: string[],
): string {
  const allFunctions = ctx.libSymbols.filter((s): s is CFunction =>
    s.tag === "function"
  );
  const uniqueFunctions = uniqueByKey(allFunctions, "name");
  const nonInlinedFunctions = uniqueFunctions.filter((f) => !f.inline);
  const functions = nonInlinedFunctions.filter((f) =>
    exposedFunctions.includes(f.name as never)
  );
  console.log("Total functions:", functions.length);

  ctx.functionsInfo = new Map(functions.map((f) => {
    const resultType = getTypeInfo(f["return-type"], null, ctx);
    const parametersInfo = f.parameters.map((p, index) => {
      return {
        name: p.name || "_" + index,
        type: getTypeInfo(p.type, null, ctx),
      };
    });

    return [
      f.name,
      {
        name: f.name.slice(ctx.libPrefix.length),
        location: linkLocationToSource(f.location, ctx.baseSourcePath),
        tsType: `export declare function ${
          f.name.slice(ctx.libPrefix.length)
        }(${
          parametersInfo.map((p) => `${p.name}: ${p.type.tsType}`).join(", ")
        }): ${resultType.tsType};`,
        parameters: parametersInfo.map((p) => p.type.nativeType),
        result: resultType.nativeType,
      },
    ];
  }));

  const functionsSource = [...ctx.functionsInfo.entries()].map(([, info]) => {
    return `  /** ${info.location} */\n` +
      `  ${info.tsType}`;
  }).join("\n\n");

  return functionsSource;
}

function uniqueByKey<T>(values: T[], key: keyof T): T[] {
  const seen = new Set<T[keyof T]>();
  const result: T[] = [];

  for (const value of values) {
    const keyValue = value[key];
    if (!seen.has(keyValue)) {
      seen.add(keyValue);
      result.push(value);
    }
  }

  return result;
}

function linkLocationToSource(
  location: string,
  baseSourcePath: string,
): string {
  location = location.split(" <Spelling=")[0];
  location = fixLine(location);

  if (location.startsWith("/usr/include/")) {
    return baseSourcePath + location.slice("/usr/include/".length);
  }

  const LOCAL_FILE_SEP = "/./";
  const sepIndex = location.indexOf(LOCAL_FILE_SEP);
  if (sepIndex !== -1) {
    return baseSourcePath + location.slice(sepIndex + LOCAL_FILE_SEP.length);
  }

  return location;
}

function fixLine(str: string): string {
  const [path, line] = str.split(":");
  return path + "#L" + line;
}

function routeTypeDefs(symbols: CSymbol[]): CSymbol[] {
  const result: CSymbol[] = [];
  const symbolsById = new Map<number, CSymbol>();

  for (const symbol of symbols) {
    if (symbol.tag === "enum" && symbol.name === "") {
      symbolsById.set(symbol.id, symbol);
      continue;
    }

    if (symbol.tag === "typedef" && symbol.type.tag === ":enum") {
      const enumSymbol = symbolsById.get(symbol.type.id);
      if (!enumSymbol) {
        throw new Error(`Enum not found: ${symbol.type.id}`);
      }
      enumSymbol.name = symbol.name;
      result.push(enumSymbol);
      continue;
    }

    result.push(symbol);
  }

  return result;
}

function getTypeInfo(
  type: CType,
  name: string | null,
  ctx: GenerationContext,
): { tsType: string; nativeType: string } {
  if (type.tag === ":enum") {
    return {
      tsType: `${ctx.libPrefix}.${type.name.substring(ctx.libPrefix.length)}`,
      nativeType: "i32",
    };
  }

  if (type.tag === ":pointer") {
    if (name === null) {
      const rec = getTypeInfo(type.type, null, ctx);

      return { tsType: `Pointer<${rec.tsType}>`, nativeType: "pointer" };
    }

    return { tsType: `Pointer<"${name}">`, nativeType: "pointer" };
  }

  if (type.tag === ":function-pointer") {
    return {
      tsType: name !== null ? `FnPointer<"${name}">` : "FnPointer",
      nativeType: "function",
    };
  }

  if (type.tag === ":struct") {
    if (name !== null && name !== type.name) {
      throw new Error(
        "Struct has multiple names: " + JSON.stringify({ type, name }),
      );
    }

    return { tsType: `StructPointer<"${type.name}">`, nativeType: "pointer" };
  }

  if (type.tag === "struct") {
    if (name === null) {
      throw new Error("Struct does not have a name: " + JSON.stringify(type));
    }

    return { tsType: `StructPointer<"${name}">`, nativeType: "pointer" };
  }

  if (type.tag === ":void") {
    return { tsType: "void", nativeType: "void" };
  }

  if (type.tag === "size_t") {
    return { tsType: `number`, nativeType: "usize" };
  }

  if (
    (type.tag === ":char" && type["bit-size"] === 8)
  ) {
    return { tsType: `number`, nativeType: "i8" };
  }

  if (
    type.tag === "uint8_t" ||
    (type.tag === ":unsigned-char" && type["bit-size"] === 8)
  ) {
    return { tsType: `number`, nativeType: "u8" };
  }

  if (type.tag === ":int" && type["bit-size"] === 32) {
    return { tsType: `number`, nativeType: "i32" };
  }

  if (
    type.tag === "uint32_t" ||
    (type.tag === ":unsigned-int" && type["bit-size"] === 32)
  ) {
    return { tsType: `number`, nativeType: "u32" };
  }

  if (
    (type.tag === "int64_t") ||
    (type.tag === ":long-long" && type["bit-size"] === 64)
  ) {
    return { tsType: `bigint`, nativeType: "i64" };
  }

  if (type.tag === ":double" && type["bit-size"] === 64) {
    return { tsType: `bigint`, nativeType: "f64" };
  }

  if (
    type.tag === "uint64_t" ||
    (type.tag === ":unsigned-long-long" && type["bit-size"] === 64)
  ) {
    return { tsType: `bigint`, nativeType: "u64" };
  }

  // TODO: check if this works
  if (type.tag === "__builtin_va_list") {
    return {
      tsType: "bigint",
      nativeType: "pointer",
    };
  }

  if (type.tag.startsWith(ctx.libPrefix)) {
    const typeName = type.tag.substring(ctx.libPrefix.length);

    if (ctx.typesInfo.has(typeName)) {
      return {
        tsType: `${ctx.libName}.${typeName}`,
        nativeType: ctx.typesInfo.get(typeName)!.type.nativeType,
      };
    }

    if (ctx.enumNames.has(typeName)) {
      return {
        tsType: `${ctx.libName}.${typeName}`,
        nativeType: "i32",
      };
    }

    throw new Error(
      "Unexpected typedef: " + JSON.stringify({ type, name }),
    );
  }

  throw new Error(`Unknown type ${JSON.stringify({ type, name })}`);
}
