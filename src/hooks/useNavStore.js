import { create } from 'zustand'

export const useNavStore = create((set) => ({
  isOpen: true,
  toggleMenu: () => {
    set((state) => ({ isOpen: !state.isOpen }))
  }
}))
