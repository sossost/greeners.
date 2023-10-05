import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    VitePWA({ registerType: "autoUpdate" }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@apis", replacement: path.resolve(__dirname, "src/apis") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@types", replacement: path.resolve(__dirname, "src/types") },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "src/constants"),
      },
      { find: "@store", replacement: path.resolve(__dirname, "src/store") },
      {
        find: "@provider",
        replacement: path.resolve(__dirname, "src/provider"),
      },
    ],
  },
});
