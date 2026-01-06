import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Wrench, Settings, ShieldCheck, Zap, Thermometer, Disc, 
  Gauge, Search, Droplet, Battery, Wind, Phone, MapPin, 
  Menu, X, ChevronRight, Award, Clock, ExternalLink, Instagram, Facebook, AlertCircle
} from 'lucide-react';

// --- TYPES ---
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  hours: {
    [key: string]: string;
  };
}

// --- CONSTANTS ---
const BUSINESS_INFO: BusinessInfo = {
  name: "Pre Purchase Inspection LLC",
  address: "25354 Pleasant Valley Rd STE 135, Chantilly, VA 20152",
  phone: "(571) 349-6760",
  hours: {
    Monday: "9 AM – 6 PM",
    Tuesday: "9 AM – 6 PM",
    Wednesday: "9 AM – 6 PM",
    Thursday: "9 AM – 6 PM",
    Friday: "9 AM – 6 PM",
    Saturday: "9 AM – 6 PM",
    Sunday: "Closed"
  }
};

const SERVICES: ServiceItem[] = [
  {
    id: 'diag',
    title: 'Advanced Diagnostics',
    description: 'Expert diagnostics for BMW, Mercedes, Porsche and more using factory-level tools.',
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 'check-engine',
    title: 'Check Engine Light',
    description: 'Precision troubleshooting of fault codes and sensor malfunctions.',
    icon: <Search className="w-6 h-6" />
  },
  {
    id: 'brakes',
    title: 'Brake Service',
    description: 'Complete brake inspections, rotor surfacing, and pad replacements.',
    icon: <Disc className="w-6 h-6" />
  },
  {
    id: 'oil',
    title: 'Fluid & Oil Services',
    description: 'Premium synthetic oil changes and transmission fluid flushes.',
    icon: <Droplet className="w-6 h-6" />
  },
  {
    id: 'electrical',
    title: 'Electrical Systems',
    description: 'Specialized repairs for complex European electrical architectures.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 'cooling',
    title: 'Cooling Systems',
    description: 'Radiator, water pump, and thermostat replacements to prevent overheating.',
    icon: <Thermometer className="w-6 h-6" />
  },
  {
    id: 'ac',
    title: 'AC & Heating',
    description: 'Recharging and repair of climate control systems for year-round comfort.',
    icon: <Wind className="w-6 h-6" />
  },
  {
    id: 'suspension',
    title: 'Suspension & Steering',
    description: 'Control arms, bushings, and steering rack repairs for peak handling.',
    icon: <Gauge className="w-6 h-6" />
  },
  {
    id: 'battery',
    title: 'Battery & Charging',
    description: 'Testing and replacement of high-performance European batteries.',
    icon: <Battery className="w-6 h-6" />
  }
];

const BRANDS = [
  "BMW", "Mercedes-Benz", "Porsche", "Audi", "Volkswagen", 
  "MINI", "Volvo", "Land Rover", "Jaguar", "Alfa Romeo"
];

// --- UTILITIES ---
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string, setMenuOpen?: (val: boolean) => void) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  if (setMenuOpen) setMenuOpen(false);
};

