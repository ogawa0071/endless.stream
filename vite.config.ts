import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: { port: 3000 },
  resolve: { tsconfigPaths: true },
  environments: {
    ssr: {
      optimizeDeps: {
        // @vidstack/react's "worker" export condition points to files missing from the
        // package, which breaks the workerd dep scan in dev. It's client-only (<ClientOnly>).
        exclude: ["@vidstack/react"],
      },
    },
  },
  plugins: [
    tailwindcss(),
    cloudflare({
      viteEnvironment: { name: "ssr" },
      // Apply public/_redirects + public/_headers during `vite dev` too
      experimental: { headersAndRedirectsDevModeSupport: true },
    }),
    tanstackStart(),
    viteReact(), // must come after tanstackStart()
  ],
});
