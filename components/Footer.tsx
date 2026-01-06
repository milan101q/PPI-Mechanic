import React from 'react';
import { Car, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO, BRANDS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Car className="text-slate-900" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-amber-500 uppercase tracking-[0.2em] leading-none mb-0.5">Powered by</span>
                <h1 className="text-lg font-extrabold text-white leading-tight">PRE PURCHASE</h1>
                <p className="text-[10px] font-bold text-slate-500 tracking-tighter -mt-1 uppercase">INSPECTION LLC</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Premium specialized repair for the world's finest European automobiles. Quality, integrity, and expert precision in Chantilly, VA.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all"><Instagram size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-amber-500 text-sm">Specializations</h4>
            <ul className="grid grid-cols-2 gap-3 text-slate-400 text-sm">
              {BRANDS.map(brand => (
                <li key={brand} className="hover:text-white transition-colors cursor-default">• {brand}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-amber-500 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="https://prepurchaseinspection.co/contact/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-amber-500 text-sm">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">Join our mailing list for maintenance tips and seasonal specials.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm flex-1 focus:outline-none focus:border-amber-500" 
              />
              <button className="bg-amber-500 text-slate-950 px-4 py-3 rounded-lg font-bold hover:bg-amber-400 transition-all">JOIN</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Powered by PRE PURCHASE INSPECTION LLC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;