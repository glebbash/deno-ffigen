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
 * Temporarily changes the current working directory to `dir` and restores the original when disposed.
 *
 * @example
 * using _ = tmpChdir(import.meta.dirname!);
 */
export function tmpChdir(dir: string): Disposable {
  const cwd = Deno.cwd();
  Deno.chdir(dir);
  return { [Symbol.dispose]: () => Deno.chdir(cwd) };
}
