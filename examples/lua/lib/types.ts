// deno-lint-ignore-file
// deno-fmt-ignore-file

import { Pointer, FnPointer, StructPointer } from "./safe-ffi.ts";

export namespace LUA {
  /** /usr/lib/clang/14.0.6/include/stdarg.h#L14 */
  export type va_list = bigint;

  /** /usr/lib/clang/14.0.6/include/stdarg.h#L32 */
  export type __gnuc_va_list = bigint;

  /** /usr/lib/clang/14.0.6/include/stddef.h#L35 */
  export type ptrdiff_t = bigint;

  /** /usr/lib/clang/14.0.6/include/stddef.h#L46 */
  export type size_t = bigint;

  /** /usr/lib/clang/14.0.6/include/stddef.h#L74 */
  export type wchar_t = number;

  /** /usr/lib/clang/14.0.6/include/__stddef_max_align_t.h#L24 */
  export type max_align_t = StructPointer<"max_align_t">;

  /** /usr/include/bits/types.h#L31 */
  export type __u_char = number;

  /** /usr/include/bits/types.h#L32 */
  export type __u_short = number;

  /** /usr/include/bits/types.h#L33 */
  export type __u_int = number;

  /** /usr/include/bits/types.h#L34 */
  export type __u_long = bigint;

  /** /usr/include/bits/types.h#L37 */
  export type __int8_t = number;

  /** /usr/include/bits/types.h#L38 */
  export type __uint8_t = number;

  /** /usr/include/bits/types.h#L39 */
  export type __int16_t = number;

  /** /usr/include/bits/types.h#L40 */
  export type __uint16_t = number;

  /** /usr/include/bits/types.h#L41 */
  export type __int32_t = number;

  /** /usr/include/bits/types.h#L42 */
  export type __uint32_t = number;

  /** /usr/include/bits/types.h#L44 */
  export type __int64_t = bigint;

  /** /usr/include/bits/types.h#L45 */
  export type __uint64_t = bigint;

  /** /usr/include/bits/types.h#L52 */
  export type __int_least8_t = LUA.__int8_t;

  /** /usr/include/bits/types.h#L53 */
  export type __uint_least8_t = LUA.__uint8_t;

  /** /usr/include/bits/types.h#L54 */
  export type __int_least16_t = LUA.__int16_t;

  /** /usr/include/bits/types.h#L55 */
  export type __uint_least16_t = LUA.__uint16_t;

  /** /usr/include/bits/types.h#L56 */
  export type __int_least32_t = LUA.__int32_t;

  /** /usr/include/bits/types.h#L57 */
  export type __uint_least32_t = LUA.__uint32_t;

  /** /usr/include/bits/types.h#L58 */
  export type __int_least64_t = LUA.__int64_t;

  /** /usr/include/bits/types.h#L59 */
  export type __uint_least64_t = LUA.__uint64_t;

  /** /usr/include/bits/types.h#L63 */
  export type __quad_t = bigint;

  /** /usr/include/bits/types.h#L64 */
  export type __u_quad_t = bigint;

  /** /usr/include/bits/types.h#L72 */
  export type __intmax_t = bigint;

  /** /usr/include/bits/types.h#L73 */
  export type __uintmax_t = bigint;

  /** /usr/include/bits/types.h#L145 */
  export type __dev_t = bigint;

  /** /usr/include/bits/types.h#L146 */
  export type __uid_t = number;

  /** /usr/include/bits/types.h#L147 */
  export type __gid_t = number;

  /** /usr/include/bits/types.h#L148 */
  export type __ino_t = bigint;

  /** /usr/include/bits/types.h#L149 */
  export type __ino64_t = bigint;

  /** /usr/include/bits/types.h#L150 */
  export type __mode_t = number;

  /** /usr/include/bits/types.h#L151 */
  export type __nlink_t = bigint;

  /** /usr/include/bits/types.h#L152 */
  export type __off_t = bigint;

  /** /usr/include/bits/types.h#L153 */
  export type __off64_t = bigint;

  /** /usr/include/bits/types.h#L154 */
  export type __pid_t = number;

  /** /usr/include/bits/types.h#L155 */
  export type __fsid_t = StructPointer<"__fsid_t">;

  /** /usr/include/bits/types.h#L156 */
  export type __clock_t = bigint;

  /** /usr/include/bits/types.h#L157 */
  export type __rlim_t = bigint;

  /** /usr/include/bits/types.h#L158 */
  export type __rlim64_t = bigint;

  /** /usr/include/bits/types.h#L159 */
  export type __id_t = number;

  /** /usr/include/bits/types.h#L160 */
  export type __time_t = bigint;

  /** /usr/include/bits/types.h#L161 */
  export type __useconds_t = number;

  /** /usr/include/bits/types.h#L162 */
  export type __suseconds_t = bigint;

  /** /usr/include/bits/types.h#L163 */
  export type __suseconds64_t = bigint;

  /** /usr/include/bits/types.h#L165 */
  export type __daddr_t = number;

  /** /usr/include/bits/types.h#L166 */
  export type __key_t = number;

