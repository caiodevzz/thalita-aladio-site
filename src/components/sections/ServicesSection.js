import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';
import { generateWhatsAppMessage, getWhatsAppLink } from '../../utils';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section id="servicos" className="services-section">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Mas existe um outro caminho...</h2>
          <p className="section-subtitle">
            Você não precisa de mais um curso. Você precisa de clareza, direção e alguém para caminhar com você.
          </p>
        </motion.div>
        
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="service-header">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <div className="service-price">{service.price}</div>
              </div>
              
              <div className="service-body">
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={getWhatsAppLink(generateWhatsAppMessage(service.title, service.price))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-service"
                >
                  <i className="fab fa-whatsapp"></i> Quero saber mais
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="services-conclusion"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Essas são soluções práticas para psicólogos que decidiram estruturar seus consultórios 
            e conquistar previsibilidade, lucro e crescimento — com orientação prática e humanizada.
          </p>
          <p className="cta-text">Agora, pode ser a sua vez.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
