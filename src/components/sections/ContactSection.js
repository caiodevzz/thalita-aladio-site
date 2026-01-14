import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../../constants';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Pronto para transformar seu consultório?</h2>
          <p>
            Entre em contato e dê o primeiro passo rumo à sua liberdade financeira e profissional.
          </p>
          
          <div className="contact-buttons">
            <a 
              href={CONTACT_INFO.whatsapp}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <i className="fab fa-whatsapp"></i> Falar no WhatsApp
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="btn-secondary"
            >
              <i className="fas fa-envelope"></i> Enviar Email
            </a>
          </div>
          
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <span>{CONTACT_INFO.schedule}</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
