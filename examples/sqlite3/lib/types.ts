// deno-lint-ignore-file
import { Pointer, FnPointer, StructPointer } from "./safe-ffi.ts";

export namespace sqlite3 {
  /** /usr/lib/clang/14.0.6/include/stdarg.h#L14 */
  export type va_list = bigint;

  /** /usr/lib/clang/14.0.6/include/stdarg.h#L32 */
  export type __gnuc_va_list = bigint;

  /** /data/input/sqlite3.h#L249 */
  export type sqlite3 = StructPointer<"sqlite3">;

  /** /data/input/sqlite3.h#L278 */
  export type sqlite_int64 = bigint;

  /** /data/input/sqlite3.h#L279 */
  export type sqlite_uint64 = bigint;

  /** /data/input/sqlite3.h#L281 */
  export type sqlite3_int64 = sqlite3.sqlite_int64;

  /** /data/input/sqlite3.h#L282 */
  export type sqlite3_uint64 = sqlite3.sqlite_uint64;

  /** /data/input/sqlite3.h#L338 */
  export type sqlite3_callback = FnPointer<"sqlite3_callback">;

  /** /data/input/sqlite3.h#L684 */
  export type sqlite3_file = StructPointer<"sqlite3_file">;

  /** /data/input/sqlite3.h#L783 */
  export type sqlite3_io_methods = StructPointer<"sqlite3_io_methods">;

  /** /data/input/sqlite3.h#L1187 */
  export type sqlite3_mutex = StructPointer<"sqlite3_mutex">;

  /** /data/input/sqlite3.h#L1197 */
  export type sqlite3_api_routines = StructPointer<"sqlite3_api_routines">;

  /** /data/input/sqlite3.h#L1368 */
  export type sqlite3_vfs = StructPointer<"sqlite3_vfs">;

  /** /data/input/sqlite3.h#L1369 */
  export type sqlite3_syscall_ptr = FnPointer<"sqlite3_syscall_ptr">;

  /** /data/input/sqlite3.h#L1666 */
  export type sqlite3_mem_methods = StructPointer<"sqlite3_mem_methods">;

  /** /data/input/sqlite3.h#L3797 */
  export type sqlite3_stmt = StructPointer<"sqlite3_stmt">;

  /** /data/input/sqlite3.h#L4245 */
  export type sqlite3_value = StructPointer<"sqlite3_value">;

  /** /data/input/sqlite3.h#L4259 */
  export type sqlite3_context = StructPointer<"sqlite3_context">;

  /** /data/input/sqlite3.h#L5622 */
  export type sqlite3_destructor_type = FnPointer<"sqlite3_destructor_type">;

  /** /data/input/sqlite3.h#L6741 */
  export type sqlite3_vtab = StructPointer<"sqlite3_vtab">;

  /** /data/input/sqlite3.h#L6742 */
  export type sqlite3_index_info = StructPointer<"sqlite3_index_info">;

  /** /data/input/sqlite3.h#L6743 */
  export type sqlite3_vtab_cursor = StructPointer<"sqlite3_vtab_cursor">;

  /** /data/input/sqlite3.h#L6744 */
  export type sqlite3_module = StructPointer<"sqlite3_module">;

  /** /data/input/sqlite3.h#L7128 */
  export type sqlite3_blob = StructPointer<"sqlite3_blob">;

  /** /data/input/sqlite3.h#L7576 */
  export type sqlite3_mutex_methods = StructPointer<"sqlite3_mutex_methods">;

  /** /data/input/sqlite3.h#L7837 */
  export type sqlite3_str = StructPointer<"sqlite3_str">;

  /** /data/input/sqlite3.h#L8318 */
  export type sqlite3_pcache = StructPointer<"sqlite3_pcache">;

  /** /data/input/sqlite3.h#L8330 */
  export type sqlite3_pcache_page = StructPointer<"sqlite3_pcache_page">;

  /** /data/input/sqlite3.h#L8495 */
  export type sqlite3_pcache_methods2 = StructPointer<"sqlite3_pcache_methods2">;

  /** /data/input/sqlite3.h#L8518 */
  export type sqlite3_pcache_methods = StructPointer<"sqlite3_pcache_methods">;

  /** /data/input/sqlite3.h#L8544 */
  export type sqlite3_backup = StructPointer<"sqlite3_backup">;

  /** /data/input/sqlite3.h#L9577 */
  export type sqlite3_snapshot = StructPointer<"sqlite3_snapshot">;

  /** /data/input/sqlite3.h#L9902 */
  export type sqlite3_rtree_geometry = StructPointer<"sqlite3_rtree_geometry">;

  /** /data/input/sqlite3.h#L9903 */
  export type sqlite3_rtree_query_info = StructPointer<"sqlite3_rtree_query_info">;

  /** /data/input/sqlite3.h#L9911 */
  export type sqlite3_rtree_dbl = bigint;

  /** /data/input/sqlite3.h#L11697 */
  export type Fts5ExtensionApi = StructPointer<"Fts5ExtensionApi">;

  /** /data/input/sqlite3.h#L11698 */
  export type Fts5Context = StructPointer<"Fts5Context">;

  /** /data/input/sqlite3.h#L11699 */
  export type Fts5PhraseIter = StructPointer<"Fts5PhraseIter">;

  /** /data/input/sqlite3.h#L11701 */
  export type fts5_extension_function = FnPointer<"fts5_extension_function">;

  /** /data/input/sqlite3.h#L12159 */
  export type Fts5Tokenizer = StructPointer<"Fts5Tokenizer">;

  /** /data/input/sqlite3.h#L12160 */
  export type fts5_tokenizer = StructPointer<"fts5_tokenizer">;

  /** /data/input/sqlite3.h#L12196 */
  export type fts5_api = StructPointer<"fts5_api">;



  /** /data/input/sqlite3.h#L163 */
  export declare function sqlite3_libversion(): Pointer<number>;

  /** /data/input/sqlite3.h#L164 */
  export declare function sqlite3_sourceid(): Pointer<number>;

  /** /data/input/sqlite3.h#L165 */
  export declare function sqlite3_libversion_number(): number;

  /** /data/input/sqlite3.h#L190 */
  export declare function sqlite3_compileoption_used(zOptName: Pointer<number>): number;

  /** /data/input/sqlite3.h#L191 */
  export declare function sqlite3_compileoption_get(N: number): Pointer<number>;

