import React from 'react';
import { TECHNOLOGY } from '../data/practiceData';
import { Cpu, ShieldCheck, Sparkles, Scan } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionUi';

const ICON_MAP = { Scan, ShieldCheck, Sparkles };

export default function TechnologySuite({ theme }) {
  return (
    <section id="technology" className="py-24 relative bg-[#111111] text-white overflow-hidden">

      {/* Subtle warm gradient wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl bg-[#8C7A5B]/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Label */}
        <FadeIn className="flex items-center space-x-4 mb-16">
          <div className="w-8 h-px bg-[#8C7A5B]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#8C7A5B]">
            Digital Precision
          </span>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Big Headline */}
          <FadeIn className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-white leading-tight">
              Painless care. <br />
              <span className="italic font-normal text-[#8C7A5B]">
                Precision-engineered.
              </span>
            </h2>
            <p className="text-base text-white/60 leading-relaxed">
              Elimination of anxiety through 3D intraoral optical scanning, computer-controlled numbing, and zero-compromise sterilization.
            </p>
          </FadeIn>

          {/* Technology Cards */}
          <StaggerContainer className="lg:col-span-7 grid gap-px bg-white/10 rounded-xl overflow-hidden">
            {TECHNOLOGY.map((tech, idx) => {
              const IconComponent = ICON_MAP[tech.icon] || Cpu;
              return (
                <StaggerItem key={idx}>
                  <div className="group p-8 bg-[#111111] hover:bg-[#1A1A1A] transition-colors flex items-start space-x-6">
                    <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src={tech.image}
                        alt={tech.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-amber-200 drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono text-[#8C7A5B]">0{idx + 1}</span>
                        <h3 className="text-lg font-bold font-serif text-white">{tech.title}</h3>
                      </div>
                      <p className="text-sm text-white/60 leading-relaxed">{tech.desc}</p>
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">European Certified</span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}
