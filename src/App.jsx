import React, { useState, useRef, useEffect } from 'react';
import { THEMES } from './data/themes';
import StudioToolbar from './components/StudioToolbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import DoctorProfile from './components/DoctorProfile';
import SpecialtiesBento from './components/SpecialtiesBento';
import SmileTransformations from './components/SmileTransformations';
import TechnologySuite from './components/TechnologySuite';
import Testimonials from './components/Testimonials';
import ClinicDetails from './components/ClinicDetails';
import GoogleMapSection from './components/GoogleMapSection';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [activeThemeId, setActiveThemeId] = useState('cat1-impeccable');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const theme = THEMES[activeThemeId] || THEMES['cat1-impeccable'];

  // Section refs for smooth scrolling
  const sectionRefs = {
    specialties: useRef(null),
    doctor: useRef(null),
    transformations: useRef(null),
    technology: useRef(null),
    location: useRef(null)
  };

  const scrollToSection = (sectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  const handleSelectSpecialty = (service) => {
    setPreselectedService(service);
  };

  // Scroll to top on theme change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeThemeId]);

  return (
    <div className="min-h-screen theme-transition">
      {/* Design Studio Toolbar (always visible, fixed top) */}
      <StudioToolbar
        activeThemeId={activeThemeId}
        onThemeChange={setActiveThemeId}
      />

      {/* Themed Website Body */}
      <div className={`${theme.bodyBg} ${theme.bodyText} ${theme.bodyFont} min-h-screen transition-colors duration-500`}>
        
        <Navbar
          theme={theme}
          onOpenBooking={handleOpenBooking}
          onSelectSection={scrollToSection}
        />

        <main>
          <Hero
            theme={theme}
            onOpenBooking={handleOpenBooking}
          />

          <Stats theme={theme} />

          <div ref={sectionRefs.doctor}>
            <DoctorProfile
              theme={theme}
              onOpenBooking={handleOpenBooking}
            />
          </div>

          <div ref={sectionRefs.specialties}>
            <SpecialtiesBento
              theme={theme}
              onSelectSpecialty={handleSelectSpecialty}
              onOpenBooking={handleOpenBooking}
            />
          </div>

          <div ref={sectionRefs.transformations}>
            <SmileTransformations
              theme={theme}
              onOpenBooking={handleOpenBooking}
            />
          </div>

          <div ref={sectionRefs.technology}>
            <TechnologySuite theme={theme} />
          </div>

          <Testimonials theme={theme} />

          <div ref={sectionRefs.location}>
            <ClinicDetails
              theme={theme}
              onOpenBooking={handleOpenBooking}
            />
          </div>

          <GoogleMapSection theme={theme} />
        </main>

        <Footer theme={theme} />
      </div>

      {/* Booking Modal Overlay */}
      <BookingModal
        theme={theme}
        isOpen={bookingOpen}
        onClose={() => { setBookingOpen(false); setPreselectedService(''); }}
        preselectedService={preselectedService}
      />
    </div>
  );
}
