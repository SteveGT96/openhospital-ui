import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "",
    assetsInclude: ["**/assets/**/*.*"],
    server: {
      port: 3000,
      host: "localhost",
    },
    preview: {
      port: 5174,
      host: "localhost",
    },
    define: {
      "process.env": env,
    },
    plugins: [
      react(),
      tsconfigPaths(),
      VitePWA({
        registerType: "autoUpdate",
        devOptions: {
          enabled: true,
        },
        includeAssets: ["logo.svg"],
        manifest: {
          name: "Open Hospital",
          short_name: "OH Web",
          description: "Open Hospital UI",
          theme_color: "#ffffff",
          icons: [
            {
              src: "logo.svg",
              sizes: "512x512",
              type: "image/svg",
            },
          ],
        },
      }),
    ],
  };
});
