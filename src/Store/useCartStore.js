import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) => set((state) => {
        // SQA Logic: Check if item already exists to increment instead of duplicate
        const existingItem = state.cart.find(item => item.id === product.id);
        if (existingItem) {
          return {
            cart: state.cart.map(item => 
              item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            )
          };
        }
        return { cart: [...state.cart, { ...product, cartId: Date.now(), quantity: 1 }] };
      }),

      // New Action: Increment / Decrement
      updateQuantity: (cartId, type) => set((state) => ({
        cart: state.cart.map((item) => {
          if (item.cartId === cartId) {
            const newQty = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
            return { ...item, quantity: newQty < 1 ? 1 : newQty };
          }
          return item;
        }),
      })),

      removeFromCart: (cartId) => set((state) => ({
        cart: state.cart.filter(item => item.cartId !== cartId)
      })),

      clearCart: () => set({ cart: [] }),
    }),
    { name: 'buyzo-cart-storage' }
  )
);