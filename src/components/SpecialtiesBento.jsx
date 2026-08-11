import React, { useState } from 'react';
import { SPECIALTIES } from '../data/practiceData';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Cpu, Activity, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, MotionButton } from './MotionUi';

const ICON_MAP = {
  cosmetic: Sparkles,
  implants: Shield,
  'smile-makeover': Smile,
  'full-mouth': Activity,
  digital: Cpu
};

export default function SpecialtiesBento({ theme, onSelectSpecialty, onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(SPECIALTIES[0].id);
  const activeSpecialty = SPECIALTIES.find(s => s.id === activeTab) || SPECIALTIES[0];

  return (
    <section id="specialties" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className={`inline-block px-3.5 py-1 ${theme.radius} ${theme.accentBadge} text-xs font-serif italic`}>
            Clinical Excellence
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
            Advanced Specialties & Restorative Care
          </h2>
          <p className="text-base opacity-80 leading-relaxed">
            From single-tooth ceramic bonding to complex full-mouth digital restorations, experience pain-free precision dentistry.
          </p>
        </FadeIn>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Bento Left: Interactive Specialty Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {SPECIALTIES.map((spec) => {
              const IconComponent = ICON_MAP[spec.id] || Sparkles;
              const isActive = activeTab === spec.id;

              return (
                <motion.div
                  key={spec.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(spec.id)}
                  className={`relative p-5 ${theme.radius} cursor-pointer transition-all duration-300 flex items-start space-x-4 border ${
                    isActive
                      ? 'bg-white border-[#8C7A5B] shadow-md shadow-[#8C7A5B]/10'
                      : 'bg-[#F4EFE6]/60 border-[#E5DFD3] hover:border-[#8C7A5B]/50'
                  }`}
                >
                  {/* Framer Motion Active Indicator Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSpecialtyTab"
                      className="absolute inset-0 rounded-xl border-2 border-[#8C7A5B] pointer-events-none"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className={`p-3 rounded-xl ${isActive ? 'bg-[#8C7A5B] text-white' : 'bg-[#E5DDCB] text-[#7A694B]'} flex-shrink-0 transition-colors`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-bold text-base ${theme.headingFont}`}>{spec.title}</h3>
                      <span className="text-[10px] font-serif italic px-2 py-0.5 rounded bg-[#F0E9DC] text-[#7A694B]">
                        {spec.badge}
                      </span>
                    </div>
                    <p className="text-xs opacity-75 mt-1 line-clamp-1">{spec.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bento Right: Featured Detail View Component */}
          <div className="lg:col-span-7">
            <div className={`p-8 lg:p-10 ${theme.radius} bg-white border border-[#E5DFD3] shadow-lg h-full flex flex-col justify-between text-left space-y-8 relative overflow-hidden`}>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpecialty.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 ${theme.radius} ${theme.accentBadge} text-xs font-serif italic`}>
                      {activeSpecialty.badge} Focus
                    </span>
                    <span className="text-xs font-mono opacity-60">Indirapuram Studio</span>
                  </div>

                  <div>
                    <h3 className={`text-2xl sm:text-3xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
                      {activeSpecialty.title}
                    </h3>
                    <p className="text-sm font-serif italic text-[#8C7A5B] mt-1">
                      {activeSpecialty.subtitle}
                    </p>
                  </div>

                  <p className="text-base opacity-85 leading-relaxed">
                    {activeSpecialty.desc}
                  </p>

                  {/* Procedure Features Grid */}
                  <div>
                    <h4 className="text-xs font-serif uppercase tracking-wider font-bold mb-4 opacity-70">
                      Clinical Protocols & Deliverables
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {activeSpecialty.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2.5 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Drawer */}
              <div className="pt-6 border-t border-[#E6DFD3] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono opacity-60">Consultation Duration</p>
                  <p className="text-sm font-bold font-serif">30 Mins Detailed 3D Evaluation</p>
                </div>

                <MotionButton
                  onClick={() => {
                    onSelectSpecialty(activeSpecialty.title);
                    onOpenBooking();
                  }}
                  className={`px-6 py-3 ${theme.radius} ${theme.primaryBtn} text-sm font-bold flex items-center space-x-2 shadow-md shadow-[#8C7A5B]/20`}
                >
                  <span>Book {activeSpecialty.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </MotionButton>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
