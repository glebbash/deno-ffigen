// deno-fmt-ignore-file

export const LUA_SYMBOLS = {
  lua_newstate: {
    name: "lua_newstate",
    parameters: ["function", "pointer"],
    result: "pointer",
  },
  lua_close: {
    name: "lua_close",
    parameters: ["pointer"],
    result: "void",
  },
  lua_newthread: {
    name: "lua_newthread",
    parameters: ["pointer"],
    result: "pointer",
  },
  lua_resetthread: {
    name: "lua_resetthread",
    parameters: ["pointer"],
    result: "i32",
  },
  lua_atpanic: {
    name: "lua_atpanic",
    parameters: ["pointer", "function"],
    result: "function",
  },
  lua_version: {
    name: "lua_version",
    parameters: ["pointer"],
    result: "f64",
  },
  lua_absindex: {
    name: "lua_absindex",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_gettop: {
    name: "lua_gettop",
    parameters: ["pointer"],
    result: "i32",
  },
  lua_settop: {
    name: "lua_settop",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  lua_pushvalue: {
    name: "lua_pushvalue",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  lua_rotate: {
    name: "lua_rotate",
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },
  lua_copy: {
    name: "lua_copy",
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },
  lua_checkstack: {
    name: "lua_checkstack",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_xmove: {
    name: "lua_xmove",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  lua_isnumber: {
    name: "lua_isnumber",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_isstring: {
    name: "lua_isstring",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_iscfunction: {
    name: "lua_iscfunction",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_isinteger: {
    name: "lua_isinteger",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_isuserdata: {
    name: "lua_isuserdata",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_type: {
    name: "lua_type",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_typename: {
    name: "lua_typename",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  lua_tonumberx: {
    name: "lua_tonumberx",
    parameters: ["pointer", "i32", "pointer"],
    result: "f64",
  },
  lua_tointegerx: {
    name: "lua_tointegerx",
    parameters: ["pointer", "i32", "pointer"],
    result: "i64",
  },
  lua_toboolean: {
    name: "lua_toboolean",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_tolstring: {
    name: "lua_tolstring",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  lua_rawlen: {
    name: "lua_rawlen",
    parameters: ["pointer", "i32"],
    result: "u64",
  },
  lua_tocfunction: {
    name: "lua_tocfunction",
    parameters: ["pointer", "i32"],
    result: "function",
  },
  lua_touserdata: {
    name: "lua_touserdata",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  lua_tothread: {
    name: "lua_tothread",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  lua_topointer: {
    name: "lua_topointer",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  lua_arith: {
    name: "lua_arith",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  lua_rawequal: {
    name: "lua_rawequal",
    parameters: ["pointer", "i32", "i32"],
    result: "i32",
  },
  lua_compare: {
    name: "lua_compare",
    parameters: ["pointer", "i32", "i32", "i32"],
    result: "i32",
  },
  lua_pushnil: {
    name: "lua_pushnil",
    parameters: ["pointer"],
    result: "void",
  },
  lua_pushnumber: {
    name: "lua_pushnumber",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  lua_pushinteger: {
    name: "lua_pushinteger",
    parameters: ["pointer", "i64"],
    result: "void",
  },
  lua_pushlstring: {
    name: "lua_pushlstring",
    parameters: ["pointer", "pointer", "usize"],
    result: "pointer",
  },
  lua_pushstring: {
    name: "lua_pushstring",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  lua_pushvfstring: {
    name: "lua_pushvfstring",
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  lua_pushfstring: {
    name: "lua_pushfstring",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  lua_pushcclosure: {
    name: "lua_pushcclosure",
    parameters: ["pointer", "function", "i32"],
    result: "void",
  },
  lua_pushboolean: {
    name: "lua_pushboolean",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  lua_pushlightuserdata: {
    name: "lua_pushlightuserdata",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  lua_pushthread: {
    name: "lua_pushthread",
    parameters: ["pointer"],
    result: "i32",
  },
  lua_getglobal: {
    name: "lua_getglobal",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  lua_gettable: {
    name: "lua_gettable",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_getfield: {
    name: "lua_getfield",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  lua_geti: {
    name: "lua_geti",
    parameters: ["pointer", "i32", "i64"],
    result: "i32",
  },
  lua_rawget: {
    name: "lua_rawget",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_rawgeti: {
    name: "lua_rawgeti",
    parameters: ["pointer", "i32", "i64"],
    result: "i32",
  },
  lua_rawgetp: {
    name: "lua_rawgetp",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  lua_createtable: {
    name: "lua_createtable",
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },
  lua_newuserdatauv: {
    name: "lua_newuserdatauv",
    parameters: ["pointer", "usize", "i32"],
    result: "pointer",
  },
  lua_getmetatable: {
    name: "lua_getmetatable",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_getiuservalue: {
    name: "lua_getiuservalue",
    parameters: ["pointer", "i32", "i32"],
    result: "i32",
  },
  lua_setglobal: {
    name: "lua_setglobal",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  lua_settable: {
    name: "lua_settable",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  lua_setfield: {
    name: "lua_setfield",
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
  },
  lua_seti: {
    name: "lua_seti",
    parameters: ["pointer", "i32", "i64"],
    result: "void",
  },
  lua_rawset: {
    name: "lua_rawset",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  lua_rawseti: {
    name: "lua_rawseti",
    parameters: ["pointer", "i32", "i64"],
    result: "void",
  },
  lua_rawsetp: {
    name: "lua_rawsetp",
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
  },
  lua_setmetatable: {
    name: "lua_setmetatable",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_setiuservalue: {
    name: "lua_setiuservalue",
    parameters: ["pointer", "i32", "i32"],
    result: "i32",
  },
  lua_callk: {
    name: "lua_callk",
    parameters: ["pointer", "i32", "i32", "i64", "function"],
    result: "void",
  },
  lua_pcallk: {
    name: "lua_pcallk",
    parameters: ["pointer", "i32", "i32", "i32", "i64", "function"],
    result: "i32",
  },
  lua_load: {
    name: "lua_load",
    parameters: ["pointer", "function", "pointer", "pointer", "pointer"],
    result: "i32",
  },
  lua_dump: {
    name: "lua_dump",
    parameters: ["pointer", "function", "pointer", "i32"],
    result: "i32",
  },
  lua_yieldk: {
    name: "lua_yieldk",
    parameters: ["pointer", "i32", "i64", "function"],
    result: "i32",
  },
  lua_resume: {
    name: "lua_resume",
    parameters: ["pointer", "pointer", "i32", "pointer"],
    result: "i32",
  },
  lua_status: {
    name: "lua_status",
    parameters: ["pointer"],
    result: "i32",
  },
  lua_isyieldable: {
    name: "lua_isyieldable",
    parameters: ["pointer"],
    result: "i32",
  },
  lua_setwarnf: {
    name: "lua_setwarnf",
    parameters: ["pointer", "function", "pointer"],
    result: "void",
  },
  lua_warning: {
    name: "lua_warning",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  lua_gc: {
    name: "lua_gc",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_error: {
    name: "lua_error",
    parameters: ["pointer"],
    result: "i32",
  },
  lua_next: {
    name: "lua_next",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  lua_concat: {
    name: "lua_concat",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  lua_len: {
    name: "lua_len",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  lua_stringtonumber: {
    name: "lua_stringtonumber",
    parameters: ["pointer", "pointer"],
    result: "usize",
  },
  lua_getallocf: {
    name: "lua_getallocf",
    parameters: ["pointer", "pointer"],
    result: "function",
  },
  lua_setallocf: {
    name: "lua_setallocf",
    parameters: ["pointer", "function", "pointer"],
    result: "void",
  },
  lua_toclose: {
    name: "lua_toclose",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  lua_getstack: {
    name: "lua_getstack",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  lua_getinfo: {
    name: "lua_getinfo",
    parameters: ["pointer", "pointer", "pointer"],
    result: "i32",
  },
  lua_getlocal: {
    name: "lua_getlocal",
    parameters: ["pointer", "pointer", "i32"],
    result: "pointer",
  },
  lua_setlocal: {
    name: "lua_setlocal",
    parameters: ["pointer", "pointer", "i32"],
    result: "pointer",
  },
  lua_getupvalue: {
    name: "lua_getupvalue",
    parameters: ["pointer", "i32", "i32"],
    result: "pointer",
  },
  lua_setupvalue: {
    name: "lua_setupvalue",
    parameters: ["pointer", "i32", "i32"],
    result: "pointer",
  },
  lua_upvalueid: {
    name: "lua_upvalueid",
    parameters: ["pointer", "i32", "i32"],
    result: "pointer",
  },
  lua_upvaluejoin: {
    name: "lua_upvaluejoin",
    parameters: ["pointer", "i32", "i32", "i32", "i32"],
    result: "void",
  },
  lua_sethook: {
    name: "lua_sethook",
    parameters: ["pointer", "function", "i32", "i32"],
    result: "void",
  },
  lua_gethook: {
    name: "lua_gethook",
    parameters: ["pointer"],
    result: "function",
  },
  lua_gethookmask: {
    name: "lua_gethookmask",
    parameters: ["pointer"],
    result: "i32",
  },
  lua_gethookcount: {
    name: "lua_gethookcount",
    parameters: ["pointer"],
    result: "i32",
  },
  lua_setcstacklimit: {
    name: "lua_setcstacklimit",
    parameters: ["pointer", "u32"],
    result: "i32",
  },
  luaopen_base: {
    name: "luaopen_base",
    parameters: ["pointer"],
    result: "i32",
  },
  luaopen_coroutine: {
    name: "luaopen_coroutine",
    parameters: ["pointer"],
    result: "i32",
  },
  luaopen_table: {
    name: "luaopen_table",
    parameters: ["pointer"],
    result: "i32",
  },
  luaopen_io: {
    name: "luaopen_io",
    parameters: ["pointer"],
    result: "i32",
  },
  luaopen_os: {
    name: "luaopen_os",
    parameters: ["pointer"],
    result: "i32",
  },
  luaopen_string: {
    name: "luaopen_string",
    parameters: ["pointer"],
    result: "i32",
  },
  luaopen_utf8: {
    name: "luaopen_utf8",
    parameters: ["pointer"],
    result: "i32",
  },
  luaopen_math: {
    name: "luaopen_math",
    parameters: ["pointer"],
    result: "i32",
  },
  luaopen_debug: {
    name: "luaopen_debug",
    parameters: ["pointer"],
    result: "i32",
  },
  luaopen_package: {
    name: "luaopen_package",
    parameters: ["pointer"],
    result: "i32",
  },
  luaL_openlibs: {
    name: "luaL_openlibs",
    parameters: ["pointer"],
    result: "void",
  },
  remove: {
    name: "remove",
    parameters: ["pointer"],
    result: "i32",
  },
  rename: {
    name: "rename",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  fclose: {
    name: "fclose",
    parameters: ["pointer"],
    result: "i32",
  },
  fflush: {
    name: "fflush",
    parameters: ["pointer"],
    result: "i32",
  },
  setvbuf: {
    name: "setvbuf",
    parameters: ["pointer", "pointer", "i32", "usize"],
    result: "i32",
  },
  snprintf: {
    name: "snprintf",
    parameters: ["pointer", "usize", "pointer"],
    result: "i32",
  },
  getc: {
    name: "getc",
    parameters: ["pointer"],
    result: "i32",
  },
  fputc: {
    name: "fputc",
    parameters: ["i32", "pointer"],
    result: "i32",
  },
  fgets: {
    name: "fgets",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  fputs: {
    name: "fputs",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  ungetc: {
    name: "ungetc",
    parameters: ["i32", "pointer"],
    result: "i32",
  },
  fread: {
    name: "fread",
    parameters: ["pointer", "usize", "usize", "pointer"],
    result: "u64",
  },
  fwrite: {
    name: "fwrite",
    parameters: ["pointer", "usize", "usize", "pointer"],
    result: "u64",
  },
  clearerr: {
    name: "clearerr",
    parameters: ["pointer"],
    result: "void",
  },
  feof: {
    name: "feof",
    parameters: ["pointer"],
    result: "i32",
  },
  ferror: {
    name: "ferror",
    parameters: ["pointer"],
    result: "i32",
  },
  pclose: {
    name: "pclose",
    parameters: ["pointer"],
    result: "i32",
  },
  popen: {
    name: "popen",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  flockfile: {
    name: "flockfile",
    parameters: ["pointer"],
    result: "void",
  },
  funlockfile: {
    name: "funlockfile",
    parameters: ["pointer"],
    result: "void",
  },
  __uflow: {
    name: "__uflow",
    parameters: ["pointer"],
    result: "i32",
  },
  luaL_checkversion_: {
    name: "luaL_checkversion_",
    parameters: ["pointer", "f64", "usize"],
    result: "void",
  },
  luaL_getmetafield: {
    name: "luaL_getmetafield",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  luaL_callmeta: {
    name: "luaL_callmeta",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  luaL_tolstring: {
    name: "luaL_tolstring",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  luaL_argerror: {
    name: "luaL_argerror",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  luaL_typeerror: {
    name: "luaL_typeerror",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  luaL_checklstring: {
    name: "luaL_checklstring",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  luaL_optlstring: {
    name: "luaL_optlstring",
    parameters: ["pointer", "i32", "pointer", "pointer"],
    result: "pointer",
  },
  luaL_checknumber: {
    name: "luaL_checknumber",
    parameters: ["pointer", "i32"],
    result: "f64",
  },
  luaL_optnumber: {
    name: "luaL_optnumber",
    parameters: ["pointer", "i32", "f64"],
    result: "f64",
  },
  luaL_checkinteger: {
    name: "luaL_checkinteger",
    parameters: ["pointer", "i32"],
    result: "i64",
  },
  luaL_optinteger: {
    name: "luaL_optinteger",
    parameters: ["pointer", "i32", "i64"],
    result: "i64",
  },
  luaL_checkstack: {
    name: "luaL_checkstack",
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
  },
  luaL_checktype: {
    name: "luaL_checktype",
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },
  luaL_checkany: {
    name: "luaL_checkany",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  luaL_newmetatable: {
    name: "luaL_newmetatable",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  luaL_setmetatable: {
    name: "luaL_setmetatable",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  luaL_testudata: {
    name: "luaL_testudata",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  luaL_checkudata: {
    name: "luaL_checkudata",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  luaL_where: {
    name: "luaL_where",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  luaL_error: {
    name: "luaL_error",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  luaL_checkoption: {
    name: "luaL_checkoption",
    parameters: ["pointer", "i32", "pointer", "pointer"],
    result: "i32",
  },
  luaL_fileresult: {
    name: "luaL_fileresult",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  luaL_execresult: {
    name: "luaL_execresult",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  luaL_ref: {
    name: "luaL_ref",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  luaL_unref: {
    name: "luaL_unref",
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },
  luaL_loadfilex: {
    name: "luaL_loadfilex",
    parameters: ["pointer", "pointer", "pointer"],
    result: "i32",
  },
  luaL_loadbufferx: {
    name: "luaL_loadbufferx",
    parameters: ["pointer", "pointer", "usize", "pointer", "pointer"],
    result: "i32",
  },
  luaL_loadstring: {
    name: "luaL_loadstring",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  luaL_newstate: {
    name: "luaL_newstate",
    parameters: [],
    result: "pointer",
  },
  luaL_len: {
    name: "luaL_len",
    parameters: ["pointer", "i32"],
    result: "i64",
  },
  luaL_addgsub: {
    name: "luaL_addgsub",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  luaL_gsub: {
    name: "luaL_gsub",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "pointer",
  },
  luaL_setfuncs: {
    name: "luaL_setfuncs",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  luaL_getsubtable: {
    name: "luaL_getsubtable",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  luaL_traceback: {
    name: "luaL_traceback",
    parameters: ["pointer", "pointer", "pointer", "i32"],
    result: "void",
  },
  luaL_requiref: {
    name: "luaL_requiref",
    parameters: ["pointer", "pointer", "function", "i32"],
    result: "void",
  },
  luaL_buffinit: {
    name: "luaL_buffinit",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  luaL_prepbuffsize: {
    name: "luaL_prepbuffsize",
    parameters: ["pointer", "usize"],
    result: "pointer",
  },
  luaL_addlstring: {
    name: "luaL_addlstring",
    parameters: ["pointer", "pointer", "usize"],
    result: "void",
  },
  luaL_addstring: {
    name: "luaL_addstring",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  luaL_addvalue: {
    name: "luaL_addvalue",
    parameters: ["pointer"],
    result: "void",
  },
  luaL_pushresult: {
    name: "luaL_pushresult",
    parameters: ["pointer"],
    result: "void",
  },
  luaL_pushresultsize: {
    name: "luaL_pushresultsize",
    parameters: ["pointer", "usize"],
    result: "void",
  },
  luaL_buffinitsize: {
    name: "luaL_buffinitsize",
    parameters: ["pointer", "pointer", "usize"],
    result: "pointer",
  }
} as const;
