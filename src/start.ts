import { createMiddleware, createStart } from "@tanstack/react-start";

// Next.js redirected trailing-slash URLs permanently (308), while the router's
// own canonical redirect uses 307, so handle them before routing.
const trailingSlashRedirect = createMiddleware().server(({ request, next }) => {
  const url = new URL(request.url);
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    const pathname = url.pathname.replace(/\/+$/, "") || "/";
    return new Response(null, {
      status: 308,
      headers: { Location: pathname + url.search },
    });
  }
  return next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [trailingSlashRedirect],
}));
