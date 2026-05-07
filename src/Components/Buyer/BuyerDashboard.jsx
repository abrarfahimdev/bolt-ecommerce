import React from 'react';

const BuyerDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-black  uppercase text-gray-900">Account Overview</h1>
        <p className="text-gray-500 font-medium">Manage your info and see your recent activity.</p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Total Orders</p>
          <h2 className="text-4xl font-black text-gray-900">12</h2>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Saved Items</p>
          <h2 className="text-4xl font-black text-gray-900">08</h2>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm border-b-4 border-b-indigo-500">
          <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Wallet Balance</p>
          <h2 className="text-4xl font-black text-gray-900">$240</h2>
        </div>
      </div>

      {/* Account Info Section */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-black text-gray-900 uppercase  mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="text-[10px] font-black text-gray-400 uppercase">Full Name</label>
            <p className="font-bold text-gray-900">Fahim Rahman</p>
          </div>
          <div>
            <label className="text-[10px] font-black text-gray-400 uppercase">Email Address</label>
            <p className="font-bold text-gray-900">fahim@example.com</p>
          </div>
          <div>
            <label className="text-[10px] font-black text-gray-400 uppercase">Primary Location</label>
            <p className="font-bold text-gray-900">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;