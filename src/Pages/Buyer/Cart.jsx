import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../Store/useCartStore';

const Cart = () => {
  // Destructure all necessary actions and state from the store
  const { cart, removeFromCart, clearCart, updateQuantity } = useCartStore();

  // Calculations: account for the quantity of each item
  const subtotal = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const deliveryFee = cart.length > 0 ? 60 : 0; 
  const total = subtotal + deliveryFee;

  // Empty State UI
  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6">
        <div className="text-6xl text-slate-200 animate-bounce">🛍️</div>
        <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">Your bag is empty</h2>
        <p className="text-slate-400 font-medium">Looks like you haven't added anything to your bag yet.</p>
        <Link to="/shop" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black text-slate-900 uppercase italic mb-10 tracking-tighter">
        Your Bag <span className="text-indigo-600">({cart.length})</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.cartId} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-wrap md:flex-nowrap items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Product Image */}
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-2xl object-cover bg-slate-50" />
              
              {/* Product Info */}
              <div className="flex-1 min-w-[200px]">
                <h3 className="font-black text-slate-900 uppercase text-sm truncate">{item.name}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{item.category}</p>
                <p className="text-indigo-600 font-black text-lg mt-2">${item.price}</p>
              </div>

              {/* Quantity Selector Selector */}
              <div className="flex items-center bg-slate-50 rounded-2xl p-1 border border-slate-100">
                <button 
                  onClick={() => updateQuantity(item.cartId, 'dec')}
                  className="w-10 h-10 flex items-center justify-center font-bold text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  —
                </button>
                <span className="w-10 text-center text-sm font-black text-slate-900">
                  {item.quantity || 1}
                </span>
                <button 
                  onClick={() => updateQuantity(item.cartId, 'inc')}
                  className="w-10 h-10 flex items-center justify-center font-bold text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button 
                onClick={() => removeFromCart(item.cartId)}
                className="p-3 text-slate-300 hover:text-red-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
          
          <div className="pt-4 px-4 flex justify-between items-center">
             <Link to="/shop" className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">
               ← Continue Shopping
             </Link>
             <button 
               onClick={clearCart}
               className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-red-500 transition-colors"
             >
               Clear All Items
             </button>
          </div>
        </div>

        {/* Right: Checkout Summary */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] sticky top-24 shadow-2xl">
            <h2 className="text-xl font-black uppercase italic mb-8 border-b border-slate-800 pb-4">Summary</h2>
            
            <div className="space-y-4 text-sm font-bold">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Delivery Fee</span>
                <span>${deliveryFee}</span>
              </div>
              <div className="h-[1px] bg-slate-800 my-4" />
              <div className="flex justify-between text-xl font-black italic uppercase">
                <span>Total</span>
                <span className="text-indigo-400">${total}</span>
              </div>
            </div>

             <Link 
  to="/checkout"
  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-5 rounded-2xl mt-10 text-xs uppercase tracking-widest shadow-lg shadow-indigo-900/40 transition-all active:scale-95 block text-center"
>
  Secure Checkout
</Link>
            <div className="mt-8 flex flex-col gap-3">
               <div className="flex items-center gap-3 text-slate-500">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-[10px] uppercase font-bold tracking-widest">In Stock & Ready to ship</p>
               </div>
               <p className="text-[9px] text-slate-500 uppercase font-bold text-center mt-2 tracking-widest leading-relaxed">
                 Transactions are secured by Buyzo <br/> Encryption Protocol
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;