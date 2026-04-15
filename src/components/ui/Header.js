import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { THALITA_PHOTOS } from '../../constants';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container header-container">
        <div className="logo">
          <img
            src={THALITA_PHOTOS.header}
            alt="Thalita Aládio"
            data-fallback-step="0"
            onError={(e) => {
              const fallbacks = [
                '/635713062_1217593186799053_6726065486971934416_n.jpg',
                '/images/453225168_1206310120373759_2427162947159320499_n.jpg'
              ];
              const step = parseInt(e.currentTarget.getAttribute('data-fallback-step') || '0', 10);
              if (step < fallbacks.length) {
                e.currentTarget.setAttribute('data-fallback-step', String(step + 1));
                e.currentTarget.src = fallbacks[step];
              } else {
                e.currentTarget.style.display = 'none';
              }
            }}
          />
          <span>Thalita Aládio</span>
        </div>
        
        <nav className={`main-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#sobre">Sobre</a>
          <a href="#galeria">Galeria</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato" className="btn-nav">Agendar Consultoria</a>
        </nav>
        
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
