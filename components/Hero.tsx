
import React from 'react';
import { ChevronRight, ShieldCheck, Award, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury European Car Engine" 
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 items-center gap-12">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck size={14} /> Powered by Pre Purchase Inspection LLC
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
            Expert Precision for Your <span className="text-amber-500">European</span> Machine
          </h1>
          
          <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
            Full-service specialized care for BMW, Mercedes, Porsche, and Audi. From expert diagnostics to preventative maintenance, we treat your vehicle with factory-level precision.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://prepurchaseinspection.co/contact/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95"
            >
              Book Service <ChevronRight size={20} />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all active:scale-95"
            >
              Our Services
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3 text-white">
              <Award className="text-amber-500" />
              <div>
                <p className="text-xl font-bold">10+</p>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Brands Expertly Serviced</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Clock className="text-amber-500" />
              <div>
                <p className="text-xl font-bold">9 AM - 6 PM</p>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Mon - Sat Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
