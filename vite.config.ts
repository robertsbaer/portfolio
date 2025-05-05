import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

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
      filename: 'stats.html',
      open: false, // Make sure this is set to false
      gzipSize: true,
      brotliSize: true
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Consolidated React chunks
          'react-core': ['react', 'react-dom', 'react/jsx-runtime'],
          'router': ['react-router-dom'],
          'framer-motion': ['framer-motion'],
          'lucide': ['lucide-react']
          
          // Remove these duplicate entries:
          // 'ui': ['lucide-react'],
          // 'utils': ['react-intersection-observer'],
          // 'react-vendor': ['react', 'react-dom', 'react-router-dom'],
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
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  },
});
