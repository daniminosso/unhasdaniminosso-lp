export interface ServiceData {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  }[];
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  price: {
    description: string;
    price: number;
  }[];
  message?: string
}

export const dataMap: Record<string, ServiceData> = {
  "alongamento-molde-f1-com-esmaltacao-em-gel": {
    title: "Alongamento molde F1 com esmaltação em gel",
    description: "Técnica rápida e eficiente para quem deseja unhas longas e com curvatura marcante. Utilizando o molde F1 e fibra de alta resistência, garantimos simetria perfeita e aspecto natural. Finalizado com esmaltação em gel para maior durabilidade e brilho intenso. Duração de até 30 dias (manutenção recomendada entre 20–30 dias).",
    benefits: [
      {
        icon: "Sparkles",
        title: "Curvatura Definida",
        description: "Molde F1 e fibra criam um arco perfeito que valoriza suas mãos."
      },
      {
        icon: "Clock",
        title: "Aplicação Express",
        description: "Técnica otimizada para resultados impecáveis em tempo reduzido."
      },
      {
        icon: "Shield",
        title: "Durabilidade Garantida",
        description: "Fibra resistente e esmaltação em gel que mantém as unhas intactas por até 30 dias."
      }
    ],
    images: [
        { src: "/images/alongamento-molde-f1-com-esmaltacao-em-gel/molde-f1-esmaltação-em-gel-1.jpg", alt: "Passo 1", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-molde-f1-com-esmaltacao-em-gel/molde-f1-esmaltação-em-gel-2.jpg", alt: "Passo 2", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-molde-f1-com-esmaltacao-em-gel/molde-f1-esmaltação-em-gel-3.jpg", alt: "Passo 3", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-molde-f1-com-esmaltacao-em-gel/molde-f1-esmaltação-em-gel-4.jpg", alt: "Passo 4", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-molde-f1-com-esmaltacao-em-gel/molde-f1-esmaltação-em-gel-5.jpg", alt: "Passo 5", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-molde-f1-com-esmaltacao-em-gel/molde-f1-esmaltação-em-gel-6.jpg", alt: "Passo 6", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
    ],
    price: [
      { description: "Aplicação Inicial",        price: 200 },
      { description: "Manutenção até 20 dias",   price: 130 },
      { description: "Manutenção até 30 dias",   price: 140 },
    ],
  },
  "alongamento-molde-f1-com-decoracao-encapsulada": {
    title: "Alongamento no molde F1 com decoração encapsulada",
    description: `
      A união da técnica molde F1 com decorações encapsuladas proporciona unhas impactantes 
      e artísticas, mantendo o acabamento liso e elegante. Ideal para quem busca estilo 
      com longa duração. Durabilidade: até 30 dias, com manutenção entre 20 e 30 dias.
    `
      .trim()
      .replace(/\s+/g, ' '),
    benefits: [
      {
        icon: "Sparkles",
        title: "Arte Encapsulada",
        description: "Decorações seladas em fibra que garantem um efeito 3D sofisticado."
      },
      {
        icon: "Clock",
        title: "Aplicação Precisa",
        description: "Incorporação de detalhes sem comprometer a rapidez do seu atendimento."
      },
      {
        icon: "Shield",
        title: "Proteção Duradoura",
        description: "Técnica resistente que mantém a decoração intacta por até 30 dias."
      }
    ],
    images: [
        { src: "/images/alongamento-molde-f1-com-decoracao-encapsulada/molde-f1-com-decoracao-encapsulada-1.jpg", alt: "Passo 1", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-molde-f1-com-decoracao-encapsulada/molde-f1-com-decoracao-encapsulada-2.jpg", alt: "Passo 2", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-molde-f1-com-decoracao-encapsulada/molde-f1-com-decoracao-encapsulada-3.jpg", alt: "Passo 3", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-molde-f1-com-decoracao-encapsulada/molde-f1-com-decoracao-encapsulada-4.jpg", alt: "Passo 4", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-molde-f1-com-decoracao-encapsulada/molde-f1-com-decoracao-encapsulada-5.jpg", alt: "Passo 5", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-molde-f1-com-decoracao-encapsulada/molde-f1-com-decoracao-encapsulada-6.jpg", alt: "Passo 6", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
    ],
    price: [
      { description: "Aplicação Inicial",        price: 250 },
      { description: "Manutenção até 20 dias",   price: 150 },
      { description: "Manutenção até 30 dias",   price: 160 },
    ],
  },
  "banho-em-gel": {
    title: "Banho em gel com esmaltação em gel",
    description: `
      Mergulhe suas unhas em um gel nutritivo que fortalece a estrutura natural 
      e entrega um brilho radiante. Cada camada é selada com precisão, garantindo 
      acabamento uniforme e proteção extra contra quebras. Desfrute de unhas 
      impecáveis por até 30 dias (manutenção entre 20–30 dias).
    `.trim().replace(/\s+/g,' '),
    benefits: [
      {
        icon: "Sparkles",
        title: "Brilho Cristalino",
        description: "Efeito espelhado que reflete luz e destaca suas mãos."
      },
      {
        icon: "Clock",
        title: "Secagem Express",
        description: "Gel de cura rápida para você seguir seu dia sem espera."
      },
      {
        icon: "Shield",
        title: "Escudo Protetor",
        description: "Camada resistente que mantém suas unhas livres de lascas."
      }
    ],
    images: [
      { src: "/images/banho-em-gel/banho-em-gel-1.jpg", alt: "Passo 1", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel/banho-em-gel-2.jpg", alt: "Passo 2", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel/banho-em-gel-3.jpg", alt: "Passo 3", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel/banho-em-gel-4.jpg", alt: "Passo 4", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel/banho-em-gel-5.jpg", alt: "Passo 5", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel/banho-em-gel-6.jpg", alt: "Passo 6", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel/banho-em-gel-7.jpg", alt: "Passo 7", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel/banho-em-gel-8.jpg", alt: "Passo 8", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel/banho-em-gel-9.jpg", alt: "Passo 9", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel/banho-em-gel-10.jpg", alt: "Passo 10", width: 500, height: 500, className: "relative z-10 rounded-lg object-top object-cover w-full h-full" },
    ],
    price: [
      { description: "Aplicação",        price: 130 },
    ],
  },
  "banho-em-gel-com-decoracao-encapsulada": {
    title: "Banho em gel com decoração encapsulada",
    description: `
      Além da proteção e resistência do banho em gel tradicional, o banho encapsulado permite a aplicação 
      de decorações como glitter, folhas de ouro ou outros elementos, que ficam “dentro” do gel, sem relevo. 
      Resultado: unhas sofisticadas, com acabamento liso e visual elegante. Durabilidade: até 30 dias com 
      manutenção entre 20 e 30 dias.
    `
      .trim()
      .replace(/\s+/g, ' '),
    benefits: [
      {
        icon: "Sparkles",
        title: "Brilho Sofisticado",
        description: "Glitter, folhas de ouro e outras decorações encapsuladas garantem brilho intenso sem relevo."
      },
      {
        icon: "Clock",
        title: "Secagem Rápida",
        description: "Gel de cura rápida para unhas prontas em minutos, mantendo sua rotina sem atrasos."
      },
      {
        icon: "Shield",
        title: "Durabilidade Refinada",
        description: "Camada resistente que preserva as decorações intactas por até 30 dias."
      }
    ],
    images: [
      { src: "/images/banho-em-gel-com-decoracao-encapsulada/banho-em-gel-encapsulado-1.jpg", alt: "Passo 1", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel-com-decoracao-encapsulada/banho-em-gel-encapsulado-2.jpg", alt: "Passo 2", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel-com-decoracao-encapsulada/banho-em-gel-encapsulado-3.jpg", alt: "Passo 3", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
      { src: "/images/banho-em-gel-com-decoração-encapsulada.jpg", alt: "Passo 4", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
    ],
    price: [
      { description: "Aplicação",        price: 160 },
    ],
  },
  "alongamento-em-fibra-com-esmaltacao-em-gel": {
    title: "Alongamento em fibra com esmaltação em gel",
    description: `
      Técnica indicada para quem deseja unhas longas, resistentes e com aparência natural. 
      Utilizo a fibra sem ponto de tensão — o que garante mais conforto e naturalidade. 
      Finalizado com esmaltação em gel, que oferece cor intensa e brilho duradouro. 
      Durabilidade: até 30 dias, com manutenção recomendada de 20 a 30 dias.
    `
      .trim()
      .replace(/\s+/g, ' '),
    benefits: [
      {
        icon: "Sparkles",
        title: "Acabamento Natural",
        description: "Fibra sem ponto de tensão garante um resultado suave e com aspecto de unha real."
      },
      {
        icon: "Clock",
        title: "Aplicação Confortável",
        description: "Técnica delicada que prioriza o conforto, sem pressão ou desconfortos."
      },
      {
        icon: "Shield",
        title: "Brilho e Proteção",
        description: "Esmaltação em gel selada para manter cor intensa, brilho e resistência por até 30 dias."
      }
    ],
    images: [
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-1.jpg", alt: "Passo 1", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-2.jpg", alt: "Passo 2", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-3.jpg", alt: "Passo 3", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-4.jpg", alt: "Passo 4", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-5.jpg", alt: "Passo 5", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-6.jpg", alt: "Passo 6", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-7.jpg", alt: "Passo 7", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-8.jpg", alt: "Passo 8", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-9.jpg", alt: "Passo 9", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-10.jpg", alt: "Passo 10", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-11.jpg", alt: "Passo 11", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-esmaltacao-em-gel/alongamento-fibra-esmaltação-em-gel-12.jpg", alt: "Passo 12", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
    ],
    price: [
      { description: "Aplicação Inicial",        price: 200 },
      { description: "Manutenção até 20 dias",   price: 130 },
      { description: "Manutenção até 30 dias",   price: 140 },
    ],
  },
  "alongamento-em-fibra-com-decoracao-encapsulada": {
    title: "Alongamento em fibra com decoração encapsulada",
    description: `
      Além do alongamento com aspecto natural, a decoração é encapsulada dentro do gel, protegendo 
      o design e garantindo maior durabilidade. Perfeito para quem ama arte nas unhas com acabamento 
      profissional e sem relevo. Durabilidade: até 30 dias, com manutenção entre 20 e 30 dias.
    `
      .trim()
      .replace(/\s+/g, ' '),
    benefits: [
      {
        icon: "Sparkles",
        title: "Arte Protegida",
        description: "Decorações encapsuladas mantêm o visual perfeito, com efeito liso e elegante."
      },
      {
        icon: "Clock",
        title: "Aplicação Detalhada",
        description: "Técnica precisa que destaca sua decoração sem comprometer seu tempo."
      },
      {
        icon: "Shield",
        title: "Resistência Prolongada",
        description: "Fibra e encapsulamento garantem unhas artísticas intactas por até 30 dias."
      }
    ],
    images: [
        { src: "/images/alongamento-fibra-com-decoracao-encapsulada/alongamento-fibra-decoracao-encapsulada-1.jpg", alt: "Passo 1", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-decoracao-encapsulada/alongamento-fibra-decoracao-encapsulada-2.jpg", alt: "Passo 2", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-decoracao-encapsulada/alongamento-fibra-decoracao-encapsulada-3.jpg", alt: "Passo 3", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-decoracao-encapsulada/alongamento-fibra-decoracao-encapsulada-4.jpg", alt: "Passo 4", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-decoracao-encapsulada/alongamento-fibra-decoracao-encapsulada-5.jpg", alt: "Passo 5", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-decoracao-encapsulada/alongamento-fibra-decoracao-encapsulada-6.jpg", alt: "Passo 6", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-decoracao-encapsulada/alongamento-fibra-decoracao-encapsulada-7.jpg", alt: "Passo 7", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
        { src: "/images/alongamento-fibra-com-decoracao-encapsulada/alongamento-fibra-decoracao-encapsulada-8.jpg", alt: "Passo 8", width: 500, height: 500, className: "relative z-10 rounded-lg object-cover w-full h-full" },
    ],
    price: [
      { description: "Aplicação Inicial",        price: 250 },
      { description: "Manutenção até 20 dias",   price: 150 },
      { description: "Manutenção até 30 dias",   price: 160 },
    ],
  },
};