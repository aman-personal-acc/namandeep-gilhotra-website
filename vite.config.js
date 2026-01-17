import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      "namandeep-gilhotra-website.vercel.app",
      "namandeep-gilhotra.vercel.app",
    ],
    open: true,
  },
})
