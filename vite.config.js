import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    // The preview is exposed through a worker-owned *.omgithub.com hostname.
    allowedHosts: ['.omgithub.com'],
  },
})
