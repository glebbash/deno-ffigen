/** Execute the given `command` in the shell. */
export async function exec(command: string) {
  await Deno.run({
    cmd: ["bash", "-c", command],
  }).status();
}
