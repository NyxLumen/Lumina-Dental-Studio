import React, { useState } from 'react';
import { SPECIALTIES } from '../data/practiceData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, MotionButton } from './MotionUi';

export default function SpecialtiesBento({ theme, onSelectSpecialty, onOpenBooking }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SPECIALTIES[activeIndex];

  return (
    <section id="specialties" className="py-24 relative bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label */}
        <FadeIn className="flex items-center space-x-4 mb-16">
          <div className="w-8 h-px bg-[#8C7A5B]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#8C7A5B]">
            Clinical Specialties
          </span>
        </FadeIn>

        {/* Architectural headline — no subhead eyebrow box */}
        <FadeIn delay={0.1} className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-[#111111] leading-tight max-w-2xl">
            Advanced Care for Every Smile Need
          </h2>
        </FadeIn>

        {/* Indexed Specialty List + Live Detail Panel */}
        <div className="grid lg:grid-cols-12 gap-0 border border-[#E6DFD3] rounded-xl overflow-hidden">

          {/* Left: Numbered Index List */}
          <div className="lg:col-span-5 divide-y divide-[#E6DFD3] bg-white">
            {SPECIALTIES.map((spec, idx) => {
              const isActive = activeIndex === idx;
              return (
                <motion.button
                  key={spec.id}
                  onClick={() => setActiveIndex(idx)}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className={`w-full text-left px-8 py-6 flex items-center justify-between group transition-colors ${
                    isActive ? 'bg-[#111111] text-white' : 'hover:bg-[#F8F5F0]'
                  }`}
                >
                  <div className="flex items-center space-x-5">
                    <span className={`text-xs font-mono tabular-nums ${isActive ? 'text-amber-200' : 'text-[#8C7A5B]'}`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className={`text-base font-bold font-serif ${isActive ? 'text-white' : 'text-[#111111]'}`}>
                        {spec.title}
                      </h3>
                      <p className={`text-xs mt-0.5 ${isActive ? 'text-white/60' : 'text-[#111111]/60'}`}>
                        {spec.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-all ${isActive ? 'text-amber-200' : 'text-[#E6DFD3] group-hover:text-[#8C7A5B]'}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Right: Detail View — no floating card, direct editorial typography */}
          <div className="lg:col-span-7 bg-[#F4EFE6] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-10 lg:p-14 space-y-8 flex-1 flex flex-col"
              >
                <div className="space-y-4 flex-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8C7A5B]">
                    {active.badge} Procedure
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#111111] leading-tight">
                    {active.title}
                  </h3>
                  <p className="text-base text-[#111111]/80 leading-relaxed">
                    {active.desc}
                  </p>

                  {/* Features — clean bulleted list, no icon cards */}
                  <div className="pt-4 space-y-2">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#111111]/50 mb-3">Included In Treatment</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {active.features.map((f, i) => (
                        <div key={i} className="flex items-center space-x-2.5 text-sm text-[#111111]/80">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sticky Bottom Bar */}
                <div className="pt-6 border-t border-[#E0D8C8] flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#111111]/50">Consultation</p>
                    <p className="text-sm font-serif font-bold text-[#111111]">30-Min 3D Evaluation</p>
                  </div>
                  <MotionButton
                    onClick={() => { onSelectSpecialty(active.title); onOpenBooking(); }}
                    className="px-7 py-3.5 rounded-lg bg-[#111111] hover:bg-[#2A2A2A] text-white font-serif text-xs font-bold uppercase tracking-widest flex items-center space-x-2 shadow-md"
                  >
                    <span>Book {active.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </MotionButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
