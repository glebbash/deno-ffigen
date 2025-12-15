// deno-fmt-ignore-file

export const SQLite3_SYMBOLS = {
  libversion: {
    name: "sqlite3_libversion",
    parameters: [],
    result: "pointer",
  },
  sourceid: {
    name: "sqlite3_sourceid",
    parameters: [],
    result: "pointer",
  },
  libversion_number: {
    name: "sqlite3_libversion_number",
    parameters: [],
    result: "i32",
  },
  compileoption_used: {
    name: "sqlite3_compileoption_used",
    parameters: ["pointer"],
    result: "i32",
  },
  compileoption_get: {
    name: "sqlite3_compileoption_get",
    parameters: ["i32"],
    result: "pointer",
  },
  threadsafe: {
    name: "sqlite3_threadsafe",
    parameters: [],
    result: "i32",
  },
  close: {
    name: "sqlite3_close",
    parameters: ["pointer"],
    result: "i32",
  },
  close_v2: {
    name: "sqlite3_close_v2",
    parameters: ["pointer"],
    result: "i32",
  },
  exec: {
    name: "sqlite3_exec",
    parameters: ["pointer", "pointer", "function", "pointer", "pointer"],
    result: "i32",
  },
  initialize: {
    name: "sqlite3_initialize",
    parameters: [],
    result: "i32",
  },
  shutdown: {
    name: "sqlite3_shutdown",
    parameters: [],
    result: "i32",
  },
  os_init: {
    name: "sqlite3_os_init",
    parameters: [],
    result: "i32",
  },
  os_end: {
    name: "sqlite3_os_end",
    parameters: [],
    result: "i32",
  },
  config: {
    name: "sqlite3_config",
    parameters: ["i32"],
    result: "i32",
  },
  db_config: {
    name: "sqlite3_db_config",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  extended_result_codes: {
    name: "sqlite3_extended_result_codes",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  last_insert_rowid: {
    name: "sqlite3_last_insert_rowid",
    parameters: ["pointer"],
    result: "i64",
  },
  set_last_insert_rowid: {
    name: "sqlite3_set_last_insert_rowid",
    parameters: ["pointer", "i64"],
    result: "void",
  },
  changes: {
    name: "sqlite3_changes",
    parameters: ["pointer"],
    result: "i32",
  },
  total_changes: {
    name: "sqlite3_total_changes",
    parameters: ["pointer"],
    result: "i32",
  },
  interrupt: {
    name: "sqlite3_interrupt",
    parameters: ["pointer"],
    result: "void",
  },
  complete: {
    name: "sqlite3_complete",
    parameters: ["pointer"],
    result: "i32",
  },
  complete16: {
    name: "sqlite3_complete16",
    parameters: ["pointer"],
    result: "i32",
  },
  busy_handler: {
    name: "sqlite3_busy_handler",
    parameters: ["pointer", "function", "pointer"],
    result: "i32",
  },
  busy_timeout: {
    name: "sqlite3_busy_timeout",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  get_table: {
    name: "sqlite3_get_table",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "i32",
  },
  free_table: {
    name: "sqlite3_free_table",
    parameters: ["pointer"],
    result: "void",
  },
  mprintf: {
    name: "sqlite3_mprintf",
    parameters: ["pointer"],
    result: "pointer",
  },
  vmprintf: {
    name: "sqlite3_vmprintf",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  snprintf: {
    name: "sqlite3_snprintf",
    parameters: ["i32", "pointer", "pointer"],
    result: "pointer",
  },
  vsnprintf: {
    name: "sqlite3_vsnprintf",
    parameters: ["i32", "pointer", "pointer", "pointer"],
    result: "pointer",
  },
  malloc: {
    name: "sqlite3_malloc",
    parameters: ["i32"],
    result: "pointer",
  },
  malloc64: {
    name: "sqlite3_malloc64",
    parameters: ["u64"],
    result: "pointer",
  },
  realloc: {
    name: "sqlite3_realloc",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  realloc64: {
    name: "sqlite3_realloc64",
    parameters: ["pointer", "u64"],
    result: "pointer",
  },
  free: {
    name: "sqlite3_free",
    parameters: ["pointer"],
    result: "void",
  },
  msize: {
    name: "sqlite3_msize",
    parameters: ["pointer"],
    result: "u64",
  },
  memory_used: {
    name: "sqlite3_memory_used",
    parameters: [],
    result: "i64",
  },
  memory_highwater: {
    name: "sqlite3_memory_highwater",
    parameters: ["i32"],
    result: "i64",
  },
  randomness: {
    name: "sqlite3_randomness",
    parameters: ["i32", "pointer"],
    result: "void",
  },
  set_authorizer: {
    name: "sqlite3_set_authorizer",
    parameters: ["pointer", "function", "pointer"],
    result: "i32",
  },
  trace: {
    name: "sqlite3_trace",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer",
  },
  profile: {
    name: "sqlite3_profile",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer",
  },
  trace_v2: {
    name: "sqlite3_trace_v2",
    parameters: ["pointer", "u32", "function", "pointer"],
    result: "i32",
  },
  progress_handler: {
    name: "sqlite3_progress_handler",
    parameters: ["pointer", "i32", "function", "pointer"],
    result: "void",
  },
  open: {
    name: "sqlite3_open",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  open16: {
    name: "sqlite3_open16",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  open_v2: {
    name: "sqlite3_open_v2",
    parameters: ["pointer", "pointer", "i32", "pointer"],
    result: "i32",
  },
  uri_parameter: {
    name: "sqlite3_uri_parameter",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  uri_boolean: {
    name: "sqlite3_uri_boolean",
    parameters: ["pointer", "pointer", "i32"],
    result: "i32",
  },
  uri_int64: {
    name: "sqlite3_uri_int64",
    parameters: ["pointer", "pointer", "i64"],
    result: "i64",
  },
  uri_key: {
    name: "sqlite3_uri_key",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  filename_database: {
    name: "sqlite3_filename_database",
    parameters: ["pointer"],
    result: "pointer",
  },
  filename_journal: {
    name: "sqlite3_filename_journal",
    parameters: ["pointer"],
    result: "pointer",
  },
  filename_wal: {
    name: "sqlite3_filename_wal",
    parameters: ["pointer"],
    result: "pointer",
  },
  database_file_object: {
    name: "sqlite3_database_file_object",
    parameters: ["pointer"],
    result: "pointer",
  },
  create_filename: {
    name: "sqlite3_create_filename",
    parameters: ["pointer", "pointer", "pointer", "i32", "pointer"],
    result: "pointer",
  },
  free_filename: {
    name: "sqlite3_free_filename",
    parameters: ["pointer"],
    result: "void",
  },
  errcode: {
    name: "sqlite3_errcode",
    parameters: ["pointer"],
    result: "i32",
  },
  extended_errcode: {
    name: "sqlite3_extended_errcode",
    parameters: ["pointer"],
    result: "i32",
  },
  errmsg: {
    name: "sqlite3_errmsg",
    parameters: ["pointer"],
    result: "pointer",
  },
  errmsg16: {
    name: "sqlite3_errmsg16",
    parameters: ["pointer"],
    result: "pointer",
  },
  errstr: {
    name: "sqlite3_errstr",
    parameters: ["i32"],
    result: "pointer",
  },
  limit: {
    name: "sqlite3_limit",
    parameters: ["pointer", "i32", "i32"],
    result: "i32",
  },
  prepare: {
    name: "sqlite3_prepare",
    parameters: ["pointer", "pointer", "i32", "pointer", "pointer"],
    result: "i32",
  },
  prepare_v2: {
    name: "sqlite3_prepare_v2",
    parameters: ["pointer", "pointer", "i32", "pointer", "pointer"],
    result: "i32",
  },
  prepare_v3: {
    name: "sqlite3_prepare_v3",
    parameters: ["pointer", "pointer", "i32", "u32", "pointer", "pointer"],
    result: "i32",
  },
  prepare16: {
    name: "sqlite3_prepare16",
    parameters: ["pointer", "pointer", "i32", "pointer", "pointer"],
    result: "i32",
  },
  prepare16_v2: {
    name: "sqlite3_prepare16_v2",
    parameters: ["pointer", "pointer", "i32", "pointer", "pointer"],
    result: "i32",
  },
  prepare16_v3: {
    name: "sqlite3_prepare16_v3",
    parameters: ["pointer", "pointer", "i32", "u32", "pointer", "pointer"],
    result: "i32",
  },
  sql: {
    name: "sqlite3_sql",
    parameters: ["pointer"],
    result: "pointer",
  },
  expanded_sql: {
    name: "sqlite3_expanded_sql",
    parameters: ["pointer"],
    result: "pointer",
  },
  stmt_readonly: {
    name: "sqlite3_stmt_readonly",
    parameters: ["pointer"],
    result: "i32",
  },
  stmt_isexplain: {
    name: "sqlite3_stmt_isexplain",
    parameters: ["pointer"],
    result: "i32",
  },
  stmt_busy: {
    name: "sqlite3_stmt_busy",
    parameters: ["pointer"],
    result: "i32",
  },
  bind_blob: {
    name: "sqlite3_bind_blob",
    parameters: ["pointer", "i32", "pointer", "i32", "function"],
    result: "i32",
  },
  bind_blob64: {
    name: "sqlite3_bind_blob64",
    parameters: ["pointer", "i32", "pointer", "u64", "function"],
    result: "i32",
  },
  bind_double: {
    name: "sqlite3_bind_double",
    parameters: ["pointer", "i32", "f64"],
    result: "i32",
  },
  bind_int: {
    name: "sqlite3_bind_int",
    parameters: ["pointer", "i32", "i32"],
    result: "i32",
  },
  bind_int64: {
    name: "sqlite3_bind_int64",
    parameters: ["pointer", "i32", "i64"],
    result: "i32",
  },
  bind_null: {
    name: "sqlite3_bind_null",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  bind_text: {
    name: "sqlite3_bind_text",
    parameters: ["pointer", "i32", "pointer", "i32", "function"],
    result: "i32",
  },
  bind_text16: {
    name: "sqlite3_bind_text16",
    parameters: ["pointer", "i32", "pointer", "i32", "function"],
    result: "i32",
  },
  bind_text64: {
    name: "sqlite3_bind_text64",
    parameters: ["pointer", "i32", "pointer", "u64", "function", "u8"],
    result: "i32",
  },
  bind_value: {
    name: "sqlite3_bind_value",
    parameters: ["pointer", "i32", "pointer"],
    result: "i32",
  },
  bind_pointer: {
    name: "sqlite3_bind_pointer",
    parameters: ["pointer", "i32", "pointer", "pointer", "function"],
    result: "i32",
  },
  bind_zeroblob: {
    name: "sqlite3_bind_zeroblob",
    parameters: ["pointer", "i32", "i32"],
    result: "i32",
  },
  bind_zeroblob64: {
    name: "sqlite3_bind_zeroblob64",
    parameters: ["pointer", "i32", "u64"],
    result: "i32",
  },
  bind_parameter_count: {
    name: "sqlite3_bind_parameter_count",
    parameters: ["pointer"],
    result: "i32",
  },
  bind_parameter_name: {
    name: "sqlite3_bind_parameter_name",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  bind_parameter_index: {
    name: "sqlite3_bind_parameter_index",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  clear_bindings: {
    name: "sqlite3_clear_bindings",
    parameters: ["pointer"],
    result: "i32",
  },
  column_count: {
    name: "sqlite3_column_count",
    parameters: ["pointer"],
    result: "i32",
  },
  column_name: {
    name: "sqlite3_column_name",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_name16: {
    name: "sqlite3_column_name16",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_database_name: {
    name: "sqlite3_column_database_name",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_database_name16: {
    name: "sqlite3_column_database_name16",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_table_name: {
    name: "sqlite3_column_table_name",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_table_name16: {
    name: "sqlite3_column_table_name16",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_origin_name: {
    name: "sqlite3_column_origin_name",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_origin_name16: {
    name: "sqlite3_column_origin_name16",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_decltype: {
    name: "sqlite3_column_decltype",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_decltype16: {
    name: "sqlite3_column_decltype16",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  step: {
    name: "sqlite3_step",
    parameters: ["pointer"],
    result: "i32",
  },
  data_count: {
    name: "sqlite3_data_count",
    parameters: ["pointer"],
    result: "i32",
  },
  column_blob: {
    name: "sqlite3_column_blob",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_double: {
    name: "sqlite3_column_double",
    parameters: ["pointer", "i32"],
    result: "f64",
  },
  column_int: {
    name: "sqlite3_column_int",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  column_int64: {
    name: "sqlite3_column_int64",
    parameters: ["pointer", "i32"],
    result: "i64",
  },
  column_text: {
    name: "sqlite3_column_text",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_text16: {
    name: "sqlite3_column_text16",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_value: {
    name: "sqlite3_column_value",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  column_bytes: {
    name: "sqlite3_column_bytes",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  column_bytes16: {
    name: "sqlite3_column_bytes16",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  column_type: {
    name: "sqlite3_column_type",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  finalize: {
    name: "sqlite3_finalize",
    parameters: ["pointer"],
    result: "i32",
  },
  reset: {
    name: "sqlite3_reset",
    parameters: ["pointer"],
    result: "i32",
  },
  create_function: {
    name: "sqlite3_create_function",
    parameters: ["pointer", "pointer", "i32", "i32", "pointer", "function", "function", "function"],
    result: "i32",
  },
  create_function16: {
    name: "sqlite3_create_function16",
    parameters: ["pointer", "pointer", "i32", "i32", "pointer", "function", "function", "function"],
    result: "i32",
  },
  create_function_v2: {
    name: "sqlite3_create_function_v2",
    parameters: ["pointer", "pointer", "i32", "i32", "pointer", "function", "function", "function", "function"],
    result: "i32",
  },
  create_window_function: {
    name: "sqlite3_create_window_function",
    parameters: ["pointer", "pointer", "i32", "i32", "pointer", "function", "function", "function", "function", "function"],
    result: "i32",
  },
  aggregate_count: {
    name: "sqlite3_aggregate_count",
    parameters: ["pointer"],
    result: "i32",
  },
  expired: {
    name: "sqlite3_expired",
    parameters: ["pointer"],
    result: "i32",
  },
  transfer_bindings: {
    name: "sqlite3_transfer_bindings",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  global_recover: {
    name: "sqlite3_global_recover",
    parameters: [],
    result: "i32",
  },
  thread_cleanup: {
    name: "sqlite3_thread_cleanup",
    parameters: [],
    result: "void",
  },
  memory_alarm: {
    name: "sqlite3_memory_alarm",
    parameters: ["function", "pointer", "i64"],
    result: "i32",
  },
  value_blob: {
    name: "sqlite3_value_blob",
    parameters: ["pointer"],
    result: "pointer",
  },
  value_double: {
    name: "sqlite3_value_double",
    parameters: ["pointer"],
    result: "f64",
  },
  value_int: {
    name: "sqlite3_value_int",
    parameters: ["pointer"],
    result: "i32",
  },
  value_int64: {
    name: "sqlite3_value_int64",
    parameters: ["pointer"],
    result: "i64",
  },
  value_pointer: {
    name: "sqlite3_value_pointer",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  value_text: {
    name: "sqlite3_value_text",
    parameters: ["pointer"],
    result: "pointer",
  },
  value_text16: {
    name: "sqlite3_value_text16",
    parameters: ["pointer"],
    result: "pointer",
  },
  value_text16le: {
    name: "sqlite3_value_text16le",
    parameters: ["pointer"],
    result: "pointer",
  },
  value_text16be: {
    name: "sqlite3_value_text16be",
    parameters: ["pointer"],
    result: "pointer",
  },
  value_bytes: {
    name: "sqlite3_value_bytes",
    parameters: ["pointer"],
    result: "i32",
  },
  value_bytes16: {
    name: "sqlite3_value_bytes16",
    parameters: ["pointer"],
    result: "i32",
  },
  value_type: {
    name: "sqlite3_value_type",
    parameters: ["pointer"],
    result: "i32",
  },
  value_numeric_type: {
    name: "sqlite3_value_numeric_type",
    parameters: ["pointer"],
    result: "i32",
  },
  value_nochange: {
    name: "sqlite3_value_nochange",
    parameters: ["pointer"],
    result: "i32",
  },
  value_frombind: {
    name: "sqlite3_value_frombind",
    parameters: ["pointer"],
    result: "i32",
  },
  value_subtype: {
    name: "sqlite3_value_subtype",
    parameters: ["pointer"],
    result: "u32",
  },
  value_dup: {
    name: "sqlite3_value_dup",
    parameters: ["pointer"],
    result: "pointer",
  },
  value_free: {
    name: "sqlite3_value_free",
    parameters: ["pointer"],
    result: "void",
  },
  aggregate_context: {
    name: "sqlite3_aggregate_context",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  user_data: {
    name: "sqlite3_user_data",
    parameters: ["pointer"],
    result: "pointer",
  },
  context_db_handle: {
    name: "sqlite3_context_db_handle",
    parameters: ["pointer"],
    result: "pointer",
  },
  get_auxdata: {
    name: "sqlite3_get_auxdata",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  set_auxdata: {
    name: "sqlite3_set_auxdata",
    parameters: ["pointer", "i32", "pointer", "function"],
    result: "void",
  },
  result_blob: {
    name: "sqlite3_result_blob",
    parameters: ["pointer", "pointer", "i32", "function"],
    result: "void",
  },
  result_blob64: {
    name: "sqlite3_result_blob64",
    parameters: ["pointer", "pointer", "u64", "function"],
    result: "void",
  },
  result_double: {
    name: "sqlite3_result_double",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  result_error: {
    name: "sqlite3_result_error",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  result_error16: {
    name: "sqlite3_result_error16",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  result_error_toobig: {
    name: "sqlite3_result_error_toobig",
    parameters: ["pointer"],
    result: "void",
  },
  result_error_nomem: {
    name: "sqlite3_result_error_nomem",
    parameters: ["pointer"],
    result: "void",
  },
  result_error_code: {
    name: "sqlite3_result_error_code",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  result_int: {
    name: "sqlite3_result_int",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  result_int64: {
    name: "sqlite3_result_int64",
    parameters: ["pointer", "i64"],
    result: "void",
  },
  result_null: {
    name: "sqlite3_result_null",
    parameters: ["pointer"],
    result: "void",
  },
  result_text: {
    name: "sqlite3_result_text",
    parameters: ["pointer", "pointer", "i32", "function"],
    result: "void",
  },
  result_text64: {
    name: "sqlite3_result_text64",
    parameters: ["pointer", "pointer", "u64", "function", "u8"],
    result: "void",
  },
  result_text16: {
    name: "sqlite3_result_text16",
    parameters: ["pointer", "pointer", "i32", "function"],
    result: "void",
  },
  result_text16le: {
    name: "sqlite3_result_text16le",
    parameters: ["pointer", "pointer", "i32", "function"],
    result: "void",
  },
  result_text16be: {
    name: "sqlite3_result_text16be",
    parameters: ["pointer", "pointer", "i32", "function"],
    result: "void",
  },
  result_value: {
    name: "sqlite3_result_value",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  result_pointer: {
    name: "sqlite3_result_pointer",
    parameters: ["pointer", "pointer", "pointer", "function"],
    result: "void",
  },
  result_zeroblob: {
    name: "sqlite3_result_zeroblob",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  result_zeroblob64: {
    name: "sqlite3_result_zeroblob64",
    parameters: ["pointer", "u64"],
    result: "i32",
  },
  result_subtype: {
    name: "sqlite3_result_subtype",
    parameters: ["pointer", "u32"],
    result: "void",
  },
  create_collation: {
    name: "sqlite3_create_collation",
    parameters: ["pointer", "pointer", "i32", "pointer", "function"],
    result: "i32",
  },
  create_collation_v2: {
    name: "sqlite3_create_collation_v2",
    parameters: ["pointer", "pointer", "i32", "pointer", "function", "function"],
    result: "i32",
  },
  create_collation16: {
    name: "sqlite3_create_collation16",
    parameters: ["pointer", "pointer", "i32", "pointer", "function"],
    result: "i32",
  },
  collation_needed: {
    name: "sqlite3_collation_needed",
    parameters: ["pointer", "pointer", "function"],
    result: "i32",
  },
  collation_needed16: {
    name: "sqlite3_collation_needed16",
    parameters: ["pointer", "pointer", "function"],
    result: "i32",
  },
  sleep: {
    name: "sqlite3_sleep",
    parameters: ["i32"],
    result: "i32",
  },
  get_autocommit: {
    name: "sqlite3_get_autocommit",
    parameters: ["pointer"],
    result: "i32",
  },
  db_handle: {
    name: "sqlite3_db_handle",
    parameters: ["pointer"],
    result: "pointer",
  },
  db_filename: {
    name: "sqlite3_db_filename",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  db_readonly: {
    name: "sqlite3_db_readonly",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  txn_state: {
    name: "sqlite3_txn_state",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  next_stmt: {
    name: "sqlite3_next_stmt",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  commit_hook: {
    name: "sqlite3_commit_hook",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer",
  },
  rollback_hook: {
    name: "sqlite3_rollback_hook",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer",
  },
  update_hook: {
    name: "sqlite3_update_hook",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer",
  },
  enable_shared_cache: {
    name: "sqlite3_enable_shared_cache",
    parameters: ["i32"],
    result: "i32",
  },
  release_memory: {
    name: "sqlite3_release_memory",
    parameters: ["i32"],
    result: "i32",
  },
  db_release_memory: {
    name: "sqlite3_db_release_memory",
    parameters: ["pointer"],
    result: "i32",
  },
  soft_heap_limit64: {
    name: "sqlite3_soft_heap_limit64",
    parameters: ["i64"],
    result: "i64",
  },
  hard_heap_limit64: {
    name: "sqlite3_hard_heap_limit64",
    parameters: ["i64"],
    result: "i64",
  },
  soft_heap_limit: {
    name: "sqlite3_soft_heap_limit",
    parameters: ["i32"],
    result: "void",
  },
  table_column_metadata: {
    name: "sqlite3_table_column_metadata",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "i32",
  },
  load_extension: {
    name: "sqlite3_load_extension",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "i32",
  },
  enable_load_extension: {
    name: "sqlite3_enable_load_extension",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  auto_extension: {
    name: "sqlite3_auto_extension",
    parameters: ["function"],
    result: "i32",
  },
  cancel_auto_extension: {
    name: "sqlite3_cancel_auto_extension",
    parameters: ["function"],
    result: "i32",
  },
  reset_auto_extension: {
    name: "sqlite3_reset_auto_extension",
    parameters: [],
    result: "void",
  },
  create_module: {
    name: "sqlite3_create_module",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "i32",
  },
  create_module_v2: {
    name: "sqlite3_create_module_v2",
    parameters: ["pointer", "pointer", "pointer", "pointer", "function"],
    result: "i32",
  },
  drop_modules: {
    name: "sqlite3_drop_modules",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  declare_vtab: {
    name: "sqlite3_declare_vtab",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  overload_function: {
    name: "sqlite3_overload_function",
    parameters: ["pointer", "pointer", "i32"],
    result: "i32",
  },
  blob_open: {
    name: "sqlite3_blob_open",
    parameters: ["pointer", "pointer", "pointer", "pointer", "i64", "i32", "pointer"],
    result: "i32",
  },
  blob_reopen: {
    name: "sqlite3_blob_reopen",
    parameters: ["pointer", "i64"],
    result: "i32",
  },
  blob_close: {
    name: "sqlite3_blob_close",
    parameters: ["pointer"],
    result: "i32",
  },
  blob_bytes: {
    name: "sqlite3_blob_bytes",
    parameters: ["pointer"],
    result: "i32",
  },
  blob_read: {
    name: "sqlite3_blob_read",
    parameters: ["pointer", "pointer", "i32", "i32"],
    result: "i32",
  },
  blob_write: {
    name: "sqlite3_blob_write",
    parameters: ["pointer", "pointer", "i32", "i32"],
    result: "i32",
  },
  vfs_find: {
    name: "sqlite3_vfs_find",
    parameters: ["pointer"],
    result: "pointer",
  },
  vfs_register: {
    name: "sqlite3_vfs_register",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  vfs_unregister: {
    name: "sqlite3_vfs_unregister",
    parameters: ["pointer"],
    result: "i32",
  },
  mutex_alloc: {
    name: "sqlite3_mutex_alloc",
    parameters: ["i32"],
    result: "pointer",
  },
  mutex_free: {
    name: "sqlite3_mutex_free",
    parameters: ["pointer"],
    result: "void",
  },
  mutex_enter: {
    name: "sqlite3_mutex_enter",
    parameters: ["pointer"],
    result: "void",
  },
  mutex_try: {
    name: "sqlite3_mutex_try",
    parameters: ["pointer"],
    result: "i32",
  },
  mutex_leave: {
    name: "sqlite3_mutex_leave",
    parameters: ["pointer"],
    result: "void",
  },
  db_mutex: {
    name: "sqlite3_db_mutex",
    parameters: ["pointer"],
    result: "pointer",
  },
  file_control: {
    name: "sqlite3_file_control",
    parameters: ["pointer", "pointer", "i32", "pointer"],
    result: "i32",
  },
  test_control: {
    name: "sqlite3_test_control",
    parameters: ["i32"],
    result: "i32",
  },
  keyword_count: {
    name: "sqlite3_keyword_count",
    parameters: [],
    result: "i32",
  },
  keyword_name: {
    name: "sqlite3_keyword_name",
    parameters: ["i32", "pointer", "pointer"],
    result: "i32",
  },
  keyword_check: {
    name: "sqlite3_keyword_check",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  str_new: {
    name: "sqlite3_str_new",
    parameters: ["pointer"],
    result: "pointer",
  },
  str_finish: {
    name: "sqlite3_str_finish",
    parameters: ["pointer"],
    result: "pointer",
  },
  str_appendf: {
    name: "sqlite3_str_appendf",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  str_vappendf: {
    name: "sqlite3_str_vappendf",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  str_append: {
    name: "sqlite3_str_append",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  str_appendall: {
    name: "sqlite3_str_appendall",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  str_appendchar: {
    name: "sqlite3_str_appendchar",
    parameters: ["pointer", "i32", "i8"],
    result: "void",
  },
  str_reset: {
    name: "sqlite3_str_reset",
    parameters: ["pointer"],
    result: "void",
  },
  str_errcode: {
    name: "sqlite3_str_errcode",
    parameters: ["pointer"],
    result: "i32",
  },
  str_length: {
    name: "sqlite3_str_length",
    parameters: ["pointer"],
    result: "i32",
  },
  str_value: {
    name: "sqlite3_str_value",
    parameters: ["pointer"],
    result: "pointer",
  },
  status: {
    name: "sqlite3_status",
    parameters: ["i32", "pointer", "pointer", "i32"],
    result: "i32",
  },
  status64: {
    name: "sqlite3_status64",
    parameters: ["i32", "pointer", "pointer", "i32"],
    result: "i32",
  },
  db_status: {
    name: "sqlite3_db_status",
    parameters: ["pointer", "i32", "pointer", "pointer", "i32"],
    result: "i32",
  },
  stmt_status: {
    name: "sqlite3_stmt_status",
    parameters: ["pointer", "i32", "i32"],
    result: "i32",
  },
  backup_init: {
    name: "sqlite3_backup_init",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "pointer",
  },
  backup_step: {
    name: "sqlite3_backup_step",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  backup_finish: {
    name: "sqlite3_backup_finish",
    parameters: ["pointer"],
    result: "i32",
  },
  backup_remaining: {
    name: "sqlite3_backup_remaining",
    parameters: ["pointer"],
    result: "i32",
  },
  backup_pagecount: {
    name: "sqlite3_backup_pagecount",
    parameters: ["pointer"],
    result: "i32",
  },
  unlock_notify: {
    name: "sqlite3_unlock_notify",
    parameters: ["pointer", "function", "pointer"],
    result: "i32",
  },
  stricmp: {
    name: "sqlite3_stricmp",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  strnicmp: {
    name: "sqlite3_strnicmp",
    parameters: ["pointer", "pointer", "i32"],
    result: "i32",
  },
  strglob: {
    name: "sqlite3_strglob",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  strlike: {
    name: "sqlite3_strlike",
    parameters: ["pointer", "pointer", "u32"],
    result: "i32",
  },
  log: {
    name: "sqlite3_log",
    parameters: ["i32", "pointer"],
    result: "void",
  },
  wal_hook: {
    name: "sqlite3_wal_hook",
    parameters: ["pointer", "function", "pointer"],
    result: "pointer",
  },
  wal_autocheckpoint: {
    name: "sqlite3_wal_autocheckpoint",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  wal_checkpoint: {
    name: "sqlite3_wal_checkpoint",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  wal_checkpoint_v2: {
    name: "sqlite3_wal_checkpoint_v2",
    parameters: ["pointer", "pointer", "i32", "pointer", "pointer"],
    result: "i32",
  },
  vtab_config: {
    name: "sqlite3_vtab_config",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  vtab_on_conflict: {
    name: "sqlite3_vtab_on_conflict",
    parameters: ["pointer"],
    result: "i32",
  },
  vtab_nochange: {
    name: "sqlite3_vtab_nochange",
    parameters: ["pointer"],
    result: "i32",
  },
  vtab_collation: {
    name: "sqlite3_vtab_collation",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  db_cacheflush: {
    name: "sqlite3_db_cacheflush",
    parameters: ["pointer"],
    result: "i32",
  },
  system_errno: {
    name: "sqlite3_system_errno",
    parameters: ["pointer"],
    result: "i32",
  },
  rtree_geometry_callback: {
    name: "sqlite3_rtree_geometry_callback",
    parameters: ["pointer", "pointer", "function", "pointer"],
    result: "i32",
  },
  rtree_query_callback: {
    name: "sqlite3_rtree_query_callback",
    parameters: ["pointer", "pointer", "function", "pointer", "function"],
    result: "i32",
  }
} as const;
