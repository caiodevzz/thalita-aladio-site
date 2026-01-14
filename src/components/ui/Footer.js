import React from 'react';
import { CONTACT_INFO, THALITA_INFO } from '../../constants';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>{THALITA_INFO.name}</h3>
            <p>Gestão Humanizada para Psicólogos</p>
            <p className="footer-slogan">"{THALITA_INFO.slogan}"</p>
          </div>
          
          <div className="footer-social">
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={CONTACT_INFO.youtube} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 {THALITA_INFO.name} - Gestão de Consultórios Psicológicos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
