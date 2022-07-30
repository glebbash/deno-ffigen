export const sqlite3_SYMBOLS = {
  sqlite3_libversion: {
    name: "sqlite3_libversion",
    parameters: [],
    result: "pointer"
  },
  sqlite3_sourceid: {
    name: "sqlite3_sourceid",
    parameters: [],
    result: "pointer"
  },
  sqlite3_libversion_number: {
    name: "sqlite3_libversion_number",
    parameters: [],
    result: "i32"
  },
  sqlite3_compileoption_used: {
    name: "sqlite3_compileoption_used",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_compileoption_get: {
    name: "sqlite3_compileoption_get",
    parameters: ["i32"],
    result: "pointer"
  },
  sqlite3_threadsafe: {
    name: "sqlite3_threadsafe",
    parameters: [],
    result: "i32"
  },
  sqlite3_close: {
    name: "sqlite3_close",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_close_v2: {
    name: "sqlite3_close_v2",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_exec: {
    name: "sqlite3_exec",
    parameters: ["pointer", "pointer", "function", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_initialize: {
    name: "sqlite3_initialize",
    parameters: [],
    result: "i32"
  },
  sqlite3_shutdown: {
    name: "sqlite3_shutdown",
    parameters: [],
    result: "i32"
  },
  sqlite3_os_init: {
    name: "sqlite3_os_init",
    parameters: [],
    result: "i32"
  },
  sqlite3_os_end: {
    name: "sqlite3_os_end",
    parameters: [],
    result: "i32"
  },
  sqlite3_config: {
    name: "sqlite3_config",
    parameters: ["i32"],
    result: "i32"
  },
  sqlite3_db_config: {
    name: "sqlite3_db_config",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_extended_result_codes: {
    name: "sqlite3_extended_result_codes",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_last_insert_rowid: {
    name: "sqlite3_last_insert_rowid",
    parameters: ["pointer"],
    result: "i64"
  },
  sqlite3_set_last_insert_rowid: {
    name: "sqlite3_set_last_insert_rowid",
    parameters: ["pointer", "i64"],
    result: "void"
  },
  sqlite3_changes: {
    name: "sqlite3_changes",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_total_changes: {
    name: "sqlite3_total_changes",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_interrupt: {
    name: "sqlite3_interrupt",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_complete: {
    name: "sqlite3_complete",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_complete16: {
    name: "sqlite3_complete16",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_busy_handler: {
    name: "sqlite3_busy_handler",
    parameters: ["pointer", "function", "pointer"],
    result: "i32"
  },
  sqlite3_busy_timeout: {
    name: "sqlite3_busy_timeout",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_get_table: {
    name: "sqlite3_get_table",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_free_table: {
    name: "sqlite3_free_table",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_mprintf: {
    name: "sqlite3_mprintf",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_vmprintf: {
    name: "sqlite3_vmprintf",
    parameters: ["pointer", "pointer"],
    result: "pointer"
  },
  sqlite3_snprintf: {
    name: "sqlite3_snprintf",
    parameters: ["i32", "pointer", "pointer"],
    result: "pointer"
  },
  sqlite3_vsnprintf: {
    name: "sqlite3_vsnprintf",
    parameters: ["i32", "pointer", "pointer", "pointer"],
    result: "pointer"
  },
  sqlite3_malloc: {
    name: "sqlite3_malloc",
    parameters: ["i32"],
    result: "pointer"
  },
  sqlite3_malloc64: {
    name: "sqlite3_malloc64",
    parameters: ["u64"],
    result: "pointer"
  },
  sqlite3_realloc: {
    name: "sqlite3_realloc",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_realloc64: {
    name: "sqlite3_realloc64",
    parameters: ["pointer", "u64"],
    result: "pointer"
  },
  sqlite3_free: {
    name: "sqlite3_free",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_msize: {
    name: "sqlite3_msize",
    parameters: ["pointer"],
    result: "u64"
  },
  sqlite3_memory_used: {
    name: "sqlite3_memory_used",
    parameters: [],
    result: "i64"
  },
  sqlite3_memory_highwater: {
    name: "sqlite3_memory_highwater",
    parameters: ["i32"],
    result: "i64"
  },
  sqlite3_randomness: {
    name: "sqlite3_randomness",
    parameters: ["i32", "pointer"],
    result: "void"
  },
  sqlite3_set_authorizer: {
    name: "sqlite3_set_authorizer",
    parameters: ["pointer", "function", "pointer"],
    result: "i32"
  },
  sqlite3_trace: {
    name: "sqlite3_trace",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer"
  },
  sqlite3_profile: {
    name: "sqlite3_profile",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer"
  },
  sqlite3_trace_v2: {
    name: "sqlite3_trace_v2",
    parameters: ["pointer", "u32", "function", "pointer"],
    result: "i32"
  },
  sqlite3_progress_handler: {
    name: "sqlite3_progress_handler",
    parameters: ["pointer", "i32", "function", "pointer"],
    result: "void"
  },
  sqlite3_open: {
    name: "sqlite3_open",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  sqlite3_open16: {
    name: "sqlite3_open16",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  sqlite3_open_v2: {
    name: "sqlite3_open_v2",
    parameters: ["pointer", "pointer", "i32", "pointer"],
    result: "i32"
  },
  sqlite3_uri_parameter: {
    name: "sqlite3_uri_parameter",
    parameters: ["pointer", "pointer"],
    result: "pointer"
  },
  sqlite3_uri_boolean: {
    name: "sqlite3_uri_boolean",
    parameters: ["pointer", "pointer", "i32"],
    result: "i32"
  },
  sqlite3_uri_int64: {
    name: "sqlite3_uri_int64",
    parameters: ["pointer", "pointer", "i64"],
    result: "i64"
  },
  sqlite3_uri_key: {
    name: "sqlite3_uri_key",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_filename_database: {
    name: "sqlite3_filename_database",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_filename_journal: {
    name: "sqlite3_filename_journal",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_filename_wal: {
    name: "sqlite3_filename_wal",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_database_file_object: {
    name: "sqlite3_database_file_object",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_create_filename: {
    name: "sqlite3_create_filename",
    parameters: ["pointer", "pointer", "pointer", "i32", "pointer"],
    result: "pointer"
  },
  sqlite3_free_filename: {
    name: "sqlite3_free_filename",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_errcode: {
    name: "sqlite3_errcode",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_extended_errcode: {
    name: "sqlite3_extended_errcode",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_errmsg: {
    name: "sqlite3_errmsg",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_errmsg16: {
    name: "sqlite3_errmsg16",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_errstr: {
    name: "sqlite3_errstr",
    parameters: ["i32"],
    result: "pointer"
  },
  sqlite3_limit: {
    name: "sqlite3_limit",
    parameters: ["pointer", "i32", "i32"],
    result: "i32"
  },
  sqlite3_prepare: {
    name: "sqlite3_prepare",
    parameters: ["pointer", "pointer", "i32", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_prepare_v2: {
    name: "sqlite3_prepare_v2",
    parameters: ["pointer", "pointer", "i32", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_prepare_v3: {
    name: "sqlite3_prepare_v3",
    parameters: ["pointer", "pointer", "i32", "u32", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_prepare16: {
    name: "sqlite3_prepare16",
    parameters: ["pointer", "pointer", "i32", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_prepare16_v2: {
    name: "sqlite3_prepare16_v2",
    parameters: ["pointer", "pointer", "i32", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_prepare16_v3: {
    name: "sqlite3_prepare16_v3",
    parameters: ["pointer", "pointer", "i32", "u32", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_sql: {
    name: "sqlite3_sql",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_expanded_sql: {
    name: "sqlite3_expanded_sql",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_stmt_readonly: {
    name: "sqlite3_stmt_readonly",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_stmt_isexplain: {
    name: "sqlite3_stmt_isexplain",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_stmt_busy: {
    name: "sqlite3_stmt_busy",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_bind_blob: {
    name: "sqlite3_bind_blob",
    parameters: ["pointer", "i32", "pointer", "i32", "function"],
    result: "i32"
  },
  sqlite3_bind_blob64: {
    name: "sqlite3_bind_blob64",
    parameters: ["pointer", "i32", "pointer", "u64", "function"],
    result: "i32"
  },
  sqlite3_bind_double: {
    name: "sqlite3_bind_double",
    parameters: ["pointer", "i32", "f64"],
    result: "i32"
  },
  sqlite3_bind_int: {
    name: "sqlite3_bind_int",
    parameters: ["pointer", "i32", "i32"],
    result: "i32"
  },
  sqlite3_bind_int64: {
    name: "sqlite3_bind_int64",
    parameters: ["pointer", "i32", "i64"],
    result: "i32"
  },
  sqlite3_bind_null: {
    name: "sqlite3_bind_null",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_bind_text: {
    name: "sqlite3_bind_text",
    parameters: ["pointer", "i32", "pointer", "i32", "function"],
    result: "i32"
  },
  sqlite3_bind_text16: {
    name: "sqlite3_bind_text16",
    parameters: ["pointer", "i32", "pointer", "i32", "function"],
    result: "i32"
  },
  sqlite3_bind_text64: {
    name: "sqlite3_bind_text64",
    parameters: ["pointer", "i32", "pointer", "u64", "function", "u8"],
    result: "i32"
  },
  sqlite3_bind_value: {
    name: "sqlite3_bind_value",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32"
  },
  sqlite3_bind_pointer: {
    name: "sqlite3_bind_pointer",
    parameters: ["pointer", "i32", "pointer", "pointer", "function"],
    result: "i32"
  },
  sqlite3_bind_zeroblob: {
    name: "sqlite3_bind_zeroblob",
    parameters: ["pointer", "i32", "i32"],
    result: "i32"
  },
  sqlite3_bind_zeroblob64: {
    name: "sqlite3_bind_zeroblob64",
    parameters: ["pointer", "i32", "u64"],
    result: "i32"
  },
  sqlite3_bind_parameter_count: {
    name: "sqlite3_bind_parameter_count",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_bind_parameter_name: {
    name: "sqlite3_bind_parameter_name",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_bind_parameter_index: {
    name: "sqlite3_bind_parameter_index",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  sqlite3_clear_bindings: {
    name: "sqlite3_clear_bindings",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_column_count: {
    name: "sqlite3_column_count",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_column_name: {
    name: "sqlite3_column_name",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_name16: {
    name: "sqlite3_column_name16",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_database_name: {
    name: "sqlite3_column_database_name",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_database_name16: {
    name: "sqlite3_column_database_name16",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_table_name: {
    name: "sqlite3_column_table_name",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_table_name16: {
    name: "sqlite3_column_table_name16",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_origin_name: {
    name: "sqlite3_column_origin_name",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_origin_name16: {
    name: "sqlite3_column_origin_name16",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_decltype: {
    name: "sqlite3_column_decltype",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_decltype16: {
    name: "sqlite3_column_decltype16",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_step: {
    name: "sqlite3_step",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_data_count: {
    name: "sqlite3_data_count",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_column_blob: {
    name: "sqlite3_column_blob",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_double: {
    name: "sqlite3_column_double",
    parameters: ["pointer", "i32"],
    result: "f64"
  },
  sqlite3_column_int: {
    name: "sqlite3_column_int",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_column_int64: {
    name: "sqlite3_column_int64",
    parameters: ["pointer", "i32"],
    result: "i64"
  },
  sqlite3_column_text: {
    name: "sqlite3_column_text",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_text16: {
    name: "sqlite3_column_text16",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_value: {
    name: "sqlite3_column_value",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_column_bytes: {
    name: "sqlite3_column_bytes",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_column_bytes16: {
    name: "sqlite3_column_bytes16",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_column_type: {
    name: "sqlite3_column_type",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_finalize: {
    name: "sqlite3_finalize",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_reset: {
    name: "sqlite3_reset",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_create_function: {
    name: "sqlite3_create_function",
    parameters: ["pointer", "pointer", "i32", "i32", "pointer", "function", "function", "function"],
    result: "i32"
  },
  sqlite3_create_function16: {
    name: "sqlite3_create_function16",
    parameters: ["pointer", "pointer", "i32", "i32", "pointer", "function", "function", "function"],
    result: "i32"
  },
  sqlite3_create_function_v2: {
    name: "sqlite3_create_function_v2",
    parameters: ["pointer", "pointer", "i32", "i32", "pointer", "function", "function", "function", "function"],
    result: "i32"
  },
  sqlite3_create_window_function: {
    name: "sqlite3_create_window_function",
    parameters: ["pointer", "pointer", "i32", "i32", "pointer", "function", "function", "function", "function", "function"],
    result: "i32"
  },
  sqlite3_aggregate_count: {
    name: "sqlite3_aggregate_count",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_expired: {
    name: "sqlite3_expired",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_transfer_bindings: {
    name: "sqlite3_transfer_bindings",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  sqlite3_global_recover: {
    name: "sqlite3_global_recover",
    parameters: [],
    result: "i32"
  },
  sqlite3_thread_cleanup: {
    name: "sqlite3_thread_cleanup",
    parameters: [],
    result: "void"
  },
  sqlite3_memory_alarm: {
    name: "sqlite3_memory_alarm",
    parameters: ["function", "pointer", "i64"],
    result: "i32"
  },
  sqlite3_value_blob: {
    name: "sqlite3_value_blob",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_value_double: {
    name: "sqlite3_value_double",
    parameters: ["pointer"],
    result: "f64"
  },
  sqlite3_value_int: {
    name: "sqlite3_value_int",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_value_int64: {
    name: "sqlite3_value_int64",
    parameters: ["pointer"],
    result: "i64"
  },
  sqlite3_value_pointer: {
    name: "sqlite3_value_pointer",
    parameters: ["pointer", "pointer"],
    result: "pointer"
  },
  sqlite3_value_text: {
    name: "sqlite3_value_text",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_value_text16: {
    name: "sqlite3_value_text16",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_value_text16le: {
    name: "sqlite3_value_text16le",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_value_text16be: {
    name: "sqlite3_value_text16be",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_value_bytes: {
    name: "sqlite3_value_bytes",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_value_bytes16: {
    name: "sqlite3_value_bytes16",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_value_type: {
    name: "sqlite3_value_type",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_value_numeric_type: {
    name: "sqlite3_value_numeric_type",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_value_nochange: {
    name: "sqlite3_value_nochange",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_value_frombind: {
    name: "sqlite3_value_frombind",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_value_subtype: {
    name: "sqlite3_value_subtype",
    parameters: ["pointer"],
    result: "u32"
  },
  sqlite3_value_dup: {
    name: "sqlite3_value_dup",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_value_free: {
    name: "sqlite3_value_free",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_aggregate_context: {
    name: "sqlite3_aggregate_context",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_user_data: {
    name: "sqlite3_user_data",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_context_db_handle: {
    name: "sqlite3_context_db_handle",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_get_auxdata: {
    name: "sqlite3_get_auxdata",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_set_auxdata: {
    name: "sqlite3_set_auxdata",
    parameters: ["pointer", "i32", "pointer", "function"],
    result: "void"
  },
  sqlite3_result_blob: {
    name: "sqlite3_result_blob",
    parameters: ["pointer", "pointer", "i32", "function"],
    result: "void"
  },
  sqlite3_result_blob64: {
    name: "sqlite3_result_blob64",
    parameters: ["pointer", "pointer", "u64", "function"],
    result: "void"
  },
  sqlite3_result_double: {
    name: "sqlite3_result_double",
    parameters: ["pointer", "f64"],
    result: "void"
  },
  sqlite3_result_error: {
    name: "sqlite3_result_error",
    parameters: ["pointer", "pointer", "i32"],
    result: "void"
  },
  sqlite3_result_error16: {
    name: "sqlite3_result_error16",
    parameters: ["pointer", "pointer", "i32"],
    result: "void"
  },
  sqlite3_result_error_toobig: {
    name: "sqlite3_result_error_toobig",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_result_error_nomem: {
    name: "sqlite3_result_error_nomem",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_result_error_code: {
    name: "sqlite3_result_error_code",
    parameters: ["pointer", "i32"],
    result: "void"
  },
  sqlite3_result_int: {
    name: "sqlite3_result_int",
    parameters: ["pointer", "i32"],
    result: "void"
  },
  sqlite3_result_int64: {
    name: "sqlite3_result_int64",
    parameters: ["pointer", "i64"],
    result: "void"
  },
  sqlite3_result_null: {
    name: "sqlite3_result_null",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_result_text: {
    name: "sqlite3_result_text",
    parameters: ["pointer", "pointer", "i32", "function"],
    result: "void"
  },
  sqlite3_result_text64: {
    name: "sqlite3_result_text64",
    parameters: ["pointer", "pointer", "u64", "function", "u8"],
    result: "void"
  },
  sqlite3_result_text16: {
    name: "sqlite3_result_text16",
    parameters: ["pointer", "pointer", "i32", "function"],
    result: "void"
  },
  sqlite3_result_text16le: {
    name: "sqlite3_result_text16le",
    parameters: ["pointer", "pointer", "i32", "function"],
    result: "void"
  },
  sqlite3_result_text16be: {
    name: "sqlite3_result_text16be",
    parameters: ["pointer", "pointer", "i32", "function"],
    result: "void"
  },
  sqlite3_result_value: {
    name: "sqlite3_result_value",
    parameters: ["pointer", "pointer"],
    result: "void"
  },
  sqlite3_result_pointer: {
    name: "sqlite3_result_pointer",
    parameters: ["pointer", "pointer", "pointer", "function"],
    result: "void"
  },
  sqlite3_result_zeroblob: {
    name: "sqlite3_result_zeroblob",
    parameters: ["pointer", "i32"],
    result: "void"
  },
  sqlite3_result_zeroblob64: {
    name: "sqlite3_result_zeroblob64",
    parameters: ["pointer", "u64"],
    result: "i32"
  },
  sqlite3_result_subtype: {
    name: "sqlite3_result_subtype",
    parameters: ["pointer", "u32"],
    result: "void"
  },
  sqlite3_create_collation: {
    name: "sqlite3_create_collation",
    parameters: ["pointer", "pointer", "i32", "pointer", "function"],
    result: "i32"
  },
  sqlite3_create_collation_v2: {
    name: "sqlite3_create_collation_v2",
    parameters: ["pointer", "pointer", "i32", "pointer", "function", "function"],
    result: "i32"
  },
  sqlite3_create_collation16: {
    name: "sqlite3_create_collation16",
    parameters: ["pointer", "pointer", "i32", "pointer", "function"],
    result: "i32"
  },
  sqlite3_collation_needed: {
    name: "sqlite3_collation_needed",
    parameters: ["pointer", "pointer", "function"],
    result: "i32"
  },
  sqlite3_collation_needed16: {
    name: "sqlite3_collation_needed16",
    parameters: ["pointer", "pointer", "function"],
    result: "i32"
  },
  sqlite3_sleep: {
    name: "sqlite3_sleep",
    parameters: ["i32"],
    result: "i32"
  },
  sqlite3_get_autocommit: {
    name: "sqlite3_get_autocommit",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_db_handle: {
    name: "sqlite3_db_handle",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_db_filename: {
    name: "sqlite3_db_filename",
    parameters: ["pointer", "pointer"],
    result: "pointer"
  },
  sqlite3_db_readonly: {
    name: "sqlite3_db_readonly",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  sqlite3_txn_state: {
    name: "sqlite3_txn_state",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  sqlite3_next_stmt: {
    name: "sqlite3_next_stmt",
    parameters: ["pointer", "pointer"],
    result: "pointer"
  },
  sqlite3_commit_hook: {
    name: "sqlite3_commit_hook",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer"
  },
  sqlite3_rollback_hook: {
    name: "sqlite3_rollback_hook",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer"
  },
  sqlite3_update_hook: {
    name: "sqlite3_update_hook",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer"
  },
  sqlite3_enable_shared_cache: {
    name: "sqlite3_enable_shared_cache",
    parameters: ["i32"],
    result: "i32"
  },
  sqlite3_release_memory: {
    name: "sqlite3_release_memory",
    parameters: ["i32"],
    result: "i32"
  },
  sqlite3_db_release_memory: {
    name: "sqlite3_db_release_memory",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_soft_heap_limit64: {
    name: "sqlite3_soft_heap_limit64",
    parameters: ["i64"],
    result: "i64"
  },
  sqlite3_hard_heap_limit64: {
    name: "sqlite3_hard_heap_limit64",
    parameters: ["i64"],
    result: "i64"
  },
  sqlite3_soft_heap_limit: {
    name: "sqlite3_soft_heap_limit",
    parameters: ["i32"],
    result: "void"
  },
  sqlite3_table_column_metadata: {
    name: "sqlite3_table_column_metadata",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_load_extension: {
    name: "sqlite3_load_extension",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_enable_load_extension: {
    name: "sqlite3_enable_load_extension",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_auto_extension: {
    name: "sqlite3_auto_extension",
    parameters: ["function"],
    result: "i32"
  },
  sqlite3_cancel_auto_extension: {
    name: "sqlite3_cancel_auto_extension",
    parameters: ["function"],
    result: "i32"
  },
  sqlite3_reset_auto_extension: {
    name: "sqlite3_reset_auto_extension",
    parameters: [],
    result: "void"
  },
  sqlite3_create_module: {
    name: "sqlite3_create_module",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_create_module_v2: {
    name: "sqlite3_create_module_v2",
    parameters: ["pointer", "pointer", "pointer", "pointer", "function"],
    result: "i32"
  },
  sqlite3_drop_modules: {
    name: "sqlite3_drop_modules",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  sqlite3_declare_vtab: {
    name: "sqlite3_declare_vtab",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  sqlite3_overload_function: {
    name: "sqlite3_overload_function",
    parameters: ["pointer", "pointer", "i32"],
    result: "i32"
  },
  sqlite3_blob_open: {
    name: "sqlite3_blob_open",
    parameters: ["pointer", "pointer", "pointer", "pointer", "i64", "i32", "pointer"],
    result: "i32"
  },
  sqlite3_blob_reopen: {
    name: "sqlite3_blob_reopen",
    parameters: ["pointer", "i64"],
    result: "i32"
  },
  sqlite3_blob_close: {
    name: "sqlite3_blob_close",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_blob_bytes: {
    name: "sqlite3_blob_bytes",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_blob_read: {
    name: "sqlite3_blob_read",
    parameters: ["pointer", "pointer", "i32", "i32"],
    result: "i32"
  },
  sqlite3_blob_write: {
    name: "sqlite3_blob_write",
    parameters: ["pointer", "pointer", "i32", "i32"],
    result: "i32"
  },
  sqlite3_vfs_find: {
    name: "sqlite3_vfs_find",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_vfs_register: {
    name: "sqlite3_vfs_register",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_vfs_unregister: {
    name: "sqlite3_vfs_unregister",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_mutex_alloc: {
    name: "sqlite3_mutex_alloc",
    parameters: ["i32"],
    result: "pointer"
  },
  sqlite3_mutex_free: {
    name: "sqlite3_mutex_free",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_mutex_enter: {
    name: "sqlite3_mutex_enter",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_mutex_try: {
    name: "sqlite3_mutex_try",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_mutex_leave: {
    name: "sqlite3_mutex_leave",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_db_mutex: {
    name: "sqlite3_db_mutex",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_file_control: {
    name: "sqlite3_file_control",
    parameters: ["pointer", "pointer", "i32", "pointer"],
    result: "i32"
  },
  sqlite3_test_control: {
    name: "sqlite3_test_control",
    parameters: ["i32"],
    result: "i32"
  },
  sqlite3_keyword_count: {
    name: "sqlite3_keyword_count",
    parameters: [],
    result: "i32"
  },
  sqlite3_keyword_name: {
    name: "sqlite3_keyword_name",
    parameters: ["i32", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_keyword_check: {
    name: "sqlite3_keyword_check",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_str_new: {
    name: "sqlite3_str_new",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_str_finish: {
    name: "sqlite3_str_finish",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_str_appendf: {
    name: "sqlite3_str_appendf",
    parameters: ["pointer", "pointer"],
    result: "void"
  },
  sqlite3_str_vappendf: {
    name: "sqlite3_str_vappendf",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void"
  },
  sqlite3_str_append: {
    name: "sqlite3_str_append",
    parameters: ["pointer", "pointer", "i32"],
    result: "void"
  },
  sqlite3_str_appendall: {
    name: "sqlite3_str_appendall",
    parameters: ["pointer", "pointer"],
    result: "void"
  },
  sqlite3_str_appendchar: {
    name: "sqlite3_str_appendchar",
    parameters: ["pointer", "i32", "i8"],
    result: "void"
  },
  sqlite3_str_reset: {
    name: "sqlite3_str_reset",
    parameters: ["pointer"],
    result: "void"
  },
  sqlite3_str_errcode: {
    name: "sqlite3_str_errcode",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_str_length: {
    name: "sqlite3_str_length",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_str_value: {
    name: "sqlite3_str_value",
    parameters: ["pointer"],
    result: "pointer"
  },
  sqlite3_status: {
    name: "sqlite3_status",
    parameters: ["i32", "pointer", "pointer", "i32"],
    result: "i32"
  },
  sqlite3_status64: {
    name: "sqlite3_status64",
    parameters: ["i32", "pointer", "pointer", "i32"],
    result: "i32"
  },
  sqlite3_db_status: {
    name: "sqlite3_db_status",
    parameters: ["pointer", "i32", "pointer", "pointer", "i32"],
    result: "i32"
  },
  sqlite3_stmt_status: {
    name: "sqlite3_stmt_status",
    parameters: ["pointer", "i32", "i32"],
    result: "i32"
  },
  sqlite3_backup_init: {
    name: "sqlite3_backup_init",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "pointer"
  },
  sqlite3_backup_step: {
    name: "sqlite3_backup_step",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_backup_finish: {
    name: "sqlite3_backup_finish",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_backup_remaining: {
    name: "sqlite3_backup_remaining",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_backup_pagecount: {
    name: "sqlite3_backup_pagecount",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_unlock_notify: {
    name: "sqlite3_unlock_notify",
    parameters: ["pointer", "function", "pointer"],
    result: "i32"
  },
  sqlite3_stricmp: {
    name: "sqlite3_stricmp",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  sqlite3_strnicmp: {
    name: "sqlite3_strnicmp",
    parameters: ["pointer", "pointer", "i32"],
    result: "i32"
  },
  sqlite3_strglob: {
    name: "sqlite3_strglob",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  sqlite3_strlike: {
    name: "sqlite3_strlike",
    parameters: ["pointer", "pointer", "u32"],
    result: "i32"
  },
  sqlite3_log: {
    name: "sqlite3_log",
    parameters: ["i32", "pointer"],
    result: "void"
  },
  sqlite3_wal_hook: {
    name: "sqlite3_wal_hook",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer"
  },
  sqlite3_wal_autocheckpoint: {
    name: "sqlite3_wal_autocheckpoint",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_wal_checkpoint: {
    name: "sqlite3_wal_checkpoint",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  sqlite3_wal_checkpoint_v2: {
    name: "sqlite3_wal_checkpoint_v2",
    parameters: ["pointer", "pointer", "i32", "pointer", "pointer"],
    result: "i32"
  },
  sqlite3_vtab_config: {
    name: "sqlite3_vtab_config",
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  sqlite3_vtab_on_conflict: {
    name: "sqlite3_vtab_on_conflict",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_vtab_nochange: {
    name: "sqlite3_vtab_nochange",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_vtab_collation: {
    name: "sqlite3_vtab_collation",
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  sqlite3_db_cacheflush: {
    name: "sqlite3_db_cacheflush",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_system_errno: {
    name: "sqlite3_system_errno",
    parameters: ["pointer"],
    result: "i32"
  },
  sqlite3_rtree_geometry_callback: {
    name: "sqlite3_rtree_geometry_callback",
    parameters: ["pointer", "pointer", "function", "pointer"],
    result: "i32"
  },
  sqlite3_rtree_query_callback: {
    name: "sqlite3_rtree_query_callback",
    parameters: ["pointer", "pointer", "function", "pointer", "function"],
    result: "i32"
  }
} as const;
