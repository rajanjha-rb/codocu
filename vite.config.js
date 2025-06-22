import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: true,
  },

  build: {
    rollupOptions: {
      external: [], // Add module names here if Vercel build complains about them
    },
  },
});
