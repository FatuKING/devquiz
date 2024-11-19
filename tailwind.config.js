import { defineConfig } from 'tailwindcss'
import scrollbarHide from 'tailwind-scrollbar-hide'

export default defineConfig({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    scrollbarHide
  ]
})
