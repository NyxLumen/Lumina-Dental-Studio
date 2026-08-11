import React from 'react';
import { STATS } from '../data/practiceData';
import { FadeIn } from './MotionUi';

export default function Stats({ theme }) {
  return (
    <section className="py-16 relative border-y border-[#E6DFD3] bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E6DFD3] text-left">
          {STATS.map((stat, idx) => (
            <div key={idx} className="p-6 sm:p-8 space-y-2">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif text-[#111111] block">
                {stat.value}
              </span>
              <h3 className="text-sm font-bold font-serif text-[#8C7A5B] tracking-wide">
                {stat.label}
              </h3>
              <p className="text-xs text-[#111111]/70 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
