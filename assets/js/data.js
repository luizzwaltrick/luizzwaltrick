/*
 * Conteúdo do portfólio.
 * Edite somente este arquivo para atualizar textos, BIs, serviços e experiência.
 */
window.PORTFOLIO = {
  profile: {
    name: "Aldory Waltrick",
    role: "Dados, BI & Engenharia",
    headline: "Construo o caminho completo do dado — da ingestão à visualização final — com pipelines em Python e Airflow e dashboards Power BI que viram decisão.",
    location: "Itajaí, SC · presencial, híbrido ou remoto",
    email: "", // opcional: e-mail profissional de contato
    linkedin: "https://www.linkedin.com/in/luizzwaltrick/",
    github: "https://github.com/luizzwaltrick",
    codewars: "https://www.codewars.com/users/LuizzWaltrick",
    cv: "", // ex.: "assets/cv-aldory-waltrick.pdf"
    about: [
      "Atuo na construção de pipelines de dados e na transformação de informações brutas em soluções estratégicas para o negócio, do processo de ingestão até a visualização final.",
      "Já desenvolvi e orquestrei pipelines que processaram mais de 360 mil registros e liderei a automação de fluxos operacionais que geraram uma economia estimada de 400 horas mensais. Hoje sou o único analista de dados da empresa, cuidando de análise, engenharia e governança de dados.",
      "Além de dados, tenho bagagem em DevOps e desenvolvimento: esteiras de CI/CD, infraestrutura em nuvem, automações, crawlers e soluções de IA generativa com busca vetorial (RAG)."
    ],
    stats: [
      { value: "360k+", label: "registros em pipelines" },
      { value: "400h/mês", label: "economizadas com automação" },
      { value: "−99%", label: "no deploy: 30 min → 20 s" }
    ]
  },

  services: [
    {
      icon: "chart",
      title: "Dashboards & BI",
      text: "Painéis em Power BI com tema visual próprio, do levantamento de requisitos à modelagem e arquitetura. Também Tableau e Metabase.",
      tags: ["Power BI", "DAX", "Tableau", "Metabase"]
    },
    {
      icon: "db",
      title: "Engenharia de Dados",
      text: "Pipelines de ETL/ELT orquestrados, da extração em APIs, bancos e web até a carga em modelos prontos para análise.",
      tags: ["Python", "Airflow", "dbt", "Polars", "Spark"]
    },
    {
      icon: "check",
      title: "SQL & Qualidade de Dados",
      text: "Queries complexas de consolidação (como um DRE unificado), rotinas de diagnóstico e validação para os números baterem entre as bases.",
      tags: ["SQL Server", "PostgreSQL", "Governança"]
    },
    {
      icon: "spark",
      title: "IA Generativa & RAG",
      text: "Chatbots com busca vetorial sobre documentos internos e soluções com LLM para agilizar consultas das áreas de negócio.",
      tags: ["RAG", "LLM", "ChromaDB", "Vector Search"]
    },
    {
      icon: "server",
      title: "DevOps & Cloud",
      text: "Esteiras de CI/CD, infraestrutura em nuvem e ambientes padronizados com containers para que tudo rode sozinho.",
      tags: ["GitHub Actions", "Docker", "Azure", "AWS"]
    },
    {
      icon: "code",
      title: "Desenvolvimento & Sites",
      text: "Sistemas, APIs, integrações entre sistemas legados, crawlers e sites — com Python, React e o que o projeto pedir.",
      tags: ["Python", "React", "APIs REST", "Web Scraping"]
    }
  ],

  /*
   * BIs em destaque.
   * - image: caminho de um print do dashboard (ex.: "assets/img/dre.png").
   *          Se vazio, é exibida uma prévia ilustrativa gerada a partir de "preview".
   * - link:  link público (Publish to web / vídeo / case). Opcional.
   */
  dashboards: [
    {
      title: "DRE Unificado",
      category: "Financeiro",
      description: "Demonstrativo de resultado consolidado de toda a empresa a partir de queries complexas em SQL Server, com validação das bases antes da entrega.",
      highlights: ["Consolidação de múltiplas fontes em SQL", "Rotinas de diagnóstico de inconsistências", "Visão mensal, acumulada e por centro de custo"],
      tools: ["Power BI", "SQL Server", "DAX"],
      image: "",
      link: "",
      preview: {
        accent: "#34d399",
        kpis: [["Receita líq.", "R$ 4,1M"], ["EBITDA", "18,6%"], ["Lucro", "R$ 512k"]],
        bars: [60, 58, 64, 70, 68, 75, 72, 79, 84, 81, 88, 94]
      }
    },
    {
      title: "Torre de Controle",
      category: "Logística",
      description: "Visão central da operação logística: embarques, prazos e SLA com semáforos, tendência diária e drill-down, usando visuais personalizados.",
      highlights: ["Visuais personalizados (pbiviz/TypeScript)", "Cross-filter entre todos os componentes", "Exportação CSV direto do painel"],
      tools: ["Power BI", "pbiviz", "Python", "SQL"],
      image: "",
      link: "",
      preview: {
        accent: "#38bdf8",
        kpis: [["OTIF", "96,4%"], ["Embarques", "1,2k"], ["SLA", "98,1%"]],
        bars: [42, 55, 48, 61, 70, 66, 74, 80, 77, 85, 90, 88]
      }
    },
    {
      title: "Comercial & RH",
      category: "Comercial",
      description: "Painéis das áreas Comercial e de RH com metas, evolução e indicadores por time, todos seguindo o mesmo tema visual para padronizar a experiência.",
      highlights: ["Levantamento de requisitos com as áreas", "Modelo de dados em esquema estrela", "Tema visual próprio da empresa"],
      tools: ["Power BI", "SQL Server", "Python"],
      image: "",
      link: "",
      preview: {
        accent: "#fbbf24",
        kpis: [["Faturamento", "R$ 2,4M"], ["Meta", "92%"], ["Headcount", "148"]],
        bars: [30, 46, 38, 52, 49, 63, 58, 71, 69, 64, 78, 83]
      }
    },
    {
      title: "Mídia Paga",
      category: "Marketing",
      description: "Performance de campanhas por canal com ROAS, CPA, CTR e pacing de verba, com limiares de cor que mostram na hora o que precisa de atenção.",
      highlights: ["Pacing de investimento vs. planejado", "Comparativo entre canais", "Alertas visuais por limiar"],
      tools: ["Power BI", "pbiviz", "DAX"],
      image: "",
      link: "",
      preview: {
        accent: "#a78bfa",
        kpis: [["ROAS", "4,7x"], ["CPA", "R$ 38"], ["CTR", "2,9%"]],
        bars: [36, 44, 41, 55, 52, 60, 66, 63, 72, 70, 79, 86]
      }
    }
  ],

  /* Outros projetos (dados, DevOps, IA, sites). */
  projects: [
    {
      title: "Pipelines de dados críticos",
      text: "Desenvolvimento e manutenção de pipelines orquestrados em Airflow processando mais de 360 mil registros, com carga em PostgreSQL.",
      tags: ["Python", "Airflow", "PostgreSQL", "Docker"],
      link: ""
    },
    {
      title: "CI/CD em 60+ repositórios",
      text: "Reestruturação das esteiras com GitHub Actions: deploy caiu de 30 minutos para 20 segundos (−99%), com alta disponibilidade.",
      tags: ["GitHub Actions", "CI/CD", "Docker"],
      link: ""
    },
    {
      title: "Chatbots com RAG",
      text: "Assistentes com busca vetorial sobre documentos internos para os departamentos de RH e Qualidade.",
      tags: ["RAG", "LLM", "ChromaDB", "Python"],
      link: ""
    },
    {
      title: "Crawlers de mercado",
      text: "Rotinas de extração de dados de mercado para o time de Procurement, alimentando análises de preço e fornecedores.",
      tags: ["Web Scraping", "Python", "Pandas"],
      link: ""
    },
    {
      title: "Infraestrutura em Azure",
      text: "Governança da infraestrutura em nuvem e dos ambientes do time, padronizados com Docker, e automação contínua de processos.",
      tags: ["Azure", "Docker", "Linux"],
      link: ""
    },
    {
      title: "Este portfólio",
      text: "Site estático, sem build, hospedado no GitHub Pages. Todo o conteúdo vem de um único arquivo de dados.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/luizzwaltrick/luizzwaltrick"
    }
  ],

  /* Experiência — cada empresa pode ter um ou mais cargos. */
  experience: [
    {
      company: "ALS Logística",
      meta: "Temporário · Itajaí, SC",
      roles: [
        {
          role: "Analista de Dados Pleno",
          period: "jun. 2026 – atual",
          text: "Ciclo completo de BI: modelagem e extração em SQL Server, tratamento e automação em Python e entrega de dashboards em Power BI.",
          bullets: [
            "Dashboards ativos nas áreas Financeira, Comercial, RH e Logística, do levantamento de requisitos à arquitetura.",
            "Rotinas de diagnóstico em SQL para corrigir inconsistências entre bases antes da entrega.",
            "Queries complexas de consolidação, como o DRE unificado da empresa.",
            "Tema visual próprio para padronizar identidade e usabilidade dos dashboards.",
            "Único analista de dados da empresa: análise, engenharia e governança de dados."
          ],
          tags: ["Power BI", "SQL Server", "Python"]
        }
      ]
    },
    {
      company: "ES Logistics",
      meta: "1 ano e 9 meses · Itajaí, SC",
      roles: [
        {
          role: "Desenvolvedor de Software",
          period: "abr. 2026 – jun. 2026",
          text: "Referência técnica em DevOps: governança da infraestrutura em nuvem, automação de deploys e sistemas para logística de importação e exportação marítima.",
          bullets: [
            "Deploy de 30 min para 20 s (−99%) em 60+ repositórios com GitHub Actions.",
            "Mais de 400 horas operacionais economizadas com automação de processos e servidores.",
            "Administração da infraestrutura em Azure e ambientes do time padronizados com Docker."
          ],
          tags: ["GitHub Actions", "Azure", "Docker", "Python", "React"]
        },
        {
          role: "Analista de Dados",
          period: "ago. 2025 – abr. 2026",
          text: "Engenharia e orquestração de dados com Python, Airflow, PostgreSQL, Docker, CI/CD, APIs REST, web scraping e IA generativa.",
          bullets: [
            "Pipelines de dados críticos processando mais de 360 mil registros.",
            "Automação de processos operacionais com economia estimada de 300 horas mensais.",
            "Soluções de IA generativa (RAG, LLM, banco vetorial) para consultas internas."
          ],
          tags: ["Airflow", "PostgreSQL", "RAG", "CI/CD"]
        },
        {
          role: "Estagiário em Análise de Dados",
          period: "mar. 2025 – ago. 2025",
          text: "Desenvolvimento e integração de sistemas com Python, SQL, APIs REST, ChromaDB e automação.",
          bullets: [
            "Liderança técnica em integração de dados logísticos e APIs entre sistemas legados.",
            "Chatbots com busca vetorial (RAG) para RH e Qualidade.",
            "Crawlers e extração de dados de mercado para o time de Procurement."
          ],
          tags: ["Python", "SQL", "ChromaDB", "Web Crawling"]
        },
        {
          role: "Comercial Interno",
          period: "out. 2024 – abr. 2025",
          text: "Gerenciamento e análise de dados de sinistros de seguros, garantindo precisão, conformidade e resolução no prazo, com comunicação em inglês com parceiros externos.",
          bullets: [],
          tags: ["Análise de dados", "Inglês"]
        }
      ]
    },
    {
      company: "Estácio",
      meta: "Formação acadêmica",
      roles: [
        {
          role: "Graduação",
          period: "",
          text: "Formação em tecnologia, somada a estudo contínuo e prática em desafios no Codewars.",
          bullets: [],
          tags: []
        }
      ]
    }
  ],

  stack: {
    "Dados & BI": ["Power BI", "DAX", "Tableau", "Metabase", "Pandas", "Polars"],
    "Engenharia": ["Python", "Apache Airflow", "dbt", "Spark", "ETL", "Web Scraping"],
    "Bancos & IA": ["SQL Server", "PostgreSQL", "ChromaDB", "RAG", "LLM"],
    "DevOps & Dev": ["Docker", "Git", "GitHub Actions", "Azure", "AWS", "React"]
  }
};
