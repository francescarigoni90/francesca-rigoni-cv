import dhLogo from "../images/companies/dunnhumby.png";
import iwocaLogo from "../images/companies/iwoca.png";
import sizmekLogo from "../images/companies/sizmek.png";
import rfLogo from "../images/companies/rocketfuel.png";
import gfkLogo from "../images/companies/gfk.png";
import uniboLogo from "../images/education/unibo.png";
import imperialLogo from "../images/education/imperial.png";
import glasgowLogo from "../images/education/glasgow.png";
import dunnhumbyLogo from "../images/certifications/dunnhumby.png";
import mitLogo from "../images/certifications/mit.png";
import udemyLogo from "../images/certifications/udemy.png";

const PortfolioData = {
  UK: {
    skillsTitle: "Skills & Tech Stack",
    skillsGroups: [
      {
        category: "Programming & Big Data",
        icon: "fa-code",
        items: [
          { name: "Python (NumPy, Pandas, scikit-learn, Matplotlib, Seaborn)", level: "Advanced", pct: 95 },
          { name: "PySpark", level: "Advanced", pct: 95 },
          { name: "SQL (Hive, MySQL, Oracle)", level: "Advanced", pct: 92 },
          { name: "R", level: "Limited", pct: 45 },
        ],
      },
      {
        category: "Cloud, Platforms & BI",
        icon: "fa-cloud",
        items: [
          { name: "Microsoft Azure / Hadoop (HDFS, NFS)", level: "Advanced", pct: 88 },
          { name: "Google Cloud Platform (GCP)", level: "Good", pct: 75 },
          { name: "Tableau", level: "Good", pct: 80 },
          { name: "Excel & PowerPoint", level: "Advanced", pct: 92 },
        ],
      },
      {
        category: "Data Science & Analytics",
        icon: "fa-line-chart",
        tags: [
          "Credit Risk Modelling",
          "Propensity & Lookalike Modelling",
          "Cosine Similarity Matching",
          "Customer Segmentation",
          "A/B Testing & Control Optimisation",
          "Uplift & VTS Measurement",
          "Multi-Touch Attribution",
          "Forecasting",
        ],
      },
      {
        category: "Data Governance & Leadership",
        icon: "fa-shield",
        tags: [
          "GDPR & PII Compliance",
          "Data Quality & Validation",
          "DGB & Legal Liaison",
          "Automated Retention Pipelines",
          "Client Consulting",
          "Workshop Facilitation (30+ clients)",
          "Lead Python & PySpark Trainer",
          "Git / GitLab & YAML Automation",
        ],
      },
    ],

    experienceTitle: "Work Experience",
    experience: [
      {
        company: "dunnhumby",
        companyInfo:
          "Global leader in customer data science empowering retailers, FMCG brands, and financial services (Tesco, Tesco Bank, Barclays, SMU) with data-driven insights.",
        logo: dhLogo,
        role: "Senior Applied Data Scientist",
        period: "Nov 2018 – Present",
        location: "London (UK) & Milan (IT)",
        award: "Rated 'Excelling' (2019–2022, Mid-Year 2025)",
        highlights: [
          "Tesco Bank (2021–Present): Led Microsoft Azure NFS/HDFS folder architecture and refactored ~35 Python, YAML, and Bash scripts to restore Giftcard reporting on the new DSP platform.",
          "Home Insurance CAYC: Executed GDPR/PII remediation and validated moved-house triggers on Clubcard data (70% overlap), expanding monthly addressable reach 4x to ~200k customers.",
          "Life Insurance & RGA: Partnered with Tesco IMS and reinsurer RGA combining postcode mortality rates with grocery lifestyle flags to build 5 tiered scoring audiences.",
          "Travel Money & ATM VTS: Built cosine-similarity lookalike matching across the Clubcard base over 3- and 6-month windows, proving incremental in-store spend.",
          "The Hub — SMU/Unicard Chile (2019–2021): Built grocery-enhanced credit risk & loan propensity models (+11% pre-approved base / ~140k/mo, +18% spend, 47–50% SMS savings, 25% promo budget savings).",
          "Tesco Media (2018–2019): Diagnosed £400M+ Trade Drivers performance with automated monthly dashboards and reduced A/B control groups from 10% to 5% (+50k exposed users, +£150k uplift).",
          "Leadership & Governance: Lead Python & PySpark Trainer, PySpark Toolkit Champion, GCUPS co-developer, GDPR/DGB liaison, and mentor to junior data scientists.",
        ],
      },
      {
        company: "iwoca",
        companyInfo:
          "Leading European FinTech providing fast, flexible working-capital loans to small and medium-sized businesses.",
        logo: iwocaLogo,
        role: "Growth Marketing Analyst",
        period: "May 2018 – Nov 2018",
        location: "London (UK)",
        highlights: [
          "Built daily Python scripts connecting marketing email engagement to the sales dialler API to automatically reactivate/deactivate SME leads.",
          "Automated SQL-to-email-API data transfers in Python for monthly campaigns, eliminating repetitive manual uploads.",
          "Managed daily marketing database integrity, defined conflict-resolution rules for SME records, and enforced strict customer data access controls.",
        ],
      },
      {
        company: "Sizmek (formerly Rocket Fuel)",
        companyInfo:
          "Global ad-tech platform (later acquired by Amazon and Zeta) that integrated Rocket Fuel's AI-driven demand-side platform.",
        logo: sizmekLogo,
        role: "Senior Data & Strategy Analyst",
        period: "Nov 2017 – May 2018",
        location: "London (UK)",
        highlights: [
          "Developed growth advertising strategies for Rocket Fuel/Sizmek's primary EMEA client, driving a €6M+ contract renewal.",
          "Spearheaded multi-touch attribution analysis shaping the strategy for the top Italian client (€2M+).",
          "Delivered cross-channel performance forecasting, user-journey analysis, and A/B testing across UK, Spain, and Italy.",
        ],
      },
      {
        company: "Rocket Fuel Inc.",
        companyInfo:
          "Predictive marketing and programmatic advertising company leveraging AI and big data for real-time bidding.",
        logo: rfLogo,
        role: "Data & Strategy Analyst · Associate Analyst",
        period: "Jul 2015 – Oct 2017",
        location: "London (UK)",
        award: "Fast-track promotions (<18m & 12m)",
        highlights: [
          "Designed and deployed a SQL-powered Tableau dashboard providing country- and account-level EMEA visibility for senior leadership.",
          "Partnered with the US engineering team on statistical analyses that improved the Cross-Device attribution algorithm into a flagship product.",
        ],
      },
      {
        company: "GfK Boutique Research",
        companyInfo:
          "Global market research and consumer intelligence firm delivering data-driven forecasts and retail insights.",
        logo: gfkLogo,
        role: "Research Associate (promoted from Intern in <2m)",
        period: "Feb 2015 – Jul 2015",
        location: "Woking (UK)",
        highlights: [
          "Improved accuracy of PC market forecasts for client decision-making and contributed to US market research for Best Buy.",
          "Served as Scrum Master for the PC & Mobile team, streamlining workflows and sprint delivery.",
        ],
      },
    ],

    projectsTitle: "Key Projects",
    projects: [
      {
        title: "Microsoft Azure Cloud Migration",
        context: "dunnhumby · Tesco Bank",
        challenge:
          "Transition legacy Hadoop (BDA) data pipelines and reporting workflows to Microsoft Azure / DSP without disrupting critical business reporting.",
        solution:
          "Designed the new NFS/HDFS folder hierarchy, built the central team migration repository, and refactored ~35 Python scripts, YAML configs, and Bash runners to restore Giftcard reporting.",
        impact: "Seamless cloud transition with standardised, reusable team architecture.",
        tech: ["Microsoft Azure", "PySpark", "Python", "YAML", "Bash", "Git"],
      },
      {
        title: "Home Insurance CAYC Trigger & Governance",
        context: "dunnhumby · Tesco Bank",
        challenge:
          "Identify Tesco Clubcard customers due to renew home insurance while resolving ingestion spikes and unapproved PII data.",
        solution:
          "Executed GDPR/PII remediation and re-ingestion, cleansed anomalous feeds, and validated moved-house trigger logic against Clubcard data (70% overlap).",
        impact: "Expanded monthly addressable audience 4x to ~200,000 customers.",
        tech: ["PySpark", "SQL", "GDPR / DGB", "Data Cleansing"],
      },
      {
        title: "Life Insurance Propensity & Mortality Scoring",
        context: "dunnhumby · Tesco IMS & Reinsurer RGA",
        challenge:
          "Identify the healthiest, highest-propensity customers across lifestage and lifestyle dimensions aligned with reinsurer criteria.",
        solution:
          "Combined RGA postcode-level mortality rates with grocery-derived nutrition/health indicators to engineer 5 tiered audience scores (Core to Loyalty).",
        impact: "Approved by Tesco IMS and RGA; deployed as a monthly BAU & till-receipt campaign.",
        tech: ["Python", "PySpark", "Feature Engineering", "Stakeholder Consulting"],
      },
      {
        title: "Credit Risk & Loan Propensity (SMU Chile)",
        context: "dunnhumby · The Hub",
        challenge:
          "Grow a Chilean retailer's pre-approved credit card base and optimise costly call-centre/SMS loan outreach.",
        solution:
          "Automated a grocery-enhanced credit risk scorecard, built a loan propensity model, and evaluated supermarket promotion ROI.",
        impact: "+11% pre-approved base (~140k/mo), +18% spend, 47–50% SMS savings (~$47k–$65k), and 25% promo savings (~131M CLP).",
        tech: ["Python", "PySpark", "Credit Risk", "Scorecards", "GCP"],
      },
      {
        title: "Travel Money & ATM Value-to-Store (VTS)",
        context: "dunnhumby · Tesco Bank",
        challenge:
          "Prove whether Travel Money and ATM users generate incremental in-store grocery spend.",
        solution:
          "Applied cosine-similarity lookalike matching across the entire Clubcard base across 3- and 6-month post-periods.",
        impact: "Demonstrated clear in-store uplift and pre-trip travel-category buying behaviour.",
        tech: ["PySpark", "Cosine Similarity", "Uplift Modelling", "Lookalike Matching"],
      },
      {
        title: "Test & Control Size Optimisation",
        context: "dunnhumby · Tesco Media",
        challenge:
          "Standard 10% control groups limited exposed campaign reach and media revenue.",
        solution:
          "Tested reducing control pools from 10% to 5% and built a 1-to-1 control-matching methodology validated on Statement & JCD campaigns.",
        impact: "Added 50,000 exposed users (+£150k incremental uplift per £3M campaign).",
        tech: ["Python", "SQL", "A/B Testing", "Statistical Power"],
      },
    ],

    educationTitle: "Education",
    education: [
      {
        degree: "Master's Degree in Mathematical Statistics and Probability",
        institution: "Alma Mater Studiorum – Università di Bologna",
        location: "Bologna, Italy",
        period: "2012 – 2014",
        grade: "110/110 cum laude",
        logo: uniboLogo,
      },
      {
        degree: "Visiting Researcher, Finance Department",
        institution: "Imperial College Business School",
        location: "London, United Kingdom",
        period: "Feb 2014 – Jun 2014",
        grade: "Research Exchange",
        logo: imperialLogo,
      },
      {
        degree: "Bachelor's Degree in Mathematical Statistics and Probability (Joint Degree)",
        institution: "University of Glasgow",
        location: "Glasgow, United Kingdom",
        period: "2011 – 2012",
        grade: "First Class Honours",
        logo: glasgowLogo,
      },
      {
        degree: "Bachelor's Degree in Mathematical Statistics and Probability",
        institution: "Alma Mater Studiorum – Università di Bologna",
        location: "Bologna, Italy",
        period: "2009 – 2012",
        grade: "110/110 cum laude",
        logo: uniboLogo,
      },
    ],

    certificationsTitle: "Certifications & Courses",
    certifications: [
      {
        title: "6.00.1x: Introduction to Computer Science and Programming Using Python",
        issuer: "Massachusetts Institute of Technology (MIT)",
        date: "Aug 2021",
        note: "Completed 9-week intensive course with highest score.",
        logo: mitLogo,
      },
      {
        title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
        issuer: "Udemy",
        date: "Jun 2019",
        note: "41-hour applied machine learning curriculum.",
        logo: udemyLogo,
      },
      {
        title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
        issuer: "Udemy",
        date: "Jun 2019",
        note: "24-hour end-to-end Python engineering course.",
        logo: udemyLogo,
      },
      {
        title: "Credit Risk Modelling, Building Scorecards & GDPR Data Governance",
        issuer: "dunnhumby Internal Academy",
        date: "2019 – 2024",
        note: "Specialist training + Lead Internal Trainer for Python & PySpark.",
        logo: dunnhumbyLogo,
      },
    ],

    languagesTitle: "Languages",
    languages: [
      { name: "Italian", level: "Native", pct: 100 },
      { name: "English", level: "Fluent / C1–C2 (10+ yrs UK & international work)", pct: 95 },
    ],
    citizenshipNote: "Dual Citizenship: Italian & British (IT & UK)",

    interestsTitle: "Interests",
    interests: [
      { icon: "fa-cutlery", label: "Cooking Pizza & Parmigiana" },
      { icon: "fa-book", label: "19th-Century English Novels & Italian Post-War Literature" },
      { icon: "fa-compass", label: "Hiking" },
    ],
  },

  IT: {
    skillsTitle: "Competenze & Stack Tecnologico",
    skillsGroups: [
      {
        category: "Programmazione & Big Data",
        icon: "fa-code",
        items: [
          { name: "Python (NumPy, Pandas, scikit-learn, Matplotlib, Seaborn)", level: "Avanzato", pct: 95 },
          { name: "PySpark", level: "Avanzato", pct: 95 },
          { name: "SQL (Hive, MySQL, Oracle)", level: "Avanzato", pct: 92 },
          { name: "R", level: "Base", pct: 45 },
        ],
      },
      {
        category: "Cloud, Piattaforme & BI",
        icon: "fa-cloud",
        items: [
          { name: "Microsoft Azure / Hadoop (HDFS, NFS)", level: "Avanzato", pct: 88 },
          { name: "Google Cloud Platform (GCP)", level: "Buono", pct: 75 },
          { name: "Tableau", level: "Buono", pct: 80 },
          { name: "Excel & PowerPoint", level: "Avanzato", pct: 92 },
        ],
      },
      {
        category: "Data Science & Modellistica",
        icon: "fa-line-chart",
        tags: [
          "Modelli di Credit Risk",
          "Modelli di Propensione & Lookalike",
          "Cosine Similarity Matching",
          "Segmentazione Clienti",
          "A/B Testing & Ottimizzazione Controllo",
          "Analisi Uplift & Value-to-Store",
          "Attribuzione Multi-Touch",
          "Forecasting",
        ],
      },
      {
        category: "Data Governance & Leadership",
        icon: "fa-shield",
        tags: [
          "Conformità GDPR & Protezione PII",
          "Qualità & Validazione Dati",
          "Interfaccia Data Governance & Legal",
          "Automazione Retention Dati",
          "Consulenza Clienti",
          "Facilitazione Workshop (30+ stakeholder)",
          "Lead Trainer Python & PySpark",
          "Git / GitLab & Automazione YAML",
        ],
      },
    ],

    experienceTitle: "Esperienza Lavorativa",
    experience: [
      {
        company: "dunnhumby",
        companyInfo:
          "Leader globale nella customer data science per il retail e i servizi finanziari (Tesco, Tesco Bank, Barclays, SMU).",
        logo: dhLogo,
        role: "Senior Applied Data Scientist",
        period: "Nov 2018 – Presente",
        location: "Londra (UK) & Milano (IT)",
        award: "Valutazione 'Excelling' (2019–2022, Mid-Year 2025)",
        highlights: [
          "Tesco Bank (2021–Presente): Progettazione gerarchia NFS/HDFS su Microsoft Azure e refactoring di ~35 script Python, YAML e Bash per ripristinare i report Giftcard sulla piattaforma DSP.",
          "Home Insurance CAYC: Bonifica GDPR/PII e validazione trigger 'cambio casa' su dati Clubcard (70% overlap), quadruplicando l'audience mensile a ~200k clienti.",
          "Life Insurance & RGA: Collaborazione con Tesco IMS e riassicuratore RGA integrando tassi di mortalità per CAP e lifestyle grocery in 5 fasce di scoring.",
          "Travel Money & ATM VTS: Matching lookalike con cosine similarity sull'intera base Clubcard su finestre di 3 e 6 mesi per dimostrare l'uplift di spesa in negozio.",
          "The Hub — SMU/Unicard Cile (2019–2021): Modelli di credit risk e propensione prestiti (+11% pre-approvati / ~140k/mese, +18% spesa, -47–50% costi SMS, -25% budget promo).",
          "Tesco Media (2018–2019): Analisi diagnostica Trade Drivers (£400M+ uplift) con dashboard mensile e riduzione gruppi di controllo dal 10% al 5% (+50k utenti esposti, +£150k uplift).",
          "Leadership & Governance: Lead Trainer Python & PySpark, PySpark Toolkit Champion, co-sviluppatrice GCUPS, referente GDPR/DGB e mentor per junior data scientist.",
        ],
      },
      {
        company: "iwoca",
        companyInfo:
          "FinTech europea leader nei finanziamenti rapidi e flessibili per piccole e medie imprese (PMI).",
        logo: iwocaLogo,
        role: "Growth Marketing Analyst",
        period: "Mag 2018 – Nov 2018",
        location: "Londra (UK)",
        highlights: [
          "Sviluppo di script Python giornalieri collegati alle API del dialer vendite per riattivare/disattivare automaticamente i lead PMI in base all'engagement email.",
          "Automazione dei caricamenti SQL → API email per le campagne mensili, eliminando le attività manuali ripetitive.",
          "Gestione quotidiana del database marketing, definizione regole di validazione e controlli di sicurezza sui dati riservati.",
        ],
      },
      {
        company: "Sizmek (già Rocket Fuel)",
        companyInfo:
          "Piattaforma ad-tech globale (poi acquisita da Amazon e Zeta) nata dall'acquisizione della DSP AI di Rocket Fuel.",
        logo: sizmekLogo,
        role: "Senior Data & Strategy Analyst",
        period: "Nov 2017 – Mag 2018",
        location: "Londra (UK)",
        highlights: [
          "Sviluppo di strategie pubblicitarie per il principale cliente EMEA, portando al rinnovo del contratto da oltre €6M.",
          "Guida dell'analisi di attribuzione multi-touch per il top client italiano (€2M+).",
          "Analisi cross-canale, forecasting, user journey e A/B testing per UK, Spagna e Italia.",
        ],
      },
      {
        company: "Rocket Fuel Inc.",
        companyInfo:
          "Azienda pioniera nel marketing predittivo e programmatic advertising basato su AI e big data.",
        logo: rfLogo,
        role: "Data & Strategy Analyst · Associate Analyst",
        period: "Lug 2015 – Ott 2017",
        location: "Londra (UK)",
        award: "Promozioni rapide (<18m e 12m)",
        highlights: [
          "Progettazione e implementazione di una dashboard Tableau su query SQL per la reportistica EMEA utilizzata dal senior leadership team.",
          "Supporto al team ingegneristico USA per migliorare l'algoritmo di attribuzione Cross-Device, divenuto prodotto di punta.",
        ],
      },
      {
        company: "GfK Boutique Research",
        companyInfo:
          "Società globale di ricerche di mercato e previsioni strategiche per il settore retail e tecnologia.",
        logo: gfkLogo,
        role: "Research Associate (promossa da Intern in <2m)",
        period: "Feb 2015 – Lug 2015",
        location: "Woking (UK)",
        highlights: [
          "Miglioramento dell'accuratezza delle previsioni sul mercato PC e analisi del mercato statunitense per Best Buy.",
          "Ruolo di Scrum Master per il team PC & Mobile per ottimizzare i flussi di lavoro.",
        ],
      },
    ],

    projectsTitle: "Progetti Principali",
    projects: [
      {
        title: "Migrazione Cloud Microsoft Azure",
        context: "dunnhumby · Tesco Bank",
        challenge:
          "Migrare pipeline dati e reportistica legacy da Hadoop (BDA) a Microsoft Azure / DSP senza interruzioni operative.",
        solution:
          "Progettazione della struttura NFS/HDFS su Azure, creazione del repository centrale di migrazione e refactoring di ~35 script Python, YAML e Bash per ripristinare i report Giftcard.",
        impact: "Transizione cloud fluida con architettura standardizzata e riutilizzabile.",
        tech: ["Microsoft Azure", "PySpark", "Python", "YAML", "Bash", "Git"],
      },
      {
        title: "Trigger Home Insurance CAYC & Governance",
        context: "dunnhumby · Tesco Bank",
        challenge:
          "Intercettare i clienti Clubcard prossimi al rinnovo polizza casa risolvendo anomalie nei dati e flussi PII non approvati.",
        solution:
          "Gestione bonifica GDPR/PII e re-ingesta dati, pulizia anomalie e validazione della logica 'cambio casa' su base Clubcard (70% overlap).",
        impact: "Audience mensile quadruplicata fino a ~200.000 clienti.",
        tech: ["PySpark", "SQL", "GDPR / DGB", "Data Cleansing"],
      },
      {
        title: "Modelli Life Insurance & Rischio Mortalità",
        context: "dunnhumby · Tesco IMS & Riassicuratore RGA",
        challenge:
          "Selezionare i clienti più idonei per campagne Life Insurance combinando fase di vita e stile di vita sano.",
        solution:
          "Integrazione dei tassi di mortalità RGA per CAP con indicatori nutrizionali/stile di vita da scontrini grocery per creare 5 fasce di scoring (Core → Loyalty).",
        impact: "Modello approvato da Tesco IMS e RGA, reso processo mensile BAU e su scontrino.",
        tech: ["Python", "PySpark", "Feature Engineering", "Consulenza"],
      },
      {
        title: "Credit Risk & Propensione Prestiti (SMU Cile)",
        context: "dunnhumby · The Hub",
        challenge:
          "Ampliare la base pre-approvata per carte di credito e ottimizzare i costi SMS/call-center per offerte di prestito.",
        solution:
          "Automazione modello di credit risk basato su dati grocery, scorecard di propensione al prestito e analisi efficacia promozioni.",
        impact: "+11% pre-approvati (~140k/mese), +18% spesa, -47–50% costi SMS (~$47k–$65k) e -25% spesa promo (~131M CLP).",
        tech: ["Python", "PySpark", "Credit Risk", "Scorecard", "GCP"],
      },
      {
        title: "Analisi Uplift Travel Money & ATM (VTS)",
        context: "dunnhumby · Tesco Bank",
        challenge:
          "Dimostrare il valore incrementale in negozio generato dai clienti Travel Money e ATM.",
        solution:
          "Matching lookalike con cosine similarity sull'intera base Clubcard su finestre post-acquisto di 3 e 6 mesi.",
        impact: "Dimostrato l'uplift di spesa in negozio e identificati i pattern pre-viaggio.",
        tech: ["PySpark", "Cosine Similarity", "Uplift Modelling", "Lookalike"],
      },
      {
        title: "Ottimizzazione Gruppi di Controllo A/B",
        context: "dunnhumby · Tesco Media",
        challenge:
          "I gruppi di controllo al 10% limitavano la copertura delle campagne media e i ricavi.",
        solution:
          "Validazione statistica della riduzione dal 10% al 5% e sviluppo di una metodologia di matching 1-a-1.",
        impact: "+50.000 utenti esposti (+£150k di uplift incrementale per campagna).",
        tech: ["Python", "SQL", "A/B Testing", "Statistica"],
      },
    ],

    educationTitle: "Educazione",
    education: [
      {
        degree: "Laurea Magistrale in Statistica Matematica e Probabilità",
        institution: "Alma Mater Studiorum – Università di Bologna",
        location: "Bologna, Italia",
        period: "2012 – 2014",
        grade: "110/110 e lode",
        logo: uniboLogo,
      },
      {
        degree: "Visiting Researcher, Dipartimento di Finanza",
        institution: "Imperial College Business School",
        location: "Londra, Regno Unito",
        period: "Feb 2014 – Giu 2014",
        grade: "Ricerca all'estero",
        logo: imperialLogo,
      },
      {
        degree: "Bachelor's Degree in Mathematical Statistics and Probability (Joint Degree)",
        institution: "University of Glasgow",
        location: "Glasgow, Regno Unito",
        period: "2011 – 2012",
        grade: "First Class Honours",
        logo: glasgowLogo,
      },
      {
        degree: "Laurea Triennale in Statistica Matematica e Probabilità",
        institution: "Alma Mater Studiorum – Università di Bologna",
        location: "Bologna, Italia",
        period: "2009 – 2012",
        grade: "110/110 e lode",
        logo: uniboLogo,
      },
    ],

    certificationsTitle: "Certificazioni & Corsi",
    certifications: [
      {
        title: "6.00.1x: Introduction to Computer Science and Programming Using Python",
        issuer: "Massachusetts Institute of Technology (MIT)",
        date: "Ago 2021",
        note: "Corso intensivo di 9 settimane completato con il punteggio massimo.",
        logo: mitLogo,
      },
      {
        title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
        issuer: "Udemy",
        date: "Giu 2019",
        note: "Percorso pratico di Machine Learning (41 ore).",
        logo: udemyLogo,
      },
      {
        title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
        issuer: "Udemy",
        date: "Giu 2019",
        note: "Corso completo di programmazione Python (24 ore).",
        logo: udemyLogo,
      },
      {
        title: "Credit Risk Modelling, Building Scorecards & GDPR Data Governance",
        issuer: "dunnhumby Internal Academy",
        date: "2019 – 2024",
        note: "Formazione specialistica + Lead Trainer interno per Python & PySpark.",
        logo: dunnhumbyLogo,
      },
    ],

    languagesTitle: "Lingue",
    languages: [
      { name: "Italiano", level: "Madrelingua", pct: 100 },
      { name: "Inglese", level: "Fluente / C1–C2 (10+ anni di lavoro in UK e team internazionali)", pct: 95 },
    ],
    citizenshipNote: "Doppia Cittadinanza: Italiana e Britannica (IT & UK)",

    interestsTitle: "Interessi",
    interests: [
      { icon: "fa-cutlery", label: "Cucinare Pizza e Parmigiana" },
      { icon: "fa-book", label: "Romanzi inglesi dell'800 e letteratura italiana del dopoguerra" },
      { icon: "fa-compass", label: "Trekking & Escursionismo" },
    ],
  },
};

export default PortfolioData;