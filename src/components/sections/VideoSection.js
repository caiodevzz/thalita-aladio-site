import React from 'react';
import { motion } from 'framer-motion';
import './VideoSection.css';

const VideoSection = () => {
  // Converte o link do YouTube para formato embed
  const videoUrl = 'https://www.youtube.com/live/ZjAJdmN_lSg?si=iBUgBXRj9cVLPhSg';
  const videoId = 'ZjAJdmN_lSg';
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section id="video" className="video-section">
      <div className="container">
        <motion.div
          className="video-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Conheça mais sobre a Thalita</h2>
          <p className="video-description">
            Assista ao vídeo e descubra como a gestão humanizada pode transformar seu consultório
          </p>
          
          <div className="video-wrapper">
            <iframe
              src={embedUrl}
              title="Thalita Aládio - Gestão Humanizada para Psicólogos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
