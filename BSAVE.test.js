import * as t from "https://deno.land/std/testing/asserts.ts";
import { BSAVE } from "./BSAVE.js";
import { eqbin } from "https://code4fukui.github.io/binutil/binutil.js";

Deno.test("simple", async () => {
  const bin = await Deno.readFile("KAWA-ROM.BIN");
  const res = BSAVE.decode(bin);
  console.log(res);
  const bin2 = BSAVE.encode(res);
  t.assert(eqbin(bin, bin2));
});
