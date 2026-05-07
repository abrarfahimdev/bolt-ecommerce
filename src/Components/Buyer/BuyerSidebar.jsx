import { NavLink } from 'react-router-dom';

const BuyerSidebar = () => {
  const menuItems = [
    { name: 'My Profile', path: '/buyer/dashboard', icon: '👤' },
    { name: 'My Orders', path: '/buyer/dashboard/orders', icon: '📦' },
    { name: 'Wishlist', path: '/buyer/dashboard/wishlist', icon: '❤️' },
    { name: 'Settings', path: '/buyer/dashboard/settings', icon: '⚙️' },
  ];

  return (
    <div className="w-full md:w-64">
      {/* User Mini Profile Card */}
      <div className="p-6 bg-indigo-600 rounded-3xl mb-6 text-white shadow-xl shadow-indigo-100">
        <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Buyer Account</p>
        <h3 className="text-xl font-black italic">Fahim Rahman</h3>
      </div>
      
      {/* Navigation Links */}
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/buyer/dashboard'}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all text-sm ${
                isActive ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-100'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <button className="w-full mt-10 text-left px-6 py-4 text-red-500 font-bold text-sm hover:bg-red-50 rounded-2xl transition-all">
         Sign Out
      </button>
    </div>
  );
};

export default BuyerSidebar;