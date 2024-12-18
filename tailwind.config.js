const scrollbarHide = require('tailwind-scrollbar-hide')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          text: '#ebebeb',
          background: '#161717',
          primary: '#33a9c7',
          secondary: '#6fdbfb',
          accent: '#3dcfff'
        },
        light: {
          text: '#141414',
          background: '#F1F1EE',
          primary: '#38aecc',
          secondary: '#046f90',
          accent: '#0091c2'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [
    scrollbarHide
  ]
}
