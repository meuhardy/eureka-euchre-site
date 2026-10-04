import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Multi-page, deliberately. /privacy/ and /support/ are the exact URLs filed with App Store
// Connect as the Privacy Policy URL and Support URL, so each is a real file at
// <route>/index.html. A single-page app with client-side routes would serve them only after
// a JS round trip, and would 404 on a cold hit — which is how Apple checks them.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy/index.html',
        support: 'support/index.html',
      },
    },
  },
})
