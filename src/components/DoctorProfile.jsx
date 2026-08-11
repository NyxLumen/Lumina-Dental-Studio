import React from 'react';
import { DOCTOR_INFO } from '../data/practiceData';
import { Quote, Check, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, MotionButton } from './MotionUi';

export default function DoctorProfile({ theme, onOpenBooking }) {
  return (
    <section id="doctor" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label — no pill, just a hairline */}
        <FadeIn className="flex items-center space-x-4 mb-16">
          <div className="w-8 h-px bg-[#8C7A5B]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#8C7A5B]">
            Lead Specialist
          </span>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Portrait — sharp crop, no card wrapper */}
          <FadeIn className="lg:col-span-5" direction="right">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={DOCTOR_INFO.image}
                  alt={DOCTOR_INFO.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[560px] object-cover object-top"
                />
              </motion.div>
              {/* Memberships sidebar strip */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#111111]/90 backdrop-blur text-white text-xs font-mono space-y-2">
                <p className="opacity-50 uppercase tracking-widest mb-3">Certifications</p>
                {DOCTOR_INFO.memberships.slice(0, 4).map((m, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Check className="w-3 h-3 text-amber-200" />
                    <span className="opacity-80">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Bio Content — pure typography, no boxes */}
          <div className="lg:col-span-7 space-y-10 text-left">

            <FadeIn delay={0.1}>
              <div className="space-y-2">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-[#111111] leading-tight">
                  {DOCTOR_INFO.name}
                </h2>
                <p className="text-base font-serif italic text-[#8C7A5B]">
                  {DOCTOR_INFO.credentials} &nbsp;·&nbsp; {DOCTOR_INFO.experienceLabel}
                </p>
              </div>
            </FadeIn>

            {/* Quote Block — Elegant editorial indent */}
            <FadeIn delay={0.2}>
              <blockquote className="relative pl-6 border-l-2 border-[#8C7A5B] space-y-2">
                <Quote className="w-7 h-7 text-[#8C7A5B] opacity-30 absolute -top-2 -left-3" />
                <p className="text-xl sm:text-2xl font-serif italic font-medium leading-relaxed text-[#111111]">
                  {DOCTOR_INFO.quote}
                </p>
                <footer className="text-xs font-mono uppercase tracking-widest text-[#111111]/50">
                  — Dr. Arjun Mehta
                </footer>
              </blockquote>
            </FadeIn>

            {/* Bio body */}
            <FadeIn delay={0.3}>
              <p className="text-base text-[#111111]/80 leading-relaxed">
                {DOCTOR_INFO.bio}
              </p>
            </FadeIn>

            {/* Remaining memberships list */}
            <FadeIn delay={0.4}>
              <div className="border-t border-[#E6DFD3] pt-6 grid sm:grid-cols-2 gap-y-2 gap-x-8">
                {DOCTOR_INFO.memberships.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-[#111111]/80">
                    <div className="w-1 h-1 rounded-full bg-[#8C7A5B] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.5}>
              <MotionButton
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-lg bg-[#111111] hover:bg-[#2A2A2A] text-white font-serif text-xs font-bold uppercase tracking-widest flex items-center space-x-2.5 shadow-md active:scale-[0.98] transition-all"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>Book Consultation with Dr. Mehta</span>
              </MotionButton>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
