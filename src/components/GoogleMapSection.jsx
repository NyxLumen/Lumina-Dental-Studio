import React from 'react';
import { MAP_DETAILS, CLINIC_INFO } from '../data/practiceData';
import { MapPin, Navigation, Car, Compass, ExternalLink } from 'lucide-react';

export default function GoogleMapSection({ theme }) {
  // Encoded location string for Google Maps Embed
  const encodedAddress = encodeURIComponent(CLINIC_INFO.fullAddress);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const embedIframeSrc = `https://maps.google.com/maps?q=Indirapuram%20Ghaziabad%20Uttar%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className={`inline-block px-3 py-1 ${theme.radius} ${theme.accentBadge} text-xs font-mono uppercase tracking-widest`}>
            Location & Access
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${theme.headingFont} ${theme.bodyText}`}>
            Google Maps & Studio Location
          </h2>
          <p className="text-base opacity-80 leading-relaxed">
            Conveniently located in Indirapuram, Ghaziabad — opposite Habitat Centre with direct access from Noida and Delhi.
          </p>
        </div>

        <div className={`grid lg:grid-cols-12 gap-8 ${theme.radius} ${theme.cardBg} border p-4 sm:p-6 shadow-xl`}>
          
          {/* Left: Google Map View Container */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[440px] rounded-xl overflow-hidden border border-slate-500/20 group">
            
            {/* Embedded Google Map iframe */}
            <iframe
              title="Lumina Dental Studio Indirapuram Location Map"
              src={embedIframeSrc}
              className="w-full h-full border-0 absolute inset-0 filter contrast-105"
              loading="lazy"
              allowFullScreen
            />

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-white shadow-2xl space-y-1 z-10">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span className="font-bold text-sm">Lumina Dental Studio</span>
              </div>
              <p className="text-xs text-slate-300">Sector 14, Indirapuram, Ghaziabad</p>
            </div>

            {/* Open Google Maps Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center space-x-2 shadow-lg transition-all z-10"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

          </div>

          {/* Right: Quick Travel Times & Directions Guide */}
          <div className="lg:col-span-5 space-y-6 text-left p-2 flex flex-col justify-between">
            
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-rose-500 font-bold mb-2">
                <Compass className="w-4 h-4" />
                <span>Estimated Driving Times</span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold ${theme.headingFont} mb-4`}>
                Easy Access across Delhi NCR
              </h3>

              {/* Directions items */}
              <div className="space-y-3">
                {MAP_DETAILS.directions.map((dir, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 ${theme.radius} ${theme.cardAltBg} border flex items-start space-x-3`}
                  >
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-500 flex-shrink-0 mt-0.5">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold opacity-90">{dir.from}</h4>
                      <p className="text-xs text-emerald-500 font-semibold mt-0.5">{dir.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Landmarks & Parking summary */}
            <div className={`p-4 ${theme.radius} bg-slate-500/5 border border-slate-500/10 space-y-2 text-xs`}>
              <div className="flex items-center space-x-2 font-bold opacity-90">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Landmarks & Parking</span>
              </div>
              <p className="opacity-80 leading-relaxed">
                Located opposite Habitat Centre & adjacent to Swarn Jayanti Park entrance. Dedicated free patient parking with valet service at clinic entrance.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
