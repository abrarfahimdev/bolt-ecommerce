// src/Store/useProductStore.js
import { create } from 'zustand';

// Make sure 'export const' is here!
export const useProductStore = create((set) => ({
  products: [
    { 
      id: 1, 
      name: "Cyber-Track Headphones", 
      price: 199, 
      category: "Audio", 
      stock: 12, 
       image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"},
    { 
      id: 2, 
      name: "Mechanical Keyboard", 
      price: 120, 
      category: "Computing", 
      stock: 5, 
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600" 
    }
  ],

  addProduct: (newProduct) => set((state) => ({ 
    products: [...state.products, { ...newProduct, id: Date.now() }] 
  })),

  deleteProduct: (id) => set((state) => ({
    products: state.products.filter(p => p.id !== id)
  })),
}));