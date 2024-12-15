import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_TMDB_BEARER_TOKEN": JSON.stringify(
      process.env.VITE_TMDB_BEARER_TOKEN
    ),
  },
});
