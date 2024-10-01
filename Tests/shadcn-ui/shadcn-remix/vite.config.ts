import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { RemixVitePWA } from "@vite-pwa/remix";

installGlobals();

const { RemixVitePWAPlugin, RemixPWAPreset } = RemixVitePWA();

export default defineConfig({
  plugins: [remix({
    presets: [RemixPWAPreset()],
  }), tsconfigPaths(), RemixVitePWAPlugin({
    registerType: "autoUpdate",
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: "shadcn-remix",
      short_name: "shadcn-remix",
      description: "shadcn ui components with Remix",
      theme_color: "#000000",
    },

    workbox: {
      globPatterns: ["**/*.{js,html,css,png,svg,ico}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: "/",
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  })],
});