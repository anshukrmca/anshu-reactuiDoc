import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [ react(), tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes("node_modules")) return "vendor";
        if (id.includes("/Projects/CRM/")) return "crm";
        if (id.includes("/Projects/Documentation/")) return "docs";
        if (id.includes("/Projects/Ecommerce/")) return "ecom";
      },
    },
  },
  chunkSizeWarningLimit: 1500,
}

})