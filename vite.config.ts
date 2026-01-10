import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: "/carl-main/",
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
    manifest: {
      name: 'Castar',
      short_name: 'Castar Web App',
      description: 'Castar Portfolio App',
      icons: [
        {
          src: 'dong.png',
          sizes: '192x192',
          type: 'image/png'
        },
      ],
      theme_color: '	#303030',
      background_color: '#303030',
      orientation: 'portrait',
    }
  }),
  tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000
  },

})
