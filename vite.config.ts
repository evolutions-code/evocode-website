import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Default to '/' for local dev; CI sets VITE_BASE_URL=/<repo>/
  const base = env.VITE_BASE_URL || "/";

  return {
    base,
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 5173,
      open: true,
    },
    build: {
      target: "esnext",
      chunkSizeWarningLimit: 1200,
    },
  };
});
