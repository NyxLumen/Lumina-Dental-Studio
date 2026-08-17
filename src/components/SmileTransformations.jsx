import React, { useState } from 'react';
import { TRANSFORMATIONS } from '../data/practiceData';
import { Sparkles, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SmileTransformations({ theme, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const categories = ['All', 'Veneers', 'Invisalign', 'Implants'];

  const filteredCases = activeCategory === 'All'
    ? TRANSFORMATIONS
    : TRANSFORMATIONS.filter(c => c.category === activeCategory);

  const currentCase = filteredCases[activeCaseIdx] || TRANSFORMATIONS[0];

  return (
    <section id="transformations" className="py-16 sm:py-24 bg-[#f6f6fa]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* 40px Radius White Container */}
        <div className="bg-white rounded-[40px] p-8 sm:p-14 shadow-dual">
          
          {/* Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-body font-medium text-[#00bb76] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Clinical Case Gallery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-normal text-[#151581] tracking-[-0.03em]">
                Porcelain that honors your natural enamel
              </h2>
            </div>

            {/* Treatment Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-[#f6f5f4] p-1.5 rounded-full border border-[#d6d6d6]/60">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setActiveCaseIdx(0); }}
                  className={`px-4 py-1.5 rounded-full text-xs font-body font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-[#151581] text-white shadow-2xs'
                      : 'text-[#151581] hover:bg-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Case Info & Metrics */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-body font-semibold text-[#5465ff] uppercase tracking-wider">
                  Case Study &bull; {currentCase.category}
                </span>
                <h3 className="text-2xl font-display font-semibold text-[#151581]">
                  {currentCase.title}
                </h3>
                <p className="text-xs text-[#a1a1cd] font-body">
                  Patient: {currentCase.patient} &bull; Treatment: {currentCase.duration}
                </p>
              </div>

              <p className="text-sm font-body text-[#292824] leading-relaxed">
                {currentCase.details}
              </p>

              {/* Shade Change Metric Card */}
              <div className="bg-[#f6f5f4] rounded-[24px] p-5 border border-[#d6d6d6]/60 space-y-3">
                <div className="flex items-center justify-between text-xs font-body border-b border-[#d6d6d6]/40 pb-2">
                  <span className="text-[#a1a1cd]">Before Shade:</span>
                  <span className="font-mono text-[#151581] font-semibold">{currentCase.shadeBefore}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-body">
                  <span className="text-[#a1a1cd]">After Shade:</span>
                  <span className="font-mono text-[#00bb76] font-bold">{currentCase.shadeAfter}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-full bg-[#151581] hover:bg-[#0f0f63] text-white font-body text-xs font-medium shadow-xs active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-[#a1a1cd]" />
                <span>Book {currentCase.category} Consultation</span>
              </button>
            </div>

            {/* Right: Interactive Before / After Comparison Slider */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[28px] border border-[#d6d6d6]/60 bg-[#f6f6fa] shadow-xs select-none h-[380px] sm:h-[440px]">
                
                {/* After Image */}
                <div className="relative w-full h-full">
                  <img
                    src={currentCase.afterImage}
                    alt="After Lumina Dental Treatment"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-[#00bb76] text-white text-[11px] font-body font-medium shadow-xs">
                    After Treatment
                  </span>
                </div>

                {/* Before Image Overlay */}
                <div
                  className="absolute top-0 left-0 bottom-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={currentCase.beforeImage}
                    alt="Before Cosmetic Treatment"
                    className="w-[800px] max-w-none h-full object-cover grayscale brightness-90 contrast-125"
                  />
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#151581] text-white text-[11px] font-body font-medium shadow-xs">
                    Before Treatment
                  </span>
                </div>

                {/* Range Slider Handle */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />

                {/* Vertical Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl z-20 pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#151581] text-white border-2 border-white shadow-md flex items-center justify-center font-bold text-xs">
                    &harr;
                  </div>
                </div>
              </div>

              <p className="text-center text-xs font-body text-[#a1a1cd] mt-3">
                Drag slider to compare before &amp; after smile transformations
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
