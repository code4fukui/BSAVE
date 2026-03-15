# BSAVE

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

BSAVE is a format for storing binary data with metadata such as start address, end address, and execution address.

## Format of BSAVE

| Offset | Size | Description |
|-|-|-|
| 0 | 1 | BSAVE format identifier (0xFE) |
| 1 | 2 | Start address |
| 3 | 2 | End address |
| 5 | 2 | Execution address |
| 7 | n | Actual binary data |

## Usage

```js
import { BSAVE } from "https://code4fukui.github.io/BSAVE/BSAVE.js";

console.log(BSAVE.decode(bin));
```

## License

MIT License

Copyright (c) 2025 Taisuke Fukuno