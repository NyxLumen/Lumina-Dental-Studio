import React from 'react';
import { CLINIC_INFO } from '../data/practiceData';
import { MapPin, Phone, Mail, Clock, Heart, ShieldAlert } from 'lucide-react';

export default function Footer({ theme }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#151581] text-white select-none">
      
      {/* 24/7 Emergency Strip */}
      <div className="bg-[#00bb76] py-2.5 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between text-xs font-body font-medium">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4" />
            <span>24/7 Clinical Emergency Line — Priority Dental Response</span>
          </div>
          <a
            href={`tel:${CLINIC_INFO.emergencyLine}`}
            className="font-mono font-bold hover:underline"
          >
            {CLINIC_INFO.emergencyLine}
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">

          {/* Brand Ethos */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white text-[#151581] font-display font-bold text-xl flex items-center justify-center">
                L
              </div>
              <div>
                <span className="text-xl font-display font-semibold tracking-tight text-white">
                  Lumina <span className="text-[#a1a1cd]">Dental</span>
                </span>
                <p className="text-[10px] font-body text-[#a1a1cd] uppercase tracking-wider">
                  Prescription Aesthetics &bull; Indirapuram
                </p>
              </div>
            </div>

            <p className="text-xs text-[#a1a1cd] font-body leading-relaxed max-w-sm">
              {CLINIC_INFO.positioning}. Serving Indirapuram, Noida, Greater Noida, Delhi NCR &amp; international patients since {CLINIC_INFO.founded}.
            </p>

            <div className="flex items-center space-x-2 text-xs font-body text-[#00bb76] font-medium pt-1">
              <span>{CLINIC_INFO.rating}★ Rating</span>
              <span>&bull;</span>
              <span>{CLINIC_INFO.reviewsCount}+ Verified Patient Reviews</span>
            </div>
          </div>

          {/* Treatments Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-body uppercase tracking-wider text-[#a1a1cd] font-semibold">Specialty Services</p>
            <ul className="space-y-2 text-xs font-body text-white/80">
              {['Porcelain Veneers & Bonding', 'AI Clear Aligners', '3D Guided Dental Implants', 'Laser Teeth Whitening', 'Full Smile Architecture'].map(t => (
                <li key={t}>
                  <a href="#specialties" className="hover:text-[#5465ff] transition-colors">{t}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-body uppercase tracking-wider text-[#a1a1cd] font-semibold">Studio Information</p>
            <ul className="space-y-2.5 text-xs font-body text-white/80">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#a1a1cd] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.fullAddress}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#a1a1cd] shrink-0" />
                <span>{CLINIC_INFO.hours}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00bb76] shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-white transition-colors">{CLINIC_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#5465ff] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">{CLINIC_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-body text-[#a1a1cd]">
          <p>© {year} {CLINIC_INFO.name}. All rights reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Prescription-Grade Dental Aesthetics</span>
            <Heart className="w-3 h-3 text-[#5465ff] fill-[#5465ff] ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