  /** /usr/include/bits/types.h#L169 */
  export type __clockid_t = number;

  /** /usr/include/bits/types.h#L172 */
  export type __timer_t = Pointer<"__timer_t">;

  /** /usr/include/bits/types.h#L175 */
  export type __blksize_t = bigint;

  /** /usr/include/bits/types.h#L180 */
  export type __blkcnt_t = bigint;

  /** /usr/include/bits/types.h#L181 */
  export type __blkcnt64_t = bigint;

  /** /usr/include/bits/types.h#L184 */
  export type __fsblkcnt_t = bigint;

  /** /usr/include/bits/types.h#L185 */
  export type __fsblkcnt64_t = bigint;

  /** /usr/include/bits/types.h#L188 */
  export type __fsfilcnt_t = bigint;

  /** /usr/include/bits/types.h#L189 */
  export type __fsfilcnt64_t = bigint;

  /** /usr/include/bits/types.h#L192 */
  export type __fsword_t = bigint;

  /** /usr/include/bits/types.h#L194 */
  export type __ssize_t = bigint;

  /** /usr/include/bits/types.h#L197 */
  export type __syscall_slong_t = bigint;

  /** /usr/include/bits/types.h#L199 */
  export type __syscall_ulong_t = bigint;

  /** /usr/include/bits/types.h#L203 */
  export type __loff_t = LUA.__off64_t;

  /** /usr/include/bits/types.h#L204 */
  export type __caddr_t = Pointer<"__caddr_t">;

  /** /usr/include/bits/types.h#L207 */
  export type __intptr_t = bigint;

  /** /usr/include/bits/types.h#L210 */
  export type __socklen_t = number;

  /** /usr/include/bits/types.h#L215 */
  export type __sig_atomic_t = number;

  /** /usr/include/bits/stdint-intn.h#L24 */
  export type int8_t = LUA.__int8_t;

  /** /usr/include/bits/stdint-intn.h#L25 */
  export type int16_t = LUA.__int16_t;

  /** /usr/include/bits/stdint-intn.h#L26 */
  export type int32_t = LUA.__int32_t;

  /** /usr/include/bits/stdint-intn.h#L27 */
  export type int64_t = LUA.__int64_t;

  /** /usr/include/bits/stdint-uintn.h#L24 */
  export type uint8_t = LUA.__uint8_t;

  /** /usr/include/bits/stdint-uintn.h#L25 */
  export type uint16_t = LUA.__uint16_t;

  /** /usr/include/bits/stdint-uintn.h#L26 */
  export type uint32_t = LUA.__uint32_t;

  /** /usr/include/bits/stdint-uintn.h#L27 */
  export type uint64_t = LUA.__uint64_t;

  /** /usr/include/stdint.h#L43 */
  export type int_least8_t = LUA.__int_least8_t;

  /** /usr/include/stdint.h#L44 */
  export type int_least16_t = LUA.__int_least16_t;

  /** /usr/include/stdint.h#L45 */
  export type int_least32_t = LUA.__int_least32_t;

  /** /usr/include/stdint.h#L46 */
  export type int_least64_t = LUA.__int_least64_t;

  /** /usr/include/stdint.h#L49 */
  export type uint_least8_t = LUA.__uint_least8_t;

  /** /usr/include/stdint.h#L50 */
  export type uint_least16_t = LUA.__uint_least16_t;

  /** /usr/include/stdint.h#L51 */
  export type uint_least32_t = LUA.__uint_least32_t;

  /** /usr/include/stdint.h#L52 */
  export type uint_least64_t = LUA.__uint_least64_t;

  /** /usr/include/stdint.h#L58 */
  export type int_fast8_t = number;

  /** /usr/include/stdint.h#L60 */
  export type int_fast16_t = bigint;

  /** /usr/include/stdint.h#L61 */
  export type int_fast32_t = bigint;

  /** /usr/include/stdint.h#L62 */
  export type int_fast64_t = bigint;

  /** /usr/include/stdint.h#L71 */
  export type uint_fast8_t = number;

  /** /usr/include/stdint.h#L73 */
  export type uint_fast16_t = bigint;

  /** /usr/include/stdint.h#L74 */
  export type uint_fast32_t = bigint;

  /** /usr/include/stdint.h#L75 */
  export type uint_fast64_t = bigint;

  /** /usr/include/stdint.h#L87 */
  export type intptr_t = bigint;

  /** /usr/include/stdint.h#L90 */
  export type uintptr_t = bigint;

  /** /usr/include/stdint.h#L101 */
  export type intmax_t = LUA.__intmax_t;

  /** /usr/include/stdint.h#L102 */
  export type uintmax_t = LUA.__uintmax_t;

  /** ./input/include/lua.h#L57 */
  export type lua_State = StructPointer<"lua_State">;

  /** ./input/include/lua.h#L90 */
  export type lua_Number = bigint;

  /** ./input/include/lua.h#L94 */
  export type lua_Integer = bigint;

  /** ./input/include/lua.h#L97 */
  export type lua_Unsigned = bigint;

