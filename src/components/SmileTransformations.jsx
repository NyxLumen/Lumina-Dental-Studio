import React, { useState } from 'react';
import { Star, Calendar } from 'lucide-react';
import { FadeIn, MotionButton } from './MotionUi';

export default function SmileTransformations({ theme, onOpenBooking }) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="transformations" className="py-24 relative bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left: Editorial content — no box card */}
          <FadeIn className="lg:col-span-6 space-y-8 text-left order-2 lg:order-1">

            <div className="flex items-center space-x-4">
              <div className="w-8 h-px bg-[#8C7A5B]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#8C7A5B]">
                Real Transformations
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-[#111111] leading-tight">
              Porcelain that looks like yours.
            </h2>

            <p className="text-base text-[#111111]/80 leading-relaxed max-w-md">
              We preserve healthy tooth structure while restoring shade, symmetry, and bite. Slide to see the difference.
            </p>

            {/* Elegant case quote — no box, just a horizontal rule treatment */}
            <div className="border-t border-b border-[#E6DFD3] py-6 space-y-3">
              <div className="flex items-center space-x-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
                <span className="text-xs font-mono text-[#111111]/50 ml-2">Verified Case #482</span>
              </div>
              <p className="text-lg font-serif italic text-[#111111] leading-relaxed">
                "My colleagues didn't even realize I had veneers — they just noticed I was smiling all day."
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-[#111111]/50">
                <span>8 Minimal-Prep Veneers</span>
                <span>2 Visits · 7 Days</span>
              </div>
            </div>

            <MotionButton
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-lg bg-[#111111] hover:bg-[#2A2A2A] text-white font-serif text-xs font-bold uppercase tracking-widest flex items-center space-x-3 shadow-md"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>Schedule Smile Consultation</span>
            </MotionButton>
          </FadeIn>

          {/* Right: Interactive Before/After Slider */}
          <FadeIn delay={0.2} direction="left" className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl border border-[#E6DFD3] bg-white shadow-xl select-none">

              {/* After image */}
              <div className="relative w-full h-[480px]">
                <img
                  src="/images/smile_transformation.png"
                  alt="After Lumina Dental Veneer Treatment"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-4 right-4 px-3 py-1 rounded bg-[#8C7A5B] text-white text-[10px] font-mono uppercase tracking-wider shadow-md">
                  After
                </span>
              </div>

              {/* Before overlay */}
              <div
                className="absolute top-0 left-0 bottom-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="/images/smile_transformation.png"
                  alt="Before Cosmetic Dentistry Treatment"
                  loading="lazy"
                  decoding="async"
                  className="w-[1000px] max-w-none h-full object-cover grayscale brightness-90 contrast-125"
                />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded bg-[#111111] text-white text-[10px] font-mono uppercase tracking-wider shadow-md">
                  Before
                </span>
              </div>

              {/* Drag handle */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-10 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl border border-[#E6DFD3] flex items-center justify-center text-[#111111] font-bold text-xs">
                  ↔
                </div>
              </div>
            </div>

            <p className="text-center text-[10px] font-mono uppercase tracking-widest text-[#111111]/40 mt-3">
              Drag to compare before & after
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
