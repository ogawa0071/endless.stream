import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AgeGate } from "@/components/ageGate";
import { isAgeVerified } from "@/lib/ageVerification";

export const Route = createFileRoute("/videos")({
  // Runs on the server for SSR and on the client before navigations and
  // router.invalidate(). Hydration reuses the server's result.
  beforeLoad: () => ({ ageVerified: isAgeVerified() }),
  // The HTML depends on the cookie
  headers: () => ({ "Cache-Control": "private, no-cache" }),
  component: VideosLayout,
});

function VideosLayout() {
  const ageVerified = Route.useRouteContext({ select: (c) => c.ageVerified });
  // Gate inline instead of redirecting: child loaders and head() still run,
  // so crawlers get per-video OG tags and unknown ids still 404.
  return ageVerified ? <Outlet /> : <AgeGate />;
}
