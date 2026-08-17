import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/practiceData';
import { Phone, Calendar, Menu, X, ShieldAlert, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '../utils/cn';

const navItems = [
  { id: 'specialties', label: 'Specialties' },
  { id: 'doctor', label: 'Specialists' },
  { id: 'transformations', label: 'Results' },
  { id: 'technology', label: '3D Suite' },
  { id: 'location', label: 'Visit Us' },
];

export default function Navbar({ theme, onOpenBooking, onSelectSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setActiveItem(id);
    onSelectSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#d6d6d6]/70 shadow-sm'
            : 'bg-white border-b border-[#d6d6d6]/40'
        )}
      >
        {/* Top accent bar — very subtle */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#151581]/0 via-[#5465ff]/30 to-[#151581]/0" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[68px]">

            {/* ── LOGO ── */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-3 flex-shrink-0 group focus-visible:outline-none"
              aria-label="Lumina Dental Studio — Go to top"
            >
              {/* Logo-mark icon */}
              <img
                src="/logo-mark.svg"
                alt="Lumina tooth icon"
                className="w-9 h-9 group-hover:scale-105 transition-transform duration-200"
              />
              {/* Wordmark — full on sm+, hidden on xs */}
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-display font-semibold text-[1.1rem] tracking-[0.04em] text-[#151581]">
                  LUMINA
                </span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#a1a1cd] mt-0.5">
                  Dental Studio
                </span>
              </div>
            </button>

            {/* ── DESKTOP NAV ── */}
            <nav
              className="hidden lg:flex items-center"
              aria-label="Main navigation"
            >
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        'relative px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200',
                        activeItem === item.id
                          ? 'text-[#151581] bg-[#5465ff]/8'
                          : 'text-[#151581]/70 hover:text-[#151581] hover:bg-[#f6f6fa]'
                      )}
                    >
                      {item.label}
                      {activeItem === item.id && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#5465ff]" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── DESKTOP CTA ZONE ── */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Emergency phone pill */}
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                className="hidden md:flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-[10px] font-body font-semibold text-[#00bb76] bg-[#00bb76]/8 border border-[#00bb76]/25 hover:bg-[#00bb76]/15 transition-colors"
                aria-label="24/7 Emergency Line"
              >
                <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                <span className="tracking-wide uppercase">Emergency 24/7</span>
              </a>

              {/* Book consultation CTA */}
              <Button
                variant="primary"
                size="md"
                onClick={onOpenBooking}
                className="flex items-center space-x-2 shadow-none"
              >
                <Calendar className="w-3.5 h-3.5 text-[#a1a1cd] shrink-0" />
                <span>Book Consultation</span>
              </Button>
            </div>

            {/* ── MOBILE ZONE ── */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenBooking}
                className="shadow-none text-[11px] px-4 py-2"
              >
                Book
              </Button>
              <button
                onClick={() => setMobileMenuOpen((o) => !o)}
                className="p-2 rounded-full text-[#151581] hover:bg-[#f6f6fa] transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen
                  ? <X className="w-5 h-5" />
                  : <Menu className="w-5 h-5" />
                }
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-[#151581]/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-down panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[70px] left-0 right-0 z-50 mx-4 lg:hidden"
            >
              <div className="bg-white rounded-[28px] border border-[#d6d6d6]/60 shadow-xl overflow-hidden">
                
                {/* Brand identity strip */}
                <div className="flex items-center space-x-3 px-6 pt-5 pb-4 border-b border-[#f6f5f4]">
                  <img src="/logo-mark.svg" alt="Lumina" className="w-8 h-8" />
                  <div>
                    <div className="text-sm font-display font-semibold text-[#151581] tracking-wide">
                      Lumina Dental Studio
                    </div>
                    <div className="text-[10px] font-body text-[#a1a1cd] tracking-widest uppercase">
                      Indirapuram · {CLINIC_INFO.rating}★ ({CLINIC_INFO.reviewsCount}+ Reviews)
                    </div>
                  </div>
                </div>

                {/* Nav links */}
                <nav className="px-3 py-3">
                  <ul className="space-y-0.5">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className={cn(
                            'w-full text-left px-4 py-3 rounded-2xl text-sm font-body font-medium transition-colors',
                            activeItem === item.id
                              ? 'bg-[#5465ff]/8 text-[#151581]'
                              : 'text-[#151581]/80 hover:bg-[#f6f6fa] hover:text-[#151581]'
                          )}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Bottom CTA strip */}
                <div className="px-5 pb-5 pt-2 space-y-2.5 border-t border-[#f6f5f4]">
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-2xl bg-[#00bb76]/10 text-[#00bb76] text-xs font-body font-semibold border border-[#00bb76]/20 hover:bg-[#00bb76]/15 transition-colors"
                  >
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>Emergency: {CLINIC_INFO.phone}</span>
                  </a>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }}
                    className="w-full justify-center space-x-2 shadow-none py-3"
                  >
                    <Calendar className="w-4 h-4 text-[#a1a1cd] shrink-0" />
                    <span>Book a Consultation</span>
                  </Button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
