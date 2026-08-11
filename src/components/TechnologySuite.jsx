import React from 'react';
import { TECHNOLOGY } from '../data/practiceData';
import { Cpu, ShieldCheck, Sparkles, Scan, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, MotionCard } from './MotionUi';

const ICON_MAP = {
  Scan: Scan,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles
};

export default function TechnologySuite({ theme }) {
  return (
    <section id="technology" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className={`inline-block px-3.5 py-1 ${theme.radius} ${theme.accentBadge} text-xs font-serif italic`}>
            Next-Gen Technology
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
            Painless Care Powered by 3D Digital Precision
          </h2>
          <p className="text-base opacity-80 leading-relaxed">
            Eliminating anxiety through technology: impression-free optical scanning, computer-controlled numbing, and zero-compromise sterilization.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {TECHNOLOGY.map((tech, idx) => {
            const IconComponent = ICON_MAP[tech.icon] || Cpu;

            return (
              <StaggerItem key={idx}>
                <MotionCard className="p-6 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm hover:border-[#8C7A5B] hover:shadow-md flex flex-col justify-between space-y-6 h-full text-left">
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-xl overflow-hidden">
                      <img
                        src={tech.image}
                        alt={tech.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 p-2 rounded-lg bg-[#211E1B]/85 text-amber-200 border border-white/20 backdrop-blur-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold ${theme.headingFont} ${theme.bodyText}`}>
                      {tech.title}
                    </h3>

                    <p className="text-sm opacity-80 leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6DFD3] flex items-center justify-between text-xs font-mono opacity-80">
                    <span className="flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>European Certified</span>
                    </span>
                    <span className="text-[#8C7A5B] font-bold font-serif italic">Lumina Standard</span>
                  </div>
                </MotionCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
