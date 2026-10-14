# endless.stream

[TanStack Start](https://tanstack.com/start) で構築し、[Cloudflare Workers](https://developers.cloudflare.com/workers/) にデプロイしています。

## 開発

```bash
bun install
bun run dev
```

[http://localhost:3000](http://localhost:3000) で起動します。

- ルーティングは `src/routes/` 配下のファイルベースです。`src/routeTree.gen.ts` は `dev` / `build` 時に自動生成されます。
- `worker-configuration.d.ts` は `bun install` 時（`cf-typegen`）に自動生成されます。

## 環境変数

| 名前 | 用途 | ローカル | 本番 |
| --- | --- | --- | --- |
| `LIVEKIT_API_KEY` / `LIVEKIT_API_SECRET` | `/api/get-participant-token`（Worker 実行時） | `.dev.vars` | `bunx wrangler secret put <NAME>` |
| `VITE_LIVEKIT_URL` | LiveKit の URL（**ビルド時**にバンドルへ埋め込み） | `.env` | ビルド環境の環境変数 |

`.dev.vars.example` / `.env.example` をコピーして使ってください。

## ビルド・デプロイ

```bash
bun run build    # vite build + tsc
bun run preview  # ビルド済み Worker をローカル（workerd）で起動
bun run deploy   # build + wrangler deploy
```

- 静的ファイルは `public/` に置きます。リダイレクトは `public/_redirects`、レスポンスヘッダーは `public/_headers` で設定します（Workers Static Assets）。
- Worker の設定は `wrangler.jsonc` にあります。
