import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define:{
    'process.env.REACT_APP_RESEND_API_KEY': JSON.stringify(loadEnv(mode, process.cwd(), '').REACT_APP_RESEND_API_KEY),
    'process.env.REACT_APP_TO_ADDRESS': JSON.stringify(loadEnv(mode, process.cwd(), '').REACT_APP_TO_ADDRESS),
  }
}));
