// TODO: clean up
// TODO: check what can be done on struct support

export { generateBindings } from "./generate-bindings.ts";
export { getFunctionsFromSharedLib } from "./get-functions-from-shared-lib.ts";

export async function extractDefinitions(
  opts: { input: string; output: string },
) {
  await exec(
    `docker run -v $(pwd):/data glebbash/deno-ffigen-c2ffi ` +
      `/data/${opts.input} > ${opts.output}`,
  );
}

export async function extractSymbols(opts: { input: string; output: string }) {
  await exec(`readelf -Ws --dyn-syms ${opts.input} > ${opts.output}`);
}

export async function exec(command: string) {
  await Deno.run({
    cmd: ["bash", "-c", command],
  }).status();
}
