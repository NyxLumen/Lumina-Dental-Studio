import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/practiceData';
import { Phone, Calendar, Menu, X } from 'lucide-react';
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
    { id: 'doctor', label: 'Specialist' },
    { id: 'transformations', label: 'Transformations' },
    { id: 'location', label: 'Location & Map' }
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      scrolled
        ? 'bg-[#F8F5F0]/95 backdrop-blur-md border-b border-[#E6DFD3]'
        : 'bg-[#F8F5F0] border-b border-[#E6DFD3]/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-lg bg-[#111111] overflow-hidden flex items-center justify-center p-1.5 shadow-sm flex-shrink-0">
              <img src="/favicon.svg" alt="Lumina Dental Studio icon" className="w-full h-full" />
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight font-serif text-[#111111]">
                LUMINA <span className="text-[#8C7A5B]">DENTAL</span>
              </div>
              <p className="text-[10px] font-mono opacity-50 tracking-[0.22em] uppercase">
                STUDIO · INDIRAPURAM
              </p>
            </div>
          </motion.div>

          {/* Nav Links (Desktop) - Clean Spaced-Out Editorial Nav */}
          <nav className="hidden lg:flex items-center space-x-10 text-sm font-serif tracking-wide text-[#111111]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className="relative group py-1 font-medium transition-colors hover:text-[#8C7A5B]"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C7A5B] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center space-x-6">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="text-xs font-mono tracking-wider text-[#111111]/80 hover:text-[#8C7A5B] transition-colors flex items-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            {/* Anti-Slop Solid Off-Black Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="px-7 py-3 rounded-lg bg-[#111111] hover:bg-[#2A2A2A] text-white font-serif font-bold text-xs uppercase tracking-widest flex items-center space-x-2.5 shadow-md active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>Book Consultation</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-lg bg-[#111111] text-white font-serif text-xs font-bold uppercase tracking-wider shadow-sm flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-200" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#111111] hover:bg-[#EFE9DD] transition-colors"
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
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-[#E6DFD3] py-4 space-y-3"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { onSelectSection(item.id); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 text-base font-serif font-semibold text-[#111111] hover:text-[#8C7A5B]"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-[#E6DFD3] flex flex-col space-y-2">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="px-3 py-2 text-sm font-semibold flex items-center space-x-2 text-emerald-800"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
                <button
                  onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }}
                  className="w-full py-3.5 rounded-lg bg-[#111111] text-white font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-amber-200" />
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
