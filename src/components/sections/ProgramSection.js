import React from 'react';
import { motion } from 'framer-motion';
import { THALITA_PHOTOS } from '../../constants';
import './ProgramSection.css';

const ProgramSection = () => {
  const programs = [
    {
      id: 'casal',
      title: 'Atendimento de Casal',
      image: THALITA_PHOTOS.flyers.casal,
      description: 'Transformem juntos uma vida financeira saudável e alinhada.'
    },
    {
      id: 'psicologos',
      title: 'Atendimento para Psicólogos',
      image: THALITA_PHOTOS.flyers.psicologos,
      description: 'Construa uma vida financeira organizada e sustentável na sua prática clínica.'
    },
    {
      id: 'individual',
      title: 'Arquitetura Financeira',
      image: THALITA_PHOTOS.flyers.individual,
      description: 'Consultoria individual personalizada para sua autonomia financeira.'
    }
  ];

  return (
    <section id="programas" className="program-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Nossos Programas</h2>
          <p className="subtitle">Soluções completas para sua organização financeira</p>
        </motion.div>

        <div className="program-grid">
          {programs.map((program, index) => (
            <motion.div 
              key={program.id}
              className="program-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="program-image-wrapper">
                <img src={program.image} alt={program.title} className="program-image" />
                <div className="program-overlay">
                   <p>{program.description}</p>
                </div>
              </div>
              <div className="program-info">
                <h3>{program.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;