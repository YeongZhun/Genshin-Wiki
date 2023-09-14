import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT,
    VITE_BACKEND_API: process.env.VITE_BACKEND_API,
  },
})
