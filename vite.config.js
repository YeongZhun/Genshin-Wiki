import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
    VITE_BACKEND_URL: process.env.VITE_BACKEND_URL,
  }
})