  /** ./input/include/lua.h#L100 */
  export type lua_KContext = LUA.intptr_t;

  /** ./input/include/lua.h#L106 */
  export type lua_CFunction = FnPointer<"lua_CFunction">;

  /** ./input/include/lua.h#L111 */
  export type lua_KFunction = FnPointer<"lua_KFunction">;

  /** ./input/include/lua.h#L117 */
  export type lua_Reader = FnPointer<"lua_Reader">;

  /** ./input/include/lua.h#L119 */
  export type lua_Writer = FnPointer<"lua_Writer">;

  /** ./input/include/lua.h#L125 */
  export type lua_Alloc = FnPointer<"lua_Alloc">;

  /** ./input/include/lua.h#L131 */
  export type lua_WarnFunction = FnPointer<"lua_WarnFunction">;

  /** ./input/include/lua.h#L444 */
  export type lua_Debug = StructPointer<"lua_Debug">;

  /** ./input/include/lua.h#L448 */
  export type lua_Hook = FnPointer<"lua_Hook">;

  /** /usr/include/bits/types/__mbstate_t.h#L21 */
  export type __mbstate_t = StructPointer<"__mbstate_t">;

  /** /usr/include/bits/types/__fpos_t.h#L14 */
  export type __fpos_t = StructPointer<"_G_fpos_t">;

  /** /usr/include/bits/types/__fpos64_t.h#L14 */
  export type __fpos64_t = StructPointer<"_G_fpos64_t">;

  /** /usr/include/bits/types/__FILE.h#L5 */
  export type __FILE = StructPointer<"__FILE">;

  /** /usr/include/bits/types/FILE.h#L7 */
  export type FILE = StructPointer<"FILE">;

  /** /usr/include/bits/types/struct_FILE.h#L43 */
  export type _IO_lock_t = void;

  /** /usr/include/stdio.h#L63 */
  export type off_t = LUA.__off_t;

  /** /usr/include/stdio.h#L77 */
  export type ssize_t = LUA.__ssize_t;

  /** /usr/include/stdio.h#L84 */
  export type fpos_t = LUA.__fpos_t;

  /** /usr/include/bits/floatn-common.h#L214 */
  export type _Float32 = bigint;

  /** /usr/include/bits/floatn-common.h#L251 */
  export type _Float64 = bigint;

  /** /usr/include/bits/floatn-common.h#L268 */
  export type _Float32x = bigint;

  /** /usr/include/bits/floatn-common.h#L285 */
  export type _Float64x = bigint;

  /** ./input/include/lauxlib.h#L22 */
  export type luaL_Buffer = StructPointer<"luaL_Buffer">;

  /** ./input/include/lauxlib.h#L40 */
  export type luaL_Reg = StructPointer<"luaL_Reg">;

  /** ./input/include/lauxlib.h#L223 */
  export type luaL_Stream = StructPointer<"luaL_Stream">;

  /** ./input/include/lua.h#L153 */
  export declare function lua_newstate(f: LUA.lua_Alloc, ud: Pointer<void>): Pointer<LUA.lua_State>;

  /** ./input/include/lua.h#L154 */
  export declare function lua_close(L: Pointer<LUA.lua_State>): void;

  /** ./input/include/lua.h#L155 */
  export declare function lua_newthread(L: Pointer<LUA.lua_State>): Pointer<LUA.lua_State>;

