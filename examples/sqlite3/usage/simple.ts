import {
  alloc,
  cstr,
  loadsqlite3,
  Pointer,
  readCString,
  sqlite3,
} from "../sqlite3/mod.ts";

const SQLITE_OK = 0;
const SQLITE_ROW = 100;

const _ = loadsqlite3("./input/libsqlite3.so.0.8.6");

const dbRefRef = alloc<Pointer<sqlite3.sqlite3>>();
const stmtRefRef = alloc<Pointer<sqlite3.sqlite3_stmt>>();

let rc = _.sqlite3_open(cstr(":memory:"), dbRefRef);
const dbRef = derefRef(dbRefRef);

if (rc !== SQLITE_OK) {
  throw new Error(`sqlite3_open failed: ${_.sqlite3_errmsg(dbRef)}`);
}

rc = _.sqlite3_prepare_v2(
  dbRef,
  cstr("SELECT SQLITE_VERSION()"),
  -1,
  stmtRefRef,
  null as never,
);
if (rc !== SQLITE_OK) {
  throw new Error(`sqlite3_prepare_v2 failed: ${_.sqlite3_errmsg(dbRef)}`);
}
const stmtRef = derefRef(stmtRefRef);

rc = _.sqlite3_step(stmtRef);
if (rc === SQLITE_ROW) {
  console.log(readCString(_.sqlite3_column_text(stmtRef, 0)));
}

_.sqlite3_finalize(stmtRef);
_.sqlite3_close(dbRef);

// utils

function derefRef<T extends bigint>(ptr: Pointer<Pointer<T>>): Pointer<T> {
  return new Deno.UnsafePointerView(ptr).getBigUint64() as Pointer<T>;
}
