import {
  alloc,
  cstr,
  loadSQLite3,
  type Pointer,
  readCString,
  type SQLite3,
} from "../lib/mod.ts";

const SQLITE_OK = 0;
const SQLITE_ROW = 100;

const sqlite3 = loadSQLite3(
  import.meta.dirname + "../input/libsqlite3.so.0.8.6",
);

let rc: number;

const dbRef = alloc<Pointer<SQLite3.$sqlite3>>();
rc = sqlite3.open(cstr(":memory:"), dbRef);
const db = deref(dbRef);

if (rc !== SQLITE_OK) {
  throw new Error(`sqlite3_open failed: ${sqlite3.errmsg(db)}`);
}

const stmtRef = alloc<Pointer<SQLite3.stmt>>();
rc = sqlite3.prepare_v2(
  db,
  cstr("SELECT SQLITE_VERSION()"),
  -1,
  stmtRef,
  null as never,
);
const stmt = deref(stmtRef);

if (rc !== SQLITE_OK) {
  throw new Error(`sqlite3_prepare_v2 failed: ${sqlite3.errmsg(db)}`);
}

rc = sqlite3.step(stmt);
if (rc === SQLITE_ROW) {
  console.log(readCString(sqlite3.column_text(stmt, 0)));
}

sqlite3.finalize(stmt);
sqlite3.close(db);

// utils

function deref<T>(
  ptr: Pointer<Pointer<T>>,
): Pointer<T> {
  return new Deno.UnsafePointerView(ptr!).getPointer();
}
