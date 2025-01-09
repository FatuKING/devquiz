import scrollbarHide from 'tailwind-scrollbar-hide'

export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
]
export const theme = {
  extend: {
    colors: {
      dark: {
        paragraph: '#94a1b2',
        background: '#16161a',
        bgSecondary: '#242629',
        title: '#fffffe',
        button: '#7f5af0',
        buttonText: '#fffffe',
        card: '#242629'
      },
      light: {
        paragraph: '#2b2c34',
        background: '#fffffe',
        bgSecondary: '#d1d1e9',
        title: '#2b2c34',
        button: '#6246ea',
        buttonText: '#fffffe'
      }
    }
  }
}
export const darkMode = 'class'
export const plugins = [
  scrollbarHide
]
