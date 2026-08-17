import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CLINIC_INFO, DOCTOR_INFO } from '../data/practiceData';
import { Calendar, ArrowRight, CheckCircle2, Star, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ theme, onOpenBooking }) {
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
      });

      gsap.from(visualRef.current, {
        scale: 0.97,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#f6f6fa] overflow-hidden select-none">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div ref={contentRef} className="lg:col-span-6 space-y-6 text-left">
            
            {/* Status Line */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#d6d6d6]/60 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#00bb76] animate-pulse" />
              <span className="text-xs font-body text-[#151581] font-medium">
                Indirapuram Studio &bull; {CLINIC_INFO.rating}★ ({CLINIC_INFO.reviewsCount}+ Reviews)
              </span>
            </div>

            {/* Expansive Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-[#151581] tracking-[-0.035em] leading-[0.95]">
              Dentistry redefined around your natural smile.
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-[#a1a1cd] font-body max-w-xl leading-relaxed">
              Precision porcelain veneers, 3D intraoral alignment, and gentle laser care crafted to honor your unique facial proportions.
            </p>

            {/* Doctor Trust Line */}
            <div className="pt-2 flex items-center space-x-4 border-y border-[#d6d6d6]/40 py-4 max-w-lg">
              <img
                src={DOCTOR_INFO.image}
                alt={DOCTOR_INFO.name}
                className="w-12 h-12 rounded-full object-cover border border-[#d6d6d6]/60 shadow-2xs"
              />
              <div>
                <h3 className="font-display font-semibold text-sm text-[#151581]">{DOCTOR_INFO.name}</h3>
                <p className="text-xs text-[#a1a1cd] font-body">{DOCTOR_INFO.credentials} &bull; {DOCTOR_INFO.experienceYears} Yrs Experience</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#151581] hover:bg-[#0f0f63] text-white font-body text-xs font-medium shadow-xs active:scale-[0.98] transition-all flex items-center space-x-2.5"
              >
                <Calendar className="w-4 h-4 text-[#a1a1cd]" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#specialties"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#f6f5f4] text-[#151581] border border-[#d6d6d6] font-body text-xs font-medium active:scale-[0.98] transition-all"
              >
                Explore Specialties
              </a>
            </div>

            {/* Credentials Row */}
            <div className="pt-2 flex flex-wrap gap-5 text-xs text-[#151581]/80 font-body font-medium">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00bb76]" />
                <span>Pain-Free Laser Anesthesia</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00bb76]" />
                <span>3D Optical Impressions</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00bb76]" />
                <span>Valet Parking</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fashion Editorial Photography Showcase */}
          <div ref={visualRef} className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden bg-white p-3 border border-[#d6d6d6]/60 shadow-dual">
              
              <img
                src="/images/hero_portrait.png"
                alt="Lumina Dental Aesthetic Patient Smile"
                className="w-full h-[480px] sm:h-[540px] object-cover rounded-[24px]"
              />

              {/* Floating Bottom Card: Editorial Studio Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-[20px] bg-white/95 backdrop-blur-md border border-[#d6d6d6]/60 text-[#151581] shadow-md space-y-1.5 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-body font-semibold text-[#5465ff] uppercase tracking-wider">
                    Digital Dentistry Suite
                  </span>
                  <span className="text-xs font-mono font-bold text-[#00bb76]">
                    Shade A1 Porcelain
                  </span>
                </div>
                <h4 className="text-base font-display font-semibold text-[#151581]">
                  State-of-the-Art Aesthetic Sanctuary
                </h4>
                <p className="text-xs text-[#292824]/80 font-body">
                  Zero-impression 3D optical scans, sub-millimeter veneer planning, and bio-compatible materials.
                </p>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-[#151581] text-white text-xs font-body font-medium shadow-md flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00bb76]" />
                <span>European EN13060 Safety</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
