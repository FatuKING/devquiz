import { create } from 'zustand'

export const useThemes = create((set) => ({
  darkMode: JSON.parse(window.localStorage.getItem('darkMode')),
  modeSwitch: () => {
    set((state) => {
      const newMode = !state.darkMode

      window.localStorage.setItem('darkMode', JSON.stringify(newMode))
      return { darkMode: newMode }
    })
  }
}))
