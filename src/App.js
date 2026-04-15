import React from 'react';
import Header from './components/ui/Header';
import Hero from './components/sections/Hero';
import ProblemSection from './components/sections/ProblemSection';
import AboutSection from './components/sections/AboutSection';
import VideoSection from './components/sections/VideoSection';
import GallerySection from './components/sections/GallerySection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PricingSection from './components/sections/PricingSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/ui/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProblemSection />
      <AboutSection />
      <VideoSection />
      <GallerySection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
