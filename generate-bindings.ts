import { CEnum, CFunction, CSymbol, CType, CTypeDef } from "./types.ts";

export async function generateBindings(
  symbolsFile: string,
  exposedFunctions: string[],
  outputFolder: string,
  libName: string,
  baseSourcePath: string,
  libPrefix = libName,
) {
  const allSymbols: CSymbol[] = JSON.parse(
    Deno.readTextFileSync(symbolsFile),
  );

  const rawLibSymbols = allSymbols.filter((s: CSymbol) =>
    s.name.startsWith(libPrefix) || (s.name === "" && s.tag === "enum")
  );

  const libSymbols = routeTypeDefs(rawLibSymbols);

  const { typesSource, typesInfo } = buildTypes(
    libSymbols,
    libPrefix,
    baseSourcePath,
  );
  const { enumsSource } = buildEnums(libSymbols, libPrefix, baseSourcePath);
  const { functionsInfo, functionsSource } = buildFunctions(
    libSymbols,
    exposedFunctions,
    libPrefix,
    baseSourcePath,
    typesInfo,
  );
  const symbolsSource = buildSymbols(functionsInfo, libName);
  const modGen = buildMod(libName);

  await Deno.mkdir(outputFolder, { recursive: true }).catch();
  await Deno.writeTextFile(`${outputFolder}/safe-ffi.ts`, buildSafeFFI());

  const allTypesSource = `// deno-lint-ignore-file\n` +
    `import { Opaque, Pointer, FnPointer, StructPointer } from "./safe-ffi.ts";\n\n` +
    `export namespace ${libName} {\n` +
    typesSource + "\n\n" +
    enumsSource + "\n\n" +
    functionsSource + "\n\n" +
    "  export declare function close(): void;" +
    "\n}\n";

  await Deno.writeTextFile(`${outputFolder}/types.ts`, allTypesSource);
  await Deno.writeTextFile(`${outputFolder}/symbols.ts`, symbolsSource);
  await Deno.writeTextFile(`${outputFolder}/mod.ts`, modGen);
}

function buildSymbols(functionsInfo: FunctionsInfo, libName: string) {
  const symbolsInfo = [...functionsInfo.entries()];
  const symbolsGen = symbolsInfo.map(([name, info]) => {
    return `  ${info.name}: {\n` +
      `    name: "${name}",\n` +
      `    parameters: [${
        info.parameters.map((p) => `"${p}"`).join(", ")
      }],\n` +
      `    result: "${info.result}"\n  }`;
  }).join(",\n");

  const symbolsSource = `export const ${libName}_SYMBOLS = {\n` +
    symbolsGen +
    "\n} as const;\n";

  return symbolsSource;
}

function buildMod(libName: string): string {
  return `import { ${libName} } from "./types.ts";
import { ${libName}_SYMBOLS } from "./symbols.ts";

export { ${libName} } from "./types.ts";

export function load${libName}(path: string): typeof ${libName} {
  const lib = Deno.dlopen(path, ${libName}_SYMBOLS);

  return { ...lib.symbols, close: () => lib.close() } as never;
}\n`;
}

type TypesInfo = Map<string, {
  location: string;
  type: { tsType: string; nativeType: string };
}>;

function buildTypes(
  libSymbols: CSymbol[],
  libPrefix: string,
  baseSourcePath: string,
): { typesInfo: TypesInfo; typesSource: string } {
  const typeDefs = libSymbols.filter((s): s is CTypeDef => s.tag === "typedef");
  console.log("Total types:", typeDefs.length);

  const typesInfo = new Map(typeDefs.map((t) => {
    const name = t.name.slice(libPrefix.length);
    return [name, {
      location: linkLocationToSource(t.location, baseSourcePath),
      type: getTypeInfo(t.type, name, libPrefix, {} as never),
    }];
  }));

  const typesSource = [...typesInfo.entries()].map(([name, info]) => {
    return `  /** ${info.location} */\n` +
      `  export type ${name} = ${info.type.tsType};`;
  }).join("\n\n");

  return { typesInfo, typesSource };
}

