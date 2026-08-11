import React from 'react';
import { DOCTOR_INFO } from '../data/practiceData';
import { Quote, Check, Calendar, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, MotionButton } from './MotionUi';

export default function DoctorProfile({ theme, onOpenBooking }) {
  return (
    <section id="doctor" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="p-8 lg:p-12 rounded-2xl bg-white border border-[#E5DFD3] shadow-lg relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Doctor Portrait Visual */}
            <div className="lg:col-span-5 relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative rounded-xl overflow-hidden shadow-xl border border-[#E5DFD3]"
              >
                <img
                  src={DOCTOR_INFO.image}
                  alt={DOCTOR_INFO.name}
                  className="w-full h-[460px] object-cover object-top"
                />
                
                {/* Floating Credential Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#211E1B]/90 backdrop-blur-md border border-white/20 text-white space-y-1">
                  <div className="flex items-center space-x-2">
                    <Stethoscope className="w-4 h-4 text-amber-200" />
                    <span className="text-xs font-serif italic text-amber-200 font-semibold">
                      Master Prosthodontist
                    </span>
                  </div>
                  <p className="text-sm font-bold font-serif">{DOCTOR_INFO.credentials}</p>
                </div>
              </motion.div>
            </div>

            {/* Doctor Bio & Philosophy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div>
                <span className={`inline-block px-3.5 py-1 ${theme.radius} ${theme.accentBadge} text-xs font-serif italic mb-3`}>
                  Lead Clinical Specialist
                </span>
                <h2 className={`text-3xl sm:text-4xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
                  {DOCTOR_INFO.name}
                </h2>
                <p className="text-sm font-serif italic text-[#8C7A5B] mt-1">{DOCTOR_INFO.credentials} • {DOCTOR_INFO.experienceLabel}</p>
              </div>

              {/* Quote Highlight Box */}
              <div className="p-6 rounded-xl bg-[#F8F5F0] border-l-4 border-l-[#8C7A5B] border border-[#E5DFD3] space-y-2 relative">
                <Quote className="w-8 h-8 opacity-15 text-[#8C7A5B] absolute top-4 right-4" />
                <p className={`text-lg sm:text-xl font-medium italic ${theme.headingFont} leading-relaxed text-[#211E1B]`}>
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
                <h4 className="text-xs font-serif uppercase tracking-wider font-bold text-[#8C7A5B] mb-3">
                  Professional Associations & Certifications
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {DOCTOR_INFO.memberships.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-medium opacity-90">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <div className="pt-2">
                <MotionButton
                  onClick={onOpenBooking}
                  className={`px-6 py-3.5 ${theme.radius} ${theme.primaryBtn} text-sm font-semibold inline-flex items-center space-x-2 shadow-md shadow-[#8C7A5B]/20`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Dr. Mehta</span>
                </MotionButton>
              </div>

            </div>

          </div>

        </FadeIn>

      </div>
    </section>
  );
}
