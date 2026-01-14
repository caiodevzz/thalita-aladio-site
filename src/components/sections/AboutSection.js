import React from 'react';
import { motion } from 'framer-motion';
import { THALITA_PHOTOS, THALITA_INFO } from '../../constants';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={THALITA_PHOTOS.about} alt="Thalita Aládio" />
          </motion.div>
          
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2>Conheça sua mentora</h2>
            <h3>{THALITA_INFO.name}</h3>
            <p>
              Administradora com MBA em Gestão, Controladoria e Finanças Corporativas. 
              Especialista em Educação Financeira com foco em Neurociência, Consultoria em RH e Psicologia Organizacional.
            </p>
            <p>
              Atuo há mais de 10 anos como consultora, ajudando pessoas e empresas a entenderem suas decisões financeiras 
              a partir de uma perspectiva emocional, comportamental e estratégica.
            </p>
            <p>
              Acredito que o dinheiro reflete nossas crenças e emoções, por isso desenvolvo projetos que unem finanças, 
              neurociência e gestão de pessoas para promover autonomia, inteligência emocional e prosperidade consciente.
            </p>
            
            <div className="credentials">
              {THALITA_INFO.credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  className="credential-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <i className={credential.icon}></i>
                  <span>{credential.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
