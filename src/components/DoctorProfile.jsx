import React from 'react';
import { DOCTOR_INFO } from '../data/practiceData';
import { Award, Quote, Check, Calendar, Stethoscope } from 'lucide-react';

export default function DoctorProfile({ theme, onOpenBooking }) {
  return (
    <section id="doctor" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`p-8 lg:p-12 ${theme.radius} ${theme.cardBg} border relative overflow-hidden`}>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Doctor Portrait Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={DOCTOR_INFO.image}
                  alt={DOCTOR_INFO.name}
                  className="w-full h-[450px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Credential Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-white space-y-1">
                  <div className="flex items-center space-x-2">
                    <Stethoscope className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
                      Master Prosthodontist
                    </span>
                  </div>
                  <p className="text-sm font-bold">{DOCTOR_INFO.credentials}</p>
                </div>
              </div>
            </div>

            {/* Doctor Bio & Philosophy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div>
                <span className={`inline-block px-3 py-1 ${theme.radius} ${theme.accentBadge} text-xs font-semibold uppercase tracking-wider mb-3`}>
                  Lead Clinical Specialist
                </span>
                <h2 className={`text-3xl sm:text-4xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
                  {DOCTOR_INFO.name}
                </h2>
                <p className="text-sm font-semibold opacity-75 mt-1">{DOCTOR_INFO.credentials} • {DOCTOR_INFO.experienceLabel}</p>
              </div>

              {/* Quote Highlight Box */}
              <div className={`p-6 ${theme.radius} ${theme.cardAltBg} border-l-4 ${theme.isDark ? 'border-l-cyan-400' : 'border-l-teal-600'} space-y-2 relative`}>
                <Quote className="w-8 h-8 opacity-20 absolute top-4 right-4" />
                <p className={`text-lg sm:text-xl font-medium italic ${theme.headingFont} leading-relaxed`}>
                  {DOCTOR_INFO.quote}
                </p>
                <p className="text-xs font-mono uppercase tracking-wider opacity-60">— Dr. Arjun Mehta</p>
              </div>

              {/* Bio text */}
              <p className="text-base opacity-85 leading-relaxed">
                {DOCTOR_INFO.bio}
              </p>

              {/* Memberships */}
              <div>
                <h4 className={`text-xs font-mono uppercase tracking-wider font-bold mb-3 ${theme.accentText}`}>
                  Professional Associations & Certifications
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {DOCTOR_INFO.memberships.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-medium opacity-90">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className={`px-6 py-3 ${theme.radius} ${theme.primaryBtn} text-sm font-semibold inline-flex items-center space-x-2`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Dr. Mehta</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
