import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'

// dotenv.config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // 'process.env': process.env,
    // MONGODB_URI: process.env.MONGODB_URI,

    // 'VITE_BACKEND_URL': process.env.VITE_BACKEND_URL,
    // __VALUE__: `"${process.env.VALUE}"` // wrapping in "" since it's a string
  }
})

