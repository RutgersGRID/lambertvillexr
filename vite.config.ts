import { resolve } from "path";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'public/') },
    ],
  },
  build: {
    rollupOptions: {
      input: {
        marker: resolve(__dirname, "marker/index.html"),
        geolocation: resolve(__dirname, "geolocation/index.html"),
        main: resolve(__dirname, "index.html"),
      },
    },
    output: {
      preserveModules: false,
    },
  },
});
