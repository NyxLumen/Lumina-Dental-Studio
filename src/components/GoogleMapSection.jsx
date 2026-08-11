import React from 'react';
import { MAP_DETAILS, CLINIC_INFO } from '../data/practiceData';
import { MapPin, Navigation, Car, ExternalLink } from 'lucide-react';
import { FadeIn } from './MotionUi';

export default function GoogleMapSection({ theme }) {
  const encodedAddress = encodeURIComponent(CLINIC_INFO.fullAddress);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const embedSrc = `https://maps.google.com/maps?q=Indirapuram%20Ghaziabad%20Uttar%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="relative bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* Full-bleed Map with no gap between ClinicDetails */}
        <FadeIn delay={0.1}>
          <div className="rounded-xl overflow-hidden border border-[#E6DFD3] shadow-xl relative" style={{ height: '480px' }}>
            <iframe
              title="Lumina Dental Studio Location Map — Indirapuram Ghaziabad"
              src={embedSrc}
              className="w-full h-full border-0 filter contrast-105"
              loading="lazy"
              allowFullScreen
            />

            {/* Top-left floating info pill */}
            <div className="absolute top-4 left-4 px-4 py-3 rounded-lg bg-[#111111]/90 backdrop-blur text-white shadow-xl z-10 space-y-1 text-left">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span className="text-xs font-bold font-serif">Lumina Dental Studio</span>
              </div>
              <p className="text-[10px] text-white/60 font-mono">Sector 14, Indirapuram, Ghaziabad</p>
            </div>

            {/* Bottom-right Open Maps CTA */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 px-5 py-3 rounded-lg bg-[#111111] hover:bg-[#2A2A2A] text-white text-xs font-serif font-bold uppercase tracking-wider flex items-center space-x-2 shadow-lg transition-colors z-10"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-200" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </FadeIn>

        {/* Directions row beneath map — clean unboxed */}
        <FadeIn delay={0.2} className="mt-8 grid sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E6DFD3] border border-[#E6DFD3] rounded-xl overflow-hidden bg-white">
          {MAP_DETAILS.directions.map((dir, idx) => (
            <div key={idx} className="flex items-center space-x-4 px-8 py-5">
              <Car className="w-5 h-5 text-[#8C7A5B] flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#111111] font-serif">{dir.from}</p>
                <p className="text-xs font-mono text-emerald-800 font-semibold">{dir.time}</p>
              </div>
            </div>
          ))}
        </FadeIn>

      </div>
    </section>
  );
}
