/** Execute the given `command` in the shell. */
export async function exec(command: string) {
  await new Deno.Command("bash", {
    args: ["-c", command],
  }).output();
}
