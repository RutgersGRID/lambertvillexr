import { resolve } from "path";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        about: resolve(__dirname, "marker/index.html"),
        main: resolve(__dirname, "index.html"),
      },
    },
    output: {
      preserveModules: false,
    },
  },
});
