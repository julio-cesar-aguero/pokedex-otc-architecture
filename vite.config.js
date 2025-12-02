import { defineConfig } from 'vite'

export default defineConfig({
  base: '/pokedex-otc-architecture/', 
  
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})