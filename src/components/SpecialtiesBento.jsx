import React, { useState } from 'react';
import { SPECIALTIES } from '../data/practiceData';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Cpu, Activity, Heart, Smile } from 'lucide-react';

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
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className={`inline-block px-3 py-1 ${theme.radius} ${theme.accentBadge} text-xs font-mono uppercase tracking-widest`}>
            Clinical Excellence
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
            Advanced Specialties & Restorative Treatments
          </h2>
          <p className="text-base opacity-80 leading-relaxed">
            From single-tooth ceramic bonding to complex full-mouth digital restorations, experience pain-free precision dentistry.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Bento Left: Interactive Specialty Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {SPECIALTIES.map((spec) => {
              const IconComponent = ICON_MAP[spec.id] || Sparkles;
              const isActive = activeTab === spec.id;

              return (
                <div
                  key={spec.id}
                  onClick={() => setActiveTab(spec.id)}
                  className={`p-5 ${theme.radius} cursor-pointer transition-all duration-300 flex items-start space-x-4 border ${
                    isActive
                      ? `${theme.cardBg} ring-2 ring-teal-500/50 scale-[1.02]`
                      : 'opacity-70 hover:opacity-100 hover:bg-slate-500/5 border-transparent'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isActive ? 'bg-teal-500/20 text-teal-500' : 'bg-slate-500/10'} flex-shrink-0`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-bold text-base ${theme.headingFont}`}>{spec.title}</h3>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-500/10 opacity-80">
                        {spec.badge}
                      </span>
                    </div>
                    <p className="text-xs opacity-75 mt-1 line-clamp-1">{spec.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bento Right: Featured Detail View Component */}
          <div className="lg:col-span-7">
            <div className={`p-8 lg:p-10 ${theme.radius} ${theme.cardBg} border h-full flex flex-col justify-between text-left space-y-8 relative overflow-hidden`}>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 ${theme.radius} ${theme.accentBadge} text-xs font-mono uppercase tracking-widest`}>
                    {activeSpecialty.badge} Specialty Focus
                  </span>
                  <span className="text-xs font-mono opacity-60">Indirapuram Studio</span>
                </div>

                <div>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
                    {activeSpecialty.title}
                  </h3>
                  <p className={`text-sm font-semibold ${theme.accentText} mt-1`}>
                    {activeSpecialty.subtitle}
                  </p>
                </div>

                <p className="text-base opacity-85 leading-relaxed">
                  {activeSpecialty.desc}
                </p>

                {/* Procedure Features Grid */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold mb-4 opacity-70">
                    Clinical Protocols & Care Deliverables
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeSpecialty.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2.5 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Drawer */}
              <div className="pt-6 border-t border-slate-500/20 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono opacity-60">Consultation Duration</p>
                  <p className="text-sm font-bold">30 Mins Detailed 3D Evaluation</p>
                </div>

                <button
                  onClick={() => {
                    onSelectSpecialty(activeSpecialty.title);
                    onOpenBooking();
                  }}
                  className={`px-6 py-3 ${theme.radius} ${theme.primaryBtn} text-sm font-bold flex items-center space-x-2`}
                >
                  <span>Book {activeSpecialty.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