  /** /data/input/sqlite3.h#L233 */
  export declare function sqlite3_threadsafe(): number;

  /** /data/input/sqlite3.h#L330 */
  export declare function sqlite3_close(_0: Pointer<sqlite3.sqlite3>): number;

  /** /data/input/sqlite3.h#L331 */
  export declare function sqlite3_close_v2(_0: Pointer<sqlite3.sqlite3>): number;

  /** /data/input/sqlite3.h#L402 */
  export declare function sqlite3_exec(_0: Pointer<sqlite3.sqlite3>, sql: Pointer<number>, callback: FnPointer, _3: Pointer<void>, errmsg: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L1546 */
  export declare function sqlite3_initialize(): number;

  /** /data/input/sqlite3.h#L1547 */
  export declare function sqlite3_shutdown(): number;

  /** /data/input/sqlite3.h#L1548 */
  export declare function sqlite3_os_init(): number;

  /** /data/input/sqlite3.h#L1549 */
  export declare function sqlite3_os_end(): number;

  /** /data/input/sqlite3.h#L1582 */
  export declare function sqlite3_config(_0: number): number;

  /** /data/input/sqlite3.h#L1601 */
  export declare function sqlite3_db_config(_0: Pointer<sqlite3.sqlite3>, op: number): number;

  /** /data/input/sqlite3.h#L2358 */
  export declare function sqlite3_extended_result_codes(_0: Pointer<sqlite3.sqlite3>, onoff: number): number;

  /** /data/input/sqlite3.h#L2420 */
  export declare function sqlite3_last_insert_rowid(_0: Pointer<sqlite3.sqlite3>): sqlite3.sqlite3_int64;

  /** /data/input/sqlite3.h#L2430 */
  export declare function sqlite3_set_last_insert_rowid(_0: Pointer<sqlite3.sqlite3>, _1: sqlite3.sqlite3_int64): void;

  /** /data/input/sqlite3.h#L2488 */
  export declare function sqlite3_changes(_0: Pointer<sqlite3.sqlite3>): number;

  /** /data/input/sqlite3.h#L2525 */
  export declare function sqlite3_total_changes(_0: Pointer<sqlite3.sqlite3>): number;

  /** /data/input/sqlite3.h#L2562 */
  export declare function sqlite3_interrupt(_0: Pointer<sqlite3.sqlite3>): void;

  /** /data/input/sqlite3.h#L2597 */
  export declare function sqlite3_complete(sql: Pointer<number>): number;

  /** /data/input/sqlite3.h#L2598 */
  export declare function sqlite3_complete16(sql: Pointer<void>): number;

  /** /data/input/sqlite3.h#L2659 */
  export declare function sqlite3_busy_handler(_0: Pointer<sqlite3.sqlite3>, _1: FnPointer, _2: Pointer<void>): number;

  /** /data/input/sqlite3.h#L2682 */
  export declare function sqlite3_busy_timeout(_0: Pointer<sqlite3.sqlite3>, ms: number): number;

  /** /data/input/sqlite3.h#L2757 */
  export declare function sqlite3_get_table(db: Pointer<sqlite3.sqlite3>, zSql: Pointer<number>, pazResult: Pointer<Pointer<Pointer<number>>>, pnRow: Pointer<number>, pnColumn: Pointer<number>, pzErrmsg: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L2765 */
  export declare function sqlite3_free_table(result: Pointer<Pointer<number>>): void;

  /** /data/input/sqlite3.h#L2807 */
  export declare function sqlite3_mprintf(_0: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L2808 */
  export declare function sqlite3_vmprintf(_0: Pointer<number>, _1: sqlite3.va_list): Pointer<number>;

  /** /data/input/sqlite3.h#L2809 */
  export declare function sqlite3_snprintf(_0: number, _1: Pointer<number>, _2: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L2810 */
  export declare function sqlite3_vsnprintf(_0: number, _1: Pointer<number>, _2: Pointer<number>, _3: sqlite3.va_list): Pointer<number>;

  /** /data/input/sqlite3.h#L2887 */
  export declare function sqlite3_malloc(_0: number): Pointer<void>;

  /** /data/input/sqlite3.h#L2888 */
  export declare function sqlite3_malloc64(_0: sqlite3.sqlite3_uint64): Pointer<void>;

  /** /data/input/sqlite3.h#L2889 */
  export declare function sqlite3_realloc(_0: Pointer<void>, _1: number): Pointer<void>;

  /** /data/input/sqlite3.h#L2890 */
  export declare function sqlite3_realloc64(_0: Pointer<void>, _1: sqlite3.sqlite3_uint64): Pointer<void>;

  /** /data/input/sqlite3.h#L2891 */
  export declare function sqlite3_free(_0: Pointer<void>): void;

  /** /data/input/sqlite3.h#L2892 */
  export declare function sqlite3_msize(_0: Pointer<void>): sqlite3.sqlite3_uint64;

  /** /data/input/sqlite3.h#L2917 */
  export declare function sqlite3_memory_used(): sqlite3.sqlite3_int64;

  /** /data/input/sqlite3.h#L2918 */
  export declare function sqlite3_memory_highwater(resetFlag: number): sqlite3.sqlite3_int64;

  /** /data/input/sqlite3.h#L2941 */
  export declare function sqlite3_randomness(N: number, P: Pointer<void>): void;

  /** /data/input/sqlite3.h#L3032 */
  export declare function sqlite3_set_authorizer(_0: Pointer<sqlite3.sqlite3>, xAuth: FnPointer, pUserData: Pointer<void>): number;

  /** /data/input/sqlite3.h#L3140 */
  export declare function sqlite3_trace(_0: Pointer<sqlite3.sqlite3>, xTrace: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L3142 */
  export declare function sqlite3_profile(_0: Pointer<sqlite3.sqlite3>, xProfile: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L3231 */
  export declare function sqlite3_trace_v2(_0: Pointer<sqlite3.sqlite3>, uMask: number, xCallback: FnPointer, pCtx: Pointer<void>): number;

  /** /data/input/sqlite3.h#L3270 */
  export declare function sqlite3_progress_handler(_0: Pointer<sqlite3.sqlite3>, _1: number, _2: FnPointer, _3: Pointer<void>): void;

  /** /data/input/sqlite3.h#L3525 */
  export declare function sqlite3_open(filename: Pointer<number>, ppDb: Pointer<Pointer<sqlite3.sqlite3>>): number;

  /** /data/input/sqlite3.h#L3529 */
  export declare function sqlite3_open16(filename: Pointer<void>, ppDb: Pointer<Pointer<sqlite3.sqlite3>>): number;

  /** /data/input/sqlite3.h#L3533 */
  export declare function sqlite3_open_v2(filename: Pointer<number>, ppDb: Pointer<Pointer<sqlite3.sqlite3>>, flags: number, zVfs: Pointer<number>): number;

  /** /data/input/sqlite3.h#L3606 */
  export declare function sqlite3_uri_parameter(zFilename: Pointer<number>, zParam: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L3607 */
  export declare function sqlite3_uri_boolean(zFile: Pointer<number>, zParam: Pointer<number>, bDefault: number): number;

  /** /data/input/sqlite3.h#L3608 */
  export declare function sqlite3_uri_int64(_0: Pointer<number>, _1: Pointer<number>, _2: sqlite3.sqlite3_int64): sqlite3.sqlite3_int64;

  /** /data/input/sqlite3.h#L3609 */
  export declare function sqlite3_uri_key(zFilename: Pointer<number>, N: number): Pointer<number>;

  /** /data/input/sqlite3.h#L3638 */
  export declare function sqlite3_filename_database(_0: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L3639 */
  export declare function sqlite3_filename_journal(_0: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L3640 */
  export declare function sqlite3_filename_wal(_0: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L3659 */
  export declare function sqlite3_database_file_object(_0: Pointer<number>): Pointer<sqlite3.sqlite3_file>;

  /** /data/input/sqlite3.h#L3706 */
  export declare function sqlite3_create_filename(zDatabase: Pointer<number>, zJournal: Pointer<number>, zWal: Pointer<number>, nParam: number, azParam: Pointer<Pointer<number>>): Pointer<number>;

  /** /data/input/sqlite3.h#L3713 */
  export declare function sqlite3_free_filename(_0: Pointer<number>): void;

  /** /data/input/sqlite3.h#L3767 */
  export declare function sqlite3_errcode(db: Pointer<sqlite3.sqlite3>): number;

  /** /data/input/sqlite3.h#L3768 */
  export declare function sqlite3_extended_errcode(db: Pointer<sqlite3.sqlite3>): number;

  /** /data/input/sqlite3.h#L3769 */
  export declare function sqlite3_errmsg(_0: Pointer<sqlite3.sqlite3>): Pointer<number>;

  /** /data/input/sqlite3.h#L3770 */
  export declare function sqlite3_errmsg16(_0: Pointer<sqlite3.sqlite3>): Pointer<void>;

  /** /data/input/sqlite3.h#L3771 */
  export declare function sqlite3_errstr(_0: number): Pointer<number>;

  /** /data/input/sqlite3.h#L3839 */
  export declare function sqlite3_limit(_0: Pointer<sqlite3.sqlite3>, id: number, newVal: number): number;

  /** /data/input/sqlite3.h#L4049 */
  export declare function sqlite3_prepare(db: Pointer<sqlite3.sqlite3>, zSql: Pointer<number>, nByte: number, ppStmt: Pointer<Pointer<sqlite3.sqlite3_stmt>>, pzTail: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L4056 */
  export declare function sqlite3_prepare_v2(db: Pointer<sqlite3.sqlite3>, zSql: Pointer<number>, nByte: number, ppStmt: Pointer<Pointer<sqlite3.sqlite3_stmt>>, pzTail: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L4063 */
  export declare function sqlite3_prepare_v3(db: Pointer<sqlite3.sqlite3>, zSql: Pointer<number>, nByte: number, prepFlags: number, ppStmt: Pointer<Pointer<sqlite3.sqlite3_stmt>>, pzTail: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L4071 */
  export declare function sqlite3_prepare16(db: Pointer<sqlite3.sqlite3>, zSql: Pointer<void>, nByte: number, ppStmt: Pointer<Pointer<sqlite3.sqlite3_stmt>>, pzTail: Pointer<Pointer<void>>): number;

  /** /data/input/sqlite3.h#L4078 */
  export declare function sqlite3_prepare16_v2(db: Pointer<sqlite3.sqlite3>, zSql: Pointer<void>, nByte: number, ppStmt: Pointer<Pointer<sqlite3.sqlite3_stmt>>, pzTail: Pointer<Pointer<void>>): number;

  /** /data/input/sqlite3.h#L4085 */
  export declare function sqlite3_prepare16_v3(db: Pointer<sqlite3.sqlite3>, zSql: Pointer<void>, nByte: number, prepFlags: number, ppStmt: Pointer<Pointer<sqlite3.sqlite3_stmt>>, pzTail: Pointer<Pointer<void>>): number;

  /** /data/input/sqlite3.h#L4132 */
  export declare function sqlite3_sql(pStmt: Pointer<sqlite3.sqlite3_stmt>): Pointer<number>;

  /** /data/input/sqlite3.h#L4133 */
  export declare function sqlite3_expanded_sql(pStmt: Pointer<sqlite3.sqlite3_stmt>): Pointer<number>;

  /** /data/input/sqlite3.h#L4170 */
  export declare function sqlite3_stmt_readonly(pStmt: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L4182 */
  export declare function sqlite3_stmt_isexplain(pStmt: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L4203 */
  export declare function sqlite3_stmt_busy(_0: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L4397 */
  export declare function sqlite3_bind_blob(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, _2: Pointer<void>, n: number, _4: FnPointer): number;

  /** /data/input/sqlite3.h#L4398 */
  export declare function sqlite3_bind_blob64(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, _2: Pointer<void>, _3: sqlite3.sqlite3_uint64, _4: FnPointer): number;

  /** /data/input/sqlite3.h#L4400 */
  export declare function sqlite3_bind_double(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, _2: bigint): number;

  /** /data/input/sqlite3.h#L4401 */
  export declare function sqlite3_bind_int(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, _2: number): number;

  /** /data/input/sqlite3.h#L4402 */
  export declare function sqlite3_bind_int64(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, _2: sqlite3.sqlite3_int64): number;

  /** /data/input/sqlite3.h#L4403 */
  export declare function sqlite3_bind_null(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number): number;

  /** /data/input/sqlite3.h#L4404 */
  export declare function sqlite3_bind_text(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, _2: Pointer<number>, _3: number, _4: FnPointer): number;

  /** /data/input/sqlite3.h#L4405 */
  export declare function sqlite3_bind_text16(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, _2: Pointer<void>, _3: number, _4: FnPointer): number;

  /** /data/input/sqlite3.h#L4406 */
  export declare function sqlite3_bind_text64(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, _2: Pointer<number>, _3: sqlite3.sqlite3_uint64, _4: FnPointer, encoding: number): number;

  /** /data/input/sqlite3.h#L4408 */
  export declare function sqlite3_bind_value(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, _2: Pointer<sqlite3.sqlite3_value>): number;

  /** /data/input/sqlite3.h#L4409 */
  export declare function sqlite3_bind_pointer(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, _2: Pointer<void>, _3: Pointer<number>, _4: FnPointer): number;

  /** /data/input/sqlite3.h#L4410 */
  export declare function sqlite3_bind_zeroblob(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, n: number): number;

  /** /data/input/sqlite3.h#L4411 */
  export declare function sqlite3_bind_zeroblob64(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number, _2: sqlite3.sqlite3_uint64): number;

  /** /data/input/sqlite3.h#L4432 */
  export declare function sqlite3_bind_parameter_count(_0: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L4460 */
  export declare function sqlite3_bind_parameter_name(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4478 */
  export declare function sqlite3_bind_parameter_index(_0: Pointer<sqlite3.sqlite3_stmt>, zName: Pointer<number>): number;

  /** /data/input/sqlite3.h#L4488 */
  export declare function sqlite3_clear_bindings(_0: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L4504 */
  export declare function sqlite3_column_count(pStmt: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L4533 */
  export declare function sqlite3_column_name(_0: Pointer<sqlite3.sqlite3_stmt>, N: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4534 */
  export declare function sqlite3_column_name16(_0: Pointer<sqlite3.sqlite3_stmt>, N: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4578 */
  export declare function sqlite3_column_database_name(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4579 */
  export declare function sqlite3_column_database_name16(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4580 */
  export declare function sqlite3_column_table_name(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4581 */
  export declare function sqlite3_column_table_name16(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4582 */
  export declare function sqlite3_column_origin_name(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4583 */
  export declare function sqlite3_column_origin_name16(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4615 */
  export declare function sqlite3_column_decltype(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4616 */
  export declare function sqlite3_column_decltype16(_0: Pointer<sqlite3.sqlite3_stmt>, _1: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4700 */
  export declare function sqlite3_step(_0: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L4721 */
  export declare function sqlite3_data_count(pStmt: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L4964 */
  export declare function sqlite3_column_blob(_0: Pointer<sqlite3.sqlite3_stmt>, iCol: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4965 */
  export declare function sqlite3_column_double(_0: Pointer<sqlite3.sqlite3_stmt>, iCol: number): bigint;

  /** /data/input/sqlite3.h#L4966 */
  export declare function sqlite3_column_int(_0: Pointer<sqlite3.sqlite3_stmt>, iCol: number): number;

  /** /data/input/sqlite3.h#L4967 */
  export declare function sqlite3_column_int64(_0: Pointer<sqlite3.sqlite3_stmt>, iCol: number): sqlite3.sqlite3_int64;

  /** /data/input/sqlite3.h#L4968 */
  export declare function sqlite3_column_text(_0: Pointer<sqlite3.sqlite3_stmt>, iCol: number): Pointer<number>;

  /** /data/input/sqlite3.h#L4969 */
  export declare function sqlite3_column_text16(_0: Pointer<sqlite3.sqlite3_stmt>, iCol: number): Pointer<void>;

  /** /data/input/sqlite3.h#L4970 */
  export declare function sqlite3_column_value(_0: Pointer<sqlite3.sqlite3_stmt>, iCol: number): Pointer<sqlite3.sqlite3_value>;

  /** /data/input/sqlite3.h#L4971 */
  export declare function sqlite3_column_bytes(_0: Pointer<sqlite3.sqlite3_stmt>, iCol: number): number;

  /** /data/input/sqlite3.h#L4972 */
  export declare function sqlite3_column_bytes16(_0: Pointer<sqlite3.sqlite3_stmt>, iCol: number): number;

  /** /data/input/sqlite3.h#L4973 */
  export declare function sqlite3_column_type(_0: Pointer<sqlite3.sqlite3_stmt>, iCol: number): number;

  /** /data/input/sqlite3.h#L5001 */
  export declare function sqlite3_finalize(pStmt: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L5028 */
  export declare function sqlite3_reset(pStmt: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L5155 */
  export declare function sqlite3_create_function(db: Pointer<sqlite3.sqlite3>, zFunctionName: Pointer<number>, nArg: number, eTextRep: number, pApp: Pointer<void>, xFunc: FnPointer, xStep: FnPointer, xFinal: FnPointer): number;

  /** /data/input/sqlite3.h#L5165 */
  export declare function sqlite3_create_function16(db: Pointer<sqlite3.sqlite3>, zFunctionName: Pointer<void>, nArg: number, eTextRep: number, pApp: Pointer<void>, xFunc: FnPointer, xStep: FnPointer, xFinal: FnPointer): number;

  /** /data/input/sqlite3.h#L5175 */
  export declare function sqlite3_create_function_v2(db: Pointer<sqlite3.sqlite3>, zFunctionName: Pointer<number>, nArg: number, eTextRep: number, pApp: Pointer<void>, xFunc: FnPointer, xStep: FnPointer, xFinal: FnPointer, xDestroy: FnPointer): number;

  /** /data/input/sqlite3.h#L5186 */
  export declare function sqlite3_create_window_function(db: Pointer<sqlite3.sqlite3>, zFunctionName: Pointer<number>, nArg: number, eTextRep: number, pApp: Pointer<void>, xStep: FnPointer, xFinal: FnPointer, xValue: FnPointer, xInverse: FnPointer, xDestroy: FnPointer): number;

  /** /data/input/sqlite3.h#L5293 */
  export declare function sqlite3_aggregate_count(_0: Pointer<sqlite3.sqlite3_context>): number;

  /** /data/input/sqlite3.h#L5294 */
  export declare function sqlite3_expired(_0: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L5295 */
  export declare function sqlite3_transfer_bindings(_0: Pointer<sqlite3.sqlite3_stmt>, _1: Pointer<sqlite3.sqlite3_stmt>): number;

  /** /data/input/sqlite3.h#L5296 */
  export declare function sqlite3_global_recover(): number;

  /** /data/input/sqlite3.h#L5297 */
  export declare function sqlite3_thread_cleanup(): void;

  /** /data/input/sqlite3.h#L5298 */
  export declare function sqlite3_memory_alarm(_0: FnPointer, _1: Pointer<void>, _2: sqlite3.sqlite3_int64): number;

  /** /data/input/sqlite3.h#L5430 */
  export declare function sqlite3_value_blob(_0: Pointer<sqlite3.sqlite3_value>): Pointer<void>;

  /** /data/input/sqlite3.h#L5431 */
  export declare function sqlite3_value_double(_0: Pointer<sqlite3.sqlite3_value>): bigint;

  /** /data/input/sqlite3.h#L5432 */
  export declare function sqlite3_value_int(_0: Pointer<sqlite3.sqlite3_value>): number;

  /** /data/input/sqlite3.h#L5433 */
  export declare function sqlite3_value_int64(_0: Pointer<sqlite3.sqlite3_value>): sqlite3.sqlite3_int64;

  /** /data/input/sqlite3.h#L5434 */
  export declare function sqlite3_value_pointer(_0: Pointer<sqlite3.sqlite3_value>, _1: Pointer<number>): Pointer<void>;

  /** /data/input/sqlite3.h#L5435 */
  export declare function sqlite3_value_text(_0: Pointer<sqlite3.sqlite3_value>): Pointer<number>;

  /** /data/input/sqlite3.h#L5436 */
  export declare function sqlite3_value_text16(_0: Pointer<sqlite3.sqlite3_value>): Pointer<void>;

  /** /data/input/sqlite3.h#L5437 */
  export declare function sqlite3_value_text16le(_0: Pointer<sqlite3.sqlite3_value>): Pointer<void>;

  /** /data/input/sqlite3.h#L5438 */
  export declare function sqlite3_value_text16be(_0: Pointer<sqlite3.sqlite3_value>): Pointer<void>;

  /** /data/input/sqlite3.h#L5439 */
  export declare function sqlite3_value_bytes(_0: Pointer<sqlite3.sqlite3_value>): number;

  /** /data/input/sqlite3.h#L5440 */
  export declare function sqlite3_value_bytes16(_0: Pointer<sqlite3.sqlite3_value>): number;

  /** /data/input/sqlite3.h#L5441 */
  export declare function sqlite3_value_type(_0: Pointer<sqlite3.sqlite3_value>): number;

  /** /data/input/sqlite3.h#L5442 */
  export declare function sqlite3_value_numeric_type(_0: Pointer<sqlite3.sqlite3_value>): number;

  /** /data/input/sqlite3.h#L5443 */
  export declare function sqlite3_value_nochange(_0: Pointer<sqlite3.sqlite3_value>): number;

  /** /data/input/sqlite3.h#L5444 */
  export declare function sqlite3_value_frombind(_0: Pointer<sqlite3.sqlite3_value>): number;

  /** /data/input/sqlite3.h#L5456 */
  export declare function sqlite3_value_subtype(_0: Pointer<sqlite3.sqlite3_value>): number;

  /** /data/input/sqlite3.h#L5472 */
  export declare function sqlite3_value_dup(_0: Pointer<sqlite3.sqlite3_value>): Pointer<sqlite3.sqlite3_value>;

  /** /data/input/sqlite3.h#L5473 */
  export declare function sqlite3_value_free(_0: Pointer<sqlite3.sqlite3_value>): void;

  /** /data/input/sqlite3.h#L5518 */
  export declare function sqlite3_aggregate_context(_0: Pointer<sqlite3.sqlite3_context>, nBytes: number): Pointer<void>;

  /** /data/input/sqlite3.h#L5533 */
  export declare function sqlite3_user_data(_0: Pointer<sqlite3.sqlite3_context>): Pointer<void>;

  /** /data/input/sqlite3.h#L5545 */
  export declare function sqlite3_context_db_handle(_0: Pointer<sqlite3.sqlite3_context>): Pointer<sqlite3.sqlite3>;

  /** /data/input/sqlite3.h#L5604 */
  export declare function sqlite3_get_auxdata(_0: Pointer<sqlite3.sqlite3_context>, N: number): Pointer<void>;

  /** /data/input/sqlite3.h#L5605 */
  export declare function sqlite3_set_auxdata(_0: Pointer<sqlite3.sqlite3_context>, N: number, _2: Pointer<void>, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5772 */
  export declare function sqlite3_result_blob(_0: Pointer<sqlite3.sqlite3_context>, _1: Pointer<void>, _2: number, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5773 */
  export declare function sqlite3_result_blob64(_0: Pointer<sqlite3.sqlite3_context>, _1: Pointer<void>, _2: sqlite3.sqlite3_uint64, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5775 */
  export declare function sqlite3_result_double(_0: Pointer<sqlite3.sqlite3_context>, _1: bigint): void;

  /** /data/input/sqlite3.h#L5776 */
  export declare function sqlite3_result_error(_0: Pointer<sqlite3.sqlite3_context>, _1: Pointer<number>, _2: number): void;

  /** /data/input/sqlite3.h#L5777 */
  export declare function sqlite3_result_error16(_0: Pointer<sqlite3.sqlite3_context>, _1: Pointer<void>, _2: number): void;

  /** /data/input/sqlite3.h#L5778 */
  export declare function sqlite3_result_error_toobig(_0: Pointer<sqlite3.sqlite3_context>): void;

  /** /data/input/sqlite3.h#L5779 */
  export declare function sqlite3_result_error_nomem(_0: Pointer<sqlite3.sqlite3_context>): void;

  /** /data/input/sqlite3.h#L5780 */
  export declare function sqlite3_result_error_code(_0: Pointer<sqlite3.sqlite3_context>, _1: number): void;

  /** /data/input/sqlite3.h#L5781 */
  export declare function sqlite3_result_int(_0: Pointer<sqlite3.sqlite3_context>, _1: number): void;

  /** /data/input/sqlite3.h#L5782 */
  export declare function sqlite3_result_int64(_0: Pointer<sqlite3.sqlite3_context>, _1: sqlite3.sqlite3_int64): void;

  /** /data/input/sqlite3.h#L5783 */
  export declare function sqlite3_result_null(_0: Pointer<sqlite3.sqlite3_context>): void;

  /** /data/input/sqlite3.h#L5784 */
  export declare function sqlite3_result_text(_0: Pointer<sqlite3.sqlite3_context>, _1: Pointer<number>, _2: number, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5785 */
  export declare function sqlite3_result_text64(_0: Pointer<sqlite3.sqlite3_context>, _1: Pointer<number>, _2: sqlite3.sqlite3_uint64, _3: FnPointer, encoding: number): void;

  /** /data/input/sqlite3.h#L5787 */
  export declare function sqlite3_result_text16(_0: Pointer<sqlite3.sqlite3_context>, _1: Pointer<void>, _2: number, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5788 */
  export declare function sqlite3_result_text16le(_0: Pointer<sqlite3.sqlite3_context>, _1: Pointer<void>, _2: number, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5789 */
  export declare function sqlite3_result_text16be(_0: Pointer<sqlite3.sqlite3_context>, _1: Pointer<void>, _2: number, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5790 */
  export declare function sqlite3_result_value(_0: Pointer<sqlite3.sqlite3_context>, _1: Pointer<sqlite3.sqlite3_value>): void;

  /** /data/input/sqlite3.h#L5791 */
  export declare function sqlite3_result_pointer(_0: Pointer<sqlite3.sqlite3_context>, _1: Pointer<void>, _2: Pointer<number>, _3: FnPointer): void;

  /** /data/input/sqlite3.h#L5792 */
  export declare function sqlite3_result_zeroblob(_0: Pointer<sqlite3.sqlite3_context>, n: number): void;

  /** /data/input/sqlite3.h#L5793 */
  export declare function sqlite3_result_zeroblob64(_0: Pointer<sqlite3.sqlite3_context>, n: sqlite3.sqlite3_uint64): number;

  /** /data/input/sqlite3.h#L5808 */
  export declare function sqlite3_result_subtype(_0: Pointer<sqlite3.sqlite3_context>, _1: number): void;

  /** /data/input/sqlite3.h#L5891 */
  export declare function sqlite3_create_collation(_0: Pointer<sqlite3.sqlite3>, zName: Pointer<number>, eTextRep: number, pArg: Pointer<void>, xCompare: FnPointer): number;

  /** /data/input/sqlite3.h#L5898 */
  export declare function sqlite3_create_collation_v2(_0: Pointer<sqlite3.sqlite3>, zName: Pointer<number>, eTextRep: number, pArg: Pointer<void>, xCompare: FnPointer, xDestroy: FnPointer): number;

  /** /data/input/sqlite3.h#L5906 */
  export declare function sqlite3_create_collation16(_0: Pointer<sqlite3.sqlite3>, zName: Pointer<void>, eTextRep: number, pArg: Pointer<void>, xCompare: FnPointer): number;

  /** /data/input/sqlite3.h#L5941 */
  export declare function sqlite3_collation_needed(_0: Pointer<sqlite3.sqlite3>, _1: Pointer<void>, _2: FnPointer): number;

  /** /data/input/sqlite3.h#L5946 */
  export declare function sqlite3_collation_needed16(_0: Pointer<sqlite3.sqlite3>, _1: Pointer<void>, _2: FnPointer): number;

  /** /data/input/sqlite3.h#L5979 */
  export declare function sqlite3_sleep(_0: number): number;

  /** /data/input/sqlite3.h#L6133 */
  export declare function sqlite3_get_autocommit(_0: Pointer<sqlite3.sqlite3>): number;

  /** /data/input/sqlite3.h#L6146 */
  export declare function sqlite3_db_handle(_0: Pointer<sqlite3.sqlite3_stmt>): Pointer<sqlite3.sqlite3>;

  /** /data/input/sqlite3.h#L6178 */
  export declare function sqlite3_db_filename(db: Pointer<sqlite3.sqlite3>, zDbName: Pointer<number>): Pointer<number>;

  /** /data/input/sqlite3.h#L6188 */
  export declare function sqlite3_db_readonly(db: Pointer<sqlite3.sqlite3>, zDbName: Pointer<number>): number;

  /** /data/input/sqlite3.h#L6206 */
  export declare function sqlite3_txn_state(_0: Pointer<sqlite3.sqlite3>, zSchema: Pointer<number>): number;

  /** /data/input/sqlite3.h#L6255 */
  export declare function sqlite3_next_stmt(pDb: Pointer<sqlite3.sqlite3>, pStmt: Pointer<sqlite3.sqlite3_stmt>): Pointer<sqlite3.sqlite3_stmt>;

  /** /data/input/sqlite3.h#L6304 */
  export declare function sqlite3_commit_hook(_0: Pointer<sqlite3.sqlite3>, _1: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L6305 */
  export declare function sqlite3_rollback_hook(_0: Pointer<sqlite3.sqlite3>, _1: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L6356 */
  export declare function sqlite3_update_hook(_0: Pointer<sqlite3.sqlite3>, _1: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L6401 */
  export declare function sqlite3_enable_shared_cache(_0: number): number;

  /** /data/input/sqlite3.h#L6417 */
  export declare function sqlite3_release_memory(_0: number): number;

  /** /data/input/sqlite3.h#L6431 */
  export declare function sqlite3_db_release_memory(_0: Pointer<sqlite3.sqlite3>): number;

  /** /data/input/sqlite3.h#L6497 */
  export declare function sqlite3_soft_heap_limit64(N: sqlite3.sqlite3_int64): sqlite3.sqlite3_int64;

  /** /data/input/sqlite3.h#L6498 */
  export declare function sqlite3_hard_heap_limit64(N: sqlite3.sqlite3_int64): sqlite3.sqlite3_int64;

  /** /data/input/sqlite3.h#L6509 */
  export declare function sqlite3_soft_heap_limit(N: number): void;

  /** /data/input/sqlite3.h#L6581 */
  export declare function sqlite3_table_column_metadata(db: Pointer<sqlite3.sqlite3>, zDbName: Pointer<number>, zTableName: Pointer<number>, zColumnName: Pointer<number>, pzDataType: Pointer<Pointer<number>>, pzCollSeq: Pointer<Pointer<number>>, pNotNull: Pointer<number>, pPrimaryKey: Pointer<number>, pAutoinc: Pointer<number>): number;

  /** /data/input/sqlite3.h#L6637 */
  export declare function sqlite3_load_extension(db: Pointer<sqlite3.sqlite3>, zFile: Pointer<number>, zProc: Pointer<number>, pzErrMsg: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L6669 */
  export declare function sqlite3_enable_load_extension(db: Pointer<sqlite3.sqlite3>, onoff: number): number;

  /** /data/input/sqlite3.h#L6707 */
  export declare function sqlite3_auto_extension(xEntryPoint: FnPointer): number;

  /** /data/input/sqlite3.h#L6719 */
  export declare function sqlite3_cancel_auto_extension(xEntryPoint: FnPointer): number;

  /** /data/input/sqlite3.h#L6727 */
  export declare function sqlite3_reset_auto_extension(): void;

  /** /data/input/sqlite3.h#L6999 */
  export declare function sqlite3_create_module(db: Pointer<sqlite3.sqlite3>, zName: Pointer<number>, p: Pointer<sqlite3.sqlite3_module>, pClientData: Pointer<void>): number;

  /** /data/input/sqlite3.h#L7005 */
  export declare function sqlite3_create_module_v2(db: Pointer<sqlite3.sqlite3>, zName: Pointer<number>, p: Pointer<sqlite3.sqlite3_module>, pClientData: Pointer<void>, xDestroy: FnPointer): number;

  /** /data/input/sqlite3.h#L7025 */
  export declare function sqlite3_drop_modules(db: Pointer<sqlite3.sqlite3>, azKeep: Pointer<Pointer<number>>): number;

  /** /data/input/sqlite3.h#L7085 */
  export declare function sqlite3_declare_vtab(_0: Pointer<sqlite3.sqlite3>, zSQL: Pointer<number>): number;

  /** /data/input/sqlite3.h#L7104 */
  export declare function sqlite3_overload_function(_0: Pointer<sqlite3.sqlite3>, zFuncName: Pointer<number>, nArg: number): number;

  /** /data/input/sqlite3.h#L7213 */
  export declare function sqlite3_blob_open(_0: Pointer<sqlite3.sqlite3>, zDb: Pointer<number>, zTable: Pointer<number>, zColumn: Pointer<number>, iRow: sqlite3.sqlite3_int64, flags: number, ppBlob: Pointer<Pointer<sqlite3.sqlite3_blob>>): number;

  /** /data/input/sqlite3.h#L7246 */
  export declare function sqlite3_blob_reopen(_0: Pointer<sqlite3.sqlite3_blob>, _1: sqlite3.sqlite3_int64): number;

  /** /data/input/sqlite3.h#L7269 */
  export declare function sqlite3_blob_close(_0: Pointer<sqlite3.sqlite3_blob>): number;

  /** /data/input/sqlite3.h#L7285 */
  export declare function sqlite3_blob_bytes(_0: Pointer<sqlite3.sqlite3_blob>): number;

  /** /data/input/sqlite3.h#L7314 */
  export declare function sqlite3_blob_read(_0: Pointer<sqlite3.sqlite3_blob>, Z: Pointer<void>, N: number, iOffset: number): number;

  /** /data/input/sqlite3.h#L7356 */
  export declare function sqlite3_blob_write(_0: Pointer<sqlite3.sqlite3_blob>, z: Pointer<void>, n: number, iOffset: number): number;

  /** /data/input/sqlite3.h#L7387 */
  export declare function sqlite3_vfs_find(zVfsName: Pointer<number>): Pointer<sqlite3.sqlite3_vfs>;

  /** /data/input/sqlite3.h#L7388 */
  export declare function sqlite3_vfs_register(_0: Pointer<sqlite3.sqlite3_vfs>, makeDflt: number): number;

  /** /data/input/sqlite3.h#L7389 */
  export declare function sqlite3_vfs_unregister(_0: Pointer<sqlite3.sqlite3_vfs>): number;

  /** /data/input/sqlite3.h#L7505 */
  export declare function sqlite3_mutex_alloc(_0: number): Pointer<sqlite3.sqlite3_mutex>;

  /** /data/input/sqlite3.h#L7506 */
  export declare function sqlite3_mutex_free(_0: Pointer<sqlite3.sqlite3_mutex>): void;

  /** /data/input/sqlite3.h#L7507 */
  export declare function sqlite3_mutex_enter(_0: Pointer<sqlite3.sqlite3_mutex>): void;

  /** /data/input/sqlite3.h#L7508 */
  export declare function sqlite3_mutex_try(_0: Pointer<sqlite3.sqlite3_mutex>): number;

  /** /data/input/sqlite3.h#L7509 */
  export declare function sqlite3_mutex_leave(_0: Pointer<sqlite3.sqlite3_mutex>): void;

  /** /data/input/sqlite3.h#L7664 */
  export declare function sqlite3_db_mutex(_0: Pointer<sqlite3.sqlite3>): Pointer<sqlite3.sqlite3_mutex>;

  /** /data/input/sqlite3.h#L7707 */
  export declare function sqlite3_file_control(_0: Pointer<sqlite3.sqlite3>, zDbName: Pointer<number>, op: number, _3: Pointer<void>): number;

  /** /data/input/sqlite3.h#L7726 */
  export declare function sqlite3_test_control(op: number): number;

  /** /data/input/sqlite3.h#L7817 */
  export declare function sqlite3_keyword_count(): number;

  /** /data/input/sqlite3.h#L7818 */
  export declare function sqlite3_keyword_name(_0: number, _1: Pointer<Pointer<number>>, _2: Pointer<number>): number;

  /** /data/input/sqlite3.h#L7819 */
  export declare function sqlite3_keyword_check(_0: Pointer<number>, _1: number): number;

  /** /data/input/sqlite3.h#L7864 */
  export declare function sqlite3_str_new(_0: Pointer<sqlite3.sqlite3>): Pointer<sqlite3.sqlite3_str>;

  /** /data/input/sqlite3.h#L7879 */
  export declare function sqlite3_str_finish(_0: Pointer<sqlite3.sqlite3_str>): Pointer<number>;

  /** /data/input/sqlite3.h#L7913 */
  export declare function sqlite3_str_appendf(_0: Pointer<sqlite3.sqlite3_str>, zFormat: Pointer<number>): void;

  /** /data/input/sqlite3.h#L7914 */
  export declare function sqlite3_str_vappendf(_0: Pointer<sqlite3.sqlite3_str>, zFormat: Pointer<number>, _2: sqlite3.va_list): void;

  /** /data/input/sqlite3.h#L7915 */
  export declare function sqlite3_str_append(_0: Pointer<sqlite3.sqlite3_str>, zIn: Pointer<number>, N: number): void;

  /** /data/input/sqlite3.h#L7916 */
  export declare function sqlite3_str_appendall(_0: Pointer<sqlite3.sqlite3_str>, zIn: Pointer<number>): void;

  /** /data/input/sqlite3.h#L7917 */
  export declare function sqlite3_str_appendchar(_0: Pointer<sqlite3.sqlite3_str>, N: number, C: number): void;

  /** /data/input/sqlite3.h#L7918 */
  export declare function sqlite3_str_reset(_0: Pointer<sqlite3.sqlite3_str>): void;

  /** /data/input/sqlite3.h#L7949 */
  export declare function sqlite3_str_errcode(_0: Pointer<sqlite3.sqlite3_str>): number;

  /** /data/input/sqlite3.h#L7950 */
  export declare function sqlite3_str_length(_0: Pointer<sqlite3.sqlite3_str>): number;

  /** /data/input/sqlite3.h#L7951 */
  export declare function sqlite3_str_value(_0: Pointer<sqlite3.sqlite3_str>): Pointer<number>;

  /** /data/input/sqlite3.h#L7979 */
  export declare function sqlite3_status(op: number, pCurrent: Pointer<number>, pHighwater: Pointer<number>, resetFlag: number): number;

  /** /data/input/sqlite3.h#L7980 */
  export declare function sqlite3_status64(op: number, pCurrent: Pointer<sqlite3.sqlite3_int64>, pHighwater: Pointer<sqlite3.sqlite3_int64>, resetFlag: number): number;

  /** /data/input/sqlite3.h#L8089 */
  export declare function sqlite3_db_status(_0: Pointer<sqlite3.sqlite3>, op: number, pCur: Pointer<number>, pHiwtr: Pointer<number>, resetFlg: number): number;

  /** /data/input/sqlite3.h#L8242 */
  export declare function sqlite3_stmt_status(_0: Pointer<sqlite3.sqlite3_stmt>, op: number, resetFlg: number): number;

  /** /data/input/sqlite3.h#L8732 */
  export declare function sqlite3_backup_init(pDest: Pointer<sqlite3.sqlite3>, zDestName: Pointer<number>, pSource: Pointer<sqlite3.sqlite3>, zSourceName: Pointer<number>): Pointer<sqlite3.sqlite3_backup>;

  /** /data/input/sqlite3.h#L8738 */
  export declare function sqlite3_backup_step(p: Pointer<sqlite3.sqlite3_backup>, nPage: number): number;

  /** /data/input/sqlite3.h#L8739 */
  export declare function sqlite3_backup_finish(p: Pointer<sqlite3.sqlite3_backup>): number;

  /** /data/input/sqlite3.h#L8740 */
  export declare function sqlite3_backup_remaining(p: Pointer<sqlite3.sqlite3_backup>): number;

  /** /data/input/sqlite3.h#L8741 */
  export declare function sqlite3_backup_pagecount(p: Pointer<sqlite3.sqlite3_backup>): number;

  /** /data/input/sqlite3.h#L8858 */
  export declare function sqlite3_unlock_notify(pBlocked: Pointer<sqlite3.sqlite3>, xNotify: FnPointer, pNotifyArg: Pointer<void>): number;

  /** /data/input/sqlite3.h#L8873 */
  export declare function sqlite3_stricmp(_0: Pointer<number>, _1: Pointer<number>): number;

  /** /data/input/sqlite3.h#L8874 */
  export declare function sqlite3_strnicmp(_0: Pointer<number>, _1: Pointer<number>, _2: number): number;

  /** /data/input/sqlite3.h#L8891 */
  export declare function sqlite3_strglob(zGlob: Pointer<number>, zStr: Pointer<number>): number;

  /** /data/input/sqlite3.h#L8914 */
  export declare function sqlite3_strlike(zGlob: Pointer<number>, zStr: Pointer<number>, cEsc: number): number;

  /** /data/input/sqlite3.h#L8937 */
  export declare function sqlite3_log(iErrCode: number, zFormat: Pointer<number>): void;

  /** /data/input/sqlite3.h#L8973 */
  export declare function sqlite3_wal_hook(_0: Pointer<sqlite3.sqlite3>, _1: FnPointer, _2: Pointer<void>): Pointer<void>;

  /** /data/input/sqlite3.h#L9008 */
  export declare function sqlite3_wal_autocheckpoint(db: Pointer<sqlite3.sqlite3>, N: number): number;

  /** /data/input/sqlite3.h#L9030 */
  export declare function sqlite3_wal_checkpoint(db: Pointer<sqlite3.sqlite3>, zDb: Pointer<number>): number;

  /** /data/input/sqlite3.h#L9124 */
  export declare function sqlite3_wal_checkpoint_v2(db: Pointer<sqlite3.sqlite3>, zDb: Pointer<number>, eMode: number, pnLog: Pointer<number>, pnCkpt: Pointer<number>): number;

  /** /data/input/sqlite3.h#L9164 */
  export declare function sqlite3_vtab_config(_0: Pointer<sqlite3.sqlite3>, op: number): number;

  /** /data/input/sqlite3.h#L9242 */
  export declare function sqlite3_vtab_on_conflict(_0: Pointer<sqlite3.sqlite3>): number;

  /** /data/input/sqlite3.h#L9268 */
  export declare function sqlite3_vtab_nochange(_0: Pointer<sqlite3.sqlite3_context>): number;

  /** /data/input/sqlite3.h#L9283 */
  export declare function sqlite3_vtab_collation(_0: Pointer<sqlite3.sqlite3_index_info>, _1: number): Pointer<number>;

  /** /data/input/sqlite3.h#L9437 */
  export declare function sqlite3_db_cacheflush(_0: Pointer<sqlite3.sqlite3>): number;

  /** /data/input/sqlite3.h#L9553 */
  export declare function sqlite3_system_errno(_0: Pointer<sqlite3.sqlite3>): number;

  /** /data/input/sqlite3.h#L9920 */
  export declare function sqlite3_rtree_geometry_callback(db: Pointer<sqlite3.sqlite3>, zGeom: Pointer<number>, xGeom: FnPointer, pContext: Pointer<void>): number;

  /** /data/input/sqlite3.h#L9946 */
  export declare function sqlite3_rtree_query_callback(db: Pointer<sqlite3.sqlite3>, zQueryFunc: Pointer<number>, xQueryFunc: FnPointer, pContext: Pointer<void>, xDestructor: FnPointer): number;

  export declare function close(): void;
}
