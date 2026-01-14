import React from 'react';
import { motion } from 'framer-motion';
import './ProblemSection.css';

const ProblemSection = () => {
  const problems = [
    {
      icon: 'fas fa-exclamation-triangle',
      title: 'Trabalhar sem parar',
      description: 'E mesmo assim ficar sem clareza de onde o dinheiro está indo — e sem saber se vai sobrar para segurar o próximo mês.'
    },
    {
      icon: 'fas fa-fire',
      title: 'Apagar incêndios',
      description: 'Organizar tudo sozinha, misturando as contas do consultório com as da sua vida pessoal.'
    },
    {
      icon: 'fas fa-question-circle',
      title: 'Pensar em desistir',
      description: 'Pela falta de previsibilidade e segurança, sem enxergar um caminho claro para crescer com tranquilidade.'
    }
  ];

  return (
    <section className="problem-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Você não está sozinha se já tentou...
        </motion.h2>
        
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="problem-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="problem-icon">
                <i className={problem.icon}></i>
              </div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="problem-conclusion"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Esse é o custo de continuar como está:</h3>
          <p>Fadiga, estagnação, decisões baseadas em achismo e um consultório que depende 100% do seu esforço.</p>
          <p className="highlight">Você não tem uma operação profissional. Você tem um trabalho mal pago.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
