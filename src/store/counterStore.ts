import { create } from 'zustand'

interface BearState {
  bears: number
  increment: () => void
  decrement: () => void
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increment: () => set((state) => ({ bears: state.bears + 1 })),
  decrement: () => set((state) => ({ bears: state.bears - 1 }))
}))
