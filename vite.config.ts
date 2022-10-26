import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/auth": {
        target: "http://localhost:10001",
        changeOrigin: true,
      },
      "/api/members": {
        target: "http://localhost:10001",
        changeOrigin: true,
      },
      "/api/posts": {
        target: "http://localhost:10002",
        changeOrigin: true,
      }
    }
  }
});