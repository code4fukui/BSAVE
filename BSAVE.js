import { bin2short, subbin, short2bin } from "https://code4fukui.github.io/binutil/binutil.js";

export const decode = (bin) => {
  if (bin[0] != 0xfe) throw new Error("not BSAVE");
  const start = bin2short(bin, 1, true);
  const end = bin2short(bin, 3, true);
  const exec = bin2short(bin, 5, true);
  const len = end - start + 1;
  const data = subbin(bin, 7, len);
  return { start, end, exec, data };
};

export const encode = ({ start, end, exec, data }) => {
  const res = new Uint8Array(data.length + 7);
  res[0] = 0xfe;
  short2bin(res, 1, start, true);
  short2bin(res, 3, end || start + data.length - 1, true);
  short2bin(res, 5, exec || 0, true);
  res.set(data, 7);
  return res;
};

export const BSAVE = { encode, decode };
