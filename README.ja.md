# BSAVE

BSAVEは、開始アドレス、終了アドレス、実行アドレスなどのメタデータと共にバイナリデータを保存するためのフォーマットです。

## BSAVEフォーマット

| オフセット | サイズ | 説明 |
|-|-|-|
| 0 | 1 | BSAVEフォーマット識別子 (0xFE) |
| 1 | 2 | 開始アドレス |
| 3 | 2 | 終了アドレス |
| 5 | 2 | 実行アドレス |
| 7 | n | 実際のバイナリデータ |

## 使い方

```js
import { BSAVE } from "https://code4fukui.github.io/BSAVE/BSAVE.js";

console.log(BSAVE.decode(bin));
```

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
