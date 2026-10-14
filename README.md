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

ローカルの環境変数は `.env` 1 ファイルにまとめています。`.env.example` をコピーして値を設定してください。

```bash
cp .env.example .env
```

| 名前                                     | 用途                                                                   | ローカル | 本番                              |
| ---------------------------------------- | ---------------------------------------------------------------------- | -------- | --------------------------------- |
| `LIVEKIT_API_KEY` / `LIVEKIT_API_SECRET` | `/api/get-participant-token`（Worker 実行時に `process.env` から参照） | `.env`   | `bunx wrangler secret put <NAME>` |
| `VITE_LIVEKIT_URL`                       | LiveKit の URL（**ビルド時**にバンドルへ埋め込み）                     | `.env`   | ビルド時の `.env` または環境変数  |

- Worker のシークレットは `wrangler.jsonc` の `secrets.required` で宣言しています。`.env` からは宣言したキーだけが Worker に渡り、型（`worker-configuration.d.ts`）もここから生成されます。
- `secrets.required` のシークレットが本番に設定されていないと `wrangler deploy` は失敗します。Preview には本番のシークレットが引き継がれません。新しく作られる Preview には `bunx wrangler preview base-config secret put <NAME>`、作成済みの Preview には `bunx wrangler preview secret put <NAME> --name <ブランチ名>` で設定してください（Preview のビルドは `secrets.required` を検証しないため、未設定だと実行時に API が 500 を返します）。
- クライアントに公開されるのは `VITE_` で始まる変数だけです。

## ビルド・デプロイ

```bash
bun run build    # vite build + tsc
bun run preview  # ビルド済み Worker をローカル（workerd）で起動
bun run deploy   # build + wrangler deploy
```

- 静的ファイルは `public/` に置きます。リダイレクトは `public/_redirects`、レスポンスヘッダーは `public/_headers` で設定します（Workers Static Assets）。
- Worker の設定は `wrangler.jsonc` にあります。
