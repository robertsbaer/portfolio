import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Add image optimization
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
      filename: 'stats.html',
      open: false, // Change this to false to prevent auto-opening
      gzipSize: true,
      brotliSize: true
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React core from other dependencies
          'react-core': ['react', 'react-dom', 'react/jsx-runtime'],
          // Other libraries in separate chunks
          'router': ['react-router-dom'],
          'animation': ['framer-motion'],
          'ui': ['lucide-react'],
          // Any other dependencies
          'utils': ['react-intersection-observer']
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Ensure CSS is properly extracted and minified
    cssCodeSplit: true,
    cssMinify: true,
  },
  // Fix imports for CSS
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    devSourcemap: true,
  },
  server: {
    open: false, // Also ensure this is set to false
  },
});
