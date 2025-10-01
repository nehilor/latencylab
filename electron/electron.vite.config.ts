import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// Helpful env flag: set VITE_BACKEND_URL if you need another host/port
const BACKEND_TARGET = process.env.VITE_BACKEND_URL ?? "http://127.0.0.1:8787"

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        external: ['electron']
      }
    }
  },
  preload: {
    build: {
      rollupOptions: {
        external: ['electron']
      }
    }
  },
  renderer: {
    plugins: [react()],
    root: "src/renderer",               // use src/renderer as project root
    base: "./",                         // relative base so file:// works in prod
    server: {
      port: 5173,
      strictPort: true,
      open: false,
      proxy: {
        // Example: calls to /api/* will be forwarded to Python backend
        "/api": {
          target: BACKEND_TARGET,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      outDir: "../../dist/renderer",    // renderer build output
      emptyOutDir: true,
      sourcemap: false,
      rollupOptions: {
        input: "src/renderer/index.html"
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    esbuild: {
      target: "es2020",
    },
    css: {
      devSourcemap: true,
    },
  }
})
