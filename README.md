# Endless Stream

[vinext](https://github.com/cloudflare/vinext)（Vite 上で動く Next.js 互換フレームワーク）で構築し、Cloudflare Workers で動かしています。`app/` は Next.js の App Router と同じ書き方です。

## 必要なもの

- Node.js 22.12 以上
- [Bun](https://bun.sh)

## 開発

```bash
bun install
bun dev
```

[http://localhost:3000](http://localhost:3000) で開けます。

## 環境変数

LiveKit 用の値を `.dev.vars` に書きます（`.dev.vars.example` をコピー）。

| 変数                      | 用途                                                 |
| ------------------------- | ---------------------------------------------------- |
| `LIVEKIT_API_KEY`         | `/api/get-participant-token`（secret）               |
| `LIVEKIT_API_SECRET`      | `/api/get-participant-token`（secret）               |
| `NEXT_PUBLIC_LIVEKIT_URL` | LiveKit の URL。クライアント用の値はビルド時に埋め込まれます |

- `bun run start` はビルド時点の `.dev.vars` を使います。変更したら再ビルドしてください。
- `NEXT_PUBLIC_*` はビルド時の環境変数か `.env.production` などから読み込まれます。

## ビルドとローカル確認

```bash
bun run build
bun run start
```

ビルドした Worker が [http://localhost:8787](http://localhost:8787) で起動します。

## デプロイ

初回だけ、Cloudflare へのログインと secret の登録が必要です。

```bash
bunx wrangler login
bunx wrangler secret put LIVEKIT_API_KEY
bunx wrangler secret put LIVEKIT_API_SECRET
```

```bash
bun run deploy
```

`deploy` は型チェックとビルドも行います。サムネイル（`next/image`）は Cloudflare Images（`IMAGES` バインディング）で変換されます。
