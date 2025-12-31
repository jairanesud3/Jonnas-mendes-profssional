import { 
  Code2, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Smartphone,
  AlertTriangle,
  Clock,
  TrendingUp,
  Search
} from 'lucide-react';
import { Project, FAQItem, TechTag } from './types';

export const PROFILE_DATA = {
  name: "Jonnas Mendes",
  title: "Especialista em Posicionamento Digital",
  slogan: "Pare de perder clientes por parecer amador. Eu construo a imagem profissional que te permite cobrar mais caro e fechar negócios com facilidade.",
  // COLOQUE SUA FOTO NA PASTA 'public' E RENOMEIE PARA 'profile.png'
  avatarUrl: "/profile.png", 
  whatsappLink: "https://wa.me/5500000000000?text=Olá,%20Jonnas!%20Vim%20pelo%20seu%20portfólio%20e%20quero%20um%20site%20profissional.", // User to update
  instagramLink: "https://instagram.com/jonnasmendes.web",
};

export const TECH_TAGS: TechTag[] = [
  { name: 'HTML5', icon: Globe },
  { name: 'CSS3', icon: Code2 },
  { name: 'JS', icon: Zap },
  { name: 'Vercel', icon: Smartphone },
  { name: 'Security', icon: ShieldCheck },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Dra. Jairane Sousa",
    category: "Criminalista",
    // COLOQUE A FOTO DO SITE NA PASTA 'public' E RENOMEIE PARA 'project-jairane.png'
    image: "/project-jairane.png", 
    link: "https://jairane-teste-site.vercel.app/" 
  },
  {
    id: 2,
    title: "Dr. Kaio Pedroso",
    category: "Advocacia",
    image: "https://picsum.photos/id/1056/800/600",
    link: "#" // User to update
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Tem mensalidade?",
    answer: "Não! O investimento é único. Você paga pelo desenvolvimento e o site é seu para sempre. Apenas a hospedagem (se necessário) pode ter custos anuais, mas uso opções gratuitas de alta performance como Vercel."
  },
  {
    question: "Quanto tempo demora?",
    answer: "Entrego seu projeto de alta performance entre 3 a 5 dias úteis, dependendo da complexidade e entrega de materiais."
  },
  {
    question: "Funciona no iPhone?",
    answer: "Sim! Desenvolvo com metodologia 'Mobile-First'. Seu site ficará perfeito em iPhones, Androids, Tablets e Computadores."
  }
];

export const PACK_FEATURES = [
  "Site One Page de Alta Conversão",
  "Hospedagem Vitalícia (Sem mensalidade)",
  "Botão WhatsApp Flutuante",
  "Design Premium & Futurista",
  "Otimizado para o Google (SEO Básico)"
];

export const PAIN_POINTS = [
  {
    icon: AlertTriangle,
    title: "Site Lento & Amador",
    description: "47% dos usuários desistem se o site demora mais de 2s para carregar. Seu site atual pode estar queimando dinheiro."
  },
  {
    icon: Search,
    title: "Invisível no Google",
    description: "Se o seu cliente não te acha na primeira página, ele contrata o seu concorrente. Simples assim."
  },
  {
    icon: TrendingUp,
    title: "Baixa Conversão",
    description: "Ter visitas não paga contas. Crio estruturas desenhadas psicologicamente para transformar curiosos em contratos."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Briefing",
    description: "Entendo seu negócio, seus concorrentes e seus objetivos."
  },
  {
    step: "02",
    title: "Estratégia & Design",
    description: "Desenho o layout focado na identidade da sua marca."
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description: "Codificação limpa, rápida e segura (Sem construtores lentos)."
  },
  {
    step: "04",
    title: "Lançamento",
    description: "Seu site no ar, pronto para vender em tempo recorde."
  }
];

export const LEGAL_CONTENT = {
  privacy: {
    title: "Política de Privacidade",
    content: `
      1. COLETA DE DADOS
      Ao utilizar este site, coletamos apenas dados essenciais para o funcionamento e otimização da experiência do usuário. Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais.

      2. USO DAS INFORMAÇÕES
      As informações fornecidas através do botão de WhatsApp são utilizadas estritamente para comunicação comercial direta entre o cliente e o desenvolvedor Jonnas Mendes.

      3. COOKIES E TECNOLOGIAS
      Utilizamos cookies para análise de tráfego e performance (Google Analytics). Você pode desativar os cookies nas configurações do seu navegador a qualquer momento.

      4. SEGURANÇA
      Adotamos práticas de segurança de ponta, incluindo criptografia SSL, para garantir que sua navegação seja segura e privada.

      5. ALTERAÇÕES
      Esta política pode ser atualizada a qualquer momento. O uso contínuo do site implica na aceitação das alterações.
    `
  },
  terms: {
    title: "Termos de Uso",
    content: `
      1. ACEITAÇÃO
      Ao acessar este site, você concorda com estes termos de serviço, todas as leis e regulamentos aplicáveis.

      2. PROPRIEDADE INTELECTUAL
      Todo o conteúdo, design, código e elementos visuais deste site são propriedade exclusiva de Jonnas Mendes. É proibida a cópia, reprodução ou engenharia reversa sem autorização expressa.

      3. SERVIÇOS
      A contratação de serviços de desenvolvimento web segue contrato específico a ser firmado entre as partes, contendo prazos, valores e escopo detalhado.

      4. LIMITAÇÃO DE RESPONSABILIDADE
      Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso ou impossibilidade de uso dos materiais neste site.

      5. LEI APLICÁVEL
      Estes termos são regidos e interpretados de acordo com as leis do Brasil. Você se submete irrevogavelmente à jurisdição exclusiva dos tribunais deste estado.
    `
  }
};