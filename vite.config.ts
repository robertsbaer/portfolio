import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import ViteSitemap from "vite-plugin-sitemap";

// Determine if we're in development mode
const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
        compressionLevel: 9,
      },
      jpeg: {
        quality: 80,
        progressive: true,
      },
      jpg: {
        quality: 80,
        progressive: true,
      },
    }),
    visualizer({
      filename: "stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
    ViteSitemap({
      hostname: "https://dcmademedia.com",
      generateRobotsTxt: true, // Optional: will generate robots.txt
    }),
  ],
  // Set the base URL appropriately for development vs production
  base: isDev ? "/" : "https://dcmademedia.com/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-core": ["react", "react-dom", "react/jsx-runtime"],
          router: ["react-router-dom"],
          "framer-motion": ["framer-motion"],
          lucide: ["lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssCodeSplit: true,
    cssMinify: true,
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    devSourcemap: true,
  },
  server: {
    open: false,
    // Use different headers for development
    headers: isDev
      ? {
          // Less aggressive caching for development
          "Cache-Control": "no-cache, no-store, must-revalidate",
        }
      : {
          // Production caching
          "Cache-Control": "public, max-age=31536000, immutable",
        },
  },
});
