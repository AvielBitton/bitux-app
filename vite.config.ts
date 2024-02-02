import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      // Optional: Specify ESLint options here
      fix: true, // Autofix issues where possible
      include: ['./src/**/*.tsx', './src/**/*.ts'], // Specify files to lint
    }),
  ],
})
