import {
  cstr,
  loadLUA,
  type LUA,
  type Pointer,
  readCString,
} from "../lib/mod.ts";

const NULL = 0n as never;
const LUA_MULTRET = -1;

const lib = loadLUA("./input/liblua54.so");

const L = lib.luaL_newstate();
luaL_loadstring(
  L,
  `
  message = "Hello World"
  number = 69
  `,
);
lib.luaL_openlibs(L);
lua_pcall(L, 0, 0, 0);
lib.lua_getglobal(L, cstr("message"));
lib.lua_getglobal(L, cstr("number"));

const message = readCString(lib.lua_tolstring(L, -2, NULL));
const number = lib.lua_tonumberx(L, -1, NULL);

console.log({ number, message });

function luaL_loadstring(L: Pointer<LUA.lua_State>, script: string) {
  return lib.luaL_loadstring(L, cstr(script)) ||
    lua_pcall(L, 0, LUA_MULTRET, 0);
}

function lua_pcall(L: Pointer<LUA.lua_State>, n: number, r: number, f: number) {
  return lib.lua_pcallk(L, n, r, f, 0n, NULL);
}
