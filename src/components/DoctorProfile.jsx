import React, { useState } from 'react';
import { DOCTORS } from '../data/practiceData';
import { ChevronRight, ChevronLeft, Award, Calendar, Sparkles } from 'lucide-react';

export default function DoctorProfile({ theme, onOpenBooking }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextDoctor = () => {
    setActiveIdx((prev) => (prev + 1) % DOCTORS.length);
  };

  const prevDoctor = () => {
    setActiveIdx((prev) => (prev - 1 + DOCTORS.length) % DOCTORS.length);
  };

  return (
    <section id="doctor" className="py-16 sm:py-24 bg-[#f6f6fa]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Section Container (40px radius white tablet with dual shadow) */}
        <div className="bg-white rounded-[40px] p-8 sm:p-14 shadow-dual relative overflow-hidden">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-body font-medium text-[#5465ff] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Medical Authority</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-normal text-[#151581] tracking-[-0.03em]">
              Medically backed by leading specialists
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1cd] font-body">
              Our clinical faculty combines master prosthodontic artistry, AI orthodontics, and laser periodontics.
            </p>
          </div>

          {/* 3-Column Doctor Card Grid */}
          <div className="grid md:grid-cols-3 gap-6 relative">
            {DOCTORS.map((doc, idx) => (
              <div
                key={doc.id}
                className="bg-[#f6f5f4] rounded-[24px] p-6 flex flex-col justify-between hover:bg-white hover:shadow-xs border border-transparent hover:border-[#d6d6d6]/60 transition-all duration-300 group"
              >
                <div>
                  {/* Portrait photo (aspect 3:4, 16px radius) */}
                  <div className="w-full h-64 sm:h-72 rounded-[16px] overflow-hidden mb-5 bg-[#d6d6d6]/30">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Specialty Tag */}
                  <span className="text-[11px] font-body font-semibold text-[#5465ff] uppercase tracking-wider">
                    {doc.specialty}
                  </span>

                  {/* Doctor Name & Credentials */}
                  <h3 className="text-xl font-display font-semibold text-[#151581] mt-1">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-[#a1a1cd] font-body mt-0.5">
                    {doc.credentials} &bull; {doc.experienceYears} Yrs Exp.
                  </p>

                  <p className="text-xs text-[#292824]/80 font-body mt-3 line-clamp-3 leading-relaxed">
                    {doc.bio}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-5 mt-4 border-t border-[#d6d6d6]/40 flex items-center justify-between">
                  <span className="text-[11px] font-body text-[#00bb76] font-medium flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00bb76]" />
                    <span>Verified Specialist</span>
                  </span>
                  
                  <button
                    onClick={onOpenBooking}
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#151581] text-[#151581] hover:text-white border border-[#d6d6d6] flex items-center justify-center transition-all shadow-2xs"
                    title={`Book with ${doc.name}`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Section Action Footer */}
          <div className="mt-12 text-center pt-4 border-t border-[#d6d6d6]/30 flex flex-wrap justify-between items-center gap-4">
            <div className="text-xs text-[#a1a1cd] font-body">
              All treatments supervised by board-certified specialists adhering to European EN13060 clinical standards.
            </div>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#151581] hover:bg-[#0f0f63] text-white font-body text-xs font-medium shadow-xs active:scale-[0.98] transition-all flex items-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#a1a1cd]" />
              <span>Book Specialist Consultation</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
