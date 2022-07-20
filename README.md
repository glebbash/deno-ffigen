# deno-ffigen - FFI Bindings generator for Deno

This tool will create typesafe bindings for a C library. You need to provide a C header file and shared library file.

Prerequisites:
- [docker](https://www.docker.com/)
- [deno](https://deno.land/)

Following sections assume that [[C_LIB]] is the name of the library you are generating bindings for.

## Extract definitions from [[C_LIB]].h

```sh
docker run -v $(pwd):/data glebbash/deno-ffigen-c2ffi /data/input/[[C_LIB]].h > input/[[C_LIB]].json
```

This will use prebuilt docker image of [c2ffi](https://github.com/rpav/c2ffi) to generate `input/[[C_LIB]].json` file containing all symbols found in
`input/[[C_LIB]].h`.

## Extract symbols from [[C_LIB]].so

```sh
readelf -Ws --dyn-syms input/[[C_LIB]].so > input/[[C_LIB]]_symbols.txt
```

This will generate `input/[[C_LIB]]_symbols.txt` file containing names of all
exposed symbols of `input/[[C_LIB]].so`.

## Generate bindings

```sh
deno run -A https://raw.githubusercontent.com/glebbash/deno-ffigen/main/mod.ts \
  input/[[C_LIB]].json \
  input/[[C_LIB]]_symbols.txt \
  [[OUTPUT_FOLDER]] \
  [[LIB_PREFIX]] \
  [[SOURCE_BASE_URL]]
```

- [[LIB_PREFIX]]: Prefix of the C library, will be stripped from all functions and used as a namespace.
- [[OUTPUT_FOLDER]]: Folder where generated bindings will be placed.
- [[SOURCE_BASE_URL]]: Base url for the target library, will be used to generate links in description of each function. Example: `"https://github.com/llvm/llvm-project/blob/315072/llvm/include/"`

Using `input/[[C_LIB]].json` and `input/[[C_LIB]]_symbols.txt` as inputs deno-ffigen generates the following files:

- `[[OUTPUT_FOLDER]]/mod.ts` - Bindings entry that also dlopens the shared lib
- `[[OUTPUT_FOLDER]]/types.ts` - Namespace with all type/enum/function definitions
- `[[OUTPUT_FOLDER]]/symbols.ts` - Exports object with lib definition for `Deno.dlopen`
- `[[OUTPUT_FOLDER]]/safe-ffi.ts` - Type utils for making pointers typesafe
