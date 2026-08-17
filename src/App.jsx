import React, { useState, useRef } from 'react';
import { LOCKED_THEME as theme } from './data/themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCopy from './components/FeatureCopy';
import Stats from './components/Stats';
import DoctorProfile from './components/DoctorProfile';
import SpecialtiesBento from './components/SpecialtiesBento';
import SmileTransformations from './components/SmileTransformations';
import TechnologySuite from './components/TechnologySuite';
import Testimonials from './components/Testimonials';
import ClinicDetails from './components/ClinicDetails';
import GoogleMapSection from './components/GoogleMapSection';
import BookingModal from './components/BookingModal';
import AwardSeal from './components/AwardSeal';
import Footer from './components/Footer';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

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

  return (
    <div className={`min-h-screen ${theme.bodyBg} ${theme.bodyText} ${theme.bodyFont} antialiased`}>
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

        <FeatureCopy />

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

      <AwardSeal />

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
