// deno-lint-ignore-file
import { Pointer, FnPointer, StructPointer } from "./safe-ffi.ts";

export namespace SQLite3 {
  /** /usr/lib/clang/14.0.6/include/stdarg.h#L14 */
  export type $va_list = bigint;

  /** /usr/lib/clang/14.0.6/include/stdarg.h#L32 */
  export type $__gnuc_va_list = bigint;

  /** /data/input/sqlite3.h#L249 */
  export type $sqlite3 = StructPointer<"$sqlite3">;

  /** /data/input/sqlite3.h#L278 */
  export type $sqlite_int64 = bigint;

  /** /data/input/sqlite3.h#L279 */
  export type $sqlite_uint64 = bigint;

  /** /data/input/sqlite3.h#L281 */
  export type int64 = SQLite3.$sqlite_int64;

  /** /data/input/sqlite3.h#L282 */
  export type uint64 = SQLite3.$sqlite_uint64;

  /** /data/input/sqlite3.h#L338 */
  export type callback = FnPointer<"callback">;

  /** /data/input/sqlite3.h#L684 */
  export type file = StructPointer<"file">;

  /** /data/input/sqlite3.h#L783 */
  export type io_methods = StructPointer<"io_methods">;

  /** /data/input/sqlite3.h#L1187 */
  export type mutex = StructPointer<"mutex">;

  /** /data/input/sqlite3.h#L1197 */
  export type api_routines = StructPointer<"api_routines">;

  /** /data/input/sqlite3.h#L1368 */
  export type vfs = StructPointer<"vfs">;

  /** /data/input/sqlite3.h#L1369 */
  export type syscall_ptr = FnPointer<"syscall_ptr">;

  /** /data/input/sqlite3.h#L1666 */
  export type mem_methods = StructPointer<"mem_methods">;

  /** /data/input/sqlite3.h#L3797 */
  export type stmt = StructPointer<"stmt">;

  /** /data/input/sqlite3.h#L4245 */
  export type value = StructPointer<"value">;

  /** /data/input/sqlite3.h#L4259 */
  export type context = StructPointer<"context">;

  /** /data/input/sqlite3.h#L5622 */
  export type destructor_type = FnPointer<"destructor_type">;

  /** /data/input/sqlite3.h#L6741 */
  export type vtab = StructPointer<"vtab">;

  /** /data/input/sqlite3.h#L6742 */
  export type index_info = StructPointer<"index_info">;

  /** /data/input/sqlite3.h#L6743 */
  export type vtab_cursor = StructPointer<"vtab_cursor">;

  /** /data/input/sqlite3.h#L6744 */
  export type module = StructPointer<"module">;

  /** /data/input/sqlite3.h#L7128 */
  export type blob = StructPointer<"blob">;

  /** /data/input/sqlite3.h#L7576 */
  export type mutex_methods = StructPointer<"mutex_methods">;

  /** /data/input/sqlite3.h#L7837 */
  export type str = StructPointer<"str">;

  /** /data/input/sqlite3.h#L8318 */
  export type pcache = StructPointer<"pcache">;

  /** /data/input/sqlite3.h#L8330 */
  export type pcache_page = StructPointer<"pcache_page">;

  /** /data/input/sqlite3.h#L8495 */
  export type pcache_methods2 = StructPointer<"pcache_methods2">;

  /** /data/input/sqlite3.h#L8518 */
  export type pcache_methods = StructPointer<"pcache_methods">;

  /** /data/input/sqlite3.h#L8544 */
  export type backup = StructPointer<"backup">;

  /** /data/input/sqlite3.h#L9577 */
  export type snapshot = StructPointer<"sqlite3_snapshot">;

  /** /data/input/sqlite3.h#L9902 */
  export type rtree_geometry = StructPointer<"rtree_geometry">;

  /** /data/input/sqlite3.h#L9903 */
  export type rtree_query_info = StructPointer<"rtree_query_info">;

  /** /data/input/sqlite3.h#L9911 */
  export type rtree_dbl = bigint;

  /** /data/input/sqlite3.h#L11697 */
  export type $Fts5ExtensionApi = StructPointer<"$Fts5ExtensionApi">;

  /** /data/input/sqlite3.h#L11698 */
  export type $Fts5Context = StructPointer<"$Fts5Context">;

  /** /data/input/sqlite3.h#L11699 */
  export type $Fts5PhraseIter = StructPointer<"$Fts5PhraseIter">;

  /** /data/input/sqlite3.h#L11701 */
  export type $fts5_extension_function = FnPointer<"$fts5_extension_function">;

  /** /data/input/sqlite3.h#L12159 */
  export type $Fts5Tokenizer = StructPointer<"$Fts5Tokenizer">;

  /** /data/input/sqlite3.h#L12160 */
  export type $fts5_tokenizer = StructPointer<"$fts5_tokenizer">;

  /** /data/input/sqlite3.h#L12196 */
  export type $fts5_api = StructPointer<"$fts5_api">;



  /** /data/input/sqlite3.h#L163 */
  export declare function libversion(): Pointer<number>;

  /** /data/input/sqlite3.h#L164 */
  export declare function sourceid(): Pointer<number>;

  /** /data/input/sqlite3.h#L165 */
  export declare function libversion_number(): number;

  /** /data/input/sqlite3.h#L190 */
  export declare function compileoption_used(zOptName: Pointer<number>): number;

  /** /data/input/sqlite3.h#L191 */
  export declare function compileoption_get(N: number): Pointer<number>;

  /** /data/input/sqlite3.h#L233 */
  export declare function threadsafe(): number;

  /** /data/input/sqlite3.h#L330 */
  export declare function close(_0: Pointer<SQLite3.$sqlite3>): number;

