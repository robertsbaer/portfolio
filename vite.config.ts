import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          // Split animation libraries
          animation: ['framer-motion'],
          // Split each component into its own chunk
          navbar: ['./src/components/Navbar.tsx'],
          hero: ['./src/components/Hero.tsx'],
          about: ['./src/components/About.tsx'],
          projects: ['./src/components/Projects.tsx'],
          experience: ['./src/components/Experience.tsx'],
          contact: ['./src/components/Contact.tsx'],
          blog: ['./src/components/Blog.tsx', './src/components/BlogPost.tsx'],
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
  },
});
