import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
    dedupe: ["@tanstack/react-router", "@tanstack/react-start", "react", "react-dom"],
  },
  plugins: [
    tanstackStart({
      server: {
        entry: "server",
      },
    }),
    nitro({
      preset: "node-server",
    }),
    viteReact(),
    tailwindcss(),
  ],
});
