import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/practiceData';
import { Phone, Calendar, Sparkles, Menu, X } from 'lucide-react';
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
    { id: 'transformations', label: 'Transformations' },
    { id: 'location', label: 'Location & Map' }
  ];

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
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
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

          {/* Nav Links (Desktop) - Clean, Spaced-Out Editorial Nav */}
          <nav className="hidden lg:flex items-center space-x-12 text-sm font-serif tracking-wide text-[#211E1B]/90">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className="relative group py-1 font-semibold transition-colors hover:text-[#8C7A5B]"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C7A5B] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center space-x-5">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-3.5 py-2 rounded-xl text-xs font-serif italic flex items-center space-x-2 text-[#211E1B]/80 hover:text-[#8C7A5B] hover:bg-[#F0EAE1] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            {/* Taste-Skill Premium Editorial CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenBooking}
              className="px-7 py-3 rounded-xl bg-[#8C7A5B] hover:bg-[#726348] text-white font-serif font-bold text-xs uppercase tracking-wider flex items-center space-x-2.5 shadow-md hover:shadow-lg shadow-[#8C7A5B]/20 whitespace-nowrap active:scale-[0.98] transition-all border border-[#7A694B]/30"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>Book Appointment</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-xl bg-[#8C7A5B] text-white font-serif text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-sm"
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
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { onSelectSection(item.id); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 text-base font-serif font-semibold text-[#211E1B] hover:text-[#8C7A5B]"
                >
                  {item.label}
                </button>
              ))}

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
                  className="w-full py-3.5 rounded-xl bg-[#8C7A5B] hover:bg-[#726348] text-white font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md"
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
