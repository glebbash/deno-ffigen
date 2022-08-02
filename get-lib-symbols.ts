import { CSymbol } from "./types.ts";

export async function getLibSymbols(symbolsFile: string, libPrefix: string) {
  const allSymbols: CSymbol[] = JSON.parse(
    await Deno.readTextFile(symbolsFile),
  );

  const rawLibSymbols = allSymbols.filter((s: CSymbol) =>
    s.name.startsWith(libPrefix) || (s.name === "" && s.tag === "enum")
  );

  return linkTypeDefs(rawLibSymbols);
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
