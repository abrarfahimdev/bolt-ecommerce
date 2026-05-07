import { useState } from 'react';
import { useProductStore } from '../../Store/useProductStore';
import { useCartStore } from '../../Store/useCartStore';

const CATEGORIES = ["All", "Audio", "Computing", "Accessories", "Home"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Pulling from our Global Zustand State
  const products = useProductStore((state) => state.products);
  const addToCart = useCartStore((state) => state.addToCart);

  // Filtering Logic
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Dynamic Header */}
      <div className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em]">Curated Collection</span>
          <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mt-2">
            The Market
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Filters Sidebar */}
        <aside className="w-full md:w-56 space-y-8">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 underline decoration-indigo-500 decoration-2 underline-offset-8">
              Categories
            </h3>
            <div className="flex flex-col gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left py-3 px-5 rounded-2xl text-xs font-black transition-all uppercase tracking-widest ${
                    activeCategory === cat 
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-200 translate-x-2" 
                    : "text-slate-500 hover:bg-white hover:text-indigo-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-10">
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
              Showing {filteredProducts.length} Results
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-[2rem] p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                  {/* Image Container */}
                  <div className="relative h-64 w-full rounded-[1.5rem] overflow-hidden mb-6 bg-slate-50">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter text-slate-900">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-2 pb-2">
                    <h3 className="text-lg font-black text-slate-900 uppercase italic leading-tight mb-1 truncate">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-black text-indigo-600 mb-6">${product.price}</p>
                    
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-slate-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all active:scale-95 shadow-lg shadow-slate-100"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-96 flex flex-col items-center justify-center bg-white rounded-[3rem] border border-dashed border-slate-200">
              <p className="text-slate-400 font-bold italic">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;