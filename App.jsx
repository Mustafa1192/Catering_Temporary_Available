import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/herosection';
import Review from './components/Review';
import Footer from './components/Footer';
import ContactForm from './pages/ContactForm';
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <Review />
      <ContactForm />
      <Footer />
    </div>
  );
}
