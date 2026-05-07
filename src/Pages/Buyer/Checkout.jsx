import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../Store/useCartStore';

const Checkout = () => {
const navigate = useNavigate();
  
  // 1. Only pull the stable data/functions from the store
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  // 2. Calculate the total here (inside the component, not the selector)
  const subtotal = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const total = subtotal + 60;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: 'Dhaka',
    address: '',
    paymentMethod: 'cod'
  });

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    // SQA Validation: Ensure phone is valid (Bangladesh 11-digit)
    if (formData.phone.length !== 11) {
      alert("Please enter a valid 11-digit phone number.");
      return;
    }

    console.log("Order Placed:", { items: cart, customer: formData, total });
    
    // Logic: Clear cart and redirect to a success page
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Shipping Form */}
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter">Checkout</h1>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mt-2">Shipping & Payment Information</p>
          </div>

          <form onSubmit={handlePlaceOrder} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white border border-slate-100 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-600 outline-none font-bold"
                  placeholder="Arifin Islam"
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-white border border-slate-100 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-600 outline-none font-bold"
                  placeholder="017XXXXXXXX"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">City / Area</label>
              <select 
                className="w-full bg-white border border-slate-100 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-600 outline-none font-bold appearance-none"
                onChange={(e) => setFormData({...formData, city: e.target.value})}
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Jashore">Jashore</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Khulna">Khulna</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Full Delivery Address</label>
              <textarea 
                required
                rows="3"
                className="w-full bg-white border border-slate-100 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-600 outline-none font-bold"
                placeholder="House No, Road No, Area..."
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              ></textarea>
            </div>

            <div className="pt-6">
              <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Select Payment Method</h3>
              <div className="grid grid-cols-2 gap-4">
               <label className={`cursor-pointer border-2 rounded-2xl p-4 flex flex-col items-center gap-2 transition-all ${formData.paymentMethod === 'cod' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100 bg-white'}`}>
  <input 
    type="radio" 
    name="payment" // Ensure name is same for both
    className="hidden" 
    checked={formData.paymentMethod === 'cod'}
    onChange={() => setFormData({...formData, paymentMethod: 'cod'})} 
  />
  <span className="text-xl">💵</span>
  <span className="text-[10px] font-black uppercase tracking-widest">Cash on Delivery</span>
</label>
                <label className={`cursor-pointer border-2 rounded-2xl p-4 flex flex-col items-center gap-2 transition-all opacity-50 grayscale cursor-not-allowed border-slate-100 bg-white`}>
                  <span className="text-xl">📱</span>
                  <span className="text-[10px] font-black uppercase">bKash (Coming Soon)</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Right: Order Summary Sticky Panel */}
        <div className="lg:pl-10">
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm sticky top-24">
            <h2 className="text-xl font-black uppercase italic mb-6">In Your Bag</h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.cartId} className="flex justify-between items-center border-b border-slate-50 pb-4">
                  <div className="flex gap-4">
                    <img src={item.image} className="w-12 h-12 rounded-xl object-cover" alt="" />
                    <div>
                      <p className="text-xs font-black text-slate-900 uppercase truncate w-32">{item.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-sm font-black text-slate-900">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>Shipping Fee</span>
                <span>$60</span>
              </div>
              <div className="flex justify-between text-2xl font-black italic uppercase text-indigo-600 pt-2 border-t border-slate-100">
                <span>Total Due</span>
                <span>${total}</span>
              </div>
            </div>

            <button 
              onClick={handlePlaceOrder}
              className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl mt-10 text-xs uppercase tracking-widest shadow-xl hover:bg-indigo-600 transition-all active:scale-95"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;