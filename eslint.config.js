// @ts-check
import js from "@eslint/js";
import pluginRouter from "@tanstack/eslint-plugin-router";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    "dist/",
    ".wrangler/",
    ".tanstack/",
    "src/routeTree.gen.ts",
    "worker-configuration.d.ts",
  ]),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: { globals: { ...globals.browser } },
    rules: {
      // eslint-config-next/typescript downgraded these to warnings
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
    },
  },
  reactHooks.configs.flat.recommended,
  ...pluginRouter.configs["flat/recommended"],
]);
