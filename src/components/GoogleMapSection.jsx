import React from 'react';
import { MAP_DETAILS, CLINIC_INFO } from '../data/practiceData';
import { MapPin, Navigation, Car, ExternalLink } from 'lucide-react';

export default function GoogleMapSection({ theme }) {
  const encodedAddress = encodeURIComponent(CLINIC_INFO.fullAddress);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const embedSrc = `https://maps.google.com/maps?q=Indirapuram%20Ghaziabad%20Uttar%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="relative bg-[#f6f6fa] pb-16 sm:pb-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Map Container */}
        <div className="rounded-[32px] overflow-hidden border border-[#d6d6d6]/60 shadow-dual relative h-[420px] sm:h-[480px]">
          <iframe
            title="Lumina Dental Studio Location Map — Indirapuram Ghaziabad"
            src={embedSrc}
            className="w-full h-full border-0 filter contrast-105"
            loading="lazy"
            allowFullScreen
          />

          {/* Floating Top-Left Tag */}
          <div className="absolute top-4 left-4 px-4 py-2.5 rounded-full bg-[#151581]/95 backdrop-blur-md text-white shadow-md z-10 flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-[#00bb76]" />
            <span className="text-xs font-display font-semibold">Lumina Dental Studio &bull; Indirapuram</span>
          </div>

          {/* Bottom-Right Open Maps Action */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 right-4 px-5 py-2.5 rounded-full bg-[#151581] hover:bg-[#0f0f63] text-white text-xs font-body font-medium flex items-center space-x-2 shadow-md transition-transform active:scale-[0.98] z-10"
          >
            <Navigation className="w-3.5 h-3.5 text-[#a1a1cd]" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 text-[#a1a1cd]" />
          </a>
        </div>

        {/* Driving Directions Bar */}
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          {MAP_DETAILS.directions.map((dir, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-4 border border-[#d6d6d6]/60 shadow-2xs flex items-center space-x-3 text-left"
            >
              <div className="w-8 h-8 rounded-full bg-[#f6f5f4] text-[#151581] flex items-center justify-center shrink-0">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-display font-semibold text-[#151581]">{dir.from}</p>
                <p className="text-[11px] font-body text-[#00bb76] font-medium mt-0.5">{dir.time}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
