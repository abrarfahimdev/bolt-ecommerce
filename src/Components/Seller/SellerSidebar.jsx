import { NavLink } from 'react-router-dom';

const SellerSidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/seller', icon: '📈' },
    { name: 'Inventory', path: '/seller/inventory', icon: '📦' },
    { name: 'Orders', path: '/seller/orders', icon: '🛍️' },
    { name: 'Payments', path: '/seller/payments', icon: '💰' },
  ];

  return (
    <div className="w-64 bg-slate-900 h-screen fixed left-0 top-0 text-white p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black italic shadow-lg shadow-indigo-500/20">
          B
        </div>
        <h2 className="text-xl font-black italic tracking-tighter uppercase">Buyzo</h2>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/seller'}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                isActive 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`
            }
          >
            <span>{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SellerSidebar;