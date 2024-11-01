import { create } from 'zustand'

export const useRaking = create((set, get) => ({
  allRaking: {},
  currentCategory: 'cienciaDeDatos',
  top: [],
  loading: true,
  setRaking: (value) => {
    set({ allRaking: value })
  },
  changeCategory: (e) => {
    const newCategory = e.target.value

    set({ currentCategory: newCategory })
  }
}))