// --- COMPONENTS ---

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Diagnostic', id: 'diagnostic' },
    { name: 'Contact', href: 'https://prepurchaseinspection.co/contact/' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm" role="banner">
      <div className="bg-slate-900 text-white text-[10px] md:text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={12} className="text-amber-500" /> {BUSINESS_INFO.address}</span>
            <span className="hidden md:flex items-center gap-1"><Phone size={12} className="text-amber-500" /> {BUSINESS_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-semibold uppercase tracking-widest text-[10px]">European Vehicle Specialists</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center" aria-label="Main Navigation">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-slate-900 p-1.5 md:p-2 rounded-lg border border-amber-500/30 shadow-md transform -rotate-6 shrink-0">
            <Wrench className="text-amber-500 w-4 h-4 md:w-6 md:h-6" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-[7px] md:text-[9px] font-bold text-amber-600 uppercase tracking-[0.2em] leading-none mb-1">Expert Service</span>
            <div className="text-[12px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-black text-slate-950 leading-none uppercase tracking-tighter whitespace-nowrap brand-font">
              PRE PURCHASE INSPECTION LLC
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href || '#'}
              target={link.href ? "_blank" : undefined}
              rel={link.href ? "noopener noreferrer" : undefined}
              onClick={(e) => link.id ? scrollToSection(e, link.id) : null}
              className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden p-2 text-slate-600" aria-label="Toggle Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href || '#'}
              target={link.href ? "_blank" : undefined}
              rel={link.href ? "noopener noreferrer" : undefined}
              onClick={(e) => link.id ? scrollToSection(e, link.id, setIsMenuOpen) : null}
              className="block text-lg font-bold text-slate-900 hover:text-amber-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-44 md:pt-52 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury European Car Engine Professional Detail" 
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 items-center gap-12">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck size={14} /> Certified Auto Repair Specialists
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
            Expert Precision for Your <span className="text-amber-500">European</span> Machine
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
            High-performance care for BMW, Mercedes, Porsche, and Audi. From expert diagnostics to master mechanical repairs in Chantilly, VA.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://prepurchaseinspection.co/contact/" target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95">
              Book Service <ChevronRight size={20} />
            </a>
            <a href="#" onClick={(e) => scrollToSection(e, 'services')} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all active:scale-95">
              Our Services
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3 text-white">
              <Award className="text-amber-500" aria-hidden="true" />
              <div>
                <p className="text-xl font-bold">10+</p>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Luxury Brands Serviced</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Clock className="text-amber-500" aria-hidden="true" />
              <div>
                <p className="text-xl font-bold">9 AM - 6 PM</p>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Mon - Sat Schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Brands: React.FC = () => (
  <section className="py-16 bg-slate-50 border-y border-slate-200" aria-labelledby="brands-title">
    <div className="max-w-7xl mx-auto px-4">
      <h2 id="brands-title" className="text-center text-xs font-extrabold text-slate-400 uppercase tracking-[0.3em] mb-12">Expertise Across All Major European Brands</h2>
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

const About: React.FC = () => (
  <section id="about" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/20 blur-3xl"></div>
        <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1000" alt="Master Mechanic Working on European Engine" className="rounded-3xl shadow-2xl relative z-10" />
        <div className="absolute -bottom-10 -right-10 bg-slate-900 p-8 rounded-2xl shadow-xl z-20 border border-amber-500/30 text-center">
          <p className="text-amber-500 text-4xl font-black mb-1 italic">FAIR</p>
          <p className="text-white text-lg font-bold uppercase tracking-widest leading-none">PRICING</p>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-extrabold text-slate-900">Professional Excellence for Discerning Drivers</h2>
        <div className="w-20 h-1.5 bg-amber-500"></div>
        <p className="text-lg text-slate-600 leading-relaxed">
          At **Pre Purchase Inspection LLC**, we understand that European vehicles require more than just basic mechanical work—they require specialized knowledge, factory-grade diagnostic tools, and an uncompromising commitment to quality.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Whether it's a routine oil change on your BMW, complex suspension work on your Mercedes Airmatic system, or a timing component replacement on your Audi, our master mechanics provide the expertise of a dealership at fair, competitive prices.
        </p>
        <div className="grid grid-cols-2 gap-6 pt-6">
          <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-amber-500">
             <p className="font-bold text-slate-900">Certified Experts</p>
             <p className="text-sm text-slate-500">Euro-brand specialists</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-amber-500">
             <p className="font-bold text-slate-900">Advanced Tools</p>
             <p className="text-sm text-slate-500">Factory-level diagnostics</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services: React.FC = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Complete European Auto Solutions</h2>
        <div className="w-20 h-1.5 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-slate-600 text-lg">
          Specializing in complex diagnostics and mechanical repairs, we offer a comprehensive range of services tailored specifically for high-performance European luxury vehicles in Chantilly.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <article key={service.id} className="group p-8 border border-slate-100 rounded-2xl hover:border-amber-500/50 hover:shadow-xl transition-all bg-slate-50/50">
            <div className="w-14 h-14 bg-white shadow-md rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Fair & Transparent Pricing</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Diagnostic: React.FC = () => (
  <section id="diagnostic" className="py-24 bg-slate-50 relative">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-slate-600 text-sm font-bold mb-6">
          <Wrench size={16} className="text-amber-500" aria-hidden="true" /> Professional Vehicle Evaluation
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Expert Diagnostic Evaluation</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Our certified technicians specialize in European vehicles and provide accurate, hands-on diagnostics to identify issues before they become costly repairs.</p>
      </div>
      <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">In-Shop Diagnostic Service</h3>
        <p className="text-slate-300 max-w-xl mx-auto mb-8">Strange noises, warning lights, leaks, or drivability concerns? Our Chantilly-based inspection team performs thorough evaluations using professional equipment.</p>
        <div className="flex justify-center">
          <a href="https://prepurchaseinspection.co/contact/" target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-slate-950 px-8 py-4 rounded-xl font-bold text-sm hover:bg-amber-400 transition-all shadow-lg">Schedule a Diagnostic Inspection</a>
        </div>
        <div className="flex items-start justify-center gap-2 mt-8 opacity-50">
          <AlertCircle size={14} className="text-slate-500 mt-0.5" aria-hidden="true" />
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tight max-w-lg text-left">Diagnostic results are based on physical inspection and technician evaluation at our Chantilly facility.</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=Pre+Purchase+Inspection+LLC+WG7H%2BM9+Chantilly+VA`;
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 text-white">Visit Our Chantilly Shop</h2>
            <p className="text-slate-400 text-lg leading-relaxed">Located conveniently in the heart of Chantilly, VA, our facility is equipped with the latest diagnostic technology for European brands.</p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0 border border-amber-500/20"><MapPin className="text-amber-500" /></div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-white">Our Location</h4>
                <address className="text-slate-400 leading-relaxed not-italic">{BUSINESS_INFO.address}</address>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-amber-500 text-sm font-bold mt-2 hover:underline">Get Directions <ExternalLink size={14} /></a>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0 border border-amber-500/20"><Phone className="text-amber-500" /></div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-white">Call Us Directly</h4>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="text-2xl font-black text-white hover:text-amber-500 transition-colors">{BUSINESS_INFO.phone}</a>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0 border border-amber-500/20"><Clock className="text-amber-500" /></div>
              <div className="flex-1">
                <h4 className="font-bold text-xl mb-3 text-white">Service Hours</h4>
                <div className="grid grid-cols-2 gap-y-1">
                  {Object.entries(BUSINESS_INFO.hours).map(([day, hours]) => (
                    <React.Fragment key={day}>
                      <p className="text-slate-500 text-sm font-bold">{day}</p>
                      <p className={`text-sm font-bold text-right ${day === 'Sunday' ? 'text-red-500/80' : 'text-slate-300'}`}>{hours}</p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 p-2 rounded-3xl shadow-2xl border border-white/5">
          <div className="w-full h-[400px] bg-slate-900 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 shadow-xl"><MapPin className="text-slate-900" size={32} /></div>
            <h3 className="text-2xl font-extrabold text-white mb-4">Mechanic Shop in Chantilly, VA</h3>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2 group shadow-xl">Open Google Maps <ExternalLink size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5" role="contentinfo">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 p-2 rounded-xl border border-amber-500/30 shadow-md transform -rotate-6 shrink-0">
              <Wrench className="text-amber-500 w-6 h-6" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-amber-500 uppercase tracking-[0.2em] leading-none mb-1">Expert Care</span>
              <div className="text-sm md:text-base font-black text-white leading-none uppercase tracking-tighter whitespace-nowrap brand-font">
                PRE PURCHASE INSPECTION LLC
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">Premium specialized repair for the world's finest European automobiles. Quality, integrity, and expert precision in Chantilly, VA.</p>
          <div className="flex gap-4">
             <a 
               href="https://www.instagram.com/pre_purchase_inspection/" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Instagram Profile"
               className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all"
             >
               <Instagram size={18} />
             </a>
             <a 
               href="https://www.facebook.com/people/Pre-Purchase-Inspection-LLC/61574079876227/" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Facebook Page"
               className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all"
             >
               <Facebook size={18} />
             </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-amber-500 text-sm">Brand Specializations</h4>
          <ul className="grid grid-cols-2 gap-3 text-slate-400 text-sm">
            {BRANDS.map(brand => <li key={brand} className="hover:text-white transition-colors cursor-default">• {brand}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-amber-500 text-sm">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" onClick={(e) => scrollToSection(e, 'diagnostic')} className="hover:text-white transition-colors">Diagnostic</a></li>
            <li><a href="https://prepurchaseinspection.co/contact/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 text-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} PRE PURCHASE INSPECTION LLC. ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Brands />
        <About />
        <Services />
        <Diagnostic />
        <Contact />
      </main>
      <Footer />
      <a 
        href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} 
        aria-label="Call Shop Now"
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center shadow-2xl z-40"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

// --- RENDER ---
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}