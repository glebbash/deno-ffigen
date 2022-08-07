import { CEnum, CFunction, CSymbol, CType, CTypeDef } from "./types.ts";

export type LibInfo = {
  name: string;
  mapName: (name: string) => string;
  formatLocation: (location: string) => string;
  typeDefs: Map<string, TypeDef>;
};

export type TypeDef = {
  originalName: string;
  location: string;
  type: TypeInfo;
};

export type EnumDef = TypeDef & {
  fields: { name: string; value: number }[];
};

export type TypeInfo = { tsType: string; nativeType: string };

export type FunctionDef = {
  fullName: string;
  location: string;
  parameters: { name: string; type: TypeInfo }[];
  result: TypeInfo;
};

export type FFIInfo = {
  lib: LibInfo;
  enums: Map<string, EnumDef>;
  typeDefs: Map<string, TypeDef>;
  functions: Map<string, FunctionDef>;
};

export function extractFFIInfo(
  lib: LibInfo,
  symbols: CSymbol[],
  exposedFunctions: string[],
): FFIInfo {
  symbols = linkTypeDefs(symbols);

  const enums = extractEnums(lib, symbols);
  console.log("Total enums:", enums.size);
  lib.typeDefs = new Map([...lib.typeDefs, ...enums]);

  const typeDefs = extractTypeDefs(lib, symbols);
  console.log("Total types:", typeDefs.size);
  lib.typeDefs = new Map([...lib.typeDefs, ...typeDefs]);

  const functions = extractFunctions(lib, symbols, exposedFunctions);
  console.log("Total functions:", functions.size);

  return {
    lib,
    enums,
    typeDefs,
    functions,
  };
}

function linkTypeDefs(symbols: CSymbol[]): CSymbol[] {
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

export function extractEnums(
  lib: LibInfo,
  symbols: CSymbol[],
): Map<string, EnumDef> {
  const enums = symbols.filter((s): s is CEnum => s.tag === "enum");

  return new Map(
    enums.map((e): [string, EnumDef] => {
      return [lib.mapName(e.name), {
        originalName: e.name,
        location: lib.formatLocation(e.location),
        type: { tsType: "enum", nativeType: "i32" },
        fields: e.fields.map((v) => ({ name: v.name, value: v.value })),
      }];
    }),
  );
}

export function extractTypeDefs(
  lib: LibInfo,
  symbols: CSymbol[],
): Map<string, TypeDef> {
  lib = { ...lib, typeDefs: new Map() };

  const typeDefs = symbols.filter((s): s is CTypeDef => s.tag === "typedef");

  for (const t of typeDefs) {
    const mappedName = lib.mapName(t.name);
    lib.typeDefs.set(mappedName, {
      originalName: t.name,
      location: lib.formatLocation(t.location),
      type: getTypeInfo(t.type, mappedName, lib),
    });
  }

  return lib.typeDefs;
}

export function extractFunctions(
  lib: LibInfo,
  symbols: CSymbol[],
  exposedFunctions: string[],
): Map<string, FunctionDef> {
  const allFunctions = symbols.filter((s): s is CFunction =>
    s.tag === "function"
  );
  const uniqueFunctions = uniqueByKey(allFunctions, "name");
  const nonInlinedFunctions = uniqueFunctions.filter((f) => !f.inline);
  const functions = nonInlinedFunctions.filter((f) =>
    exposedFunctions.includes(f.name as never)
  );

  return new Map(functions.map((f) => [
    lib.mapName(f.name),
    {
      fullName: f.name,
      location: lib.formatLocation(f.location),
      parameters: f.parameters.map((p, index) => ({
        name: p.name || "_" + index,
        type: getTypeInfo(p.type, null, lib),
      })),
      result: getTypeInfo(f["return-type"], null, lib),
    },
  ]));
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

function getTypeInfo(
  type: CType,
  name: string | null,
  lib: LibInfo,
): TypeInfo {
  if (type.tag === ":pointer") {
    if (name === null) {
      const rec = getTypeInfo(type.type, null, lib);

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
    (type.tag === ":char" && type["bit-size"] === 8) ||
    (type.tag === ":signed-char" && type["bit-size"] === 8)
  ) {
    return { tsType: `number`, nativeType: "i8" };
  }

  if (
    type.tag === "uint8_t" ||
    (type.tag === ":unsigned-char" && type["bit-size"] === 8)
  ) {
    return { tsType: `number`, nativeType: "u8" };
  }

  if (
    (type.tag === ":short" && type["bit-size"] === 16)
  ) {
    return { tsType: `number`, nativeType: "i16" };
  }

  if (
    (type.tag === ":unsigned-short" && type["bit-size"] === 16)
  ) {
    return { tsType: `number`, nativeType: "u16" };
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
    (type.tag === ":long" && type["bit-size"] === 64) ||
    (type.tag === ":long-long" && type["bit-size"] === 64)
  ) {
    return { tsType: `bigint`, nativeType: "i64" };
  }

  if (type.tag === ":double" && type["bit-size"] === 64) {
    return { tsType: `bigint`, nativeType: "f64" };
  }

  if (
    type.tag === "uint64_t" ||
    (type.tag === ":unsigned-long" && type["bit-size"] === 64) ||
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

  const typeName = lib.mapName(
    type.tag === ":enum" ? type.name : type.tag,
  );

  const typeDef = lib.typeDefs.get(typeName);

  if (typeDef === undefined) {
    throw new Error(`Unknown type ${JSON.stringify({ type, name })}`);
  }

  return {
    tsType: `${lib.name}.${typeName}`,
    nativeType: typeDef.type.nativeType,
  };
}
