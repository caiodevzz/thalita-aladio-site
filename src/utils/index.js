// Utilitários para o site da Thalita Aládio

// Função para gerar link do WhatsApp com mensagem
export const getWhatsAppLink = (message = null) => {
  const baseUrl = 'https://api.whatsapp.com/message/YBMRDHCQHPTWK1';
  const defaultMessage = 'Olá! Gostaria de saber mais sobre a consultoria de gestão para psicólogos.';
  const finalMessage = message || defaultMessage;
  return `${baseUrl}?text=${encodeURIComponent(finalMessage)}&autoload=1&app_absent=0`;
};

// Função para gerar mensagem do WhatsApp
export const generateWhatsAppMessage = (service, price) => {
  return `Olá! Tenho interesse no serviço *${service}* (${price}). Gostaria de saber mais detalhes.`;
};

// Função para scroll suave
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const targetPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// Função para animações de entrada
export const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

// Função para formatar preços
export const formatPrice = (price) => {
  return price.replace('R$', 'R$ ');
};

// Função para validar email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para copiar texto para clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Erro ao copiar texto:', err);
    return false;
  }
};