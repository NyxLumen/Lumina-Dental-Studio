import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/practiceData';
import { Phone, Calendar, Menu, X, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ theme, onOpenBooking, onSelectSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'specialties', label: 'Specialties' },
    { id: 'doctor', label: 'Specialists' },
    { id: 'transformations', label: 'Smile Results' },
    { id: 'technology', label: '3D Suite' },
    { id: 'location', label: 'Location & Hours' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#d6d6d6]/60 shadow-xs'
          : 'bg-white border-b border-[#d6d6d6]/40'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Mark — Lóvi/Lumina Style Indigo Ink Logotype */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-full bg-[#151581] flex items-center justify-center text-white font-display text-lg font-bold shadow-xs group-hover:scale-105 transition-transform">
              L
            </div>
            <div>
              <div className="text-xl font-display font-semibold tracking-[0.02em] text-[#151581] leading-none">
                Lumina <span className="font-light text-[#a1a1cd]">Dental</span>
              </div>
              <p className="text-[10px] font-body tracking-[0.18em] uppercase text-[#a1a1cd] mt-1">
                Studio · Prescription Aesthetics
              </p>
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-body text-[#151581]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className="relative py-1 font-medium transition-colors hover:text-[#5465ff] group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5465ff] group-hover:w-full transition-all duration-200 rounded-full" />
              </button>
            ))}
          </nav>

          {/* Quick Action Pill Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${CLINIC_INFO.emergencyLine}`}
              className="text-xs font-body text-[#00bb76] hover:text-[#00bb76]/80 font-medium transition-colors flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#00bb76]/5 border border-[#00bb76]/20"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>24/7 Emergency</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#151581] hover:bg-[#0f0f63] text-white font-body text-sm font-medium shadow-xs active:scale-[0.98] transition-all flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-[#a1a1cd]" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-full bg-[#151581] text-white font-body text-xs font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#151581] hover:bg-[#f6f6fa] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-[#d6d6d6]/60 py-4 space-y-3 bg-white"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { onSelectSection(item.id); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-base font-body font-medium text-[#151581] hover:text-[#5465ff]"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-[#d6d6d6]/60 px-4 space-y-2">
                <a
                  href={`tel:${CLINIC_INFO.emergencyLine}`}
                  className="w-full py-2.5 text-xs font-medium text-[#00bb76] flex items-center justify-center space-x-2 bg-[#00bb76]/10 rounded-full"
                >
                  <ShieldAlert className="w-4 h-4" />
                  <span>Emergency Line: {CLINIC_INFO.phone}</span>
                </a>
                <button
                  onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }}
                  className="w-full py-3 rounded-full bg-[#151581] text-white font-body text-sm font-medium flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-[#a1a1cd]" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
