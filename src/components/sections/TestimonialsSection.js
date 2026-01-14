import React from 'react';
import { motion } from 'framer-motion';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "A consultoria da Thalita me ajudou a entender que minhas decisões financeiras estavam sendo guiadas por medos inconscientes. Hoje tenho clareza e controle sobre as finanças do meu consultório.",
      author: "Maria Silva",
      role: "Psicóloga Clínica"
    },
    {
      content: "Através da gestão humanizada, consegui organizar meu consultório sem perder o foco no cuidado. A metodologia da Thalita une técnica e humanidade de forma única.",
      author: "Ana Costa",
      role: "Psicóloga Organizacional"
    },
    {
      content: "A mentoria em grupo foi transformadora. Compartilhar experiências com outras psicólogas e ter orientação especializada me deu segurança para crescer profissionalmente.",
      author: "Juliana Santos",
      role: "Psicóloga Autônoma"
    }
  ];

  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Depoimentos de quem já transformou seu consultório</h2>
          <p className="section-subtitle">
            Psicólogas reais, com consultórios reais, que decidiram estruturar suas práticas 
            e conquistar previsibilidade, lucro e crescimento — com orientação prática e humanizada.
          </p>
        </motion.div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>"{testimonial.content}"</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="testimonials-conclusion"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="cta-text">Agora, pode ser a sua vez de transformar seu consultório.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
