import scrollbarHide from 'tailwind-scrollbar-hide'

export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
]
export const theme = {
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
}
export const darkMode = 'class'
export const plugins = [
  scrollbarHide
]
