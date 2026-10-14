import { createFileRoute, notFound, rootRouteId } from "@tanstack/react-router";

// Next.js returned 404 for bare /videos (no page.tsx). A TanStack layout route
// matches its own path, so keep parity explicitly.
export const Route = createFileRoute("/videos/")({
  beforeLoad: () => {
    throw notFound({ routeId: rootRouteId });
  },
});
