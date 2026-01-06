
import React from 'react';
import { BRANDS } from '../constants';

const Brands: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-extrabold text-slate-400 uppercase tracking-[0.3em] mb-12">Expertise Across All Major European Brands</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
          {BRANDS.map(brand => (
            <span key={brand} className="text-xl md:text-2xl font-black text-slate-900 tracking-tight italic">
              {brand.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
