import React from 'react';
import { CLINIC_INFO, DOCTOR_INFO } from '../data/practiceData';
import { Calendar, MapPin, Award, ArrowRight, CheckCircle2, Sparkles, Clock, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, MotionButton } from './MotionUi';

export default function Hero({ theme, onOpenBooking }) {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 bg-[#F8F5F0]">
      
      {/* Ambient Warm Sandstone Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl bg-[#E8DFD0]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content: Refined Editorial Layout */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability & Location Pill */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full text-xs font-serif italic text-[#7A694B] bg-[#F0E9DC] border border-[#D8CDBC] shadow-xs">
                <span className="w-2 h-2 rounded-full animate-ping bg-emerald-600" />
                <span className="font-semibold text-emerald-800">Today's Appointments Available</span>
                <span className="opacity-40">•</span>
                <MapPin className="w-3.5 h-3.5 text-rose-600 inline" />
                <span>Indirapuram, Ghaziabad</span>
              </div>
            </FadeIn>

            {/* Expansive Headline */}
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] font-serif text-[#211E1B]">
                Modern dentistry. <br />
                <span className="italic font-normal text-[#8C7A5B]">
                  Naturally beautiful.
                </span>
              </h1>
            </FadeIn>

            {/* Concise Subhead (Under 20 Words Rule) */}
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg font-normal text-[#211E1B]/80 leading-relaxed max-w-xl">
                Indirapuram's premier studio for painless prosthetics, 3D smile makeovers, and natural tooth restoration.
              </p>
            </FadeIn>

            {/* Doctor Signature Badge */}
            <FadeIn delay={0.4}>
              <div className="p-3.5 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm flex items-center justify-between max-w-xl hover:border-[#8C7A5B] transition-all">
                <div className="flex items-center space-x-3.5">
                  <img
                    src={DOCTOR_INFO.image}
                    alt={DOCTOR_INFO.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#E5DFD3] shadow-xs"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-sm font-serif text-[#211E1B]">{DOCTOR_INFO.name}</h3>
                      <span className="text-[10px] font-serif italic px-2 py-0.5 rounded bg-[#F0E9DC] text-[#7A694B] border border-[#D8CDBC]">
                        Prosthodontist
                      </span>
                    </div>
                    <p className="text-xs text-[#211E1B]/70 font-medium">{DOCTOR_INFO.credentials} • {DOCTOR_INFO.experienceLabel}</p>
                  </div>
                </div>

                <div className="hidden sm:block text-right border-l border-[#E6DFD3] pl-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold block">Verified Lead</span>
                  <span className="text-xs font-serif italic text-[#8C7A5B]">100% Painless Care</span>
                </div>
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.5}>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <MotionButton
                  onClick={onOpenBooking}
                  className="px-8 py-4 rounded-xl bg-[#8C7A5B] hover:bg-[#726348] text-white font-serif font-bold text-sm uppercase tracking-wider flex items-center space-x-3 shadow-lg shadow-[#8C7A5B]/25 active:scale-[0.98] transition-all border border-[#7A694B]/30"
                >
                  <Calendar className="w-4 h-4 text-amber-200" />
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </MotionButton>

                <a
                  href="#specialties"
                  className="px-6 py-4 rounded-xl text-sm font-serif font-semibold text-[#211E1B] border border-[#8C7A5B] hover:bg-[#EFE9DD] transition-all flex items-center space-x-2"
                >
                  <span>Explore Specialties</span>
                </a>
              </div>
            </FadeIn>

            {/* Key Trust Highlights */}
            <FadeIn delay={0.6}>
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#211E1B]/80 font-medium">
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
                  <span>Private Valet Parking</span>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Right Hero Visual Showcase: Floating Badges & Ceramic Frame */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.3} direction="left">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative rounded-2xl overflow-hidden bg-white border border-[#E5DFD3] p-2.5 shadow-2xl"
              >
                <img
                  src="/images/hero_clinic.png"
                  alt="Lumina Dental Studio Interior"
                  className="w-full h-[440px] sm:h-[500px] object-cover rounded-xl"
                />
                
                {/* Overlay Studio Caption */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#211E1B]/90 backdrop-blur-md border border-white/20 text-white shadow-2xl space-y-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif italic text-amber-200">
                      Digital Dental Sanctuary
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold font-mono">
                      4.9★ Rated
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-serif">State-of-the-Art Clinical Suite</h4>
                  <p className="text-xs text-slate-300">
                    Indirapuram's destination for 3D smile makeovers and painless prosthetics.
                  </p>
                </div>
              </motion.div>
            </FadeIn>

            {/* Floating Badge Top Left: 3D Scanner Tech */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="absolute -top-4 -left-4 p-3.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xl hidden sm:flex items-center space-x-3 text-left z-20"
            >
              <div className="p-2 rounded-lg bg-[#F0E9DC] text-[#8C7A5B]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold font-serif text-[#211E1B]">3D Digital Scanning</p>
                <p className="text-[10px] text-emerald-700 font-semibold">Zero Impression Molds</p>
              </div>
            </motion.div>

            {/* Floating Badge Bottom Right: 12+ Yrs Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: 'spring' }}
              className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-white border border-[#E5DFD3] shadow-xl hidden sm:flex items-center space-x-3 text-left z-20"
            >
              <div className="p-2.5 rounded-xl bg-[#F0E9DC] text-[#8C7A5B]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-[#211E1B]/60">Clinical Experience</p>
                <p className="text-lg font-bold font-serif text-[#211E1B]">12+ Master Yrs</p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
