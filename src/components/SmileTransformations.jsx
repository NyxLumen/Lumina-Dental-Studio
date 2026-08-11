import React, { useState } from 'react';
import { Star, Calendar } from 'lucide-react';
import { FadeIn, MotionButton } from './MotionUi';

export default function SmileTransformations({ theme, onOpenBooking }) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="transformations" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text & Case Study Info */}
          <FadeIn className="lg:col-span-6 space-y-6 text-left">
            <span className={`inline-block px-3.5 py-1 ${theme.radius} ${theme.accentBadge} text-xs font-serif italic`}>
              Real Patient Transformations
            </span>
            
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
              Naturally Beautiful Porcelain Makeovers
            </h2>

            <p className="text-base opacity-85 leading-relaxed">
              We preserve healthy tooth structure while restoring shade, symmetry, and bite functionality. Slide to experience how custom digital smile design turns vision into reality.
            </p>

            <div className="p-6 rounded-xl bg-white border border-[#E5DFD3] shadow-sm space-y-4">
              <div className="flex items-center space-x-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-serif italic ml-2 text-slate-500">Verified Patient Case #482</span>
              </div>
              <p className="text-sm font-medium italic opacity-90 leading-relaxed">
                “My smile looks so natural that my colleagues didn’t even realize I had porcelain veneers — they just noticed I was smiling all day long!”
              </p>
              <div className="flex items-center justify-between text-xs opacity-75 font-mono pt-2 border-t border-[#E6DFD3]">
                <span>Treatment: 8 Minimal-Prep Veneers</span>
                <span>Duration: 2 Visits (7 Days)</span>
              </div>
            </div>

            <div>
              <MotionButton
                onClick={onOpenBooking}
                className={`px-8 py-4 ${theme.radius} ${theme.primaryBtn} text-base font-bold inline-flex items-center space-x-2 shadow-lg shadow-[#8C7A5B]/20`}
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Your Smile Consultation</span>
              </MotionButton>
            </div>
          </FadeIn>

          {/* Interactive Before/After Visual Slider */}
          <FadeIn delay={0.2} direction="left" className="lg:col-span-6 relative">
            <div className={`relative ${theme.radius} overflow-hidden border border-[#E5DFD3] bg-white shadow-xl select-none`}>
              
              {/* After Image */}
              <div className="relative w-full h-[450px]">
                <img
                  src="/images/smile_transformation.png"
                  alt="Restored Natural Smile After Veneers"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-4 right-4 px-3 py-1 rounded bg-[#8C7A5B] text-white text-xs font-serif italic shadow-md">
                  AFTER: Lumina Smile
                </span>
              </div>

              {/* Before Overlay Image */}
              <div
                className="absolute top-0 left-0 bottom-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="/images/smile_transformation.png"
                  alt="Before Cosmetic Dentistry Treatment"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-125 max-w-none w-[1000px]"
                />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded bg-[#211E1B] text-white text-xs font-serif italic shadow-md">
                  BEFORE: Initial Wear
                </span>
              </div>

              {/* Interactive Range Input overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />

              {/* Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-10 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#8C7A5B] flex items-center justify-center font-bold text-xs shadow-xl border-2 border-[#8C7A5B]">
                  ↔
                </div>
              </div>

            </div>

            <p className="text-center text-xs opacity-60 font-mono mt-3">
              👈 Drag slider left and right to inspect transformation details 👉
            </p>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
