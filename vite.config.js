import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    // Optimisations pour Vercel
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap', '@gsap/react'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
    // Réduire la taille du bundle
    chunkSizeWarningLimit: 1000,
    // Optimiser les assets
    assetsInlineLimit: 4096,
  },
  // Optimisations pour le développement
  server: {
    hmr: {
      overlay: false, // Désactiver l'overlay d'erreur pour de meilleures performances
    },
  },
  // Optimisations pour la production
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap'],
  },
})
