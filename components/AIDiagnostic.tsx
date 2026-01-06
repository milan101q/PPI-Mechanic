import React from 'react';
import { AlertCircle, Wrench } from 'lucide-react';

const Diagnostic: React.FC = () => {
  return (
    <section id="diagnostic" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-slate-600 text-sm font-bold mb-6">
            <Wrench size={16} className="text-amber-500" />
            Professional Vehicle Diagnostics
          </div>

          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Expert Diagnostic Evaluation
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Our certified technicians specialize in European vehicles and provide
            accurate, hands-on diagnostics to identify issues before they become
            costly repairs.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            In-Shop Diagnostic Service
          </h3>

          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Strange noises, warning lights, leaks, or drivability concerns?
            Our Chantilly-based inspection team performs thorough physical
            evaluations using professional diagnostic equipment.
          </p>

          <div className="flex justify-center">
            <a
              href="https://prepurchaseinspection.co/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-slate-950 px-8 py-4 rounded-xl font-bold text-sm hover:bg-amber-400 transition-all"
            >
              Schedule a Diagnostic Inspection
            </a>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start justify-center gap-2 mt-8">
            <AlertCircle size={14} className="text-slate-500 mt-0.5" />
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tight max-w-lg text-left">
              Diagnostic results are based on physical inspection and technician evaluation.
              Final repair recommendations are provided after complete assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostic;