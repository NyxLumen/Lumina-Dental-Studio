import React from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/practiceData';
import { Star, MapPin } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionUi';

export default function Testimonials({ theme }) {
  // Feature the first testimonial as a hero spotlight
  const hero = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1);

  return (
    <section className="py-24 relative bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label */}
        <FadeIn className="flex items-center space-x-4 mb-16">
          <div className="w-8 h-px bg-[#8C7A5B]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#8C7A5B]">
            Patient Voices
          </span>
          <span className="text-xs font-mono text-[#111111]/40">
            {CLINIC_INFO.rating}★ · {CLINIC_INFO.reviewsCount}+ Reviews
          </span>
        </FadeIn>

        {/* Hero Spotlight Quote — Awwwards magazine style, full width, no card */}
        <FadeIn delay={0.1} className="mb-20 pb-16 border-b border-[#E6DFD3]">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <div className="flex items-center space-x-1 text-amber-500 mb-6">
                {[...Array(hero.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-medium text-[#111111] leading-[1.2]">
                "{hero.text}"
              </p>
            </div>
            <div className="lg:col-span-3 text-left lg:text-right">
              <p className="font-bold font-serif text-[#111111]">{hero.name}</p>
              <div className="flex items-center space-x-1 text-xs text-[#111111]/60 mt-1 lg:justify-end">
                <MapPin className="w-3 h-3 text-rose-500" />
                <span>{hero.location}</span>
              </div>
              <span className="inline-block mt-2 text-[10px] font-mono text-[#8C7A5B] uppercase tracking-widest">
                {hero.procedure}
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Remaining Reviews — clean 3-col unboxed grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E6DFD3]">
          {rest.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="p-8 space-y-4 text-left">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-serif italic text-[#111111] leading-relaxed">
                  "{item.text}"
                </p>
                <div className="pt-2 border-t border-[#E6DFD3]">
                  <p className="font-bold text-xs font-serif text-[#111111]">{item.name}</p>
                  <div className="flex items-center space-x-1 text-[10px] text-[#111111]/50 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-rose-500" />
                    <span>{item.location}</span>
                    <span className="opacity-40">·</span>
                    <span className="text-[#8C7A5B] font-mono">{item.procedure}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
