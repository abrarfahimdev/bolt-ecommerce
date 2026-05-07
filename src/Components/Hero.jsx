import React from 'react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Next Gen Gear 2026
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8">
            Upgrade your <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">
              digital workflow.
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-lg mb-10 font-medium leading-relaxed">
            Premium tools and accessories designed for the modern developer and creative. High performance, zero compromise.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="px-10">Shop the Drop</Button>
            <Button variant="secondary" className="px-10">View Lookbook</Button>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/50 skew-x-12 translate-x-20 rounded-bl-[200px] hidden lg:block" />
    </section>
  );
};

export default Hero;