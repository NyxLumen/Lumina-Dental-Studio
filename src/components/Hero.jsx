import React from 'react';
import { CLINIC_INFO, DOCTOR_INFO } from '../data/practiceData';
import { Calendar, MapPin, Award, ArrowRight, CheckCircle2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, MotionButton } from './MotionUi';

export default function Hero({ theme, onOpenBooking }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-[#F8F5F0]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Location & Status Line (No generic pill) */}
            <FadeIn delay={0.1}>
              <div className="flex items-center space-x-3 text-xs font-mono tracking-wider text-[#111111]/70 uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-semibold text-emerald-900">Indirapuram Studio</span>
                <span className="opacity-30">•</span>
                <span>Est. {CLINIC_INFO.founded}</span>
              </div>
            </FadeIn>

            {/* Expansive Headline */}
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] font-serif text-[#111111]">
                Modern dentistry. <br />
                <span className="italic font-normal text-[#8C7A5B]">
                  Naturally beautiful.
                </span>
              </h1>
            </FadeIn>

            {/* Subhead (Max 20 Words Anti-Slop Rule) */}
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-[#111111]/80 leading-relaxed max-w-xl">
                Indirapuram's destination for painless prosthetics, 3D intraoral scans, and natural smile redesigns.
              </p>
            </FadeIn>

            {/* Doctor Trust Line (Clean unboxed row) */}
            <FadeIn delay={0.4}>
              <div className="pt-2 flex items-center space-x-4 border-y border-[#E6DFD3] py-4 max-w-xl">
                <img
                  src={DOCTOR_INFO.image}
                  alt={DOCTOR_INFO.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#E6DFD3]"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-sm font-serif text-[#111111]">{DOCTOR_INFO.name}</h3>
                    <span className="text-[10px] font-serif italic opacity-75 text-[#8C7A5B]">
                      Prosthodontist
                    </span>
                  </div>
                  <p className="text-xs text-[#111111]/70">{DOCTOR_INFO.credentials} • {DOCTOR_INFO.experienceLabel}</p>
                </div>
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.5}>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <MotionButton
                  onClick={onOpenBooking}
                  className="px-8 py-4 rounded-lg bg-[#111111] hover:bg-[#2A2A2A] text-white font-serif font-bold text-xs uppercase tracking-widest flex items-center space-x-3 shadow-md active:scale-[0.98] transition-all"
                >
                  <Calendar className="w-4 h-4 text-amber-200" />
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </MotionButton>

                <a
                  href="#specialties"
                  className="px-6 py-4 rounded-lg text-xs font-serif font-semibold uppercase tracking-wider text-[#111111] border border-[#111111] hover:bg-[#EFE9DD] transition-all flex items-center space-x-2"
                >
                  <span>Explore Specialties</span>
                </a>
              </div>
            </FadeIn>

            {/* Key Features */}
            <FadeIn delay={0.6}>
              <div className="pt-2 flex flex-wrap gap-6 text-xs text-[#111111]/80 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Painless Anesthesia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>3D Digital Scans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Private Parking</span>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.3} direction="left">
              <div className="relative rounded-xl overflow-hidden bg-white border border-[#E6DFD3] p-2 shadow-xl">
                <img
                  src="/images/hero_clinic.png"
                  alt="Lumina Dental Studio Interior"
                  className="w-full h-[450px] sm:h-[520px] object-cover rounded-lg"
                />
                
                {/* Overlay Studio Caption */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#111111]/90 backdrop-blur-md text-white shadow-xl space-y-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif italic text-amber-200">
                      Digital Dental Sanctuary
                    </span>
                    <span className="text-xs font-mono opacity-80 text-emerald-300">
                      4.9★ Rated
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-serif">State-of-the-Art Clinical Suite</h4>
                  <p className="text-xs text-slate-300">
                    Indirapuram's destination for 3D smile makeovers and painless prosthetics.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Floating Badge Top Left: 3D Scanner Tech */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-4 -left-4 p-3 rounded-lg bg-white border border-[#E6DFD3] shadow-lg hidden sm:flex items-center space-x-3 text-left z-20"
            >
              <div className="p-2 rounded bg-[#F0E9DC] text-[#8C7A5B]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold font-serif text-[#111111]">3D Digital Scanning</p>
                <p className="text-[10px] text-emerald-800 font-mono">Zero Impression Molds</p>
              </div>
            </motion.div>

            {/* Floating Badge Bottom Right: 12+ Yrs Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 -right-4 p-3.5 rounded-lg bg-white border border-[#E6DFD3] shadow-lg hidden sm:flex items-center space-x-3 text-left z-20"
            >
              <div className="p-2 rounded bg-[#F0E9DC] text-[#8C7A5B]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-[#111111]/60">Clinical Mastery</p>
                <p className="text-base font-bold font-serif text-[#111111]">12+ Yrs Experience</p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
