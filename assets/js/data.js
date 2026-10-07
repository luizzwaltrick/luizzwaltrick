/*
 * Conteúdo do portfólio.
 * Edite somente este arquivo para atualizar textos, BIs, serviços e experiência.
 * Campos marcados com "TODO" são placeholders — substitua pelos dados reais do LinkedIn.
 */
window.PORTFOLIO = {
  profile: {
    name: "Luiz Waltrick",
    role: "Engenheiro de Dados & Desenvolvedor",
    headline: "Transformo dados brutos em decisões — de pipelines em Python a dashboards Power BI que a diretoria realmente usa.",
    location: "Brasil · Remoto",
    email: "", // TODO: e-mail profissional de contato (opcional)
    linkedin: "https://www.linkedin.com/in/luizzwaltrick/",
    github: "https://github.com/luizzwaltrick",
    codewars: "https://www.codewars.com/users/LuizzWaltrick",
    cv: "", // ex.: "assets/cv-luiz-waltrick.pdf"
    about: [
      "Sou engenheiro de dados com base forte em desenvolvimento. Meu dia a dia é construir o caminho completo do dado: extrair de APIs e bancos, transformar e validar em Python, modelar no Power BI e entregar painéis claros, rápidos e confiáveis.",
      "Além de dados, atuo com DevOps (Docker, Linux, CI/CD), desenvolvimento backend com Django e criação de sites. Gosto de resolver o problema inteiro — não só a parte do gráfico."
    ],
    stats: [
      { value: "Python", label: "linguagem principal" },
      { value: "Power BI", label: "dashboards & pbiviz" },
      { value: "End-to-end", label: "da fonte ao painel" }
    ]
  },

  services: [
    {
      icon: "chart",
      title: "Dashboards Power BI",
      text: "Painéis executivos e operacionais com visuais personalizados (pbiviz/TypeScript), tema próprio, tooltips ricos, cross-filter e exportação.",
      tags: ["Power BI", "DAX", "pbiviz", "PBIP"]
    },
    {
      icon: "db",
      title: "Engenharia & Modelagem de Dados",
      text: "Pipelines de ETL/ELT, modelagem estrela, tabelas calendário, medidas de negócio (LTV, churn, RFM) e otimização de modelos.",
      tags: ["Python", "Pandas", "SQL", "PostgreSQL"]
    },
    {
      icon: "check",
      title: "Validação & Qualidade de Dados",
      text: "Regras de consistência, reconciliação entre fontes e alertas para que os números do painel batam com o financeiro.",
      tags: ["Data Quality", "Testes", "Automação"]
    },
    {
      icon: "code",
      title: "Desenvolvimento Backend",
      text: "APIs, integrações e automações em Python/Django e Java, com mensageria (RabbitMQ) quando o volume pede.",
      tags: ["Django", "Java", "RabbitMQ", "REST"]
    },
    {
      icon: "server",
      title: "DevOps & Infraestrutura",
      text: "Containerização, deploy, servidores Linux e rotinas agendadas para que os pipelines rodem sozinhos.",
      tags: ["Docker", "Linux", "CI/CD", "Git"]
    },
    {
      icon: "globe",
      title: "Sites & Landing Pages",
      text: "Sites institucionais e landing pages rápidas, responsivas e fáceis de manter.",
      tags: ["HTML/CSS", "JavaScript", "SEO"]
    }
  ],

  /*
   * BIs em destaque.
   * - image: caminho de um print do dashboard (ex.: "assets/img/torre-controle.png").
   *          Se vazio, é exibida uma prévia ilustrativa gerada a partir de "preview".
   * - link:  link público (Publish to web / vídeo / case). Opcional.
   */
  dashboards: [
    {
      title: "Torre de Controle",
      category: "Operações",
      description: "Visão central da operação em tempo quase real: KPIs com metas, semáforos, tendência diária e drill-down por unidade, com visuais pbiviz sob medida.",
      highlights: ["Visuais personalizados em TypeScript", "Cross-filter entre todos os componentes", "Exportação CSV direto do painel"],
      tools: ["Power BI", "pbiviz", "DAX", "Python"],
      image: "",
      link: "",
      preview: {
        accent: "#38bdf8",
        kpis: [["OTIF", "96,4%"], ["Pedidos", "12,8k"], ["SLA", "98,1%"]],
        bars: [42, 55, 48, 61, 70, 66, 74, 80, 77, 85, 90, 88]
      }
    },
    {
      title: "Mídia Paga",
      category: "Marketing",
      description: "Performance de campanhas por canal com ROAS, CPA, CTR e pacing de verba, com limiares de cor que mostram na hora o que precisa de atenção.",
      highlights: ["Pacing de investimento vs. planejado", "Comparativo entre canais", "Alertas visuais por limiar"],
      tools: ["Power BI", "DAX", "APIs de Ads", "Python"],
      image: "",
      link: "",
      preview: {
        accent: "#a78bfa",
        kpis: [["ROAS", "4,7x"], ["CPA", "R$ 38"], ["CTR", "2,9%"]],
        bars: [30, 46, 38, 52, 49, 63, 58, 71, 69, 64, 78, 83]
      }
    },
    {
      title: "Comercial & Clientes",
      category: "Vendas",
      description: "Receita, ticket médio, LTV, churn e segmentação RFM em um modelo estrela otimizado, com tabela calendário e RLS por time.",
      highlights: ["Segmentação RFM", "LTV e churn por coorte", "Row-Level Security"],
      tools: ["Power BI", "SQL", "Modelagem estrela"],
      image: "",
      link: "",
      preview: {
        accent: "#34d399",
        kpis: [["Receita", "R$ 2,4M"], ["LTV", "R$ 1,9k"], ["Churn", "3,2%"]],
        bars: [60, 58, 64, 70, 68, 75, 72, 79, 84, 81, 88, 94]
      }
    }
  ],

  /* Outros projetos (dev, DevOps, sites). */
  projects: [
    {
      title: "Pipeline de dados automatizado",
      text: "Extração de múltiplas fontes, transformação e validação em Python, carga em PostgreSQL e atualização agendada dos datasets do Power BI.",
      tags: ["Python", "Pandas", "PostgreSQL", "Docker"],
      link: ""
    },
    {
      title: "API & integrações em Django",
      text: "Backend com Django para integrar sistemas internos, com filas no RabbitMQ para processamento assíncrono.",
      tags: ["Django", "RabbitMQ", "REST"],
      link: ""
    },
    {
      title: "Infra em containers",
      text: "Padronização de ambientes com Docker e deploy em servidores Linux, reduzindo o tempo de subir um novo serviço.",
      tags: ["Docker", "Linux", "CI/CD"],
      link: ""
    },
    {
      title: "Este portfólio",
      text: "Site estático, sem build, hospedado no GitHub Pages. Todo o conteúdo vem de um único arquivo de dados.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/luizzwaltrick/luizzwaltrick"
    }
  ],

  /* Experiência — TODO: substituir pelos cargos reais do LinkedIn. */
  experience: [
    {
      role: "Engenheiro de Dados",
      company: "TODO: Empresa atual",
      period: "TODO: início – atual",
      text: "Construção de pipelines em Python, modelagem semântica e desenvolvimento de dashboards Power BI com visuais personalizados para as áreas de operações e marketing.",
      tags: ["Python", "Power BI", "SQL"]
    },
    {
      role: "Desenvolvedor de Software",
      company: "TODO: Empresa anterior",
      period: "TODO: início – fim",
      text: "Desenvolvimento backend com Python/Django e Java, integrações via APIs e mensageria, e rotinas de deploy com Docker.",
      tags: ["Django", "Java", "Docker", "RabbitMQ"]
    },
    {
      role: "Formação",
      company: "TODO: Instituição / curso",
      period: "TODO: período",
      text: "Estudante de tecnologia, sempre aprendendo — inclusive resolvendo desafios no Codewars.",
      tags: ["Estudos contínuos"]
    }
  ],

  stack: {
    "Dados & BI": ["Power BI", "DAX", "Power Query", "pbiviz", "Pandas", "NumPy", "SQL"],
    "Desenvolvimento": ["Python", "Django", "Java", "TypeScript", "JavaScript"],
    "Infra & DevOps": ["Docker", "Linux", "Git", "CI/CD", "RabbitMQ"],
    "Bancos": ["PostgreSQL", "SQL Server", "MySQL"]
  }
};
