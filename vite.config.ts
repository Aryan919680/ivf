import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // If you had a conditional plugin, it would go here:
    // mode === 'development' && somePlugin()
  ].filter(Boolean), // filters out false/null
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
