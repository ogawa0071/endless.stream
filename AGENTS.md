# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Next.js 16 (App Router) + React 19 + TypeScript** app
(`endless.stream`) — an 18+ live-stream + VOD archive site. There is no
database, backend service, or container. The Next.js dev server is the only
service to run.

### Package manager / commands
- Package manager is **Bun** (`bun.lock`). Bun is installed at `~/.bun/bin`
  (the installer added it to `~/.bashrc`, so interactive shells have it on
  `PATH`; non-interactive contexts can call `~/.bun/bin/bun`).
- Dev server: `bun run dev` → http://localhost:3000 (Next.js + Turbopack).
- Build: `bun run build`; production start: `bun run start`.

### Known caveat: lint is broken (pre-existing, not an env issue)
- `bun run lint` currently fails with `TypeError: Converting circular structure
  to JSON`. This is a pre-existing incompatibility between `FlatCompat` in the
  committed `eslint.config.mjs` and `eslint-config-next` v16 — it is **not** a
  setup/dependency problem. `bun run build` runs TypeScript checks and passes.

### Testing the app (non-obvious flow)
- The site is **age-gated**: visiting any `/videos/*` route (or pages under the
  `videos` layout) redirects to `/age-verification` unless `localStorage`
  `ageVerified` is `true`. To reach VOD pages, click the red button
  「はい、18歳以上です」 (Yes, 18+) on the age-verification page.
- VOD playback streams HLS (`.m3u8`) from the public CDN `r2.endless.stream`,
  so **internet access is required** to actually play archive videos.

### Optional / disabled features
- Live streaming (LiveKit `<Video>`) and Kick chat (`<Chat>`) are **commented
  out** in `app/page.tsx`; the homepage shows a static "stream ended" state.
- Enabling live streaming requires env vars `LIVEKIT_API_KEY`,
  `LIVEKIT_API_SECRET`, `NEXT_PUBLIC_LIVEKIT_URL` plus an active publisher named
  `obs`. The `/api/get-participant-token` route returns 400 without a `room`
  query param and 500 ("Server misconfigured") when those env vars are unset —
  both are expected without LiveKit configured.
