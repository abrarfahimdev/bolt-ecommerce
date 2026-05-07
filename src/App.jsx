import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Button from './components/ui/Button'

// Mock Data - In a real app, this would come from an API
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Cyber-Track Headphones",
    price: 199,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426da471b?w=600",
    isNew: true
  },
  {
    id: 2,
    name: "Minimalist Watch v2",
    price: 145,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    isNew: false
  },
  {
    id: 3,
    name: "Tactile Mechanical Board",
    price: 120,
    category: "Computing",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",
    isNew: true
  },
  {
    id: 4,
    name: "Focus Smart Lamp",
    price: 89,
    category: "Home",
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=600",
    isNew: false
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Helper to add items to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    // Optional: Open cart automatically when item is added
    // setIsCartOpen(true); 
  };

  // Helper to remove items from cart
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* 1. NAVIGATION */}
      <Navbar 
        cartCount={cart.length} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      {/* 2. HERO SECTION */}
      <Hero />

      {/* 3. MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black tracking-tight uppercase">Featured Drop</h2>
            <p className="text-gray-500 font-medium">Handpicked premium tech for your setup.</p>
          </div>
          <Button variant="outline" className="text-xs py-2 px-4">View All</Button>
        </header>
        
        <ProductGrid products={MOCK_PRODUCTS} onAddToCart={addToCart} />
      </main>

      {/* 4. CART DRAWER (OVERLAY) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Drawer Content */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-black">Your Cart ({cart.length})</h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <p className="text-gray-400 font-medium">Your cart is empty.</p>
                  <Button variant="secondary" className="mt-4" onClick={() => setIsCartOpen(false)}>Start Shopping</Button>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-gray-50" />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                      <p className="text-blue-600 font-black">${item.price}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 font-bold">Subtotal</span>
                  <span className="text-2xl font-black text-gray-900">${totalPrice}</span>
                </div>
                <Button className="w-full py-4 text-lg">Checkout Now</Button>
                <p className="text-center text-xs text-gray-400 mt-4">Shipping and taxes calculated at checkout.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. FOOTER */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm font-medium">
          © 2026 BOLT E-commerce. Built with React + Vite.
        </div>
      </footer>
    </div>
  )
}

export default App