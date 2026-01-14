import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../../constants';
import './PricingSection.css';

const PricingSection = () => {
  const plans = [
    {
      name: 'Consultoria Individual',
      price: 'R$ 400',
      period: '/mês',
      description: 'Encontros quinzenais para organizar finanças, precificação e marketing do consultório.',
      features: [
        'Diagnóstico financeiro completo',
        'Plano de precificação personalizado',
        'Estratégias de marketing ético',
        'Acompanhamento quinzenal',
        'Material de apoio exclusivo',
        'Suporte por WhatsApp'
      ],
      popular: false,
      whatsappMessage: 'Olá! Tenho interesse na *Consultoria Individual* de R$ 400/mês. Gostaria de saber mais detalhes.'
    },
    {
      name: 'Gestão Mensal',
      price: 'R$ 300',
      period: '/mês',
      description: 'Acompanhamento completo: controle financeiro, agendamento, divulgação e suporte de gestão.',
      features: [
        'Controle financeiro completo',
        'Sistema de agendamento',
        'Estratégias de divulgação',
        'Suporte de gestão contínuo',
        'Relatórios mensais',
        'Consultoria mensal incluída'
      ],
      popular: true,
      whatsappMessage: 'Olá! Tenho interesse na *Gestão Mensal* de R$ 300/mês. Gostaria de saber mais detalhes.'
    },
    {
      name: 'Mentoria em Grupo',
      price: 'R$ 150',
      period: '/participante',
      description: 'Encontros mensais sobre precificação, rotina e organização para psicólogos.',
      features: [
        'Encontros mensais online',
        'Temas específicos por sessão',
        'Troca de experiências',
        'Material didático',
        'Grupo de apoio',
        'Acesso à comunidade'
      ],
      popular: false,
      whatsappMessage: 'Olá! Tenho interesse na *Mentoria em Grupo* de R$ 150/participante. Gostaria de saber mais detalhes.'
    }
  ];

  return (
    <section id="precos" className="pricing-section">
      <div className="container">
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Escolha como você quer transformar seu consultório</h2>
          <p className="section-subtitle">
            Você pode entrar na consultoria de diferentes formas. Todas funcionam. 
            O que muda é o nível de suporte que você deseja nesta fase da sua jornada.
          </p>
        </motion.div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.popular ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="popular-badge">Mais Popular</div>
              )}
              
              <div className="pricing-header-card">
                <h3>{plan.name}</h3>
                <div className="pricing-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>
              
              <div className="pricing-body">
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pricing"
                >
                  <i className="fab fa-whatsapp"></i> Quero este plano
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="pricing-guarantee"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="guarantee-content">
            <i className="fas fa-shield-alt"></i>
            <h3>Garantia de 7 dias</h3>
            <p>Se por algum motivo você achar que a consultoria não correspondeu às suas expectativas, você pode solicitar seu dinheiro de volta.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
