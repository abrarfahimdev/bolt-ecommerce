import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) => set((state) => ({ 
    cart: [...state.cart, { ...product, cartId: Date.now() }] 
  })),

  removeFromCart: (cartId) => set((state) => ({
    cart: state.cart.filter(item => item.cartId !== cartId)
  })),

  clearCart: () => set({ cart: [] }),
}));