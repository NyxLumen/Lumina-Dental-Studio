import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CLINIC_INFO } from '../data/practiceData';
import { Calendar, ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PhoneScanMockup from './PhoneScanMockup';

export default function Hero({ theme, onOpenBooking }) {
  const headlineRef = useRef(null);
  const awardRef = useRef(null);

  useEffect(() => {
    // GSAP entrance animation sequence
    const ctx = gsap.context(() => {
      gsap.from(awardRef.current, {
        y: -15,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });

      gsap.from(headlineRef.current?.children || [], {
        y: 25,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 bg-[#f6f6fa] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Award Banner Pill */}
        <div ref={awardRef} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#d6d6d6]/60 shadow-xs mb-8 select-none">
          <Sparkles className="w-3.5 h-3.5 text-[#5465ff]" />
          <span className="text-xs font-body text-[#151581] font-medium">
            Lumina won National Dental Innovation Award!
          </span>
        </div>

        {/* Hero Headline Stack (Centered 3-Line Display) */}
        <div ref={headlineRef} className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-[#151581] tracking-[-0.04em] leading-[0.93] text-center">
            Prescription-Grade Dental Care <br />
            <span className="text-[#151581] opacity-90">
              &amp; AI Smile Aesthetics
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#a1a1cd] font-body max-w-2xl mx-auto pt-2 leading-relaxed">
            Science-backed precision dentistry tailored to your unique smile. Experience zero-impression 3D scans, tooth shade calibration, and pain-free laser care.
          </p>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-[#151581] hover:bg-[#0f0f63] text-white font-body text-sm font-medium shadow-xs active:scale-[0.98] transition-all flex items-center space-x-2.5"
            >
              <Calendar className="w-4 h-4 text-[#a1a1cd]" />
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#specialties"
              className="px-7 py-3.5 rounded-full bg-white hover:bg-[#f6f5f4] text-[#151581] border border-[#d6d6d6] font-body text-sm font-medium active:scale-[0.98] transition-all"
            >
              Explore 3D Services
            </a>
          </div>

          {/* Clinical Credentials Row */}
          <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-[#151581]/80 font-medium">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00bb76]" />
              <span>Pain-Free Laser Protocol</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00bb76]" />
              <span>3D Optical Scanning</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00bb76]" />
              <span>Indirapuram Studio</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: iPhone Frame with AI Dental Scan Mockup */}
        <div className="pt-12 sm:pt-16">
          <PhoneScanMockup onOpenBooking={onOpenBooking} />
        </div>

      </div>
    </section>
  );
}
