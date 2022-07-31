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

let rc: number;

const dbRef = alloc<Pointer<sqlite3.sqlite3>>();
rc = _.sqlite3_open(cstr(":memory:"), dbRef);
const db = deref(dbRef);

if (rc !== SQLITE_OK) {
  throw new Error(`sqlite3_open failed: ${_.sqlite3_errmsg(db)}`);
}

const stmtRef = alloc<Pointer<sqlite3.sqlite3_stmt>>();
rc = _.sqlite3_prepare_v2(
  db,
  cstr("SELECT SQLITE_VERSION()"),
  -1,
  stmtRef,
  null as never,
);
const stmt = deref(stmtRef);

if (rc !== SQLITE_OK) {
  throw new Error(`sqlite3_prepare_v2 failed: ${_.sqlite3_errmsg(db)}`);
}

rc = _.sqlite3_step(stmt);
if (rc === SQLITE_ROW) {
  console.log(readCString(_.sqlite3_column_text(stmt, 0)));
}

_.sqlite3_finalize(stmt);
_.sqlite3_close(db);

// utils

function deref<T extends bigint>(ptr: Pointer<Pointer<T>>): Pointer<T> {
  return new Deno.UnsafePointerView(ptr).getBigUint64() as Pointer<T>;
}
