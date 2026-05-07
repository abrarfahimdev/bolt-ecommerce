import React from 'react';
import Badge from '../../components/ui/Badge';

const SellerManagement = () => {
  // In the future, this will come from your API
  const pendingSellers = [
    { id: 101, name: "TechHub Jashore", email: "tech@jashore.com", shop: "Tech Gadgets", status: "pending" },
    { id: 102, name: "Fashion BD", email: "info@fashion.com", shop: "Urban Wear", status: "pending" },
  ];

  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-black text-slate-900 uppercase">Seller Approvals</h1>
        <p className="text-slate-500">Verify new shop requests to maintain platform quality.</p>
      </header>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
            <tr>
              <th className="px-6 py-4">Seller / Shop</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {pendingSellers.map((seller) => (
              <tr key={seller.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-bold text-slate-900">{seller.shop}</div>
                  <div className="text-xs text-slate-400">{seller.name}</div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{seller.email}</td>
                <td className="px-6 py-4">
                  <Badge color="red">Pending</Badge>
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button className="text-indigo-600 font-bold text-xs hover:underline">Approve</button>
                  <button className="text-slate-400 font-bold text-xs hover:text-red-500">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerManagement;