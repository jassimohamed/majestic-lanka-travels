import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      // On Windows some files can be locked (EBUSY). Polling avoids unreliable fs.watch.
      usePolling: true,
      interval: 100,
      // Ignore large or frequently-changing asset folders to reduce work.
      ignored: ['**/node_modules/**', '**/.git/**', '**/src/assets/**']
    }
  },
})