function buildEnums(
  libSymbols: CSymbol[],
  libPrefix: string,
  baseSourcePath: string,
): { enumsInfo: Set<string>; enumsSource: string } {
  const enums = libSymbols.filter((s): s is CEnum => s.tag === "enum");
  console.log("Total enums:", enums.length);

  const enumsInfo = new Set(enums.map((e) => e.name.slice(libPrefix.length)));

  const enumsSource = enums.map((e) => {
    const fieldsGen = e.fields
      .map((f) => `    ${f.name} = ${f.value}`)
      .join(",\n");

    return `  /** ${linkLocationToSource(e.location, baseSourcePath)} */\n` +
      `  export enum ${e.name.slice(libPrefix.length)} {\n` +
      `${fieldsGen},\n` +
      `  }`;
  }).join("\n\n");

  return { enumsInfo, enumsSource };
}

type FunctionsInfo = Map<string, {
  name: string;
  location: string;
  tsType: string;
  parameters: string[];
  result: string;
}>;

function buildFunctions(
  libSymbols: CSymbol[],
  exposedFunctions: string[],
  libPrefix: string,
  baseSourcePath: string,
  typesInfo: TypesInfo,
): { functionsInfo: FunctionsInfo; functionsSource: string } {
  const allFunctions = libSymbols.filter((s): s is CFunction =>
    s.tag === "function"
  );
  const uniqueFunctions = uniqueByKey(allFunctions, "name");
  const nonInlinedFunctions = uniqueFunctions.filter((f) => !f.inline);
  const functions = nonInlinedFunctions.filter((f) =>
    exposedFunctions.includes(f.name as never)
  );
  console.log("Total functions:", functions.length);

  const functionsInfo = new Map(functions.map((f) => {
    const resultType = getTypeInfo(
      f["return-type"],
      null,
      libPrefix,
      typesInfo,
    );
    const parametersInfo = f.parameters.map((p, index) => {
      return {
        name: p.name || "_" + index,
        type: getTypeInfo(p.type, null, libPrefix, typesInfo),
      };
    });

    return [
      f.name,
      {
        name: f.name.slice(libPrefix.length),
        location: linkLocationToSource(f.location, baseSourcePath),
        tsType: `export declare function ${f.name.slice(libPrefix.length)}(${
          parametersInfo.map((p) => `${p.name}: ${p.type.tsType}`).join(", ")
        }): ${resultType.tsType};`,
        parameters: parametersInfo.map((p) => p.type.nativeType),
        result: resultType.nativeType,
      },
    ];
  }));

  const functionsSource = [...functionsInfo.entries()].map(([, info]) => {
    return `  /** ${info.location} */\n` +
      `  ${info.tsType}`;
  }).join("\n\n");

  return { functionsInfo, functionsSource };
}

function buildSafeFFI() {
  return `// deno-lint-ignore-file
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
  libPrefix: string,
  typesInfo: TypesInfo,
): { tsType: string; nativeType: string } {
  if (type.tag.startsWith(libPrefix)) {
    const actualType = typesInfo.get(type.tag.substring(libPrefix.length));

    // TODO: check if the type here can only be enum
    if (actualType === undefined) {
      return {
        tsType: `${libPrefix}.${type.tag.substring(libPrefix.length)}`,
        nativeType: "i32",
      };
    }

    return {
      tsType: `${libPrefix}.${type.tag.substring(libPrefix.length)}`,
      nativeType: actualType.type.nativeType,
    };
  }

  if (type.tag === ":enum") {
    return {
      tsType: `${libPrefix}.${type.name.substring(libPrefix.length)}`,
      nativeType: "i32",
    };
  }

  if (type.tag === ":pointer") {
    if (name === null) {
      const rec = getTypeInfo(type.type, null, libPrefix, typesInfo);

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
    if (name !== null) {
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
    // TODO: unhardcode this
    return { tsType: `number`, nativeType: "u64" };
  }

  if (
    type.tag === "uint8_t" ||
    (type.tag === ":char" && type["bit-size"] === 8)
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

  throw new Error(`Unknown type ${JSON.stringify({ type, name })}`);
}
