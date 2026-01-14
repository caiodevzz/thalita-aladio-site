import React from 'react';
import { motion } from 'framer-motion';
import { THALITA_PHOTOS } from '../../constants';
import './GallerySection.css';

const GallerySection = () => {
  return (
    <section id="galeria" className="gallery-section">
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Conheça a Thalita</h2>
          <p>Profissional dedicada a transformar a gestão de consultórios psicológicos</p>
        </motion.div>
        
        <div className="gallery-grid">
          {THALITA_PHOTOS.gallery.map((photo, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={photo} alt={`Thalita Aládio - Foto ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
