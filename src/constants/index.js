import heroImg from '../assets/images/_7502945.jpg';
import headerIcon from '../icon/635713062_1217593186799053_6726065486971934416_n.jpg';
import aboutImg from '../assets/images/_7502933.jpg';
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

// Flyers de Programas
// import flyerCasal from '../assets/images/flyer-casal.jpg';
// import flyerPsicologos from '../assets/images/flyer-psicologos.jpg';
// import flyerIndividual from '../assets/images/flyer-individual.jpg';

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
  ],
  flyers: {
    casal: aboutImg, // Usando aboutImg como placeholder temporário
    psicologos: aboutImg,
    individual: aboutImg
  }
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
    id: 'atendimento-casal',
    icon: 'fas fa-heart',
    title: 'Atendimento de Casal',
    description: 'Transformem juntos uma vida financeira saudável e alinhada.',
    price: 'R$ 399,00',
    image: THALITA_PHOTOS.flyers.casal,
    features: [
      'Planejamento financeiro para o casal',
      'Organização e metas compartilhadas',
      'Diálogo sobre dinheiro sem conflitos',
      'Estratégias para prosperar juntos'
    ]
  },
  {
    id: 'atendimento-psicologos',
    icon: 'fas fa-brain',
    title: 'Atendimento para Psicólogos',
    description: 'Construa uma vida financeira organizada e sustentável na sua prática clínica.',
    price: '12x R$ 299,00',
    image: THALITA_PHOTOS.flyers.psicologos,
    popular: true,
    features: [
      'Organização financeira do consultório e da vida pessoal',
      'Estruturação de preços e honorários sustentáveis',
      'Planejamento financeiro para profissionais da psicologia',
      'Estratégias para crescer com segurança financeira'
    ]
  },
  {
    id: 'arquitetura-financeira',
    icon: 'fas fa-vault',
    title: 'Arquitetura Financeira',
    description: 'Consultoria Individual personalizada.',
    price: '12x R$ 299',
    image: THALITA_PHOTOS.flyers.individual,
    features: [
      'Planejamento financeiro integrado com objetivos de vida',
      'Estruturação de investimentos',
      'Desenvolvimento da autonomia financeira',
      'Integração com práticas de consciência emocional',
      'Acompanhamento personalizado'
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
  whatsapp: 'https://wa.me/message/YBMRDHCQHPTWK1',
  email: 'contato@thalitaaladio.com',
  instagram: 'https://www.instagram.com/aladiothalita/',
  youtube: 'https://www.youtube.com/@thalitaaladio2825',
  schedule: 'Segunda a sexta, 9h às 18h',
  location: 'Atendimento online para todo o Brasil'
};
