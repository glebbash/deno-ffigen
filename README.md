# deno-ffigen - FFI Bindings generator for Deno

This tool will create typesafe bindings for a C library. You need to provide a C
header file and shared library file.

## Status

**EXPERIMENTAL**

Bindings generation tested for:

- LLVM-C, versions (14, 15)
- sqlite3
- lua 5.4

Try it out though, it might just work.

## Prerequisites

- [docker](https://www.docker.com/)
- [deno](https://deno.land/)

Following sections assume that [[C_LIB]] is the name of the library you are
generating bindings for.

## Usage

There are 2 usage variants:

- build script (recommended)
- manual steps and cli (for simple cases)

## Usage: Build script

Create a `build.ts` file that uses functions from `ffigen`.

You can find example (working) build scripts in:

- [llvm-14](https://deno.land/x/ffigen@0.2.0/examples/llvm-c-14/build.ts)
- [sqlite3](https://deno.land/x/ffigen@0.2.0/examples/sqlite3/build.ts)
- [lua](https://deno.land/x/ffigen@0.2.0/examples/lua/build.ts)

Run it using:

```bash
deno run -A build.ts
```

## Usage: Manual steps + cli

### Extract definitions from [[C_LIB]].h

```sh
docker run -v $(pwd):/data glebbash/deno-ffigen-c2ffi /data/input/[[C_LIB]].h > input/[[C_LIB]].json
```

This will use prebuilt docker image of [c2ffi](https://github.com/rpav/c2ffi) to
generate `input/[[C_LIB]].json` file containing all symbols found in
`input/[[C_LIB]].h`.

### Extract symbols from [[C_LIB]].so

```sh
readelf -Ws --dyn-syms input/[[C_LIB]].so > input/[[C_LIB]]_symbols.txt
```

This will generate `input/[[C_LIB]]_symbols.txt` file containing names of all
exposed symbols of `input/[[C_LIB]].so`.

## Generate bindings

```sh
deno run -A https://deno.land/x/ffigen/cli.ts \
  --definitions input/[[C_LIB]].json \
  --symbols input/[[C_LIB]]_symbols.txt \
  --headers [[HEADERS_BASE_URL]] \
  --lib-name [[LIB_NAME]]
```

Using `input/[[C_LIB]].json` and `input/[[C_LIB]]_symbols.txt` as inputs
deno-ffigen generates the following files:

- `[[LIB_NAME]]/mod.ts` - Bindings entry that also dlopens the shared lib
- `[[LIB_NAME]]/types.ts` - Namespace with all type/enum/function definitions
- `[[LIB_NAME]]/symbols.ts` - Exports object with lib definition for
  `Deno.dlopen`
- `[[LIB_NAME]]/safe-ffi.ts` - Type utils for making pointers typesafe

For all the available options run

```bash
deno run -A https://deno.land/x/ffigen/cli.ts --help
```
