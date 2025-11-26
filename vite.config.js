import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "./",        // 👈 ESSENCIAL para Vercel carregar imagens corretamente
  plugins: [react(), tailwindcss()],
})