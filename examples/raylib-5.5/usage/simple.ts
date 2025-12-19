import { cstr, loadRaylib } from "../lib/mod.ts";

const raylib = loadRaylib(import.meta.dirname + "/../input/libraylib.so");

console.log(
  "Non existing file exists:",
  raylib.FileExists(cstr(crypto.randomUUID() + ".txt")),
);

raylib.SetRandomSeed(Date.now());
let output = "";
for (let i = 0; i < 10; i++) {
  output += raylib.GetRandomValue(1, 10) + " ";
}
console.log("10 Random numbers:", output);
