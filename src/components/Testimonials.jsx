import React from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/practiceData';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';

export default function Testimonials({ theme }) {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-500 border border-amber-500/30">
            <Star className="w-3.5 h-3.5 fill-amber-500" />
            <span>{CLINIC_INFO.rating}★ Rating across {CLINIC_INFO.reviewsCount}+ Patient Reviews</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
            Trusted by Patients Across Indirapuram & Noida
          </h2>
          <p className="text-base opacity-80 leading-relaxed">
            Read real stories from patients who restored their smiles and overcame dental anxiety at Lumina Dental Studio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 ${theme.radius} ${theme.cardBg} border flex flex-col justify-between space-y-6 relative hover:-translate-y-1 transition-transform duration-300`}
            >
              <Quote className="w-10 h-10 opacity-10 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm opacity-90 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-500/20 flex items-center justify-between">
                <div>
                  <h4 className={`font-bold text-sm ${theme.headingFont}`}>{item.name}</h4>
                  <div className="flex items-center space-x-1 text-xs opacity-70 mt-0.5">
                    <MapPin className="w-3 h-3 text-rose-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold border border-emerald-500/20">
                  {item.procedure}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
