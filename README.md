# BSAVE

```js
import { BSAVE } from "https://code4fukui.github.io/BSAVE/BSAVE.js";

console.log(BSAVE.decode(bin));
```

## format of BSAVE

|オフセット|容量|内訳|
|-|-|-|
|0|1|BSAVE形式の明示（0xFE）|
|1|2|開始アドレス|
|3|2|終了アドレス|
|5|2|実行アドレス|
|7|n|実際のバイナリデータ|
