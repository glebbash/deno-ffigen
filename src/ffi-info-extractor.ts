import type {
  CEnum,
  CFunction,
  CSymbol,
  CType,
  CTypeDef,
  CUnion,
} from "./types.ts";

export type ExtractorOptions = {
  libName: string;
  symbols: CSymbol[];
  exposedFunctions: string[];
  typeDefs: Record<string, TypeDef>;
  getTypeInfo: TypeInfoExtractor;
  formatSymbol: (name: string) => string;
  formatLocation: (location: string) => string;
};

export type FFIInfo = {
  libName: string;
  enums: Record<string, EnumDef>;
  unions: Record<string, UnionDef>;
  typeDefs: Record<string, TypeDef>;
  functions: Record<string, FunctionDef>;
};

export type TypeInfoExtractor = (
  ctx: TypeInfoExtractorCtx,
  next: (ctx: TypeInfoExtractorCtx) => TypeInfo,
) => TypeInfo;

export type TypeInfoExtractorCtx = {
  type: CType;
  name: string | null;
  opts: ExtractorOptions;
};

export type TypeDef = {
  originalName: string;
  location: string;
  type: TypeInfo;
};

export type EnumDef = TypeDef & {
  fields: { name: string; value: number }[];
};

export type UnionDef = TypeDef & {
  bitSize: number;
  bitAlignment: number;
  fields: {
    bitSize: number;
    bitAlignment: number;
    type: TypeInfo;
  }[];
};

export type TypeInfo = { tsType: string; nativeType: string };

export type FunctionDef = {
  fullName: string;
  location: string;
  parameters: { name: string; type: TypeInfo }[];
  result: TypeInfo;
};

/**
 * Extracts exposed functions names from `readelfOutput`.
 */
export function extractExposedFunctions(readelfOutput: string): string[] {
  const FN_SYMBOL_PREFIX_LEN =
    "   641: 000000000146c580   666 FUNC    GLOBAL DEFAULT   13 ".length;

  const allFunctions = readelfOutput
    .split("\n")
    .slice(4, -1)
    .filter((s) => s.includes(" FUNC "))
    .filter((s) => !s.includes(".localalias"))
    .map((line) => line.slice(FN_SYMBOL_PREFIX_LEN))
    .map((name) => name.split("@")[0]);

  return Array.from(new Set(allFunctions)).sort();
}

/** Extracts all FFI info from the library described in `lib`. */
export function extractFFIInfo(opts: ExtractorOptions): FFIInfo {
  const symbols = linkTypeDefs(opts.symbols);

  const enums = extractEnums(opts, symbols);
  Object.assign(opts.typeDefs, enums);

  const unions = extractUnions(opts, symbols);
  Object.assign(opts.typeDefs, unions);

  const typeDefs = extractTypeDefs(opts, symbols);
  Object.assign(opts.typeDefs, typeDefs);

  const functions = extractFunctions(opts, symbols);

  return { libName: opts.libName, enums, typeDefs, unions, functions };
}

function linkTypeDefs(symbols: CSymbol[]): CSymbol[] {
  const result: CSymbol[] = [];
  const unnamedSymbols = new Map<number, CSymbol>();

  for (const symbol of symbols) {
    if (symbol.name === "" && "id" in symbol) {
      unnamedSymbols.set(symbol.id, symbol);
      continue;
    }

    if (symbol.tag === "typedef") {
      const originalSymbol = unnamedSymbols.get(
        (symbol.type as { id: number }).id,
      );
      if (originalSymbol) {
        originalSymbol.name = symbol.name;
        result.push(originalSymbol);
        continue;
      }
    }

    result.push(symbol);
  }

  return result;
}

export function extractEnums(
  opts: ExtractorOptions,
  symbols: CSymbol[],
): FFIInfo["enums"] {
  const enums = symbols.filter((s): s is CEnum => s.tag === "enum");

  return Object.fromEntries(
    enums.map((e) => {
      return [opts.formatSymbol(e.name), {
        originalName: e.name,
        location: opts.formatLocation(e.location),
        type: { tsType: "enum", nativeType: "i32" },
        fields: e.fields.map((v) => ({ name: v.name, value: v.value })),
      }];
    }),
  );
}

export function extractUnions(
  opts: ExtractorOptions,
  symbols: CSymbol[],
): FFIInfo["unions"] {
  const enums = symbols.filter((s): s is CUnion => s.tag === "union");

  return Object.fromEntries(
    enums.map((u) => {
      return [opts.formatSymbol(u.name), {
        originalName: u.name,
        location: opts.formatLocation(u.location),
        // TODO: check for better union types
        type: { tsType: "unknown", nativeType: "u" + u["bit-size"] },
        bitSize: u["bit-size"],
        bitAlignment: u["bit-alignment"],
        // TODO: check how to handle this: field types depend on type info before this definition
        fields: [],
      }];
    }),
  );
}

