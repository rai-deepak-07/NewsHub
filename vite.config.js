import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
   VitePWA({
  registerType: "autoUpdate",
  injectRegister: "auto",
  base: "/NewsHub/",
  manifest: {
    id: "/NewsHub/",
    name: "NewsHub",
    short_name: "NewsHub",
    description: "Latest news from around the world",

    start_url: "/NewsHub/",
    scope: "/NewsHub/",

    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",

    icons: [
      {
        src: "icons/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "icons/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
})
  ],
  base: "/NewsHub/",
});

