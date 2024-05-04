import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: path.join(
            require.resolve("@doenet/doenetml/doenetml-worker/CoreWorker.js"),
            "../*"
          ),
          dest: "doenetml-worker/",
        },
        {
          src: path.join(require.resolve("@doenet/doenetml"), "../fonts/*"),
          dest: "fonts/",
        },
      ],
    }),
  ],
});
