/// <reference types="vite/client" />
import {
  createRootRoute,
  HeadContent,
  Outlet,
  ScriptOnce,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { NotFound } from "@/components/notFound";
import { SITE_TITLE, SITE_URL } from "@/lib/site";
import appCss from "@/styles.css?url";

const GA_ID = "G-DRKJRNE9Z3";
const OG_IMAGE = `${SITE_URL}/opengraph-image.png`;
const GA_INIT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "320" },
      { property: "og:image:height", content: "320" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:type", content: "image/png" },
      { name: "twitter:image:width", content: "320" },
      { name: "twitter:image:height", content: "320" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/icon.png", type: "image/png", sizes: "320x320" },
    ],
    scripts: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, async: true },
    ],
  }),
  shellComponent: RootDocument,
  component: Outlet,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
        {/* inline GA bootstrap: SSR-only, runs exactly once (not via head().scripts, which re-runs inline scripts on every client navigation) */}
        <ScriptOnce children={GA_INIT} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
