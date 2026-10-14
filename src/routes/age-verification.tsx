import { createFileRoute, redirect } from "@tanstack/react-router";

// The gate is now rendered inline on /videos/*. Forward old
// /age-verification?redirect=/videos/<id> links (only to /videos/<id>).
export const Route = createFileRoute("/age-verification")({
  validateSearch: (search: Record<string, unknown>): { redirect?: string } => ({
    redirect: typeof search.redirect === "string" ? search.redirect : undefined,
  }),
  beforeLoad: ({ search }) => {
    const id = /^\/videos\/([\w-]+)$/.exec(search.redirect ?? "")?.[1];
    throw id
      ? redirect({ to: "/videos/$id", params: { id }, statusCode: 308 })
      : redirect({ to: "/", statusCode: 308 });
  },
});