export function extractTypeDefs(
  opts: ExtractorOptions,
  symbols: CSymbol[],
): FFIInfo["typeDefs"] {
  const typeDefs = symbols.filter((s): s is CTypeDef => s.tag === "typedef");

  const resultTypeDefs: Record<string, TypeDef> = {};

  for (const type_ of typeDefs) {
    const mappedName = opts.formatSymbol(type_.name);
    const typeDef = {
      originalName: type_.name,
      location: opts.formatLocation(type_.location),
      type: getTypeInfo({ type: type_.type, name: mappedName, opts: opts }),
    };

    // TOOD: check if this is redundant
    opts.typeDefs[mappedName] = typeDef;

    resultTypeDefs[mappedName] = typeDef;
  }

  return resultTypeDefs;
}

export function extractFunctions(
  opts: ExtractorOptions,
  symbols: CSymbol[],
): FFIInfo["functions"] {
  const allFunctions = symbols.filter((s): s is CFunction =>
    s.tag === "function"
  );
  const uniqueFunctions = uniqueByKey(allFunctions, "name");
  const nonInlinedFunctions = uniqueFunctions.filter((f) => !f.inline);
  const functions = nonInlinedFunctions.filter((f) =>
    opts.exposedFunctions.includes(f.name as never)
  );

  return Object.fromEntries(functions.map((f) => [
    opts.formatSymbol(f.name),
    {
      fullName: f.name,
      location: opts.formatLocation(f.location),
      parameters: f.parameters.map((p, index) => ({
        name: p.name || "_" + index,
        type: getTypeInfo({ type: p.type, name: null, opts }),
      })),
      result: getTypeInfo({ type: f["return-type"], name: null, opts }),
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

function getTypeInfo(ctx: TypeInfoExtractorCtx): TypeInfo {
  return ctx.opts.getTypeInfo(ctx, getTypeInfoDefault);
}

function getTypeInfoDefault(
  { type, name, opts }: TypeInfoExtractorCtx,
): TypeInfo {
  if (type.tag === ":pointer") {
    if (name === null) {
      const rec = getTypeInfo({ type: type.type, name: null, opts });

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
    return { tsType: `StructPointer<"${type.name}">`, nativeType: "pointer" };
  }

  if (type.tag === "struct") {
    if (name === null && type.name === null) {
      throw new Error("Struct does not have a name: " + JSON.stringify(type));
    }

    return {
      tsType: `StructPointer<"${name ?? type.name}">`,
      nativeType: "pointer",
    };
  }

  if (type.tag === "union") {
    // TODO: check for better union types
    return { tsType: `unknown`, nativeType: "u" + type["bit-size"] };
  }

  if (type.tag === ":union") {
    const union = opts.typeDefs[opts.formatSymbol(type.name)];
    return union!.type;
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

  if (type.tag === ":_Bool" && type["bit-size"] === 8) {
    return { tsType: `boolean`, nativeType: "bool" };
  }

  if (type.tag === ":unsigned-char" && type["bit-size"] === 8) {
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
    (type.tag === ":unsigned-int" && type["bit-size"] === 32)
  ) {
    return { tsType: `number`, nativeType: "u32" };
  }

  if (
    (type.tag === ":long" && type["bit-size"] === 64) ||
    (type.tag === ":long-long" && type["bit-size"] === 64)
  ) {
    return { tsType: `bigint`, nativeType: "i64" };
  }

  if (type.tag === ":float" && type["bit-size"] === 32) {
    return { tsType: `bigint`, nativeType: "f64" };
  }

  if (type.tag === ":double" && type["bit-size"] === 64) {
    return { tsType: `bigint`, nativeType: "f64" };
  }

  if (type.tag === ":long-double" && type["bit-size"] === 128) {
    return { tsType: `bigint`, nativeType: "f128" };
  }

  if (
    (type.tag === ":unsigned-long" && type["bit-size"] === 64) ||
    (type.tag === ":unsigned-long-long" && type["bit-size"] === 64)
  ) {
    return { tsType: `bigint`, nativeType: "u64" };
  }

  // TODO: check if this works
  if (type.tag === "__builtin_va_list") {
    return { tsType: "bigint", nativeType: "pointer" };
  }

  const typeName = opts.formatSymbol(
    type.tag === ":enum" ? type.name : type.tag,
  );

  const typeDef = opts.typeDefs[typeName];
  if (typeDef === undefined) {
    throw new Error(`Unknown type ${JSON.stringify({ type, name })}`);
  }

  return {
    tsType: `${opts.libName}.${typeName}`,
    nativeType: typeDef.type.nativeType,
  };
}
