import React from 'react';
import { CLINIC_INFO, DOCTOR_INFO } from '../data/practiceData';
import { Calendar, ShieldCheck, MapPin, Award, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero({ theme, onOpenBooking }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24">
      
      {/* Background Glow / Texture for Dark & Light modes */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${theme.isDark ? 'bg-cyan-500/10' : 'bg-teal-500/10'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout Mode Switcher according to theme */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border shadow-xs"
              style={{
                backgroundColor: theme.isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                borderColor: theme.isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
              }}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${theme.isDark ? 'bg-emerald-400' : 'bg-teal-500'}`} />
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{CLINIC_INFO.location}</span>
              <span className="opacity-40">•</span>
              <span className="opacity-80">Est. {CLINIC_INFO.founded}</span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${theme.headingFont} ${theme.bodyText}`}>
              Modern dentistry. <br />
              <span className={`italic font-normal ${theme.accentText}`}>
                Naturally beautiful.
              </span>
            </h1>

            {/* Subhead Positioning */}
            <p className="text-lg sm:text-xl font-normal opacity-85 leading-relaxed max-w-2xl">
              {CLINIC_INFO.positioning}. Engineered for completely painless care, 3D intraoral precision, and long-lasting confidence in Indirapuram, Ghaziabad.
            </p>

            {/* Doctor Trust Card Badge */}
            <div className={`p-4 ${theme.radius} ${theme.cardAltBg} flex items-center space-x-4 border max-w-xl`}>
              <img
                src={DOCTOR_INFO.image}
                alt={DOCTOR_INFO.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shadow-md"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className={`font-bold text-sm ${theme.headingFont}`}>{DOCTOR_INFO.name}</h3>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 font-semibold">Prosthodontist</span>
                </div>
                <p className="text-xs opacity-75 font-medium">{DOCTOR_INFO.credentials} • {DOCTOR_INFO.experienceLabel}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenBooking}
                className={`px-8 py-4 ${theme.radius} ${theme.primaryBtn} text-base font-bold flex items-center space-x-3 group`}
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#specialties"
                className={`px-6 py-4 ${theme.radius} ${theme.secondaryBtn} text-sm font-semibold flex items-center space-x-2`}
              >
                <span>Explore Specialties</span>
              </a>
            </div>

            {/* Key Trust Bullet Indicators */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs opacity-80">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Painless Anesthesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Zero Mold Scans</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Private Parking</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Image Card */}
            <div className={`relative ${theme.radius} overflow-hidden ${theme.cardBg} p-2`}>
              <img
                src="/images/hero_clinic.png"
                alt="Lumina Dental Studio Interior"
                className={`w-full h-[420px] sm:h-[480px] object-cover ${theme.radius}`}
              />
              
              {/* Floating Overlay Badge */}
              <div className={`absolute bottom-6 left-6 right-6 p-4 ${theme.radius} bg-slate-950/85 backdrop-blur-md border border-white/20 text-white shadow-2xl space-y-1`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                    Digital Excellence
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                    4.9★ Rated
                  </span>
                </div>
                <h4 className="text-base font-bold">State-of-the-Art Clinical Suite</h4>
                <p className="text-xs text-slate-300">
                  Indirapuram's premier destination for 3D smile redesigns and painless prosthetic restoration.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className={`absolute -top-4 -right-4 p-4 ${theme.radius} ${theme.cardBg} border shadow-xl hidden sm:flex items-center space-x-3`}>
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-500">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase opacity-70">Experience</p>
                <p className="text-lg font-bold">12+ Clinical Yrs</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
