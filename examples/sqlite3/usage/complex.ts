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

const db = openDb("test.db");

execStmt(
  db,
  "DROP TABLE IF EXISTS Cars;" +
    "CREATE TABLE Cars(Id INT, Name TEXT, Price INT);" +
    "INSERT INTO Cars VALUES(1, 'Audi', 52642);" +
    "INSERT INTO Cars VALUES(2, 'Mercedes', 57127);" +
    "INSERT INTO Cars VALUES(3, 'Skoda', 9000);" +
    "INSERT INTO Cars VALUES(4, 'Volvo', 29000);" +
    "INSERT INTO Cars VALUES(5, 'Bentley', 350000);" +
    "INSERT INTO Cars VALUES(6, 'Citroen', 21000);" +
    "INSERT INTO Cars VALUES(7, 'Hummer', 41400);" +
    "INSERT INTO Cars VALUES(8, 'Volkswagen', 21600);",
);

const stmt = prepareStatement(db, "SELECT * FROM Cars");
while (step(stmt)) {
  console.log(columnInt(stmt, 0), columnText(stmt, 1), columnInt(stmt, 2));
}

sqlite3.finalize(stmt);
sqlite3.close(db);

// helpers

function openDb(fileName = ":memory:") {
  const dbRef = alloc<Pointer<SQLite3.$sqlite3>>();

  const rc = sqlite3.open(cstr(fileName), dbRef);
  const db = deref(dbRef);

  if (rc !== SQLITE_OK) {
    throw new Error(`sqlite3_open failed: ${sqlite3.errmsg(db)}`);
  }

  return db;
}

function execStmt(db: Pointer<SQLite3.$sqlite3>, stmt: string) {
  const errRef = alloc<Pointer<number>>();
  const rc = sqlite3.exec(
    db,
    cstr(stmt),
    null as never,
    null as never,
    errRef,
  );

  if (rc !== SQLITE_OK) {
    const err = deref(errRef);
    throw new Error(`sqlite3_exec failed: ${readCString(err)}`);
  }
}

function prepareStatement(dbRef: Pointer<SQLite3.$sqlite3>, statement: string) {
  const stmtRef = alloc<Pointer<SQLite3.stmt>>();
  const rc = sqlite3.prepare_v2(
    dbRef,
    cstr(statement),
    -1,
    stmtRef,
    null as never,
  );

  if (rc !== SQLITE_OK) {
    throw new Error(`sqlite3_prepare_v2 failed: ${sqlite3.errmsg(dbRef)}`);
  }

  return deref(stmtRef);
}

function step(stmt: Pointer<SQLite3.stmt>): boolean {
  const rc = sqlite3.step(stmt);
  return rc === SQLITE_ROW;
}

function columnInt(stmt: Pointer<SQLite3.stmt>, column: number) {
  return sqlite3.column_int(stmt, column);
}

function columnText(stmt: Pointer<SQLite3.stmt>, column: number) {
  return readCString(sqlite3.column_text(stmt, column));
}

// low-level helpers

function deref<T>(ptr: Pointer<Pointer<T>>): Pointer<T> {
  return new Deno.UnsafePointerView(ptr!).getPointer();
}
