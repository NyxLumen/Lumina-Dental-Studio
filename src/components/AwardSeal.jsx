import React from 'react';
import { Award } from 'lucide-react';

export default function AwardSeal() {
  return (
    <div className="fixed bottom-6 right-6 z-40 select-none group hidden sm:block">
      <div className="relative w-14 h-14 rounded-full bg-[#292824] text-white p-1 shadow-lg border border-white/20 flex items-center justify-center transition-transform group-hover:scale-105">
        
        {/* Rotating Circular Text SVG */}
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_12s_linear_infinite]">
          <path
            id="sealTextPath"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[10px] font-mono tracking-[0.15em] fill-white/90 uppercase font-semibold">
            <textPath href="#sealTextPath" startOffset="0%">
              LUMINA DENTAL &bull; EXCELLENCE &bull;
            </textPath>
          </text>
        </svg>

        {/* Center Award Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Award className="w-5 h-5 text-[#5465ff]" />
        </div>

      </div>
    </div>
  );
}
