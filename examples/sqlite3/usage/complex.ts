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

_.sqlite3_finalize(stmt);
_.sqlite3_close(db);

// helpers

function openDb(fileName = ":memory:") {
  const dbRef = alloc<Pointer<sqlite3.sqlite3>>();

  const rc = _.sqlite3_open(cstr(fileName), dbRef);
  const db = deref(dbRef);

  if (rc !== SQLITE_OK) {
    throw new Error(`sqlite3_open failed: ${_.sqlite3_errmsg(db)}`);
  }

  return db;
}

function execStmt(db: Pointer<sqlite3.sqlite3>, stmt: string) {
  const errRef = alloc<Pointer<number>>();
  const rc = _.sqlite3_exec(
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

function prepareStatement(dbRef: Pointer<sqlite3.sqlite3>, statement: string) {
  const stmtRef = alloc<Pointer<sqlite3.sqlite3_stmt>>();
  const rc = _.sqlite3_prepare_v2(
    dbRef,
    cstr(statement),
    -1,
    stmtRef,
    null as never,
  );

  if (rc !== SQLITE_OK) {
    throw new Error(`sqlite3_prepare_v2 failed: ${_.sqlite3_errmsg(dbRef)}`);
  }

  return deref(stmtRef);
}

function step(stmt: Pointer<sqlite3.sqlite3_stmt>): boolean {
  const rc = _.sqlite3_step(stmt);
  return rc === SQLITE_ROW;
}

function columnInt(stmt: Pointer<sqlite3.sqlite3_stmt>, column: number) {
  return _.sqlite3_column_int(stmt, column);
}

function columnText(stmt: Pointer<sqlite3.sqlite3_stmt>, column: number) {
  return readCString(_.sqlite3_column_text(stmt, column));
}

// low-level helpers

function deref<T>(ptr: Pointer<Pointer<T>>): Pointer<T> {
  return new Deno.UnsafePointerView(ptr).getBigUint64() as Pointer<T>;
}
