import heroImg from '../assets/images/_7502945.jpg';
import headerIcon from '../icon/635713062_1217593186799053_6726065486971934416_n.jpg';
import aboutImg from '../assets/images/_7502933.jpg';
import serviceImg1 from '../assets/images/services/atendimento-psicologos.png';
import serviceImg2 from '../assets/images/services/arquitetura-financeira.png';
import serviceImg3 from '../assets/images/services/atendimento-casal.png';
import galleryImg1 from '../assets/images/_7502918.jpg';
import galleryImg2 from '../assets/images/_7502926.jpg';
import galleryImg3 from '../assets/images/_7502927.jpg';
import galleryImg4 from '../assets/images/_7502933.jpg';
import galleryImg5 from '../assets/images/_7502936.jpg';
import galleryImg6 from '../assets/images/_7502945.jpg';
import galleryImg7 from '../assets/images/_7502953.jpg';
import galleryImg8 from '../assets/images/_7502955.jpg';
import galleryImg9 from '../assets/images/_7502971.jpg';
import galleryImg10 from '../assets/images/_7502977.jpg';
import galleryImg11 from '../assets/images/_7502978.jpg';
import galleryImg12 from '../assets/images/_7502986.jpg';

// Imagens da Thalita Aládio
export const THALITA_PHOTOS = {
  hero: heroImg,
  header: headerIcon,
  about: aboutImg,
  gallery: [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
    galleryImg8,
    galleryImg9,
    galleryImg10,
    galleryImg11,
    galleryImg12
  ]
};

// Informações da Thalita
export const THALITA_INFO = {
  name: 'Thalita Aládio',
  title: 'Especialista em Gestão de Consultórios Psicológicos',
  slogan: 'Cuidar de quem cuida: gestão inteligente para psicólogos',
  credentials: [
    { icon: 'fas fa-graduation-cap', text: 'MBA em Gestão' },
    { icon: 'fas fa-brain', text: 'Neurociência' },
    { icon: 'fas fa-clock', text: '10+ Anos' },
    { icon: 'fas fa-users', text: '500+ Clientes' }
  ]
};

// Serviços oferecidos
export const SERVICES = [
  {
    id: 'atendimento-psicologos',
    image: serviceImg1,
    icon: 'fas fa-user-md',
    title: 'Atendimento para Psicólogos',
    description: 'Construa uma vida financeira organizada e sustentável na sua prática clínica.',
    price: '12x R$ 299,00',
    priceNote: 'por 1 ano de acompanhamento',
    features: [
      'Organização financeira do consultório e da vida pessoal',
      'Estruturação de preços e honorários sustentáveis',
      'Planejamento financeiro para profissionais da psicologia',
      'Estratégias para crescer com segurança financeira'
    ]
  },
  {
    id: 'arquitetura-financeira',
    image: serviceImg2,
    icon: 'fas fa-chart-line',
    title: 'Arquitetura Financeira',
    subtitle: 'Consultoria Individual',
    description: 'Planejamento financeiro integrado com seus objetivos de vida.',
    price: '12x R$ 299,00',
    features: [
      'Planejamento financeiro integrado com objetivos de vida',
      'Estruturação de investimentos',
      'Desenvolvimento da autonomia financeira',
      'Integração com práticas de consciência emocional',
      'Acompanhamento personalizado'
    ],
    popular: true
  },
  {
    id: 'atendimento-casal',
    image: serviceImg3,
    icon: 'fas fa-heart',
    title: 'Atendimento de Casal',
    description: 'Transformem juntos uma vida financeira saudável e alinhada.',
    price: 'R$ 399,00',
    features: [
      'Planejamento financeiro para o casal',
      'Organização e metas compartilhadas',
      'Diálogo sobre dinheiro sem conflitos',
      'Estratégias para prosperar juntos'
    ]
  }
];

// Depoimentos
export const TESTIMONIALS = [
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

// Contato
export const CONTACT_INFO = {
  whatsapp: 'https://api.whatsapp.com/message/YBMRDHCQHPTWK1?autoload=1&app_absent=0',
  phone: '(64) 99963-7532',
  email: 'contato@thalitaaladio.com',
  instagram: 'https://www.instagram.com/aladiothalita/',
  youtube: 'https://www.youtube.com/@thalitaaladio2825',
  schedule: 'Segunda a sexta, 9h às 18h',
  location: 'Itumbiara – GO'
};
