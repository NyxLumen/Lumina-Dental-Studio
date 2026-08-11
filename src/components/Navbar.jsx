import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/practiceData';
import { Phone, Calendar, Sparkles, MapPin, Menu, X } from 'lucide-react';
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

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-500 ${
      scrolled
        ? 'bg-[#F8F5F0]/95 backdrop-blur-md shadow-sm border-b border-[#E6DFD3]'
        : 'bg-[#F8F5F0] border-b border-[#E6DFD3]/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-xl bg-[#8C7A5B] text-white flex items-center justify-center shadow-md shadow-[#8C7A5B]/20">
              <Sparkles className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className={`text-2xl font-bold tracking-tight ${theme.headingFont} ${theme.bodyText}`}>
                LUMINA <span className={theme.accentText}>DENTAL</span>
              </div>
              <p className="text-[10px] font-mono opacity-70 tracking-widest uppercase">
                {CLINIC_INFO.tagline}
              </p>
            </div>
          </motion.div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#211E1B]/80">
            {['specialties', 'doctor', 'transformations', 'technology', 'location'].map((sec) => {
              const labels = {
                specialties: 'Specialties',
                doctor: 'Dr. Arjun Mehta',
                transformations: 'Transformations',
                technology: '3D Technology',
                location: 'Location & Map'
              };

              return (
                <button
                  key={sec}
                  onClick={() => onSelectSection(sec)}
                  className="relative group py-1 transition-colors hover:text-[#8C7A5B]"
                >
                  <span>{labels[sec]}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C7A5B] group-hover:w-full transition-all duration-300 rounded-full" />
                </button>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 text-[#211E1B]/80 hover:text-[#8C7A5B] hover:bg-[#F0EAE1] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenBooking}
              className={`px-6 py-2.5 ${theme.radius} ${theme.primaryBtn} text-sm font-semibold flex items-center space-x-2 shadow-md shadow-[#8C7A5B]/15`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBooking}
              className={`px-3.5 py-1.5 ${theme.radius} ${theme.primaryBtn} text-xs font-semibold flex items-center space-x-1`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </motion.button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#211E1B] hover:bg-[#F0EAE1] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown with Framer Motion AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-[#E6DFD3] py-4 space-y-3"
            >
              <button
                onClick={() => { onSelectSection('specialties'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-sm font-serif font-semibold text-[#211E1B] hover:text-[#8C7A5B]"
              >
                Clinical Specialties
              </button>
              <button
                onClick={() => { onSelectSection('doctor'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-sm font-serif font-semibold text-[#211E1B] hover:text-[#8C7A5B]"
              >
                About Dr. Arjun Mehta
              </button>
              <button
                onClick={() => { onSelectSection('transformations'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-sm font-serif font-semibold text-[#211E1B] hover:text-[#8C7A5B]"
              >
                Smile Transformations
              </button>
              <button
                onClick={() => { onSelectSection('technology'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-sm font-serif font-semibold text-[#211E1B] hover:text-[#8C7A5B]"
              >
                3D Digital Technology
              </button>
              <button
                onClick={() => { onSelectSection('location'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-sm font-serif font-semibold text-[#211E1B] hover:text-[#8C7A5B]"
              >
                Location & Google Map
              </button>

              <div className="pt-3 border-t border-[#E6DFD3] flex flex-col space-y-2">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="px-3 py-2 text-sm font-semibold flex items-center space-x-2 text-emerald-700"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
                <button
                  onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }}
                  className={`w-full py-3 ${theme.radius} ${theme.primaryBtn} text-sm font-bold flex items-center justify-center space-x-2`}
                >
                  <Calendar className="w-4 h-4" />
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
