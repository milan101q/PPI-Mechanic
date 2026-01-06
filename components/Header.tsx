import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    // Added navigation link for the AI Diagnostic tool
    { name: 'Diagnostic', href: '#diagnostic' },
    { name: 'Contact', href: 'https://prepurchaseinspection.co/contact/' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="bg-slate-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={12} className="text-amber-500" /> {BUSINESS_INFO.address}</span>
            <span className="hidden md:flex items-center gap-1"><Phone size={12} className="text-amber-500" /> {BUSINESS_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-semibold uppercase tracking-widest">Specializing in European Vehicles</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500 p-2 rounded-lg">
            <Car className="text-slate-900" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.2em] leading-none mb-0.5">Powered by</span>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900 leading-tight">PRE PURCHASE</h1>
            <p className="text-[10px] md:text-xs font-bold text-slate-500 tracking-tighter -mt-1 uppercase">INSPECTION LLC</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:5713496760" 
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95"
          >
            CALL NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 absolute top-full left-0 right-0 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block text-lg font-semibold text-slate-800"
              onClick={() => setIsMenuOpen(false)}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
             <a 
              href="tel:5713496760" 
              className="bg-amber-500 text-slate-900 text-center py-3 rounded-lg font-bold"
            >
              (571) 349-6760
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;