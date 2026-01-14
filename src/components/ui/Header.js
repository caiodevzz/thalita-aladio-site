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
          <img src={THALITA_PHOTOS.header} alt="Thalita Aládio" />
          <span>Thalita Aládio</span>
        </div>
        
        <nav className={`main-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#sobre">Sobre</a>
          <a href="#galeria">Galeria</a>
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#precos">Preços</a>
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
