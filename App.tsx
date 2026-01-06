import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIDiagnostic from './components/AIDiagnostic';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Brands />
        <section id="about" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/20 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1000" 
                alt="European Auto Shop" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 bg-slate-900 p-8 rounded-2xl shadow-xl z-20 border border-amber-500/30">
                <p className="text-amber-500 text-4xl font-black mb-1 italic">FAIR</p>
                <p className="text-white text-lg font-bold uppercase tracking-widest leading-none">PRICING</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold text-slate-900">Professional Excellence for Discerning Drivers</h2>
              <div className="w-20 h-1.5 bg-amber-500"></div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Powered by Pre Purchase Inspection LLC, we understand that European vehicles require more than just basic mechanical work—they require specialized knowledge, factory-grade diagnostic tools, and an uncompromising commitment to quality.
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
        
        <Services />
        
        {/* Added AI Diagnostic Assistant to the main layout */}
        <AIDiagnostic />
        
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Call Button for Mobile */}
      <a 
        href="tel:5713496760" 
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center shadow-2xl z-40 active:scale-90 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>
    </div>
  );
};

export default App;