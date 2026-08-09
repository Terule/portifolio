export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const identity = {
  name: "Rafael Aguiar Gomes",
  alias: "Terule",
  email: "contato@terule.dev.br",
  githubUrl: "https://github.com/Terule",
  linkedinUrl: "https://www.linkedin.com/in/aguiar-fael",
  resumeUrl: "https://docs.google.com/document/d/1lzxfLMGmkVCb9QI1TIlBQCQSC4dzwEly/edit?usp=sharing&ouid=106132328318860409516&rtpof=true&sd=true",
} as const;

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: readonly string[];
  gradientClass: string;
};

type ExperienceRole = {
  title: string;
  period: string;
  location?: string;
  highlights?: readonly string[];
};

export type ExperienceGroup = {
  company: string;
  duration: string;
  roles: readonly ExperienceRole[];
};

export type PortfolioContent = {
  metadata: { title: string; description: string };
  navigation: readonly { label: string; href: string }[];
  hero: { availability: string; headline: readonly [string, string]; introduction: string; explore: string; photoLabel: string; contactLabel: string };
  approach: { eyebrow: string; headline: string; description: string; educationLabel: string; education: readonly string[]; skillsLabel: string; skills: readonly string[] };
  experience: { eyebrow: string; title: string; introduction: string; rolesLabel: string; present: string; entries: readonly ExperienceGroup[] };
  projects: { eyebrow: string; title: readonly [string, string]; caseStudy: string; entries: readonly Project[] };
  contact: { eyebrow: string; title: readonly [string, string]; action: string };
  footer: { github: string; linkedin: string; resume: string; email: string };
};

const sharedSkills = ["TypeScript", "Next.js", "React", "Node.js", "JavaScript", "Microsoft Intune", "Azure AD", "Office 365", "Networks", "Docker"] as const;

