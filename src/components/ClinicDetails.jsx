import React from 'react';
import { CLINIC_INFO, MAP_DETAILS } from '../data/practiceData';
import { MapPin, Clock, MessageSquare, Car, ShieldAlert, Phone } from 'lucide-react';
import { FadeIn, MotionButton } from './MotionUi';

export default function ClinicDetails({ theme, onOpenBooking }) {
  return (
    <section id="location" className="py-24 bg-[#F4EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label */}
        <FadeIn className="flex items-center space-x-4 mb-16">
          <div className="w-8 h-px bg-[#8C7A5B]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#8C7A5B]">
            Visit the Studio
          </span>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-16">

          {/* Left: Big headline + CTA */}
          <FadeIn className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-[#111111] leading-tight">
              Indirapuram, <br />
              <span className="italic font-normal text-[#8C7A5B]">Ghaziabad.</span>
            </h2>

            <p className="text-base text-[#111111]/80 leading-relaxed">
              {CLINIC_INFO.fullAddress}
            </p>

            <div className="flex flex-col space-y-3">
              <MotionButton
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-lg bg-[#111111] hover:bg-[#2A2A2A] text-white font-serif text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2.5 shadow-md"
              >
                <MapPin className="w-4 h-4 text-amber-200" />
                <span>Book Your Visit</span>
              </MotionButton>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp?.replace?.(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-lg border border-emerald-800 text-emerald-800 hover:bg-emerald-50 font-serif text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2.5 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </FadeIn>

          {/* Right: Clean unboxed info grid */}
          <FadeIn delay={0.2} className="lg:col-span-7 divide-y divide-[#E0D8C8]">

            <div className="pb-6 flex items-start space-x-4">
              <div className="p-2 rounded bg-rose-100 text-rose-700 flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#111111]/50 mb-1">Location</p>
                <p className="text-base font-serif font-bold text-[#111111]">{CLINIC_INFO.fullAddress}</p>
                <p className="text-xs text-rose-700 font-medium mt-1">📍 {MAP_DETAILS.landmark}</p>
              </div>
            </div>

            <div className="py-6 flex items-start space-x-4">
              <div className="p-2 rounded bg-[#F0E9DC] text-[#8C7A5B] flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#111111]/50 mb-1">Practice Hours</p>
                <p className="text-base font-serif font-bold text-[#111111]">{CLINIC_INFO.hours}</p>
                <div className="flex items-center space-x-2 text-xs font-mono text-emerald-800 font-semibold mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                  <span>Open Today</span>
                </div>
              </div>
            </div>

            <div className="py-6 flex items-start space-x-4">
              <div className="p-2 rounded bg-amber-100 text-amber-800 flex-shrink-0 mt-0.5">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#111111]/50 mb-1">Valet Parking</p>
                <p className="text-base font-serif font-bold text-[#111111]">{MAP_DETAILS.parking}</p>
              </div>
            </div>

            <div className="py-6 flex items-start space-x-4">
              <div className="p-2 rounded bg-red-100 text-red-700 flex-shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#111111]/50 mb-1">24 / 7 Emergency</p>
                <a
                  href={`tel:${CLINIC_INFO.emergencyLine}`}
                  className="text-base font-serif font-bold text-red-700 hover:underline"
                >
                  {CLINIC_INFO.emergencyLine}
                </a>
              </div>
            </div>

          </FadeIn>

        </div>
      </div>
    </section>
  );
}
