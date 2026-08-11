import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/practiceData';
import { Phone, Calendar, Sparkles, MapPin, Menu, X, ShieldAlert } from 'lucide-react';

export default function Navbar({ theme, onOpenBooking, onSelectSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${theme.navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`w-10 h-10 ${theme.radius} flex items-center justify-center ${theme.isDark ? 'bg-slate-800 border border-slate-700' : 'bg-slate-900 text-white'} shadow-sm`}>
              <Sparkles className={`w-5 h-5 ${theme.accentText}`} />
            </div>
            <div>
              <div className={`text-xl font-bold tracking-tight ${theme.headingFont} ${theme.bodyText}`}>
                LUMINA <span className={theme.accentText}>DENTAL</span>
              </div>
              <p className="text-[11px] opacity-70 font-medium tracking-wide uppercase">
                {CLINIC_INFO.tagline}
              </p>
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <button onClick={() => onSelectSection('specialties')} className="hover:opacity-100 opacity-80 transition-opacity">
              Specialties
            </button>
            <button onClick={() => onSelectSection('doctor')} className="hover:opacity-100 opacity-80 transition-opacity">
              Dr. Arjun Mehta
            </button>
            <button onClick={() => onSelectSection('transformations')} className="hover:opacity-100 opacity-80 transition-opacity">
              Transformations
            </button>
            <button onClick={() => onSelectSection('technology')} className="hover:opacity-100 opacity-80 transition-opacity">
              3D Tech
            </button>
            <button onClick={() => onSelectSection('location')} className="hover:opacity-100 opacity-80 transition-opacity flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 inline text-rose-500" />
              <span>Location & Map</span>
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className={`px-3 py-2 ${theme.radius} text-xs font-semibold flex items-center space-x-1.5 opacity-90 hover:opacity-100 transition-opacity`}
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className={`px-5 py-2.5 ${theme.radius} ${theme.primaryBtn} text-sm font-semibold flex items-center space-x-2`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className={`px-3 py-1.5 ${theme.radius} ${theme.primaryBtn} text-xs font-semibold flex items-center space-x-1`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg opacity-80 hover:opacity-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${theme.isDark ? 'border-slate-800' : 'border-slate-200'} space-y-3`}>
            <button
              onClick={() => { onSelectSection('specialties'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-sm font-medium"
            >
              Clinical Specialties
            </button>
            <button
              onClick={() => { onSelectSection('doctor'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-sm font-medium"
            >
              About Dr. Arjun Mehta
            </button>
            <button
              onClick={() => { onSelectSection('transformations'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-sm font-medium"
            >
              Smile Transformations
            </button>
            <button
              onClick={() => { onSelectSection('technology'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-sm font-medium"
            >
              3D Digital Tech
            </button>
            <button
              onClick={() => { onSelectSection('location'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-sm font-medium"
            >
              Location & Google Map
            </button>
            <div className="pt-2 border-t border-slate-200/20 flex flex-col space-y-2">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-3 py-2 text-sm font-semibold flex items-center space-x-2 text-emerald-500"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
              <button
                onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }}
                className={`w-full py-2.5 ${theme.radius} ${theme.primaryBtn} text-sm font-semibold flex items-center justify-center space-x-2`}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
