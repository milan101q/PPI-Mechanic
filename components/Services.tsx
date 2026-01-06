
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Complete European Auto Solutions</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Specializing in complex diagnostics and mechanical repairs, we offer a comprehensive range of services tailored specifically for high-performance European luxury vehicles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 border border-slate-100 rounded-2xl hover:border-amber-500/50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 bg-slate-50/50"
            >
              <div className="w-14 h-14 bg-white shadow-md rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Fair Pricing Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-900 rounded-3xl overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold text-white mb-4">Need something specialized?</h3>
              <p className="text-slate-400 text-lg">
                We handle timing components, radiator and water pump replacements, and mechanical overhauls that other shops shy away from.
              </p>
            </div>
            <a 
              href="tel:5713496760" 
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shrink-0 shadow-lg shadow-white/5"
            >
              Request a Quote
            </a>
          </div>
          {/* Subtle accent background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] -mr-32 -mt-32"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
