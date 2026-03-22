import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, CONTACT_INFO } from '../../constants';
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
          <h2>Nossos Serviços</h2>
          <p className="section-subtitle">
            Psicologia do Dinheiro | Planejamento Financeiro
          </p>
        </motion.div>
        
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card ${service.popular ? 'featured' : ''} ${index % 2 === 1 ? 'image-left' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="service-content">
                <div className="service-header">
                  <h3>{service.title}</h3>
                  {service.subtitle && (
                    <span className="service-subtitle">{service.subtitle}</span>
                  )}
                  <p className="service-description">{service.description}</p>
                </div>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="service-price-box">
                  <span className="price-label">Investimento:</span>
                  <span className="price-value">{service.price}</span>
                  {service.priceNote && (
                    <span className="price-note">{service.priceNote}</span>
                  )}
                </div>
                
                <a 
                  href={getWhatsAppLink(generateWhatsAppMessage(service.title, service.price))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-service"
                >
                  <i className="fab fa-whatsapp"></i> Agende agora: {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="service-image">
                <img src={service.image} alt={service.title} />
                {service.popular && (
                  <span className="popular-badge">Mais procurado</span>
                )}
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
