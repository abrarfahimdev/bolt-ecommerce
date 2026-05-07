import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Fixed Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* Top Header (Optional - for search or profile) */}
        <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-end px-8 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-slate-600">Admin User</span>
            <div className="w-8 h-8 bg-indigo-100 rounded-full border border-indigo-200"></div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;