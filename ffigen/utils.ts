/** Execute the given `command` in the shell. */
export async function exec(command: string) {
  console.log("> " + command);

  await new Deno.Command("bash", {
    args: ["-c", command],
    stdout: "inherit",
    stderr: "inherit",
  }).output();
}

/**
 * Temporarily changes the current working directory and restores it when disposed.
 *
 * @example
 * using _ = tmpCwd(import.meta.dirname!);
 */
export function tmpCwd(folder: string): Disposable {
  const cwd = Deno.cwd();
  Deno.chdir(folder);
  return { [Symbol.dispose]: () => Deno.chdir(cwd) };
}
