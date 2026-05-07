import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  // Generate a random Order ID for that "Pro" feel
  const orderId = "BZO-" + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-[3rem] p-12 shadow-2xl shadow-slate-100 text-center border border-slate-50">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 animate-bounce">
          ✓
        </div>
        
        <h1 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-2">
          Order Confirmed
        </h1>
        <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-8">
          Order ID: {orderId}
        </p>

        <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-left space-y-3">
          <p className="text-xs font-bold text-slate-600 flex justify-between">
            <span>Status</span>
            <span className="text-indigo-600 uppercase tracking-widest text-[9px]">Processing</span>
          </p>
          <p className="text-xs font-bold text-slate-600 flex justify-between">
            <span>Payment</span>
            <span className="text-slate-900 uppercase tracking-widest text-[9px]">Cash on Delivery</span>
          </p>
          <p className="text-xs font-bold text-slate-600 flex justify-between">
            <span>Delivery</span>
            <span className="text-slate-900 uppercase tracking-widest text-[9px]">2-3 Working Days</span>
          </p>
        </div>

        <div className="space-y-4">
          <Link 
            to="/shop" 
            className="block w-full bg-slate-900 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all"
          >
            Continue Shopping
          </Link>
          <Link 
            to="/buyer/dashboard" 
            className="block w-full text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] hover:text-slate-900 transition-colors"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;