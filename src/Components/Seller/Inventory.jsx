import { useState } from 'react';
import { useProductStore } from '../../Store/useProductStore';
import Button from '../../Components/UI/Button';

const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { products, deleteProduct } = useProductStore();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <header className="flex justify-between items-center bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-slate-900 uppercase italic leading-none">Inventory</h1>
          <p className="text-slate-500 font-medium text-sm mt-2">Manage your stock and active listings.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2">
          <span>+</span> Add New Product
        </Button>
      </header>

      {/* Table Section */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-black tracking-widest border-b border-slate-100">
            <tr>
              <th className="px-8 py-5">Product Details</th>
              <th className="px-8 py-5">Category</th>
              <th className="px-8 py-5">Price</th>
              <th className="px-8 py-5">Stock</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <img src={product.image} alt="" className="w-10 h-10 rounded-lg object-cover bg-slate-100" />
                      <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-8 py-5 font-black text-slate-900">${product.price}</td>
                  <td className="px-8 py-5">
                    <span className={`font-bold ${product.stock < 5 ? 'text-red-500' : 'text-slate-500'}`}>
                      {product.stock} units
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button 
                      onClick={() => deleteProduct(product.id)}
                      className="text-slate-300 hover:text-red-500 font-black text-[10px] uppercase tracking-widest transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-8 py-20 text-center text-slate-400 font-bold italic">
                  No products found. Start by adding one!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {isModalOpen && <AddProductModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

/* --- Internal Modal Component --- */
const AddProductModal = ({ onClose }) => {
  const addProduct = useProductStore((state) => state.addProduct);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'General',
    stock: '',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600' // Default placeholder
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic formatting
    addProduct({
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock)
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl animate-in zoom-in duration-200">
        <h2 className="text-2xl font-black mb-8 uppercase italic tracking-tighter text-slate-900">List New Product</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Product Name</label>
            <input 
              required
              type="text" 
              className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-600 outline-none font-bold text-slate-900" 
              placeholder="e.g. Wireless Mouse"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Price ($)</label>
              <input 
                required
                type="number" 
                className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-600 outline-none font-bold text-slate-900" 
                placeholder="99"
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Stock</label>
              <input 
                required
                type="number" 
                className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-600 outline-none font-bold text-slate-900" 
                placeholder="10"
                onChange={(e) => setFormData({...formData, stock: e.target.value})}
              />
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 bg-slate-100 text-slate-500 font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 bg-indigo-600 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
            >
              Publish Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inventory;