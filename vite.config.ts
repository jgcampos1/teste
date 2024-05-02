import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import EnvironmentPlugin from "vite-plugin-environment";
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(["API_URL", "PORT"])],
  server: {
    port: Number(process.env.PORT) || 3001,
  },
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
