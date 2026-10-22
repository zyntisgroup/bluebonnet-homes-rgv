import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "next/link": path.resolve(__dirname, "./src/shims/next-link.tsx"),
      "next/image": path.resolve(__dirname, "./src/shims/next-image.tsx"),
      "next/navigation": path.resolve(__dirname, "./src/shims/next-navigation.ts"),
      "gsap/ScrollTrigger": path.resolve(__dirname, "./src/shims/scroll-trigger.ts"),
      "gsap": path.resolve(__dirname, "./src/shims/gsap.ts")
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true
  }
});
