import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCartStore } from '../Store/useCartStore'; // 1. Import the store

const Navbar = () => {
  // 2. Subscribe to the cart state directly
  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="h-20 bg-white border-b border-gray-100 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black italic transform group-hover:rotate-6 transition-transform">
            B
          </div>
          <span className="text-2xl font-black italic tracking-tighter text-gray-900 uppercase">
            BUYZO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={({isActive}) => 
            `text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`
          }>
            Home
          </NavLink>
          <NavLink to="/shop" className={({isActive}) => 
            `text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`
          }>
            Shop
          </NavLink>
          <NavLink to="/buyer/dashboard" className={({isActive}) => 
            `text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`
          }>
            Account
          </NavLink>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
          {/* Cart Icon */}
          <Link to="/cart" className="relative group">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-700 group-hover:text-indigo-600 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            
            {/* 3. Use cart.length instead of the cartCount prop */}
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-in zoom-in duration-300">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Quick Admin/Seller Access */}
          <div className="flex gap-2">
            <Link to="/admin" className="text-[10px] font-black uppercase px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200">Admin</Link>
            <Link to="/seller" className="text-[10px] font-black uppercase px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200">Seller</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;