import React from 'react';
import { CLINIC_INFO } from '../data/practiceData';
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldAlert, Heart, ExternalLink } from 'lucide-react';

export default function Footer({ theme }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t ${theme.isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
      
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
            <span>24/7 Dental Emergency Hotline:</span>
          </div>
          <a href={`tel:${CLINIC_INFO.emergencyLine}`} className="underline font-bold tracking-wide hover:text-red-200 transition-colors">
            {CLINIC_INFO.emergencyLine}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${theme.isDark ? 'bg-slate-800 border border-slate-700' : 'bg-slate-900'}`}>
                <Sparkles className="w-4 h-4 text-teal-400" />
              </div>
              <span className={`text-lg font-bold tracking-tight ${theme.headingFont}`}>
                LUMINA <span className={theme.accentText}>DENTAL</span>
              </span>
            </div>
            <p className="text-xs opacity-70 leading-relaxed">
              {CLINIC_INFO.positioning}. Serving patients across Indirapuram, Noida, Greater Noida, Delhi, and Ghaziabad since {CLINIC_INFO.founded}.
            </p>
            <div className="flex items-center space-x-1 text-amber-400 text-xs">
              <span className="font-bold">{CLINIC_INFO.rating}★</span>
              <span className="opacity-60">• {CLINIC_INFO.reviewsCount}+ Google Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`text-xs font-mono uppercase tracking-widest font-bold ${theme.accentText}`}>Treatments</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#specialties" className="hover:opacity-100 transition-opacity">Cosmetic Dentistry</a></li>
              <li><a href="#specialties" className="hover:opacity-100 transition-opacity">Dental Implants</a></li>
              <li><a href="#specialties" className="hover:opacity-100 transition-opacity">Smile Makeovers</a></li>
              <li><a href="#specialties" className="hover:opacity-100 transition-opacity">Full-Mouth Rehab</a></li>
              <li><a href="#specialties" className="hover:opacity-100 transition-opacity">Digital Dentistry</a></li>
            </ul>
          </div>

          {/* Clinic Info */}
          <div className="space-y-4">
            <h4 className={`text-xs font-mono uppercase tracking-widest font-bold ${theme.accentText}`}>Clinic Info</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.fullAddress}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <span>{CLINIC_INFO.hours}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:underline">{CLINIC_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:underline">{CLINIC_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div className="space-y-4">
            <h4 className={`text-xs font-mono uppercase tracking-widest font-bold ${theme.accentText}`}>Accreditations</h4>
            <div className="space-y-2 text-xs opacity-80">
              <div className={`p-2.5 rounded-lg ${theme.cardAltBg} border font-medium`}>Indian Dental Association (IDA) Registered</div>
              <div className={`p-2.5 rounded-lg ${theme.cardAltBg} border font-medium`}>European EN13060 Sterilization Certified</div>
              <div className={`p-2.5 rounded-lg ${theme.cardAltBg} border font-medium`}>International College of Prosthodontists</div>
              <div className={`p-2.5 rounded-lg ${theme.cardAltBg} border font-medium`}>ISO 9001 Quality Management</div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-slate-500/20 flex flex-wrap items-center justify-between gap-4 text-xs opacity-60">
          <p>
            &copy; {currentYear} {CLINIC_INFO.name}. All rights reserved. Est. {CLINIC_INFO.founded}, Indirapuram, Ghaziabad.
          </p>
          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>for naturally beautiful smiles</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
