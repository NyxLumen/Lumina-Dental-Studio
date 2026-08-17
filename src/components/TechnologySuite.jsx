import React, { useState } from 'react';
import { TECHNOLOGY, SHADE_PRESETS } from '../data/practiceData';
import { Scan, ShieldCheck, Sparkles, Cpu, Check, Layers, Eye } from 'lucide-react';

const ICON_MAP = { Scan, ShieldCheck, Sparkles };

export default function TechnologySuite({ theme }) {
  const [activeShade, setActiveShade] = useState(SHADE_PRESETS[0]);

  return (
    <section id="technology" className="py-16 sm:py-24 bg-[#f6f6fa]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Section Container (40px radius white tablet with dual shadow) */}
        <div className="bg-white rounded-[40px] p-8 sm:p-14 shadow-dual">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Tech Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-1.5 text-xs font-body font-medium text-[#5465ff] uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>3D Digital Suite</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-normal text-[#151581] tracking-[-0.03em]">
                Painless care. <br />
                <span className="text-[#5465ff]">Precision engineered.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#292824]/80 font-body leading-relaxed">
                Elimination of clinical anxiety through zero-impression 3D intraoral optical scanning, computer-guided laser anesthesia, and strict European EN13060 sterilization.
              </p>

              {/* Tech Highlights Stack */}
              <div className="space-y-3 pt-2">
                {TECHNOLOGY.map((item, idx) => {
                  const IconComponent = ICON_MAP[item.icon] || Cpu;
                  return (
                    <div
                      key={idx}
                      className="bg-[#f6f5f4] rounded-[20px] p-4 flex items-start space-x-4 border border-[#d6d6d6]/40 hover:bg-white hover:border-[#151581]/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#151581] text-white flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-[#a1a1cd]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-display font-semibold text-[#151581]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#a1a1cd] font-body mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Interactive Enamel Shade Preview Widget */}
            <div className="lg:col-span-7 bg-[#f6f5f4] rounded-[32px] p-6 sm:p-8 border border-[#d6d6d6]/60 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-xs font-body font-semibold text-[#151581] uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-[#5465ff]" />
                    <span>Clinical Micro-Tool &bull; Natural Enamel Shade Preview</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#00bb76] font-semibold bg-[#00bb76]/10 px-2.5 py-0.5 rounded-full">
                    Opalescence Calibration
                  </span>
                </div>

                <p className="text-xs text-[#292824]/80 font-body mb-6">
                  Select an enamel shade preset to simulate natural porcelain light reflection and tooth opalescence metrics:
                </p>

                {/* Shade Preset Tabs */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {SHADE_PRESETS.map((shade) => {
                    const isSelected = activeShade.id === shade.id;
                    return (
                      <button
                        key={shade.id}
                        onClick={() => setActiveShade(shade)}
                        className={`p-3 rounded-[20px] text-left transition-all border ${
                          isSelected
                            ? 'bg-[#151581] text-white border-[#151581] shadow-xs'
                            : 'bg-white text-[#151581] border-[#d6d6d6]/60 hover:border-[#151581]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div
                            className="w-5 h-5 rounded-full border border-black/10 shadow-2xs"
                            style={{ backgroundColor: shade.hex }}
                          />
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#00bb76]" />}
                        </div>
                        <p className="text-xs font-display font-semibold line-clamp-1">{shade.name}</p>
                        <p className={`text-[10px] font-mono ${isSelected ? 'text-[#a1a1cd]' : 'text-[#a1a1cd]'}`}>
                          Code: {shade.id}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Active Shade Metric Display */}
                <div className="bg-white rounded-[24px] p-6 border border-[#d6d6d6]/60 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between border-b border-[#f6f5f4] pb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#a1a1cd]">Selected Enamel Spec</span>
                      <h4 className="text-base font-display font-semibold text-[#151581]">
                        {activeShade.name}
                      </h4>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#f6f6fa] text-xs font-mono font-bold text-[#151581] border border-[#d6d6d6]/40">
                      {activeShade.id}
                    </div>
                  </div>

                  <p className="text-xs font-body text-[#292824] leading-relaxed">
                    {activeShade.tone}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-body text-[#151581]">
                    <div className="bg-[#f6f6fa] p-2.5 rounded-xl border border-[#d6d6d6]/40">
                      <span className="text-[#a1a1cd] block text-[10px]">Light Translucency</span>
                      <span className="font-semibold font-mono text-[#00bb76]">99.2% Natural Match</span>
                    </div>
                    <div className="bg-[#f6f6fa] p-2.5 rounded-xl border border-[#d6d6d6]/40">
                      <span className="text-[#a1a1cd] block text-[10px]">Ceramic Material</span>
                      <span className="font-semibold font-mono text-[#151581]">Ultra-Thin E-max</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="flex items-center space-x-2 text-xs text-[#a1a1cd] font-body pt-2">
                <Eye className="w-4 h-4 text-[#5465ff] shrink-0" />
                <span>Custom shade try-ins available in-office during your 3D digital smile consultation.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
