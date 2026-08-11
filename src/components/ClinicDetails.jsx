import React from 'react';
import { CLINIC_INFO, MAP_DETAILS } from '../data/practiceData';
import { MapPin, Clock, Phone, Mail, MessageSquare, Car, ShieldAlert } from 'lucide-react';

export default function ClinicDetails({ theme, onOpenBooking }) {
  return (
    <section id="location" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`p-8 lg:p-12 ${theme.radius} ${theme.cardBg} border space-y-12`}>
          
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-slate-500/20 pb-8">
            <div>
              <span className={`inline-block px-3 py-1 ${theme.radius} ${theme.accentBadge} text-xs font-mono uppercase tracking-widest mb-2`}>
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
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center space-x-2 shadow-md shadow-emerald-600/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Instant</span>
              </a>

              <button
                onClick={onOpenBooking}
                className={`px-6 py-3 ${theme.radius} ${theme.primaryBtn} text-sm font-bold`}
              >
                Book Visit
              </button>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            
            {/* Address */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 w-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold ${theme.headingFont}`}>Clinic Location</h3>
              <p className="text-sm opacity-85 leading-relaxed">
                {CLINIC_INFO.fullAddress}
              </p>
              <p className="text-xs text-rose-500 font-medium">
                📍 {MAP_DETAILS.landmark}
              </p>
            </div>

            {/* Operating Hours */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-500 w-fit">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold ${theme.headingFont}`}>Practice Hours</h3>
              <p className="text-sm opacity-85 leading-relaxed">
                {CLINIC_INFO.hours}
              </p>
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-500 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Open for Appointments Today</span>
              </div>
            </div>

            {/* Emergency & Parking */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 w-fit">
                <Car className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold ${theme.headingFont}`}>Valet Parking & Emergency</h3>
              <p className="text-sm opacity-85 leading-relaxed">
                {MAP_DETAILS.parking}
              </p>
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                <span>24/7 Dental Emergency: {CLINIC_INFO.emergencyLine}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
