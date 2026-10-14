import {
  createCsrfMiddleware,
  createMiddleware,
  createStart,
} from "@tanstack/react-start";

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

// Defining a start instance drops Start's default CSRF protection for server
// functions (e.g. verifyAge), so add it back explicitly.
const csrf = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  requestMiddleware: [csrf, trailingSlashRedirect],
}));
