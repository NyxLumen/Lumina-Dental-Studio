import React from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/practiceData';
import { Star, CheckCircle2, MapPin } from 'lucide-react';

export default function Testimonials({ theme }) {
  return (
    <section className="py-16 sm:py-24 bg-[#f6f6fa]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-body font-medium text-[#00bb76] uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Patient Reviews &bull; {CLINIC_INFO.rating}★ ({CLINIC_INFO.reviewsCount}+ Verified)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-normal text-[#151581] tracking-[-0.03em]">
            Verified patient smile stories
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1cd] font-body">
            Real patient experiences with our 3D prosthetics, E-max veneers, and pain-free clinical care.
          </p>
        </div>

        {/* 3-Column Review Card Grid (White Cards, 24px Radius, No Borders) */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-6 shadow-dual flex flex-col justify-between hover:translate-y-[-2px] transition-transform duration-200"
            >
              <div>
                {/* Top Row: 5 Verified Green Stars + Verified Text */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#00bb76] text-[#00bb76]" />
                    ))}
                  </div>

                  <div className="flex items-center space-x-1 text-xs font-body font-medium text-[#00bb76]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Patient</span>
                  </div>
                </div>

                {/* Procedure Title */}
                <h3 className="text-base font-display font-semibold text-[#151581] mb-2">
                  {item.procedure}
                </h3>

                {/* Review Text */}
                <p className="text-sm font-body text-[#292824] leading-relaxed">
                  "{item.text}"
                </p>
              </div>

              {/* Reviewer Details Footer */}
              <div className="pt-4 mt-5 border-t border-[#f6f5f4] flex items-center justify-between text-xs text-[#a1a1cd] font-body">
                <div>
                  <p className="font-semibold text-[#151581] text-sm">{item.name}</p>
                  <p className="text-[11px] text-[#a1a1cd]">{item.location}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#f6f6fa] flex items-center justify-center text-[#151581] font-display font-bold text-xs">
                  {item.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
