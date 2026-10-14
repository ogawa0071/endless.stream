import { createRouter } from "@tanstack/react-router";
import { NotFound } from "@/components/notFound";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    caseSensitive: true, // match Next.js: /Videos/... is a 404
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultNotFoundComponent: NotFound,
  });
}