export const content: Record<Locale, PortfolioContent> = {
  en: {
    metadata: { title: "Rafael Aguiar Gomes — Full-Stack Developer", description: "Rafael Aguiar Gomes (Terule) bridges 10+ years of IT operations with modern full-stack development." },
    navigation: [{ label: "About", href: "#about" }, { label: "Experience", href: "#experience" }, { label: "Portfolio", href: "#portfolio" }, { label: "Contact", href: "#contact" }],
    hero: { availability: "OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES", headline: ["BUILD WITH", "CONTEXT."], introduction: "Rafael is a full-stack developer from Brazil. He brings a systems mindset shaped by more than a decade in IT operations, infrastructure, networks, and technical support.", explore: "EXPLORE THE PORTFOLIO", photoLabel: "PORTRAIT", contactLabel: "LET'S TALK" },
    approach: { eyebrow: "01 / ABOUT", headline: "Operational depth meets modern software craft.", description: "With 10+ years in IT operations, Rafael approaches software through reliability, security, and the people who depend on it. His Full-Stack specialization at Trybe adds React, Node.js, TypeScript, and product-minded delivery to that foundation.", educationLabel: "EDUCATION", education: ["Software Engineering — UniCesumar (2025–2029)", "Information Systems — Univale (2008–2011)", "Full-Stack Development — Trybe"], skillsLabel: "CORE TOOLKIT", skills: sharedSkills },
    experience: {
      eyebrow: "02 / EXPERIENCE", title: "A career built close to the systems that keep work moving.", introduction: "From frontline support to international IT operations, Rafael pairs practical infrastructure expertise with a growing full-stack practice.", rolesLabel: "ROLES", present: "PRESENT",
      entries: [
        { company: "Pogust Goodhead", duration: "2025 — Present", roles: [
          { title: "IT Analyst", period: "May 2026 — Present", location: "Governador Valadares, MG", highlights: ["Provides remote IT support for teams in London, Sydney, the United States, Minas Gerais, and Rio de Janeiro.", "Manages L1/L2 tickets for 300+ users and devices while maintaining a 95%+ service-level agreement.", "Administers Microsoft Intune and Azure AD access; proactively monitors network and IP-telephony availability."] },
          { title: "IT Assistant 2", period: "Jul 2025 — May 2026", location: "Governador Valadares, MG" },
        ] },
        { company: "PoGo Solutions", duration: "2023 — 2025", roles: [
          { title: "IT Assistant 2", period: "Aug 2024 — Jul 2025", location: "Governador Valadares, MG" },
          { title: "IT Assistant", period: "Jun 2023 — Aug 2024", location: "Governador Valadares, MG", highlights: ["Supported global offices and local teams across a 300+ user/device environment.", "Handled L1/L2 support, identity administration, and infrastructure monitoring."] },
        ] },
        { company: "IBI Telecom", duration: "2020 — 2022", roles: [
          { title: "Network Technician", period: "May 2021 — May 2022", location: "Governador Valadares, MG", highlights: ["Maintained corporate networks and resolved 500+ monthly Wi-Fi and fiber incidents.", "Delivered structured cabling, internal circuits, and CCTV configuration projects."] },
          { title: "Technical Support Operator", period: "Mar 2020 — May 2021", location: "Governador Valadares, MG", highlights: ["Provided customer support for Wi-Fi and internet networks."] },
        ] },
        { company: "Faculdade Pitágoras", duration: "2018 — 2020", roles: [{ title: "Administrative Assistant, IT", period: "Mar 2018 — Feb 2020", location: "Governador Valadares, MG", highlights: ["Administered three computer labs with 60+ machines and supported 50+ staff members and hundreds of students.", "Maintained the campus biometric registration system for safer access control."] }] },
        { company: "Directa Distribuidora LTDA", duration: "2014 — 2015", roles: [{ title: "Administrative Assistant", period: "Apr 2014 — Apr 2015", highlights: ["Managed invoices, purchase orders, and operational records."] }] },
        { company: "Vexin", duration: "2012 — 2014", roles: [{ title: "Systems Analyst", period: "Jun 2012 — Apr 2014", location: "Governador Valadares, MG", highlights: ["Maintained computers and networks, analyzed data, and produced management reports.", "Administered Asterisk servers, SIP trunks, extensions, and softphones."] }] },
        { company: "Prefeitura Municipal de Governador Valadares", duration: "2008 — 2009", roles: [{ title: "Intern", period: "Aug 2008 — Feb 2009", highlights: ["Supported fiscal recordkeeping, computer maintenance, and administrative documentation."] }] },
        { company: "Lojas Americanas S.A.", duration: "2007 — 2008", roles: [{ title: "Commercial Operator", period: "Jun 2007 — Feb 2008", location: "Governador Valadares, MG", highlights: ["Supported receiving, store organization, customer service, sales, and cashier operations."] }] },
      ],
    },
    projects: { eyebrow: "03 / PORTFOLIO", title: ["A few things", "worth exploring."], caseStudy: "VIEW CASE STUDY", entries: [
      { number: "01", name: "Digital systems", category: "Full-stack engineering", description: "Reliable interfaces and thoughtful architecture for products people return to.", technologies: ["Next.js", "TypeScript", "PostgreSQL"], gradientClass: "from-[#22c55e] via-[#14b8a6] to-[#38bdf8]" },
      { number: "02", name: "Creative tooling", category: "Product & platform", description: "Tools that reduce friction, make complex work legible, and feel genuinely good to use.", technologies: ["React", "Motion", "Three.js"], gradientClass: "from-[#b7a4ff] via-[#f2a0ff] to-[#ffbf69]" },
    ] },
    contact: { eyebrow: "04 / CONTACT", title: ["Have an idea", "worth shipping?"], action: "START A CONVERSATION" },
    footer: { github: "GITHUB", linkedin: "LINKEDIN", resume: "RÉSUMÉ", email: "EMAIL" },
  },
  pt: {
    metadata: { title: "Rafael Aguiar Gomes — Desenvolvedor Full-Stack", description: "Rafael Aguiar Gomes (Terule) conecta mais de 10 anos de operações de TI ao desenvolvimento full-stack moderno." },
    navigation: [{ label: "Sobre", href: "#about" }, { label: "Experiência", href: "#experience" }, { label: "Portfólio", href: "#portfolio" }, { label: "Contato", href: "#contact" }],
    hero: { availability: "ABERTO A OPORTUNIDADES EM DESENVOLVIMENTO DE SOFTWARE", headline: ["CONSTRUIR COM", "CONTEXTO."], introduction: "Rafael é um desenvolvedor full-stack do Brasil. Traz uma visão sistêmica construída em mais de uma década de operações de TI, infraestrutura, redes e suporte técnico.", explore: "EXPLORAR O PORTFÓLIO", photoLabel: "RETRATO", contactLabel: "VAMOS CONVERSAR" },
    approach: { eyebrow: "01 / SOBRE", headline: "Profundidade operacional encontra o desenvolvimento moderno.", description: "Com mais de 10 anos em operações de TI, Rafael enxerga software pela ótica da confiabilidade, segurança e das pessoas que dependem dele. Sua especialização Full-Stack pela Trybe agrega React, Node.js, TypeScript e uma entrega orientada a produto a essa base.", educationLabel: "FORMAÇÃO", education: ["Engenharia de Software — UniCesumar (2025–2029)", "Sistemas de Informação — Univale (2008–2011)", "Desenvolvimento Full-Stack — Trybe"], skillsLabel: "FERRAMENTAS PRINCIPAIS", skills: sharedSkills },
    experience: {
      eyebrow: "02 / EXPERIÊNCIA", title: "Uma carreira construída perto dos sistemas que fazem o trabalho acontecer.", introduction: "Do suporte na linha de frente às operações de TI internacionais, Rafael une experiência prática em infraestrutura a uma atuação full-stack em evolução.", rolesLabel: "CARGOS", present: "ATUALMENTE",
      entries: [
        { company: "Pogust Goodhead", duration: "2025 — Atualmente", roles: [
          { title: "Analista de TI", period: "mai. 2026 — Atualmente", location: "Governador Valadares, MG", highlights: ["Presta suporte remoto para equipes em Londres, Sydney, Estados Unidos, Minas Gerais e Rio de Janeiro.", "Gerencia tickets de N1/N2 para 300+ usuários e dispositivos, mantendo SLA superior a 95%.", "Administra acessos no Microsoft Intune e Azure AD; monitora proativamente redes e telefonia IP."] },
          { title: "Assistente de TI 2", period: "jul. 2025 — mai. 2026", location: "Governador Valadares, MG" },
        ] },
        { company: "PoGo Solutions", duration: "2023 — 2025", roles: [
          { title: "Assistente de TI 2", period: "ago. 2024 — jul. 2025", location: "Governador Valadares, MG" },
          { title: "Assistente de TI", period: "jun. 2023 — ago. 2024", location: "Governador Valadares, MG", highlights: ["Deu suporte a escritórios globais e equipes locais em um ambiente com 300+ usuários e dispositivos.", "Atuou em suporte N1/N2, administração de identidade e monitoramento de infraestrutura."] },
        ] },
        { company: "IBI Telecom", duration: "2020 — 2022", roles: [
          { title: "Técnico em Redes", period: "mai. 2021 — mai. 2022", location: "Governador Valadares, MG", highlights: ["Manteve redes corporativas e resolveu 500+ incidentes mensais de Wi-Fi e fibra óptica.", "Executou projetos de cabeamento estruturado, circuitos internos e configuração de CFTV."] },
          { title: "Operador de Suporte Técnico", period: "mar. 2020 — mai. 2021", location: "Governador Valadares, MG", highlights: ["Prestou atendimento e suporte para redes Wi-Fi e internet."] },
        ] },
        { company: "Faculdade Pitágoras", duration: "2018 — 2020", roles: [{ title: "Auxiliar Administrativo (TI)", period: "mar. 2018 — fev. 2020", location: "Governador Valadares, MG", highlights: ["Administrou três laboratórios de informática com mais de 60 máquinas e deu suporte a 50+ colaboradores e centenas de alunos.", "Manteve o sistema de cadastro biométrico do campus para ampliar o controle de acesso."] }] },
        { company: "Directa Distribuidora LTDA", duration: "2014 — 2015", roles: [{ title: "Auxiliar Administrativo", period: "abr. 2014 — abr. 2015", highlights: ["Gerenciou notas fiscais, pedidos e registros operacionais."] }] },
        { company: "Vexin", duration: "2012 — 2014", roles: [{ title: "Analista de Sistemas", period: "jun. 2012 — abr. 2014", location: "Governador Valadares, MG", highlights: ["Manteve computadores e redes, analisou dados e produziu relatórios gerenciais.", "Administrou servidores Asterisk, troncos SIP, ramais e softphones."] }] },
        { company: "Prefeitura Municipal de Governador Valadares", duration: "2008 — 2009", roles: [{ title: "Estagiário", period: "ago. 2008 — fev. 2009", highlights: ["Apoiou escrituração fiscal, manutenção de computadores e documentação administrativa."] }] },
        { company: "Lojas Americanas S.A.", duration: "2007 — 2008", roles: [{ title: "Operador Comercial", period: "jun. 2007 — fev. 2008", location: "Governador Valadares, MG", highlights: ["Atuou no recebimento, organização de loja, atendimento, vendas e operação de caixa."] }] },
      ],
    },
    projects: { eyebrow: "03 / PORTFÓLIO", title: ["Algumas coisas", "que vale explorar."], caseStudy: "VER CASE STUDY", entries: [
      { number: "01", name: "Sistemas digitais", category: "Engenharia full-stack", description: "Interfaces confiáveis e arquitetura criteriosa para produtos que as pessoas querem usar novamente.", technologies: ["Next.js", "TypeScript", "PostgreSQL"], gradientClass: "from-[#22c55e] via-[#14b8a6] to-[#38bdf8]" },
      { number: "02", name: "Ferramentas criativas", category: "Produto e plataforma", description: "Ferramentas que reduzem atrito, tornam o trabalho complexo mais claro e são genuinamente agradáveis de usar.", technologies: ["React", "Motion", "Three.js"], gradientClass: "from-[#b7a4ff] via-[#f2a0ff] to-[#ffbf69]" },
    ] },
    contact: { eyebrow: "04 / CONTATO", title: ["Tem uma ideia", "que vale lançar?"], action: "INICIAR UMA CONVERSA" },
    footer: { github: "GITHUB", linkedin: "LINKEDIN", resume: "CURRÍCULO", email: "E-MAIL" },
  },
};
