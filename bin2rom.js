import { BSAVE } from "./BSAVE.js";

const fnbin = Deno.args[0];
const fnrom = Deno.args[1];
if (!fnbin || !fnrom) {
  console.log("bin2rom [bsave file] [rom file]");
  Deno.exit(1);
}

const bin = await Deno.readFile(fnbin);
const bsave = BSAVE.decode(bin);
if (bsave.start != 0x8000) throw new Error("not ROM address");
await Deno.writeFile(fnrom, bsave.data);
