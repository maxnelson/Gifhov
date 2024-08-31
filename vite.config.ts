import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import baristaCSS from "@modularmoon/barista";

export default defineConfig({
  plugins: [
    react(),
    baristaCSS({
      include: ["src/**/*.{js,ts,jsx,tsx,html}"],
      outputFilepath: "src/css/barista.css",
      delimiter1: "_",
      delimiter2: "--",
    }),
  ],
  server: { port: 5100 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
