# sqlite3 Bindings generation

## Extract all symbols from sqlite3.h

```sh
docker run -v $(pwd):/data glebbash/deno-ffigen-c2ffi /data/input/sqlite3.h > input/sqlite3.json
```

This will generate `input/sqlite3.h` file containing all symbols found in
`input/sqlite3.json`.

## Extract exposed symbols from libsqlite3.so

```sh
readelf -Ws --dyn-syms input/libsqlite3.so.0.8.6 > input/sqlite3_symbols.txt
```

This will generate `input/sqlite3_symbols.txt` file containing names of all
exposed symbols of `input/libsqlite3.so.0.8.6`.

## Generate bindings

```sh
deno run -A https://deno.land/x/ffigen/cli.ts \
  --definitions input/sqlite3.json \
  --symbols input/sqlite3_symbols.txt \
  --lib-name sqlite3 \
  --no-lib-prefix \
  --headers "." \
  sqlite3
```

Using `input/sqlite3.json` and `input/sqlite3_symbols.txt` as inputs bindings
are generated for sqlite3.

Generated files are:

- `sqlite3/mod.ts` - Bindings entry that also dlopens the shared lib
- `sqlite3/types.ts` - Namespace with all type/enum/function definitions
- `sqlite3/symbols.ts` - Exports object with lib definition for `Deno.dlopen`
- `sqlite3/safe-ffi.ts` - Type utils for making pointer typesafe
