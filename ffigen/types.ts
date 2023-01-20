export type CSymbol = CTypeDef | CEnum | CUnion | CStruct | CFunction;

export type CTypeDef = {
  tag: "typedef";
  name: string;
  location: string;
  type: CType;
};

export type CEnum = {
  tag: "enum";
  name: string;
  location: string;
  id: number;
  fields: { tag: "field"; name: string; value: number }[];
};

export type CUnion = {
  tag: "union";
  name: string;
  location: string;
  id: number;
  "bit-size": number;
  "bit-alignment": number;
  fields: {
    tag: "field";
    name: string;
    "bit-offset": 0;
    "bit-size": 64;
    "bit-alignment": 64;
    type: CType;
  }[];
};

export type CStruct = {
  tag: "struct";
  name: string;
  location: string;
  id: number;
  "bit-size": number;
  "bit-alignment": number;
  fields: {
    tag: "field";
    name: string;
    "bit-size": number;
    "bit-alignment": number;
    type:
      | { tag: string }
      | { tag: string; "bit-size": number; "bit-alignment": number };
  }[];
};

export type CFunction = {
  tag: "function";
  name: string;
  location: string;
  inline: boolean;
  parameters: { name: string; type: CType }[];
  "return-type": CType;
};

export type CType =
  | { tag: ":void" }
  | { tag: ":char"; "bit-size": number; "bit-alignment": number }
  | { tag: ":_Bool"; "bit-size": number; "bit-alignment": number }
  | { tag: ":unsigned-char"; "bit-size": number; "bit-alignment": number }
  | { tag: ":signed-char"; "bit-size": number; "bit-alignment": number }
  | { tag: ":short"; "bit-size": number; "bit-alignment": number }
  | { tag: ":unsigned-short"; "bit-size": number; "bit-alignment": number }
  | { tag: ":int"; "bit-size": number; "bit-alignment": number }
  | { tag: ":unsigned-int"; "bit-size": number; "bit-alignment": number }
  | { tag: ":long"; "bit-size": number; "bit-alignment": number }
  | { tag: ":unsigned-long"; "bit-size": number; "bit-alignment": number }
  | { tag: ":float"; "bit-size": number; "bit-alignment": number }
  | { tag: ":double"; "bit-size": number; "bit-alignment": number }
  | { tag: ":long-double"; "bit-size": number; "bit-alignment": number }
  | { tag: ":long-long"; "bit-size": number; "bit-alignment": number }
  | { tag: ":unsigned-long-long"; "bit-size": number; "bit-alignment": number }
  | { tag: ":enum"; id: number; name: string }
  | { tag: ":function-pointer" }
  | { tag: ":pointer"; type: CType }
  | { tag: ":struct"; name: string }
  | { tag: "struct"; name: string }
  | { tag: ":union"; name: string; id: number }
  | CUnion
  | { tag: "size_t" }
  | { tag: "__builtin_va_list" };