  /** /data/input/sqlite3.h#L331 */
  export declare function close_v2(_0: Pointer<SQLite3.$sqlite3>): number;

  /** /data/input/sqlite3.h#L402 */
  export declare function exec(_0: Pointer<SQLite3.$sqlite3>, sql: Pointer<number>, callback: FnPointer, _3: Pointer<void>, errmsg: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L1546 */
  export declare function initialize(): number;

  /** /data/input/sqlite3.h#L1547 */
  export declare function shutdown(): number;

  /** /data/input/sqlite3.h#L1548 */
  export declare function os_init(): number;

  /** /data/input/sqlite3.h#L1549 */
  export declare function os_end(): number;

  /** /data/input/sqlite3.h#L1582 */
  export declare function config(_0: number): number;

  /** /data/input/sqlite3.h#L1601 */
  export declare function db_config(_0: Pointer<SQLite3.$sqlite3>, op: number): number;

  /** /data/input/sqlite3.h#L2358 */
  export declare function extended_result_codes(_0: Pointer<SQLite3.$sqlite3>, onoff: number): number;

  /** /data/input/sqlite3.h#L2420 */
  export declare function last_insert_rowid(_0: Pointer<SQLite3.$sqlite3>): SQLite3.int64;

  /** /data/input/sqlite3.h#L2430 */
  export declare function set_last_insert_rowid(_0: Pointer<SQLite3.$sqlite3>, _1: SQLite3.int64): void;

  /** /data/input/sqlite3.h#L2488 */
  export declare function changes(_0: Pointer<SQLite3.$sqlite3>): number;

  /** /data/input/sqlite3.h#L2525 */
  export declare function total_changes(_0: Pointer<SQLite3.$sqlite3>): number;

  /** /data/input/sqlite3.h#L2562 */
  export declare function interrupt(_0: Pointer<SQLite3.$sqlite3>): void;

  /** /data/input/sqlite3.h#L2597 */
  export declare function complete(sql: Pointer<number>): number;

  /** /data/input/sqlite3.h#L2598 */
  export declare function complete16(sql: Pointer<void>): number;

  /** /data/input/sqlite3.h#L2659 */
  export declare function busy_handler(_0: Pointer<SQLite3.$sqlite3>, _1: FnPointer, _2: Pointer<void>): number;

  /** /data/input/sqlite3.h#L2682 */
  export declare function busy_timeout(_0: Pointer<SQLite3.$sqlite3>, ms: number): number;

  /** /data/input/sqlite3.h#L2757 */
  export declare function get_table(db: Pointer<SQLite3.$sqlite3>, zSql: Pointer<number>, pazResult: Pointer<Pointer<Pointer<number>>>, pnRow: Pointer<number>, pnColumn: Pointer<number>, pzErrmsg: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L2765 */
  export declare function free_table(result: Pointer<Pointer<number>>): void;

  /** /data/input/sqlite3.h#L2807 */
  export declare function mprintf(_0: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L2808 */
  export declare function vmprintf(_0: Pointer<number>, _1: SQLite3.$va_list): Pointer<number>;

  /** /data/input/sqlite3.h#L2809 */
  export declare function snprintf(_0: number, _1: Pointer<number>, _2: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L2810 */
  export declare function vsnprintf(_0: number, _1: Pointer<number>, _2: Pointer<number>, _3: SQLite3.$va_list): Pointer<number>;

  /** /data/input/sqlite3.h#L2887 */
  export declare function malloc(_0: number): Pointer<void>;

  /** /data/input/sqlite3.h#L2888 */
  export declare function malloc64(_0: SQLite3.uint64): Pointer<void>;

  /** /data/input/sqlite3.h#L2889 */
  export declare function realloc(_0: Pointer<void>, _1: number): Pointer<void>;

  /** /data/input/sqlite3.h#L2890 */
  export declare function realloc64(_0: Pointer<void>, _1: SQLite3.uint64): Pointer<void>;

  /** /data/input/sqlite3.h#L2891 */
  export declare function free(_0: Pointer<void>): void;

  /** /data/input/sqlite3.h#L2892 */
  export declare function msize(_0: Pointer<void>): SQLite3.uint64;

  /** /data/input/sqlite3.h#L2917 */
  export declare function memory_used(): SQLite3.int64;

  /** /data/input/sqlite3.h#L2918 */
  export declare function memory_highwater(resetFlag: number): SQLite3.int64;

  /** /data/input/sqlite3.h#L2941 */
  export declare function randomness(N: number, P: Pointer<void>): void;

  /** /data/input/sqlite3.h#L3032 */
  export declare function set_authorizer(_0: Pointer<SQLite3.$sqlite3>, xAuth: FnPointer, pUserData: Pointer<void>): number;

  /** /data/input/sqlite3.h#L3140 */
  export declare function trace(_0: Pointer<SQLite3.$sqlite3>, xTrace: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L3142 */
  export declare function profile(_0: Pointer<SQLite3.$sqlite3>, xProfile: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L3231 */
  export declare function trace_v2(_0: Pointer<SQLite3.$sqlite3>, uMask: number, xCallback: FnPointer, pCtx: Pointer<void>): number;

  /** /data/input/sqlite3.h#L3270 */
  export declare function progress_handler(_0: Pointer<SQLite3.$sqlite3>, _1: number, _2: FnPointer, _3: Pointer<void>): void;

  /** /data/input/sqlite3.h#L3525 */
  export declare function open(filename: Pointer<number>, ppDb: Pointer<Pointer<SQLite3.$sqlite3>>): number;

  /** /data/input/sqlite3.h#L3529 */
  export declare function open16(filename: Pointer<void>, ppDb: Pointer<Pointer<SQLite3.$sqlite3>>): number;

  /** /data/input/sqlite3.h#L3533 */
  export declare function open_v2(filename: Pointer<number>, ppDb: Pointer<Pointer<SQLite3.$sqlite3>>, flags: number, zVfs: Pointer<number>): number;

  /** /data/input/sqlite3.h#L3606 */
  export declare function uri_parameter(zFilename: Pointer<number>, zParam: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L3607 */
  export declare function uri_boolean(zFile: Pointer<number>, zParam: Pointer<number>, bDefault: number): number;

  /** /data/input/sqlite3.h#L3608 */
  export declare function uri_int64(_0: Pointer<number>, _1: Pointer<number>, _2: SQLite3.int64): SQLite3.int64;

  /** /data/input/sqlite3.h#L3609 */
  export declare function uri_key(zFilename: Pointer<number>, N: number): Pointer<number>;

  /** /data/input/sqlite3.h#L3638 */
  export declare function filename_database(_0: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L3639 */
  export declare function filename_journal(_0: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L3640 */
  export declare function filename_wal(_0: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L3659 */
  export declare function database_file_object(_0: Pointer<number>): Pointer<SQLite3.file>;

  /** /data/input/sqlite3.h#L3706 */
  export declare function create_filename(zDatabase: Pointer<number>, zJournal: Pointer<number>, zWal: Pointer<number>, nParam: number, azParam: Pointer<Pointer<number>>): Pointer<number>;

  /** /data/input/sqlite3.h#L3713 */
  export declare function free_filename(_0: Pointer<number>): void;

  /** /data/input/sqlite3.h#L3767 */
  export declare function errcode(db: Pointer<SQLite3.$sqlite3>): number;

  /** /data/input/sqlite3.h#L3768 */
  export declare function extended_errcode(db: Pointer<SQLite3.$sqlite3>): number;

  /** /data/input/sqlite3.h#L3769 */
  export declare function errmsg(_0: Pointer<SQLite3.$sqlite3>): Pointer<number>;

  /** /data/input/sqlite3.h#L3770 */
  export declare function errmsg16(_0: Pointer<SQLite3.$sqlite3>): Pointer<void>;

  /** /data/input/sqlite3.h#L3771 */
  export declare function errstr(_0: number): Pointer<number>;

  /** /data/input/sqlite3.h#L3839 */
  export declare function limit(_0: Pointer<SQLite3.$sqlite3>, id: number, newVal: number): number;

  /** /data/input/sqlite3.h#L4049 */
  export declare function prepare(db: Pointer<SQLite3.$sqlite3>, zSql: Pointer<number>, nByte: number, ppStmt: Pointer<Pointer<SQLite3.stmt>>, pzTail: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L4056 */
  export declare function prepare_v2(db: Pointer<SQLite3.$sqlite3>, zSql: Pointer<number>, nByte: number, ppStmt: Pointer<Pointer<SQLite3.stmt>>, pzTail: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L4063 */
  export declare function prepare_v3(db: Pointer<SQLite3.$sqlite3>, zSql: Pointer<number>, nByte: number, prepFlags: number, ppStmt: Pointer<Pointer<SQLite3.stmt>>, pzTail: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L4071 */
  export declare function prepare16(db: Pointer<SQLite3.$sqlite3>, zSql: Pointer<void>, nByte: number, ppStmt: Pointer<Pointer<SQLite3.stmt>>, pzTail: Pointer<Pointer<void>>): number;

  /** /data/input/sqlite3.h#L4078 */
  export declare function prepare16_v2(db: Pointer<SQLite3.$sqlite3>, zSql: Pointer<void>, nByte: number, ppStmt: Pointer<Pointer<SQLite3.stmt>>, pzTail: Pointer<Pointer<void>>): number;

  /** /data/input/sqlite3.h#L4085 */
  export declare function prepare16_v3(db: Pointer<SQLite3.$sqlite3>, zSql: Pointer<void>, nByte: number, prepFlags: number, ppStmt: Pointer<Pointer<SQLite3.stmt>>, pzTail: Pointer<Pointer<void>>): number;

  /** /data/input/sqlite3.h#L4132 */
  export declare function sql(pStmt: Pointer<SQLite3.stmt>): Pointer<number>;

  /** /data/input/sqlite3.h#L4133 */
  export declare function expanded_sql(pStmt: Pointer<SQLite3.stmt>): Pointer<number>;

  /** /data/input/sqlite3.h#L4170 */
  export declare function stmt_readonly(pStmt: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L4182 */
  export declare function stmt_isexplain(pStmt: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L4203 */
  export declare function stmt_busy(_0: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L4397 */
  export declare function bind_blob(_0: Pointer<SQLite3.stmt>, _1: number, _2: Pointer<void>, n: number, _4: FnPointer): number;

  /** /data/input/sqlite3.h#L4398 */
  export declare function bind_blob64(_0: Pointer<SQLite3.stmt>, _1: number, _2: Pointer<void>, _3: SQLite3.uint64, _4: FnPointer): number;

  /** /data/input/sqlite3.h#L4400 */
  export declare function bind_double(_0: Pointer<SQLite3.stmt>, _1: number, _2: bigint): number;

  /** /data/input/sqlite3.h#L4401 */
  export declare function bind_int(_0: Pointer<SQLite3.stmt>, _1: number, _2: number): number;

  /** /data/input/sqlite3.h#L4402 */
  export declare function bind_int64(_0: Pointer<SQLite3.stmt>, _1: number, _2: SQLite3.int64): number;

  /** /data/input/sqlite3.h#L4403 */
  export declare function bind_null(_0: Pointer<SQLite3.stmt>, _1: number): number;

  /** /data/input/sqlite3.h#L4404 */
  export declare function bind_text(_0: Pointer<SQLite3.stmt>, _1: number, _2: Pointer<number>, _3: number, _4: FnPointer): number;

  /** /data/input/sqlite3.h#L4405 */
  export declare function bind_text16(_0: Pointer<SQLite3.stmt>, _1: number, _2: Pointer<void>, _3: number, _4: FnPointer): number;

  /** /data/input/sqlite3.h#L4406 */
  export declare function bind_text64(_0: Pointer<SQLite3.stmt>, _1: number, _2: Pointer<number>, _3: SQLite3.uint64, _4: FnPointer, encoding: number): number;

  /** /data/input/sqlite3.h#L4408 */
  export declare function bind_value(_0: Pointer<SQLite3.stmt>, _1: number, _2: Pointer<SQLite3.value>): number;

  /** /data/input/sqlite3.h#L4409 */
  export declare function bind_pointer(_0: Pointer<SQLite3.stmt>, _1: number, _2: Pointer<void>, _3: Pointer<number>, _4: FnPointer): number;

  /** /data/input/sqlite3.h#L4410 */
  export declare function bind_zeroblob(_0: Pointer<SQLite3.stmt>, _1: number, n: number): number;

  /** /data/input/sqlite3.h#L4411 */
  export declare function bind_zeroblob64(_0: Pointer<SQLite3.stmt>, _1: number, _2: SQLite3.uint64): number;

  /** /data/input/sqlite3.h#L4432 */
  export declare function bind_parameter_count(_0: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L4460 */
  export declare function bind_parameter_name(_0: Pointer<SQLite3.stmt>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4478 */
  export declare function bind_parameter_index(_0: Pointer<SQLite3.stmt>, zName: Pointer<number>): number;

  /** /data/input/sqlite3.h#L4488 */
  export declare function clear_bindings(_0: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L4504 */
  export declare function column_count(pStmt: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L4533 */
  export declare function column_name(_0: Pointer<SQLite3.stmt>, N: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4534 */
  export declare function column_name16(_0: Pointer<SQLite3.stmt>, N: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4578 */
  export declare function column_database_name(_0: Pointer<SQLite3.stmt>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4579 */
  export declare function column_database_name16(_0: Pointer<SQLite3.stmt>, _1: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4580 */
  export declare function column_table_name(_0: Pointer<SQLite3.stmt>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4581 */
  export declare function column_table_name16(_0: Pointer<SQLite3.stmt>, _1: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4582 */
  export declare function column_origin_name(_0: Pointer<SQLite3.stmt>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4583 */
  export declare function column_origin_name16(_0: Pointer<SQLite3.stmt>, _1: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4615 */
  export declare function column_decltype(_0: Pointer<SQLite3.stmt>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4616 */
  export declare function column_decltype16(_0: Pointer<SQLite3.stmt>, _1: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4700 */
  export declare function step(_0: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L4721 */
  export declare function data_count(pStmt: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L4964 */
  export declare function column_blob(_0: Pointer<SQLite3.stmt>, iCol: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4965 */
  export declare function column_double(_0: Pointer<SQLite3.stmt>, iCol: number): bigint;

  /** /data/input/sqlite3.h#L4966 */
  export declare function column_int(_0: Pointer<SQLite3.stmt>, iCol: number): number;

  /** /data/input/sqlite3.h#L4967 */
  export declare function column_int64(_0: Pointer<SQLite3.stmt>, iCol: number): SQLite3.int64;

  /** /data/input/sqlite3.h#L4968 */
  export declare function column_text(_0: Pointer<SQLite3.stmt>, iCol: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4969 */
  export declare function column_text16(_0: Pointer<SQLite3.stmt>, iCol: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4970 */
  export declare function column_value(_0: Pointer<SQLite3.stmt>, iCol: number): Pointer<SQLite3.value>;

  /** /data/input/sqlite3.h#L4971 */
  export declare function column_bytes(_0: Pointer<SQLite3.stmt>, iCol: number): number;

  /** /data/input/sqlite3.h#L4972 */
  export declare function column_bytes16(_0: Pointer<SQLite3.stmt>, iCol: number): number;

  /** /data/input/sqlite3.h#L4973 */
  export declare function column_type(_0: Pointer<SQLite3.stmt>, iCol: number): number;

  /** /data/input/sqlite3.h#L5001 */
  export declare function finalize(pStmt: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L5028 */
  export declare function reset(pStmt: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L5155 */
  export declare function create_function(db: Pointer<SQLite3.$sqlite3>, zFunctionName: Pointer<number>, nArg: number, eTextRep: number, pApp: Pointer<void>, xFunc: FnPointer, xStep: FnPointer, xFinal: FnPointer): number;

  /** /data/input/sqlite3.h#L5165 */
  export declare function create_function16(db: Pointer<SQLite3.$sqlite3>, zFunctionName: Pointer<void>, nArg: number, eTextRep: number, pApp: Pointer<void>, xFunc: FnPointer, xStep: FnPointer, xFinal: FnPointer): number;

  /** /data/input/sqlite3.h#L5175 */
  export declare function create_function_v2(db: Pointer<SQLite3.$sqlite3>, zFunctionName: Pointer<number>, nArg: number, eTextRep: number, pApp: Pointer<void>, xFunc: FnPointer, xStep: FnPointer, xFinal: FnPointer, xDestroy: FnPointer): number;

  /** /data/input/sqlite3.h#L5186 */
  export declare function create_window_function(db: Pointer<SQLite3.$sqlite3>, zFunctionName: Pointer<number>, nArg: number, eTextRep: number, pApp: Pointer<void>, xStep: FnPointer, xFinal: FnPointer, xValue: FnPointer, xInverse: FnPointer, xDestroy: FnPointer): number;

  /** /data/input/sqlite3.h#L5293 */
  export declare function aggregate_count(_0: Pointer<SQLite3.context>): number;

  /** /data/input/sqlite3.h#L5294 */
  export declare function expired(_0: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L5295 */
  export declare function transfer_bindings(_0: Pointer<SQLite3.stmt>, _1: Pointer<SQLite3.stmt>): number;

  /** /data/input/sqlite3.h#L5296 */
  export declare function global_recover(): number;

  /** /data/input/sqlite3.h#L5297 */
  export declare function thread_cleanup(): void;

  /** /data/input/sqlite3.h#L5298 */
  export declare function memory_alarm(_0: FnPointer, _1: Pointer<void>, _2: SQLite3.int64): number;

  /** /data/input/sqlite3.h#L5430 */
  export declare function value_blob(_0: Pointer<SQLite3.value>): Pointer<void>;

  /** /data/input/sqlite3.h#L5431 */
  export declare function value_double(_0: Pointer<SQLite3.value>): bigint;

  /** /data/input/sqlite3.h#L5432 */
  export declare function value_int(_0: Pointer<SQLite3.value>): number;

  /** /data/input/sqlite3.h#L5433 */
  export declare function value_int64(_0: Pointer<SQLite3.value>): SQLite3.int64;

  /** /data/input/sqlite3.h#L5434 */
  export declare function value_pointer(_0: Pointer<SQLite3.value>, _1: Pointer<number>): Pointer<void>;

  /** /data/input/sqlite3.h#L5435 */
  export declare function value_text(_0: Pointer<SQLite3.value>): Pointer<number>;

  /** /data/input/sqlite3.h#L5436 */
  export declare function value_text16(_0: Pointer<SQLite3.value>): Pointer<void>;

  /** /data/input/sqlite3.h#L5437 */
  export declare function value_text16le(_0: Pointer<SQLite3.value>): Pointer<void>;

  /** /data/input/sqlite3.h#L5438 */
  export declare function value_text16be(_0: Pointer<SQLite3.value>): Pointer<void>;

  /** /data/input/sqlite3.h#L5439 */
  export declare function value_bytes(_0: Pointer<SQLite3.value>): number;

  /** /data/input/sqlite3.h#L5440 */
  export declare function value_bytes16(_0: Pointer<SQLite3.value>): number;

  /** /data/input/sqlite3.h#L5441 */
  export declare function value_type(_0: Pointer<SQLite3.value>): number;

  /** /data/input/sqlite3.h#L5442 */
  export declare function value_numeric_type(_0: Pointer<SQLite3.value>): number;

  /** /data/input/sqlite3.h#L5443 */
  export declare function value_nochange(_0: Pointer<SQLite3.value>): number;

  /** /data/input/sqlite3.h#L5444 */
  export declare function value_frombind(_0: Pointer<SQLite3.value>): number;

  /** /data/input/sqlite3.h#L5456 */
  export declare function value_subtype(_0: Pointer<SQLite3.value>): number;

  /** /data/input/sqlite3.h#L5472 */
  export declare function value_dup(_0: Pointer<SQLite3.value>): Pointer<SQLite3.value>;

  /** /data/input/sqlite3.h#L5473 */
  export declare function value_free(_0: Pointer<SQLite3.value>): void;

  /** /data/input/sqlite3.h#L5518 */
  export declare function aggregate_context(_0: Pointer<SQLite3.context>, nBytes: number): Pointer<void>;

  /** /data/input/sqlite3.h#L5533 */
  export declare function user_data(_0: Pointer<SQLite3.context>): Pointer<void>;

  /** /data/input/sqlite3.h#L5545 */
  export declare function context_db_handle(_0: Pointer<SQLite3.context>): Pointer<SQLite3.$sqlite3>;

  /** /data/input/sqlite3.h#L5604 */
  export declare function get_auxdata(_0: Pointer<SQLite3.context>, N: number): Pointer<void>;

  /** /data/input/sqlite3.h#L5605 */
  export declare function set_auxdata(_0: Pointer<SQLite3.context>, N: number, _2: Pointer<void>, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5772 */
  export declare function result_blob(_0: Pointer<SQLite3.context>, _1: Pointer<void>, _2: number, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5773 */
  export declare function result_blob64(_0: Pointer<SQLite3.context>, _1: Pointer<void>, _2: SQLite3.uint64, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5775 */
  export declare function result_double(_0: Pointer<SQLite3.context>, _1: bigint): void;

  /** /data/input/sqlite3.h#L5776 */
  export declare function result_error(_0: Pointer<SQLite3.context>, _1: Pointer<number>, _2: number): void;

  /** /data/input/sqlite3.h#L5777 */
  export declare function result_error16(_0: Pointer<SQLite3.context>, _1: Pointer<void>, _2: number): void;

  /** /data/input/sqlite3.h#L5778 */
  export declare function result_error_toobig(_0: Pointer<SQLite3.context>): void;

  /** /data/input/sqlite3.h#L5779 */
  export declare function result_error_nomem(_0: Pointer<SQLite3.context>): void;

  /** /data/input/sqlite3.h#L5780 */
  export declare function result_error_code(_0: Pointer<SQLite3.context>, _1: number): void;

  /** /data/input/sqlite3.h#L5781 */
  export declare function result_int(_0: Pointer<SQLite3.context>, _1: number): void;

  /** /data/input/sqlite3.h#L5782 */
  export declare function result_int64(_0: Pointer<SQLite3.context>, _1: SQLite3.int64): void;

  /** /data/input/sqlite3.h#L5783 */
  export declare function result_null(_0: Pointer<SQLite3.context>): void;

  /** /data/input/sqlite3.h#L5784 */
  export declare function result_text(_0: Pointer<SQLite3.context>, _1: Pointer<number>, _2: number, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5785 */
  export declare function result_text64(_0: Pointer<SQLite3.context>, _1: Pointer<number>, _2: SQLite3.uint64, _3: FnPointer, encoding: number): void;

  /** /data/input/sqlite3.h#L5787 */
  export declare function result_text16(_0: Pointer<SQLite3.context>, _1: Pointer<void>, _2: number, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5788 */
  export declare function result_text16le(_0: Pointer<SQLite3.context>, _1: Pointer<void>, _2: number, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5789 */
  export declare function result_text16be(_0: Pointer<SQLite3.context>, _1: Pointer<void>, _2: number, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5790 */
  export declare function result_value(_0: Pointer<SQLite3.context>, _1: Pointer<SQLite3.value>): void;

  /** /data/input/sqlite3.h#L5791 */
  export declare function result_pointer(_0: Pointer<SQLite3.context>, _1: Pointer<void>, _2: Pointer<number>, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5792 */
  export declare function result_zeroblob(_0: Pointer<SQLite3.context>, n: number): void;

  /** /data/input/sqlite3.h#L5793 */
  export declare function result_zeroblob64(_0: Pointer<SQLite3.context>, n: SQLite3.uint64): number;

  /** /data/input/sqlite3.h#L5808 */
  export declare function result_subtype(_0: Pointer<SQLite3.context>, _1: number): void;

  /** /data/input/sqlite3.h#L5891 */
  export declare function create_collation(_0: Pointer<SQLite3.$sqlite3>, zName: Pointer<number>, eTextRep: number, pArg: Pointer<void>, xCompare: FnPointer): number;

  /** /data/input/sqlite3.h#L5898 */
  export declare function create_collation_v2(_0: Pointer<SQLite3.$sqlite3>, zName: Pointer<number>, eTextRep: number, pArg: Pointer<void>, xCompare: FnPointer, xDestroy: FnPointer): number;

  /** /data/input/sqlite3.h#L5906 */
  export declare function create_collation16(_0: Pointer<SQLite3.$sqlite3>, zName: Pointer<void>, eTextRep: number, pArg: Pointer<void>, xCompare: FnPointer): number;

  /** /data/input/sqlite3.h#L5941 */
  export declare function collation_needed(_0: Pointer<SQLite3.$sqlite3>, _1: Pointer<void>, _2: FnPointer): number;

  /** /data/input/sqlite3.h#L5946 */
  export declare function collation_needed16(_0: Pointer<SQLite3.$sqlite3>, _1: Pointer<void>, _2: FnPointer): number;

  /** /data/input/sqlite3.h#L5979 */
  export declare function sleep(_0: number): number;

  /** /data/input/sqlite3.h#L6133 */
  export declare function get_autocommit(_0: Pointer<SQLite3.$sqlite3>): number;

  /** /data/input/sqlite3.h#L6146 */
  export declare function db_handle(_0: Pointer<SQLite3.stmt>): Pointer<SQLite3.$sqlite3>;

  /** /data/input/sqlite3.h#L6178 */
  export declare function db_filename(db: Pointer<SQLite3.$sqlite3>, zDbName: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L6188 */
  export declare function db_readonly(db: Pointer<SQLite3.$sqlite3>, zDbName: Pointer<number>): number;

  /** /data/input/sqlite3.h#L6206 */
  export declare function txn_state(_0: Pointer<SQLite3.$sqlite3>, zSchema: Pointer<number>): number;

  /** /data/input/sqlite3.h#L6255 */
  export declare function next_stmt(pDb: Pointer<SQLite3.$sqlite3>, pStmt: Pointer<SQLite3.stmt>): Pointer<SQLite3.stmt>;

  /** /data/input/sqlite3.h#L6304 */
  export declare function commit_hook(_0: Pointer<SQLite3.$sqlite3>, _1: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L6305 */
  export declare function rollback_hook(_0: Pointer<SQLite3.$sqlite3>, _1: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L6356 */
  export declare function update_hook(_0: Pointer<SQLite3.$sqlite3>, _1: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L6401 */
  export declare function enable_shared_cache(_0: number): number;

  /** /data/input/sqlite3.h#L6417 */
  export declare function release_memory(_0: number): number;

  /** /data/input/sqlite3.h#L6431 */
  export declare function db_release_memory(_0: Pointer<SQLite3.$sqlite3>): number;

  /** /data/input/sqlite3.h#L6497 */
  export declare function soft_heap_limit64(N: SQLite3.int64): SQLite3.int64;

  /** /data/input/sqlite3.h#L6498 */
  export declare function hard_heap_limit64(N: SQLite3.int64): SQLite3.int64;

  /** /data/input/sqlite3.h#L6509 */
  export declare function soft_heap_limit(N: number): void;

  /** /data/input/sqlite3.h#L6581 */
  export declare function table_column_metadata(db: Pointer<SQLite3.$sqlite3>, zDbName: Pointer<number>, zTableName: Pointer<number>, zColumnName: Pointer<number>, pzDataType: Pointer<Pointer<number>>, pzCollSeq: Pointer<Pointer<number>>, pNotNull: Pointer<number>, pPrimaryKey: Pointer<number>, pAutoinc: Pointer<number>): number;

  /** /data/input/sqlite3.h#L6637 */
  export declare function load_extension(db: Pointer<SQLite3.$sqlite3>, zFile: Pointer<number>, zProc: Pointer<number>, pzErrMsg: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L6669 */
  export declare function enable_load_extension(db: Pointer<SQLite3.$sqlite3>, onoff: number): number;

  /** /data/input/sqlite3.h#L6707 */
  export declare function auto_extension(xEntryPoint: FnPointer): number;

  /** /data/input/sqlite3.h#L6719 */
  export declare function cancel_auto_extension(xEntryPoint: FnPointer): number;

  /** /data/input/sqlite3.h#L6727 */
  export declare function reset_auto_extension(): void;

  /** /data/input/sqlite3.h#L6999 */
  export declare function create_module(db: Pointer<SQLite3.$sqlite3>, zName: Pointer<number>, p: Pointer<SQLite3.module>, pClientData: Pointer<void>): number;

  /** /data/input/sqlite3.h#L7005 */
  export declare function create_module_v2(db: Pointer<SQLite3.$sqlite3>, zName: Pointer<number>, p: Pointer<SQLite3.module>, pClientData: Pointer<void>, xDestroy: FnPointer): number;

  /** /data/input/sqlite3.h#L7025 */
  export declare function drop_modules(db: Pointer<SQLite3.$sqlite3>, azKeep: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L7085 */
  export declare function declare_vtab(_0: Pointer<SQLite3.$sqlite3>, zSQL: Pointer<number>): number;

  /** /data/input/sqlite3.h#L7104 */
  export declare function overload_function(_0: Pointer<SQLite3.$sqlite3>, zFuncName: Pointer<number>, nArg: number): number;

  /** /data/input/sqlite3.h#L7213 */
  export declare function blob_open(_0: Pointer<SQLite3.$sqlite3>, zDb: Pointer<number>, zTable: Pointer<number>, zColumn: Pointer<number>, iRow: SQLite3.int64, flags: number, ppBlob: Pointer<Pointer<SQLite3.blob>>): number;

  /** /data/input/sqlite3.h#L7246 */
  export declare function blob_reopen(_0: Pointer<SQLite3.blob>, _1: SQLite3.int64): number;

  /** /data/input/sqlite3.h#L7269 */
  export declare function blob_close(_0: Pointer<SQLite3.blob>): number;

  /** /data/input/sqlite3.h#L7285 */
  export declare function blob_bytes(_0: Pointer<SQLite3.blob>): number;

  /** /data/input/sqlite3.h#L7314 */
  export declare function blob_read(_0: Pointer<SQLite3.blob>, Z: Pointer<void>, N: number, iOffset: number): number;

  /** /data/input/sqlite3.h#L7356 */
  export declare function blob_write(_0: Pointer<SQLite3.blob>, z: Pointer<void>, n: number, iOffset: number): number;

  /** /data/input/sqlite3.h#L7387 */
  export declare function vfs_find(zVfsName: Pointer<number>): Pointer<SQLite3.vfs>;

  /** /data/input/sqlite3.h#L7388 */
  export declare function vfs_register(_0: Pointer<SQLite3.vfs>, makeDflt: number): number;

  /** /data/input/sqlite3.h#L7389 */
  export declare function vfs_unregister(_0: Pointer<SQLite3.vfs>): number;

  /** /data/input/sqlite3.h#L7505 */
  export declare function mutex_alloc(_0: number): Pointer<SQLite3.mutex>;

  /** /data/input/sqlite3.h#L7506 */
  export declare function mutex_free(_0: Pointer<SQLite3.mutex>): void;

  /** /data/input/sqlite3.h#L7507 */
  export declare function mutex_enter(_0: Pointer<SQLite3.mutex>): void;

  /** /data/input/sqlite3.h#L7508 */
  export declare function mutex_try(_0: Pointer<SQLite3.mutex>): number;

  /** /data/input/sqlite3.h#L7509 */
  export declare function mutex_leave(_0: Pointer<SQLite3.mutex>): void;

  /** /data/input/sqlite3.h#L7664 */
  export declare function db_mutex(_0: Pointer<SQLite3.$sqlite3>): Pointer<SQLite3.mutex>;

  /** /data/input/sqlite3.h#L7707 */
  export declare function file_control(_0: Pointer<SQLite3.$sqlite3>, zDbName: Pointer<number>, op: number, _3: Pointer<void>): number;

  /** /data/input/sqlite3.h#L7726 */
  export declare function test_control(op: number): number;

  /** /data/input/sqlite3.h#L7817 */
  export declare function keyword_count(): number;

  /** /data/input/sqlite3.h#L7818 */
  export declare function keyword_name(_0: number, _1: Pointer<Pointer<number>>, _2: Pointer<number>): number;

  /** /data/input/sqlite3.h#L7819 */
  export declare function keyword_check(_0: Pointer<number>, _1: number): number;

  /** /data/input/sqlite3.h#L7864 */
  export declare function str_new(_0: Pointer<SQLite3.$sqlite3>): Pointer<SQLite3.str>;

  /** /data/input/sqlite3.h#L7879 */
  export declare function str_finish(_0: Pointer<SQLite3.str>): Pointer<number>;

  /** /data/input/sqlite3.h#L7913 */
  export declare function str_appendf(_0: Pointer<SQLite3.str>, zFormat: Pointer<number>): void;

  /** /data/input/sqlite3.h#L7914 */
  export declare function str_vappendf(_0: Pointer<SQLite3.str>, zFormat: Pointer<number>, _2: SQLite3.$va_list): void;

  /** /data/input/sqlite3.h#L7915 */
  export declare function str_append(_0: Pointer<SQLite3.str>, zIn: Pointer<number>, N: number): void;

  /** /data/input/sqlite3.h#L7916 */
  export declare function str_appendall(_0: Pointer<SQLite3.str>, zIn: Pointer<number>): void;

  /** /data/input/sqlite3.h#L7917 */
  export declare function str_appendchar(_0: Pointer<SQLite3.str>, N: number, C: number): void;

  /** /data/input/sqlite3.h#L7918 */
  export declare function str_reset(_0: Pointer<SQLite3.str>): void;

  /** /data/input/sqlite3.h#L7949 */
  export declare function str_errcode(_0: Pointer<SQLite3.str>): number;

  /** /data/input/sqlite3.h#L7950 */
  export declare function str_length(_0: Pointer<SQLite3.str>): number;

  /** /data/input/sqlite3.h#L7951 */
  export declare function str_value(_0: Pointer<SQLite3.str>): Pointer<number>;

  /** /data/input/sqlite3.h#L7979 */
  export declare function status(op: number, pCurrent: Pointer<number>, pHighwater: Pointer<number>, resetFlag: number): number;

  /** /data/input/sqlite3.h#L7980 */
  export declare function status64(op: number, pCurrent: Pointer<SQLite3.int64>, pHighwater: Pointer<SQLite3.int64>, resetFlag: number): number;

  /** /data/input/sqlite3.h#L8089 */
  export declare function db_status(_0: Pointer<SQLite3.$sqlite3>, op: number, pCur: Pointer<number>, pHiwtr: Pointer<number>, resetFlg: number): number;

  /** /data/input/sqlite3.h#L8242 */
  export declare function stmt_status(_0: Pointer<SQLite3.stmt>, op: number, resetFlg: number): number;

  /** /data/input/sqlite3.h#L8732 */
  export declare function backup_init(pDest: Pointer<SQLite3.$sqlite3>, zDestName: Pointer<number>, pSource: Pointer<SQLite3.$sqlite3>, zSourceName: Pointer<number>): Pointer<SQLite3.backup>;

  /** /data/input/sqlite3.h#L8738 */
  export declare function backup_step(p: Pointer<SQLite3.backup>, nPage: number): number;

  /** /data/input/sqlite3.h#L8739 */
  export declare function backup_finish(p: Pointer<SQLite3.backup>): number;

  /** /data/input/sqlite3.h#L8740 */
  export declare function backup_remaining(p: Pointer<SQLite3.backup>): number;

  /** /data/input/sqlite3.h#L8741 */
  export declare function backup_pagecount(p: Pointer<SQLite3.backup>): number;

  /** /data/input/sqlite3.h#L8858 */
  export declare function unlock_notify(pBlocked: Pointer<SQLite3.$sqlite3>, xNotify: FnPointer, pNotifyArg: Pointer<void>): number;

  /** /data/input/sqlite3.h#L8873 */
  export declare function stricmp(_0: Pointer<number>, _1: Pointer<number>): number;

  /** /data/input/sqlite3.h#L8874 */
  export declare function strnicmp(_0: Pointer<number>, _1: Pointer<number>, _2: number): number;

  /** /data/input/sqlite3.h#L8891 */
  export declare function strglob(zGlob: Pointer<number>, zStr: Pointer<number>): number;

  /** /data/input/sqlite3.h#L8914 */
  export declare function strlike(zGlob: Pointer<number>, zStr: Pointer<number>, cEsc: number): number;

  /** /data/input/sqlite3.h#L8937 */
  export declare function log(iErrCode: number, zFormat: Pointer<number>): void;

  /** /data/input/sqlite3.h#L8973 */
  export declare function wal_hook(_0: Pointer<SQLite3.$sqlite3>, _1: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L9008 */
  export declare function wal_autocheckpoint(db: Pointer<SQLite3.$sqlite3>, N: number): number;

  /** /data/input/sqlite3.h#L9030 */
  export declare function wal_checkpoint(db: Pointer<SQLite3.$sqlite3>, zDb: Pointer<number>): number;

  /** /data/input/sqlite3.h#L9124 */
  export declare function wal_checkpoint_v2(db: Pointer<SQLite3.$sqlite3>, zDb: Pointer<number>, eMode: number, pnLog: Pointer<number>, pnCkpt: Pointer<number>): number;

  /** /data/input/sqlite3.h#L9164 */
  export declare function vtab_config(_0: Pointer<SQLite3.$sqlite3>, op: number): number;

  /** /data/input/sqlite3.h#L9242 */
  export declare function vtab_on_conflict(_0: Pointer<SQLite3.$sqlite3>): number;

  /** /data/input/sqlite3.h#L9268 */
  export declare function vtab_nochange(_0: Pointer<SQLite3.context>): number;

  /** /data/input/sqlite3.h#L9283 */
  export declare function vtab_collation(_0: Pointer<SQLite3.index_info>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L9437 */
  export declare function db_cacheflush(_0: Pointer<SQLite3.$sqlite3>): number;

  /** /data/input/sqlite3.h#L9553 */
  export declare function system_errno(_0: Pointer<SQLite3.$sqlite3>): number;

  /** /data/input/sqlite3.h#L9920 */
  export declare function rtree_geometry_callback(db: Pointer<SQLite3.$sqlite3>, zGeom: Pointer<number>, xGeom: FnPointer, pContext: Pointer<void>): number;

  /** /data/input/sqlite3.h#L9946 */
  export declare function rtree_query_callback(db: Pointer<SQLite3.$sqlite3>, zQueryFunc: Pointer<number>, xQueryFunc: FnPointer, pContext: Pointer<void>, xDestructor: FnPointer): number;

  export declare function $$close(): void;
}
