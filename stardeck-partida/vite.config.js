import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        waitScreen: resolve(root, "waitScreen", "index.html"),
        match: resolve(root, "match", "index.html"),
      },
    },
  },
});
