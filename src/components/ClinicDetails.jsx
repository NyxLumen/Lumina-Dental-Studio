import React from 'react';
import { CLINIC_INFO, MAP_DETAILS } from '../data/practiceData';
import { MapPin, Clock, MessageSquare, Car, ShieldAlert } from 'lucide-react';
import { FadeIn, MotionButton } from './MotionUi';

export default function ClinicDetails({ theme, onOpenBooking }) {
  return (
    <section id="location" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="p-8 lg:p-12 rounded-2xl bg-white border border-[#E5DFD3] shadow-lg space-y-12">
          
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-[#E6DFD3] pb-8">
            <div>
              <span className={`inline-block px-3.5 py-1 ${theme.radius} ${theme.accentBadge} text-xs font-serif italic mb-2`}>
                Visit Our Studio
              </span>
              <h2 className={`text-3xl sm:text-4xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
                Indirapuram Practice Details & Hours
              </h2>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold flex items-center space-x-2 shadow-md shadow-emerald-700/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Instant</span>
              </a>

              <MotionButton
                onClick={onOpenBooking}
                className={`px-6 py-3 ${theme.radius} ${theme.primaryBtn} text-sm font-bold shadow-md shadow-[#8C7A5B]/20`}
              >
                Book Visit
              </MotionButton>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            
            {/* Address */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-rose-100 text-rose-700 w-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold ${theme.headingFont}`}>Clinic Location</h3>
              <p className="text-sm opacity-85 leading-relaxed">
                {CLINIC_INFO.fullAddress}
              </p>
              <p className="text-xs text-rose-700 font-medium">
                📍 {MAP_DETAILS.landmark}
              </p>
            </div>

            {/* Operating Hours */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#F0E9DC] text-[#7A694B] w-fit">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold ${theme.headingFont}`}>Practice Hours</h3>
              <p className="text-sm opacity-85 leading-relaxed">
                {CLINIC_INFO.hours}
              </p>
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                <span>Open for Appointments Today</span>
              </div>
            </div>

            {/* Emergency & Parking */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-amber-100 text-amber-800 w-fit">
                <Car className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold ${theme.headingFont}`}>Valet Parking & Emergency</h3>
              <p className="text-sm opacity-85 leading-relaxed">
                {MAP_DETAILS.parking}
              </p>
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                <span>24/7 Dental Emergency: {CLINIC_INFO.emergencyLine}</span>
              </div>
            </div>

          </div>

        </FadeIn>

      </div>
    </section>
  );
}
