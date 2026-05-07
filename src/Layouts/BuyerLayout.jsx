import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Reusing your high-end Navbar

const BuyerLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* The Navbar we built earlier */}
      <Navbar cartCount={0} onCartClick={() => {}} />

      {/* Dynamic Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Simple Footer */}
      <footer className="py-10 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>© 2026 BOLT E-commerce Marketplace</p>
      </footer>
    </div>
  );
};

export default BuyerLayout;