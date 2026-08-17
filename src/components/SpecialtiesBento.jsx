import React, { useState } from 'react';
import { SPECIALTIES } from '../data/practiceData';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpecialtiesBento({ theme, onSelectSpecialty, onOpenBooking }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SPECIALTIES[activeIndex];

  return (
    <section id="specialties" className="py-16 sm:py-24 bg-[#f6f6fa]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-body font-medium text-[#5465ff] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-normal text-[#151581] tracking-[-0.03em]">
            Precision dentistry &amp; aesthetic architecture
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1cd] font-body">
            Select a specialty below to inspect our prescription treatments, materials, and clinical protocols.
          </p>
        </div>

        {/* 40px Radius White Container */}
        <div className="bg-white rounded-[40px] shadow-dual overflow-hidden border border-[#d6d6d6]/50 grid lg:grid-cols-12">
          
          {/* Left: Numbered Specialty Selector List */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#d6d6d6]/60 divide-y divide-[#d6d6d6]/40 bg-[#f6f5f4]">
            {SPECIALTIES.map((spec, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={spec.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left px-7 py-5 flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[#151581] text-white shadow-xs'
                      : 'hover:bg-white text-[#151581]'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#a1a1cd]' : 'text-[#a1a1cd]'}`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-display font-semibold leading-snug">
                        {spec.title}
                      </h3>
                      <p className={`text-xs ${isActive ? 'text-[#a1a1cd]' : 'text-[#a1a1cd]'}`}>
                        {spec.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-white translate-x-1' : 'text-[#d6d6d6]'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Specialty Detail Panel */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-body font-semibold text-[#5465ff] uppercase tracking-wider px-3 py-1 rounded-full bg-[#5465ff]/10">
                    {active.badge} Protocol
                  </span>
                  <span className="text-xs font-body text-[#00bb76] font-medium flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>European EN13060 Standard</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-display font-normal text-[#151581] tracking-tight">
                    {active.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#292824]/90 font-body leading-relaxed">
                    {active.desc}
                  </p>
                </div>

                {/* Treatment Features */}
                <div className="pt-4 border-t border-[#f6f5f4] space-y-3">
                  <h4 className="text-xs font-body uppercase tracking-wider text-[#a1a1cd] font-medium">
                    Clinical Standards Included:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {active.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs font-body text-[#151581]">
                        <CheckCircle2 className="w-4 h-4 text-[#00bb76] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Action Row */}
            <div className="pt-8 mt-6 border-t border-[#d6d6d6]/40 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-body text-[#a1a1cd]">Treatment Consultation</p>
                <p className="text-xs font-body font-semibold text-[#151581]">30-Min 3D Dental Evaluation</p>
              </div>

              <button
                onClick={() => { onSelectSpecialty(active.title); onOpenBooking(); }}
                className="px-6 py-2.5 rounded-full bg-[#151581] hover:bg-[#0f0f63] text-white font-body text-xs font-medium shadow-xs active:scale-[0.98] transition-all flex items-center space-x-2"
              >
                <span>Book {active.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
