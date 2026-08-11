import React from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/practiceData';
import { Star, Quote, MapPin } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, MotionCard } from './MotionUi';

export default function Testimonials({ theme }) {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-serif italic bg-[#F0E9DC] text-[#7A694B] border border-[#D8CDBC]">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{CLINIC_INFO.rating}★ Rating across {CLINIC_INFO.reviewsCount}+ Patient Reviews</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
            Trusted by Patients Across Indirapuram & Noida
          </h2>
          <p className="text-base opacity-80 leading-relaxed">
            Read real stories from patients who restored their smiles and overcame dental anxiety at Lumina Dental Studio.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <StaggerItem key={idx}>
              <MotionCard className="p-8 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm hover:border-[#8C7A5B] hover:shadow-md flex flex-col justify-between space-y-6 h-full text-left relative">
                <Quote className="w-10 h-10 opacity-10 text-[#8C7A5B] absolute top-6 right-6" />

                <div className="space-y-4">
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm opacity-90 leading-relaxed italic font-serif">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6DFD3] flex items-center justify-between">
                  <div>
                    <h4 className={`font-bold text-sm ${theme.headingFont}`}>{item.name}</h4>
                    <div className="flex items-center space-x-1 text-xs opacity-70 mt-0.5">
                      <MapPin className="w-3 h-3 text-rose-600" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-serif italic px-2.5 py-1 rounded bg-[#F0E9DC] text-[#7A694B] border border-[#D8CDBC]">
                    {item.procedure}
                  </span>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
