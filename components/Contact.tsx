import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  // Enhanced Google Maps URL using Plus Code and Business Name for pinpoint accuracy
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=Pre+Purchase+Inspection+LLC+WG7H%2BM9+Chantilly+VA`;

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-extrabold mb-6">Visit Our Shop</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Located conveniently in the heart of Chantilly, VA, our facility is equipped with the latest diagnostic technology for European brands. Stop by or call to schedule your visit.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0 border border-amber-500/20">
                  <MapPin className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Location</h4>
                  <p className="text-slate-400 leading-relaxed">{BUSINESS_INFO.address}</p>
                  <p className="text-slate-500 text-xs font-bold mt-1 uppercase tracking-wider">Plus Code: WG7H+M9 Chantilly, VA</p>
                  <a 
                    href={mapsUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-amber-500 text-sm font-bold mt-2 hover:underline"
                  >
                    Get Directions <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Phone className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-slate-400 mb-1">Service Inquiries & Booking</p>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="text-2xl font-black text-white hover:text-amber-500 transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Clock className="text-amber-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-3">Service Hours</h4>
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
            {/* Map Interaction Area */}
            <div className="w-full h-[500px] bg-slate-900 rounded-2xl relative overflow-hidden">
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-amber-500/20">
                    <MapPin className="text-slate-900" size={32} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-4">Located in Chantilly, VA</h3>
                  <p className="text-slate-400 mb-2 max-w-sm">
                    Find us at Pleasant Valley Road, conveniently accessible for all Northern Virginia residents.
                  </p>
                  <p className="text-amber-500/60 text-[10px] font-mono mb-8 uppercase tracking-[0.3em]">WG7H+M9 Chantilly, VA</p>
                  <a 
                    href={mapsUrl} 
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2 group shadow-xl"
                  >
                    Open Google Maps <ExternalLink size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
               </div>
               {/* Decorative background grid pattern */}
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;