import React from 'react';
import { CLINIC_INFO } from '../data/practiceData';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

export default function Footer({ theme }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">

      {/* Emergency strip */}
      <div className="bg-red-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono tracking-wider">
          <span className="opacity-80 uppercase">24/7 Dental Emergency</span>
          <a href={`tel:${CLINIC_INFO.emergencyLine}`} className="font-bold underline hover:text-red-200 transition-colors">
            {CLINIC_INFO.emergencyLine}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-12 gap-16">

          {/* Brand + ethos */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center p-1.5">
                <img src="/favicon.svg" alt="Lumina Dental Studio" className="w-full h-full" />
              </div>
              <span className="text-2xl font-bold font-serif tracking-tight">
                LUMINA <span className="text-[#8C7A5B]">DENTAL</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {CLINIC_INFO.positioning}. Serving Indirapuram, Noida, Greater Noida, Delhi & Ghaziabad since {CLINIC_INFO.founded}.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-amber-200">
              <span className="font-bold">{CLINIC_INFO.rating}★</span>
              <span className="opacity-50">·</span>
              <span className="opacity-70">{CLINIC_INFO.reviewsCount}+ Google Reviews</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-white/40">Treatments</p>
            <ul className="space-y-2 text-sm text-white/70">
              {['Cosmetic Dentistry', 'Dental Implants', 'Smile Makeovers', 'Full-Mouth Rehab', 'Digital Dentistry'].map(t => (
                <li key={t}>
                  <a href="#specialties" className="hover:text-white transition-colors font-serif">{t}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-white/40">Contact</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.fullAddress}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#8C7A5B] flex-shrink-0" />
                <span>{CLINIC_INFO.hours}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-white transition-colors">{CLINIC_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">{CLINIC_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>© {year} {CLINIC_INFO.name}. Est. {CLINIC_INFO.founded}, Indirapuram, Ghaziabad.</p>
          <div className="flex items-center space-x-1">
            <span>Crafted for naturally beautiful smiles</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
