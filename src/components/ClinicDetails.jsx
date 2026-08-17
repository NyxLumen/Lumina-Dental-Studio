import React from 'react';
import { CLINIC_INFO, MAP_DETAILS } from '../data/practiceData';
import { MapPin, Clock, MessageSquare, Car, Phone, Sparkles } from 'lucide-react';

export default function ClinicDetails({ theme, onOpenBooking }) {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#f6f6fa]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* 40px Radius White Section Container */}
        <div className="bg-white rounded-[40px] p-8 sm:p-14 shadow-dual">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Headline & Booking Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-1.5 text-xs font-body font-medium text-[#5465ff] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Clinical Sanctuary</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-normal text-[#151581] tracking-[-0.03em]">
                Indirapuram, <br />
                <span className="text-[#5465ff]">Ghaziabad.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#292824]/80 font-body leading-relaxed">
                {CLINIC_INFO.fullAddress}
              </p>

              <div className="flex flex-col space-y-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 rounded-full bg-[#151581] hover:bg-[#0f0f63] text-white font-body text-xs font-medium shadow-xs active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-4 h-4 text-[#a1a1cd]" />
                  <span>Book Studio Appointment</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp?.replace?.(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full border border-[#00bb76] text-[#00bb76] hover:bg-[#00bb76]/10 font-body text-xs font-medium flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            {/* Right: Practice Information Grid */}
            <div className="lg:col-span-7 bg-[#f6f5f4] rounded-[32px] p-6 sm:p-8 border border-[#d6d6d6]/60 divide-y divide-[#d6d6d6]/40">
              
              <div className="pb-5 flex items-start space-x-4">
                <div className="p-2.5 rounded-full bg-[#151581] text-white shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#a1a1cd]" />
                </div>
                <div>
                  <p className="text-[10px] font-body uppercase tracking-wider text-[#a1a1cd] font-semibold">Location &amp; Landmark</p>
                  <p className="text-sm font-display font-semibold text-[#151581] mt-0.5">{CLINIC_INFO.fullAddress}</p>
                  <p className="text-xs text-[#00bb76] font-body font-medium mt-1">📍 {MAP_DETAILS.landmark}</p>
                </div>
              </div>

              <div className="py-5 flex items-start space-x-4">
                <div className="p-2.5 rounded-full bg-[#151581] text-white shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#a1a1cd]" />
                </div>
                <div>
                  <p className="text-[10px] font-body uppercase tracking-wider text-[#a1a1cd] font-semibold">Practice Hours</p>
                  <p className="text-sm font-display font-semibold text-[#151581] mt-0.5">{CLINIC_INFO.hours}</p>
                  <div className="flex items-center space-x-1.5 text-xs font-body text-[#00bb76] font-medium mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#00bb76] animate-pulse" />
                    <span>Open Today</span>
                  </div>
                </div>
              </div>

              <div className="py-5 flex items-start space-x-4">
                <div className="p-2.5 rounded-full bg-[#151581] text-white shrink-0 mt-0.5">
                  <Car className="w-4 h-4 text-[#a1a1cd]" />
                </div>
                <div>
                  <p className="text-[10px] font-body uppercase tracking-wider text-[#a1a1cd] font-semibold">Private Valet Parking</p>
                  <p className="text-sm font-display font-semibold text-[#151581] mt-0.5">{MAP_DETAILS.parking}</p>
                </div>
              </div>

              <div className="pt-5 flex items-start space-x-4">
                <div className="p-2.5 rounded-full bg-[#00bb76]/20 text-[#00bb76] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-body uppercase tracking-wider text-[#00bb76] font-semibold">24/7 Dental Emergency</p>
                  <a
                    href={`tel:${CLINIC_INFO.emergencyLine}`}
                    className="text-sm font-display font-bold text-[#151581] hover:text-[#5465ff] transition-colors"
                  >
                    {CLINIC_INFO.emergencyLine}
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
