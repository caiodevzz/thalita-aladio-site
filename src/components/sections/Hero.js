import React from 'react';
import { motion } from 'framer-motion';
import { THALITA_PHOTOS } from '../../constants';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <h1>
              Transforme seu consultório através da <span>gestão humanizada</span> para psicólogos
            </h1>
            <p>
              Se você está cansada de trabalhar sem parar, sem clareza sobre suas finanças e sentindo que está sempre apagando incêndios no seu consultório...
            </p>
            <p className="hero-subtitle">
              O problema não é você. É a falta de estrutura e organização profissional.
            </p>
            <div className="hero-buttons">
              <a href="#servicos" className="btn-primary">
                <i className="fas fa-rocket"></i> Conhecer os Serviços
              </a>
              <a href="#depoimentos" className="btn-secondary">Ver Depoimentos</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <img src={THALITA_PHOTOS.hero} alt="Thalita Aládio - Especialista em Gestão de Consultórios Psicológicos" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
