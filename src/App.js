import React from 'react';
import Header from './components/ui/Header';
import Hero from './components/sections/Hero';
import ProblemSection from './components/sections/ProblemSection';
import AboutSection from './components/sections/AboutSection';
import VideoSection from './components/sections/VideoSection';
import GallerySection from './components/sections/GallerySection';
import ServicesSection from './components/sections/ServicesSection';
import ProgramSection from './components/sections/ProgramSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/ui/Footer';
import './App.css';

// Deployment trigger - update nav: v2
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
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
