import { Outlet } from 'react-router-dom';
import SellerSidebar from '../Components/Seller/SellerSidebar';

const SellerLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* The Sidebar (Fixed) */}
      <SellerSidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* Top bar for Seller Profile/Notifications */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">
            Welcome Back, Seller
          </h3>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-orange-500 transition-colors">
              🔔
            </button>
            <div className="h-8 w-[1px] bg-gray-100"></div>
            <span className="text-sm font-bold text-gray-900">Store Status: <span className="text-green-500">Active</span></span>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;