  /** ./input/include/lua.h#L156 */
  export declare function lua_resetthread(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lua.h#L158 */
  export declare function lua_atpanic(L: Pointer<LUA.lua_State>, panicf: LUA.lua_CFunction): LUA.lua_CFunction;

  /** ./input/include/lua.h#L161 */
  export declare function lua_version(L: Pointer<LUA.lua_State>): LUA.lua_Number;

  /** ./input/include/lua.h#L167 */
  export declare function lua_absindex(L: Pointer<LUA.lua_State>, idx: number): number;

  /** ./input/include/lua.h#L168 */
  export declare function lua_gettop(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lua.h#L169 */
  export declare function lua_settop(L: Pointer<LUA.lua_State>, idx: number): void;

  /** ./input/include/lua.h#L170 */
  export declare function lua_pushvalue(L: Pointer<LUA.lua_State>, idx: number): void;

  /** ./input/include/lua.h#L171 */
  export declare function lua_rotate(L: Pointer<LUA.lua_State>, idx: number, n: number): void;

  /** ./input/include/lua.h#L172 */
  export declare function lua_copy(L: Pointer<LUA.lua_State>, fromidx: number, toidx: number): void;

  /** ./input/include/lua.h#L173 */
  export declare function lua_checkstack(L: Pointer<LUA.lua_State>, n: number): number;

  /** ./input/include/lua.h#L175 */
  export declare function lua_xmove(from: Pointer<LUA.lua_State>, to: Pointer<LUA.lua_State>, n: number): void;

  /** ./input/include/lua.h#L182 */
  export declare function lua_isnumber(L: Pointer<LUA.lua_State>, idx: number): number;

  /** ./input/include/lua.h#L183 */
  export declare function lua_isstring(L: Pointer<LUA.lua_State>, idx: number): number;

  /** ./input/include/lua.h#L184 */
  export declare function lua_iscfunction(L: Pointer<LUA.lua_State>, idx: number): number;

  /** ./input/include/lua.h#L185 */
  export declare function lua_isinteger(L: Pointer<LUA.lua_State>, idx: number): number;

  /** ./input/include/lua.h#L186 */
  export declare function lua_isuserdata(L: Pointer<LUA.lua_State>, idx: number): number;

  /** ./input/include/lua.h#L187 */
  export declare function lua_type(L: Pointer<LUA.lua_State>, idx: number): number;

  /** ./input/include/lua.h#L188 */
  export declare function lua_typename(L: Pointer<LUA.lua_State>, tp: number): Pointer<number>;

  /** ./input/include/lua.h#L190 */
  export declare function lua_tonumberx(L: Pointer<LUA.lua_State>, idx: number, isnum: Pointer<number>): LUA.lua_Number;

  /** ./input/include/lua.h#L191 */
  export declare function lua_tointegerx(L: Pointer<LUA.lua_State>, idx: number, isnum: Pointer<number>): LUA.lua_Integer;

  /** ./input/include/lua.h#L192 */
  export declare function lua_toboolean(L: Pointer<LUA.lua_State>, idx: number): number;

  /** ./input/include/lua.h#L193 */
  export declare function lua_tolstring(L: Pointer<LUA.lua_State>, idx: number, len: Pointer<number>): Pointer<number>;

  /** ./input/include/lua.h#L194 */
  export declare function lua_rawlen(L: Pointer<LUA.lua_State>, idx: number): LUA.lua_Unsigned;

  /** ./input/include/lua.h#L195 */
  export declare function lua_tocfunction(L: Pointer<LUA.lua_State>, idx: number): LUA.lua_CFunction;

  /** ./input/include/lua.h#L196 */
  export declare function lua_touserdata(L: Pointer<LUA.lua_State>, idx: number): Pointer<void>;

  /** ./input/include/lua.h#L197 */
  export declare function lua_tothread(L: Pointer<LUA.lua_State>, idx: number): Pointer<LUA.lua_State>;

  /** ./input/include/lua.h#L198 */
  export declare function lua_topointer(L: Pointer<LUA.lua_State>, idx: number): Pointer<void>;

  /** ./input/include/lua.h#L220 */
  export declare function lua_arith(L: Pointer<LUA.lua_State>, op: number): void;

  /** ./input/include/lua.h#L226 */
  export declare function lua_rawequal(L: Pointer<LUA.lua_State>, idx1: number, idx2: number): number;

  /** ./input/include/lua.h#L227 */
  export declare function lua_compare(L: Pointer<LUA.lua_State>, idx1: number, idx2: number, op: number): number;

  /** ./input/include/lua.h#L233 */
  export declare function lua_pushnil(L: Pointer<LUA.lua_State>): void;

  /** ./input/include/lua.h#L234 */
  export declare function lua_pushnumber(L: Pointer<LUA.lua_State>, n: LUA.lua_Number): void;

  /** ./input/include/lua.h#L235 */
  export declare function lua_pushinteger(L: Pointer<LUA.lua_State>, n: LUA.lua_Integer): void;

  /** ./input/include/lua.h#L236 */
  export declare function lua_pushlstring(L: Pointer<LUA.lua_State>, s: Pointer<number>, len: number): Pointer<number>;

  /** ./input/include/lua.h#L237 */
  export declare function lua_pushstring(L: Pointer<LUA.lua_State>, s: Pointer<number>): Pointer<number>;

  /** ./input/include/lua.h#L238 */
  export declare function lua_pushvfstring(L: Pointer<LUA.lua_State>, fmt: Pointer<number>, argp: LUA.va_list): Pointer<number>;

  /** ./input/include/lua.h#L240 */
  export declare function lua_pushfstring(L: Pointer<LUA.lua_State>, fmt: Pointer<number>): Pointer<number>;

  /** ./input/include/lua.h#L241 */
  export declare function lua_pushcclosure(L: Pointer<LUA.lua_State>, fn: LUA.lua_CFunction, n: number): void;

  /** ./input/include/lua.h#L242 */
  export declare function lua_pushboolean(L: Pointer<LUA.lua_State>, b: number): void;

  /** ./input/include/lua.h#L243 */
  export declare function lua_pushlightuserdata(L: Pointer<LUA.lua_State>, p: Pointer<void>): void;

  /** ./input/include/lua.h#L244 */
  export declare function lua_pushthread(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lua.h#L250 */
  export declare function lua_getglobal(L: Pointer<LUA.lua_State>, name: Pointer<number>): number;

  /** ./input/include/lua.h#L251 */
  export declare function lua_gettable(L: Pointer<LUA.lua_State>, idx: number): number;

  /** ./input/include/lua.h#L252 */
  export declare function lua_getfield(L: Pointer<LUA.lua_State>, idx: number, k: Pointer<number>): number;

  /** ./input/include/lua.h#L253 */
  export declare function lua_geti(L: Pointer<LUA.lua_State>, idx: number, n: LUA.lua_Integer): number;

  /** ./input/include/lua.h#L254 */
  export declare function lua_rawget(L: Pointer<LUA.lua_State>, idx: number): number;

  /** ./input/include/lua.h#L255 */
  export declare function lua_rawgeti(L: Pointer<LUA.lua_State>, idx: number, n: LUA.lua_Integer): number;

  /** ./input/include/lua.h#L256 */
  export declare function lua_rawgetp(L: Pointer<LUA.lua_State>, idx: number, p: Pointer<void>): number;

  /** ./input/include/lua.h#L258 */
  export declare function lua_createtable(L: Pointer<LUA.lua_State>, narr: number, nrec: number): void;

  /** ./input/include/lua.h#L259 */
  export declare function lua_newuserdatauv(L: Pointer<LUA.lua_State>, sz: number, nuvalue: number): Pointer<void>;

  /** ./input/include/lua.h#L260 */
  export declare function lua_getmetatable(L: Pointer<LUA.lua_State>, objindex: number): number;

  /** ./input/include/lua.h#L261 */
  export declare function lua_getiuservalue(L: Pointer<LUA.lua_State>, idx: number, n: number): number;

  /** ./input/include/lua.h#L267 */
  export declare function lua_setglobal(L: Pointer<LUA.lua_State>, name: Pointer<number>): void;

  /** ./input/include/lua.h#L268 */
  export declare function lua_settable(L: Pointer<LUA.lua_State>, idx: number): void;

  /** ./input/include/lua.h#L269 */
  export declare function lua_setfield(L: Pointer<LUA.lua_State>, idx: number, k: Pointer<number>): void;

  /** ./input/include/lua.h#L270 */
  export declare function lua_seti(L: Pointer<LUA.lua_State>, idx: number, n: LUA.lua_Integer): void;

  /** ./input/include/lua.h#L271 */
  export declare function lua_rawset(L: Pointer<LUA.lua_State>, idx: number): void;

  /** ./input/include/lua.h#L272 */
  export declare function lua_rawseti(L: Pointer<LUA.lua_State>, idx: number, n: LUA.lua_Integer): void;

  /** ./input/include/lua.h#L273 */
  export declare function lua_rawsetp(L: Pointer<LUA.lua_State>, idx: number, p: Pointer<void>): void;

  /** ./input/include/lua.h#L274 */
  export declare function lua_setmetatable(L: Pointer<LUA.lua_State>, objindex: number): number;

  /** ./input/include/lua.h#L275 */
  export declare function lua_setiuservalue(L: Pointer<LUA.lua_State>, idx: number, n: number): number;

  /** ./input/include/lua.h#L281 */
  export declare function lua_callk(L: Pointer<LUA.lua_State>, nargs: number, nresults: number, ctx: LUA.lua_KContext, k: LUA.lua_KFunction): void;

  /** ./input/include/lua.h#L285 */
  export declare function lua_pcallk(L: Pointer<LUA.lua_State>, nargs: number, nresults: number, errfunc: number, ctx: LUA.lua_KContext, k: LUA.lua_KFunction): number;

  /** ./input/include/lua.h#L289 */
  export declare function lua_load(L: Pointer<LUA.lua_State>, reader: LUA.lua_Reader, dt: Pointer<void>, chunkname: Pointer<number>, mode: Pointer<number>): number;

  /** ./input/include/lua.h#L292 */
  export declare function lua_dump(L: Pointer<LUA.lua_State>, writer: LUA.lua_Writer, data: Pointer<void>, strip: number): number;

  /** ./input/include/lua.h#L298 */
  export declare function lua_yieldk(L: Pointer<LUA.lua_State>, nresults: number, ctx: LUA.lua_KContext, k: LUA.lua_KFunction): number;

  /** ./input/include/lua.h#L300 */
  export declare function lua_resume(L: Pointer<LUA.lua_State>, from: Pointer<LUA.lua_State>, narg: number, nres: Pointer<number>): number;

  /** ./input/include/lua.h#L302 */
  export declare function lua_status(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lua.h#L303 */
  export declare function lua_isyieldable(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lua.h#L311 */
  export declare function lua_setwarnf(L: Pointer<LUA.lua_State>, f: LUA.lua_WarnFunction, ud: Pointer<void>): void;

  /** ./input/include/lua.h#L312 */
  export declare function lua_warning(L: Pointer<LUA.lua_State>, msg: Pointer<number>, tocont: number): void;

  /** ./input/include/lua.h#L331 */
  export declare function lua_gc(L: Pointer<LUA.lua_State>, what: number): number;

  /** ./input/include/lua.h#L338 */
  export declare function lua_error(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lua.h#L340 */
  export declare function lua_next(L: Pointer<LUA.lua_State>, idx: number): number;

  /** ./input/include/lua.h#L342 */
  export declare function lua_concat(L: Pointer<LUA.lua_State>, n: number): void;

  /** ./input/include/lua.h#L343 */
  export declare function lua_len(L: Pointer<LUA.lua_State>, idx: number): void;

  /** ./input/include/lua.h#L345 */
  export declare function lua_stringtonumber(L: Pointer<LUA.lua_State>, s: Pointer<number>): number;

  /** ./input/include/lua.h#L347 */
  export declare function lua_getallocf(L: Pointer<LUA.lua_State>, ud: Pointer<Pointer<void>>): LUA.lua_Alloc;

  /** ./input/include/lua.h#L348 */
  export declare function lua_setallocf(L: Pointer<LUA.lua_State>, f: LUA.lua_Alloc, ud: Pointer<void>): void;

  /** ./input/include/lua.h#L350 */
  export declare function lua_toclose(L: Pointer<LUA.lua_State>, idx: number): void;

  /** ./input/include/lua.h#L451 */
  export declare function lua_getstack(L: Pointer<LUA.lua_State>, level: number, ar: Pointer<LUA.lua_Debug>): number;

  /** ./input/include/lua.h#L452 */
  export declare function lua_getinfo(L: Pointer<LUA.lua_State>, what: Pointer<number>, ar: Pointer<LUA.lua_Debug>): number;

  /** ./input/include/lua.h#L453 */
  export declare function lua_getlocal(L: Pointer<LUA.lua_State>, ar: Pointer<LUA.lua_Debug>, n: number): Pointer<number>;

  /** ./input/include/lua.h#L454 */
  export declare function lua_setlocal(L: Pointer<LUA.lua_State>, ar: Pointer<LUA.lua_Debug>, n: number): Pointer<number>;

  /** ./input/include/lua.h#L455 */
  export declare function lua_getupvalue(L: Pointer<LUA.lua_State>, funcindex: number, n: number): Pointer<number>;

  /** ./input/include/lua.h#L456 */
  export declare function lua_setupvalue(L: Pointer<LUA.lua_State>, funcindex: number, n: number): Pointer<number>;

  /** ./input/include/lua.h#L458 */
  export declare function lua_upvalueid(L: Pointer<LUA.lua_State>, fidx: number, n: number): Pointer<void>;

  /** ./input/include/lua.h#L459 */
  export declare function lua_upvaluejoin(L: Pointer<LUA.lua_State>, fidx1: number, n1: number, fidx2: number, n2: number): void;

  /** ./input/include/lua.h#L462 */
  export declare function lua_sethook(L: Pointer<LUA.lua_State>, func: LUA.lua_Hook, mask: number, count: number): void;

  /** ./input/include/lua.h#L463 */
  export declare function lua_gethook(L: Pointer<LUA.lua_State>): LUA.lua_Hook;

  /** ./input/include/lua.h#L464 */
  export declare function lua_gethookmask(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lua.h#L465 */
  export declare function lua_gethookcount(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lua.h#L467 */
  export declare function lua_setcstacklimit(L: Pointer<LUA.lua_State>, limit: number): number;

  /** ./input/include/lualib.h#L18 */
  export declare function luaopen_base(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lualib.h#L21 */
  export declare function luaopen_coroutine(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lualib.h#L24 */
  export declare function luaopen_table(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lualib.h#L27 */
  export declare function luaopen_io(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lualib.h#L30 */
  export declare function luaopen_os(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lualib.h#L33 */
  export declare function luaopen_string(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lualib.h#L36 */
  export declare function luaopen_utf8(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lualib.h#L39 */
  export declare function luaopen_math(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lualib.h#L42 */
  export declare function luaopen_debug(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lualib.h#L45 */
  export declare function luaopen_package(L: Pointer<LUA.lua_State>): number;

  /** ./input/include/lualib.h#L49 */
  export declare function luaL_openlibs(L: Pointer<LUA.lua_State>): void;

  /** /usr/include/stdio.h#L152 */
  export declare function remove(__filename: Pointer<number>): number;

  /** /usr/include/stdio.h#L154 */
  export declare function rename(__old: Pointer<number>, __new: Pointer<number>): number;

  /** /usr/include/stdio.h#L178 */
  export declare function fclose(__stream: Pointer<LUA.FILE>): number;

  /** /usr/include/stdio.h#L230 */
  export declare function fflush(__stream: Pointer<LUA.FILE>): number;

  /** /usr/include/stdio.h#L332 */
  export declare function setvbuf(__stream: Pointer<LUA.FILE>, __buf: Pointer<number>, __modes: number, __n: number): number;

  /** /usr/include/stdio.h#L378 */
  export declare function snprintf(__s: Pointer<number>, __maxlen: number, __format: Pointer<number>): number;

  /** /usr/include/stdio.h#L514 */
  export declare function getc(__stream: Pointer<LUA.FILE>): number;

  /** /usr/include/stdio.h#L549 */
  export declare function fputc(__c: number, __stream: Pointer<LUA.FILE>): number;

  /** /usr/include/stdio.h#L592 */
  export declare function fgets(__s: Pointer<number>, __n: number, __stream: Pointer<LUA.FILE>): Pointer<number>;

  /** /usr/include/stdio.h#L655 */
  export declare function fputs(__s: Pointer<number>, __stream: Pointer<LUA.FILE>): number;

  /** /usr/include/stdio.h#L668 */
  export declare function ungetc(__c: number, __stream: Pointer<LUA.FILE>): number;

  /** /usr/include/stdio.h#L675 */
  export declare function fread(__ptr: Pointer<void>, __size: number, __n: number, __stream: Pointer<LUA.FILE>): bigint;

  /** /usr/include/stdio.h#L681 */
  export declare function fwrite(__ptr: Pointer<void>, __size: number, __n: number, __s: Pointer<LUA.FILE>): bigint;

  /** /usr/include/stdio.h#L786 */
  export declare function clearerr(__stream: Pointer<LUA.FILE>): void;

  /** /usr/include/stdio.h#L788 */
  export declare function feof(__stream: Pointer<LUA.FILE>): number;

  /** /usr/include/stdio.h#L790 */
  export declare function ferror(__stream: Pointer<LUA.FILE>): number;

  /** /usr/include/stdio.h#L823 */
  export declare function pclose(__stream: Pointer<LUA.FILE>): number;

  /** /usr/include/stdio.h#L829 */
  export declare function popen(__command: Pointer<number>, __modes: Pointer<number>): Pointer<LUA.FILE>;

  /** /usr/include/stdio.h#L867 */
  export declare function flockfile(__stream: Pointer<LUA.FILE>): void;

  /** /usr/include/stdio.h#L874 */
  export declare function funlockfile(__stream: Pointer<LUA.FILE>): void;

  /** /usr/include/stdio.h#L885 */
  export declare function __uflow(_0: Pointer<LUA.FILE>): number;

  /** ./input/include/lauxlib.h#L45 */
  export declare function luaL_checkversion_(L: Pointer<LUA.lua_State>, ver: LUA.lua_Number, sz: number): void;

  /** ./input/include/lauxlib.h#L49 */
  export declare function luaL_getmetafield(L: Pointer<LUA.lua_State>, obj: number, e: Pointer<number>): number;

  /** ./input/include/lauxlib.h#L50 */
  export declare function luaL_callmeta(L: Pointer<LUA.lua_State>, obj: number, e: Pointer<number>): number;

  /** ./input/include/lauxlib.h#L51 */
  export declare function luaL_tolstring(L: Pointer<LUA.lua_State>, idx: number, len: Pointer<number>): Pointer<number>;

  /** ./input/include/lauxlib.h#L52 */
  export declare function luaL_argerror(L: Pointer<LUA.lua_State>, arg: number, extramsg: Pointer<number>): number;

  /** ./input/include/lauxlib.h#L53 */
  export declare function luaL_typeerror(L: Pointer<LUA.lua_State>, arg: number, tname: Pointer<number>): number;

  /** ./input/include/lauxlib.h#L54 */
  export declare function luaL_checklstring(L: Pointer<LUA.lua_State>, arg: number, l: Pointer<number>): Pointer<number>;

  /** ./input/include/lauxlib.h#L56 */
  export declare function luaL_optlstring(L: Pointer<LUA.lua_State>, arg: number, def: Pointer<number>, l: Pointer<number>): Pointer<number>;

  /** ./input/include/lauxlib.h#L58 */
  export declare function luaL_checknumber(L: Pointer<LUA.lua_State>, arg: number): LUA.lua_Number;

  /** ./input/include/lauxlib.h#L59 */
  export declare function luaL_optnumber(L: Pointer<LUA.lua_State>, arg: number, def: LUA.lua_Number): LUA.lua_Number;

  /** ./input/include/lauxlib.h#L61 */
  export declare function luaL_checkinteger(L: Pointer<LUA.lua_State>, arg: number): LUA.lua_Integer;

  /** ./input/include/lauxlib.h#L62 */
  export declare function luaL_optinteger(L: Pointer<LUA.lua_State>, arg: number, def: LUA.lua_Integer): LUA.lua_Integer;

  /** ./input/include/lauxlib.h#L65 */
  export declare function luaL_checkstack(L: Pointer<LUA.lua_State>, sz: number, msg: Pointer<number>): void;

  /** ./input/include/lauxlib.h#L66 */
  export declare function luaL_checktype(L: Pointer<LUA.lua_State>, arg: number, t: number): void;

  /** ./input/include/lauxlib.h#L67 */
  export declare function luaL_checkany(L: Pointer<LUA.lua_State>, arg: number): void;

  /** ./input/include/lauxlib.h#L69 */
  export declare function luaL_newmetatable(L: Pointer<LUA.lua_State>, tname: Pointer<number>): number;

  /** ./input/include/lauxlib.h#L70 */
  export declare function luaL_setmetatable(L: Pointer<LUA.lua_State>, tname: Pointer<number>): void;

  /** ./input/include/lauxlib.h#L71 */
  export declare function luaL_testudata(L: Pointer<LUA.lua_State>, ud: number, tname: Pointer<number>): Pointer<void>;

  /** ./input/include/lauxlib.h#L72 */
  export declare function luaL_checkudata(L: Pointer<LUA.lua_State>, ud: number, tname: Pointer<number>): Pointer<void>;

  /** ./input/include/lauxlib.h#L74 */
  export declare function luaL_where(L: Pointer<LUA.lua_State>, lvl: number): void;

  /** ./input/include/lauxlib.h#L75 */
  export declare function luaL_error(L: Pointer<LUA.lua_State>, fmt: Pointer<number>): number;

  /** ./input/include/lauxlib.h#L77 */
  export declare function luaL_checkoption(L: Pointer<LUA.lua_State>, arg: number, def: Pointer<number>, lst: Pointer<Pointer<number>>): number;

  /** ./input/include/lauxlib.h#L80 */
  export declare function luaL_fileresult(L: Pointer<LUA.lua_State>, stat: number, fname: Pointer<number>): number;

  /** ./input/include/lauxlib.h#L81 */
  export declare function luaL_execresult(L: Pointer<LUA.lua_State>, stat: number): number;

  /** ./input/include/lauxlib.h#L88 */
  export declare function luaL_ref(L: Pointer<LUA.lua_State>, t: number): number;

  /** ./input/include/lauxlib.h#L89 */
  export declare function luaL_unref(L: Pointer<LUA.lua_State>, t: number, ref: number): void;

  /** ./input/include/lauxlib.h#L91 */
  export declare function luaL_loadfilex(L: Pointer<LUA.lua_State>, filename: Pointer<number>, mode: Pointer<number>): number;

  /** ./input/include/lauxlib.h#L96 */
  export declare function luaL_loadbufferx(L: Pointer<LUA.lua_State>, buff: Pointer<number>, sz: number, name: Pointer<number>, mode: Pointer<number>): number;

  /** ./input/include/lauxlib.h#L98 */
  export declare function luaL_loadstring(L: Pointer<LUA.lua_State>, s: Pointer<number>): number;

  /** ./input/include/lauxlib.h#L100 */
  export declare function luaL_newstate(): Pointer<LUA.lua_State>;

  /** ./input/include/lauxlib.h#L102 */
  export declare function luaL_len(L: Pointer<LUA.lua_State>, idx: number): LUA.lua_Integer;

  /** ./input/include/lauxlib.h#L104 */
  export declare function luaL_addgsub(b: Pointer<LUA.luaL_Buffer>, s: Pointer<number>, p: Pointer<number>, r: Pointer<number>): void;

  /** ./input/include/lauxlib.h#L106 */
  export declare function luaL_gsub(L: Pointer<LUA.lua_State>, s: Pointer<number>, p: Pointer<number>, r: Pointer<number>): Pointer<number>;

  /** ./input/include/lauxlib.h#L109 */
  export declare function luaL_setfuncs(L: Pointer<LUA.lua_State>, l: Pointer<LUA.luaL_Reg>, nup: number): void;

  /** ./input/include/lauxlib.h#L111 */
  export declare function luaL_getsubtable(L: Pointer<LUA.lua_State>, idx: number, fname: Pointer<number>): number;

  /** ./input/include/lauxlib.h#L113 */
  export declare function luaL_traceback(L: Pointer<LUA.lua_State>, L1: Pointer<LUA.lua_State>, msg: Pointer<number>, level: number): void;

  /** ./input/include/lauxlib.h#L116 */
  export declare function luaL_requiref(L: Pointer<LUA.lua_State>, modname: Pointer<number>, openf: LUA.lua_CFunction, glb: number): void;

  /** ./input/include/lauxlib.h#L190 */
  export declare function luaL_buffinit(L: Pointer<LUA.lua_State>, B: Pointer<LUA.luaL_Buffer>): void;

  /** ./input/include/lauxlib.h#L191 */
  export declare function luaL_prepbuffsize(B: Pointer<LUA.luaL_Buffer>, sz: number): Pointer<number>;

  /** ./input/include/lauxlib.h#L192 */
  export declare function luaL_addlstring(B: Pointer<LUA.luaL_Buffer>, s: Pointer<number>, l: number): void;

  /** ./input/include/lauxlib.h#L193 */
  export declare function luaL_addstring(B: Pointer<LUA.luaL_Buffer>, s: Pointer<number>): void;

  /** ./input/include/lauxlib.h#L194 */
  export declare function luaL_addvalue(B: Pointer<LUA.luaL_Buffer>): void;

  /** ./input/include/lauxlib.h#L195 */
  export declare function luaL_pushresult(B: Pointer<LUA.luaL_Buffer>): void;

  /** ./input/include/lauxlib.h#L196 */
  export declare function luaL_pushresultsize(B: Pointer<LUA.luaL_Buffer>, sz: number): void;

  /** ./input/include/lauxlib.h#L197 */
  export declare function luaL_buffinitsize(L: Pointer<LUA.lua_State>, B: Pointer<LUA.luaL_Buffer>, sz: number): Pointer<number>;

  export declare function $$close(): void;
}
