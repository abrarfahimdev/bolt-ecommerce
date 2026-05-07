import React from 'react';
import Button from './ui/Button';
import Badge from './ui/Badge';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <div className="absolute top-4 left-4">
            <Badge color="blue">New Arrival</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
          </div>
          <p className="text-xl font-black text-blue-600">${product.price}</p>
        </div>

        {/* Action Button - Hidden until hover on desktop, visible on mobile */}
        <div className="mt-4 lg:opacity-0 lg:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <Button 
            onClick={() => onAddToCart(product)} 
            className="w-full py-2.5 text-sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;