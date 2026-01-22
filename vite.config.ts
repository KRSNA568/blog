import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Set up @ alias to point to src folder - makes imports cleaner
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
