import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const menuItems = [
    { name: 'Overview', path: '/admin', icon: '📊' },
    { name: 'Sellers', path: '/admin/sellers', icon: '🏪' },
    { name: 'Buyers', path: '/admin/buyers', icon: '👥' },
    { name: 'Transactions', path: '/admin/transactions', icon: '💳' },
  ];

  return (
    <div className="w-64 bg-slate-900 h-screen fixed left-0 top-0 text-white p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-black">B</div>
        <h2 className="text-xl font-black tracking-tighter">ADMIN PANEL</h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/admin'}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                isActive ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800'
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

export default AdminSidebar;