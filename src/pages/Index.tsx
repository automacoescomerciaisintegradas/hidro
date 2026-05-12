
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PricingSection from '@/components/PricingSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
