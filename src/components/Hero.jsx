import React from 'react';
import { CLINIC_INFO, DOCTOR_INFO } from '../data/practiceData';
import { Calendar, MapPin, Award, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, MotionButton } from './MotionUi';

export default function Hero({ theme, onOpenBooking }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24">
      
      {/* Ambient Sandstone & Sage Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl bg-[#E8DFD0]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Pill Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-serif italic text-[#7A694B] bg-[#F0E9DC] border border-[#D8CDBC] shadow-xs">
                <span className="w-2 h-2 rounded-full animate-pulse bg-[#8C7A5B]" />
                <MapPin className="w-3.5 h-3.5 text-rose-600" />
                <span>{CLINIC_INFO.location}</span>
                <span className="opacity-40">•</span>
                <span className="opacity-80">Est. {CLINIC_INFO.founded}</span>
              </div>
            </FadeIn>

            {/* Main Headline */}
            <FadeIn delay={0.2}>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${theme.headingFont} ${theme.bodyText}`}>
                Modern dentistry. <br />
                <span className="italic font-normal text-[#8C7A5B]">
                  Naturally beautiful.
                </span>
              </h1>
            </FadeIn>

            {/* Subhead Positioning */}
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg font-normal text-[#211E1B]/80 leading-relaxed max-w-xl">
                {CLINIC_INFO.positioning}. Painless procedures, 3D intraoral optical scanning, and natural smile redesigns in Indirapuram, Ghaziabad.
              </p>
            </FadeIn>

            {/* Doctor Trust Card Badge */}
            <FadeIn delay={0.4}>
              <div className="p-4 rounded-xl bg-white/90 border border-[#E5DFD3] shadow-sm flex items-center space-x-4 max-w-xl hover:border-[#8C7A5B] transition-colors">
                <img
                  src={DOCTOR_INFO.image}
                  alt={DOCTOR_INFO.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#E5DFD3] shadow-md"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className={`font-bold text-sm ${theme.headingFont}`}>{DOCTOR_INFO.name}</h3>
                    <span className="text-[10px] font-serif italic px-2 py-0.5 rounded bg-[#F0E9DC] text-[#7A694B]">
                      Prosthodontist
                    </span>
                  </div>
                  <p className="text-xs text-[#211E1B]/70 font-medium">{DOCTOR_INFO.credentials} • {DOCTOR_INFO.experienceLabel}</p>
                </div>
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.5}>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <MotionButton
                  onClick={onOpenBooking}
                  className={`px-8 py-4 ${theme.radius} ${theme.primaryBtn} text-base font-bold flex items-center space-x-3 shadow-lg shadow-[#8C7A5B]/20`}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </MotionButton>

                <a
                  href="#specialties"
                  className={`px-6 py-4 ${theme.radius} ${theme.secondaryBtn} text-sm font-semibold flex items-center space-x-2`}
                >
                  <span>Explore Specialties</span>
                </a>
              </div>
            </FadeIn>

            {/* Key Trust Bullet Indicators */}
            <FadeIn delay={0.6}>
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#211E1B]/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Painless Anesthesia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero Mold Scans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Private Valet Parking</span>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.3} direction="left">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative rounded-2xl overflow-hidden bg-white border border-[#E5DFD3] p-2.5 shadow-xl"
              >
                <img
                  src="/images/hero_clinic.png"
                  alt="Lumina Dental Studio Interior"
                  className="w-full h-[420px] sm:h-[480px] object-cover rounded-xl"
                />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#211E1B]/90 backdrop-blur-md border border-white/20 text-white shadow-2xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif italic text-amber-200">
                      Digital Excellence Studio
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                      4.9★ Rated
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-serif">State-of-the-Art Clinical Suite</h4>
                  <p className="text-xs text-slate-300">
                    Indirapuram's premier destination for 3D smile redesigns and painless prosthetics.
                  </p>
                </div>
              </motion.div>
            </FadeIn>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: 'spring' }}
              className="absolute -top-4 -right-4 p-4 rounded-xl bg-white border border-[#E5DFD3] shadow-xl hidden sm:flex items-center space-x-3"
            >
              <div className="p-2.5 rounded-xl bg-[#F0E9DC] text-[#8C7A5B]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-[#211E1B]/60">Experience</p>
                <p className="text-lg font-bold font-serif text-[#211E1B]">12+ Clinical Yrs</p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
