import { createFileRoute } from "@tanstack/react-router";
import { AccessToken } from "livekit-server-sdk";

export const Route = createFileRoute("/api/get-participant-token")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const room = new URL(request.url).searchParams.get("room");
        const username = crypto.randomUUID();
        if (!room) {
          return Response.json(
            { error: 'Missing "room" query parameter' },
            { status: 400 }
          );
        }

        // Worker secrets/vars: `wrangler secret put` in prod, `.dev.vars` locally.
        // Read inside the handler, never at module top level.
        const apiKey = process.env.LIVEKIT_API_KEY;
        const apiSecret = process.env.LIVEKIT_API_SECRET;
        // Public URL inlined at build time by Vite (was NEXT_PUBLIC_LIVEKIT_URL)
        const wsUrl = import.meta.env.VITE_LIVEKIT_URL;

        if (!apiKey || !apiSecret || !wsUrl) {
          return Response.json(
            { error: "Server misconfigured" },
            { status: 500 }
          );
        }

        const at = new AccessToken(apiKey, apiSecret, { identity: username });
        at.addGrant({
          room,
          roomJoin: true,
          canPublish: false,
          canSubscribe: true,
          canPublishData: false,
        });

        return Response.json(
          { token: await at.toJwt() },
          { headers: { "Cache-Control": "no-store" } }
        );
      },
      // Like a Next.js route.ts that only exports GET (HEAD falls back to GET)
      ANY: () =>
        new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } }),
    },
  },
});
