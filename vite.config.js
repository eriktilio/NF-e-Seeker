import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: 'autoUpdate' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    // Torna as variáveis de ambiente acessíveis no código Vite
    'process.env': process.env
  }
})
