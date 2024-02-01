import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/TV_SHOWS_REACT_APP.github.io/",
  plugins: [react()],
})
