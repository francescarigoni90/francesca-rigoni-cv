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
        role: "Senior Applied Data Scientist",
        period: "Nov 2018 – Present",
        location: "London, UK (2018–2021) · Milan / Remote, Italy (2021–Present)",
        badge: "Rated 'Excelling' (2019–2022, Mid-Year 2025)",
        summary:
          "Data Science Consultant & Technical Lead across Tesco Bank, The Hub (Financial Services), and Tesco Media teams.",
        highlights: [
          "Tesco Bank (2021–Present): Led Microsoft Azure folder hierarchy (NFS/HDFS) and refactored ~35 Python/YAML/Bash scripts; delivered Home Insurance CAYC (~200k monthly reach, 4x uplift), Life Insurance propensity/mortality scoring with reinsurer RGA, Travel Money cosine-similarity VTS uplift, automated BAU triggers, and GDPR/PII compliance automation.",
          "The Hub (2019–2021): Built grocery-enhanced credit risk and loan propensity models for SMU/Unicard Chile, expanding pre-approved credit card customers by 11% (~140k/mo), lifting spend by 18%, cutting SMS outreach costs by 47–50% (~$47k–$65k), and identifying 25% promo budget savings (~131M CLP).",
          "Tesco Media (2018–2019): Diagnosed £400M+ Trade Drivers campaign performance, built monthly forecasting dashboards, and optimised A/B control group sizes from 10% to 5% (+50k exposed users, +£150k uplift).",
          "Leadership & Tooling: Lead Python & PySpark Trainer, PySpark Toolkit Champion, Science Circle member, GCUPS (GCP modelling library) co-developer, and mentor to junior data scientists & interns.",
        ],
      },
      {
        company: "iwoca",
        role: "Growth Marketing Analyst",
        period: "May 2018 – Nov 2018",
        location: "London, UK",
        summary:
          "Streamlined and automated B2B marketing and sales pipelines in Python and SQL.",
        highlights: [
          "Built daily Python scripts connecting marketing email engagement to the sales dialler API to dynamically reactivate/deactivate SME leads.",
          "Automated SQL-to-email-API data uploads for monthly campaigns, eliminating repetitive manual tasks.",
          "Managed daily marketing database integrity, defined conflict-resolution rules for SME records, and enforced strict customer data security.",
        ],
      },
      {
        company: "Sizmek (formerly Rocket Fuel)",
        role: "Senior Data & Strategy Analyst (Feb–May 2018) · Data & Strategy Analyst (Nov 2017–Jan 2018)",
        period: "Nov 2017 – May 2018",
        location: "London, UK",
        summary:
          "Led EMEA digital advertising analytics and client growth strategies across the UK, Spain, and Italy following acquisition.",
        highlights: [
          "Developed growth strategies for Rocket Fuel/Sizmek's primary EMEA account, driving a €6M+ contract renewal.",
          "Spearheaded multi-touch attribution analysis shaping the strategy for the top Italian client (€2M+).",
          "Delivered cross-channel performance forecasting, user-journey analysis, and A/B testing.",
        ],
      },
      {
        company: "Rocket Fuel Inc.",
        role: "Data & Strategy Analyst (Jan–Oct 2017) · Associate Analyst (Jul 2015–Dec 2016)",
        period: "Jul 2015 – Oct 2017",
        location: "London, UK",
        badge: "Fast-track promotions (<18m & 12m)",
        summary:
          "Analytical strategy and platform improvement across EMEA accounts.",
        highlights: [
          "Designed and deployed a SQL-powered Tableau dashboard tracking country- and account-level EMEA figures for senior leadership.",
          "Partnered with the US engineering team on statistical analyses that improved the Cross-Device attribution algorithm into a flagship product.",
        ],
      },
      {
        company: "GfK Boutique Research",
        role: "Research Associate (promoted from Intern in <2 months)",
        period: "Feb 2015 – Jul 2015",
        location: "Woking, Surrey, UK",
        summary:
          "Market forecasting, US retail research, and agile team coordination.",
        highlights: [
          "Improved accuracy of PC market forecasts and contributed to in-depth US market research for Best Buy.",
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
      },
      {
        degree: "Visiting Researcher, Finance Department",
        institution: "Imperial College Business School",
        location: "London, United Kingdom",
        period: "Feb 2014 – Jun 2014",
        grade: "Research Exchange",
      },
      {
        degree: "Bachelor's Degree in Mathematical Statistics and Probability (Joint Degree)",
        institution: "University of Glasgow",
        location: "Glasgow, United Kingdom",
        period: "2011 – 2012",
        grade: "First Class Honours",
      },
      {
        degree: "Bachelor's Degree in Mathematical Statistics and Probability",
        institution: "Alma Mater Studiorum – Università di Bologna",
        location: "Bologna, Italy",
        period: "2009 – 2012",
        grade: "110/110 cum laude",
      },
    ],

    certificationsTitle: "Certifications & Courses",
    certifications: [
      {
        title: "6.00.1x: Introduction to Computer Science and Programming Using Python",
        issuer: "Massachusetts Institute of Technology (MIT)",
        date: "Aug 2021",
        note: "Completed 9-week intensive course with highest score.",
      },
      {
        title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
        issuer: "Udemy",
        date: "Jun 2019",
        note: "41-hour applied machine learning curriculum.",
      },
      {
        title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
        issuer: "Udemy",
        date: "Jun 2019",
        note: "24-hour end-to-end Python engineering course.",
      },
      {
        title: "Credit Risk Modelling, Building Scorecards & GDPR Data Governance",
        issuer: "dunnhumby Internal Academy",
        date: "2019 – 2024",
        note: "Specialist training + Lead Internal Trainer for Python & PySpark.",
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
        role: "Senior Applied Data Scientist",
        period: "Nov 2018 – Presente",
        location: "Londra, UK (2018–2021) · Milano / Remoto, Italia (2021–Presente)",
        badge: "Valutazione 'Excelling' (2019–2022, Mid-Year 2025)",
        summary:
          "Data Science Consultant & Technical Lead nei team Tesco Bank, The Hub (Servizi Finanziari) e Tesco Media.",
        highlights: [
          "Tesco Bank (2021–Presente): Progettazione gerarchia cartelle NFS/HDFS su Microsoft Azure e refactoring di ~35 script Python/YAML/Bash; sviluppo trigger Home Insurance CAYC (~200k clienti/mese, 4x reach), scoring Life Insurance con il riassicuratore RGA, analisi VTS Travel Money con cosine similarity, automazione campagne BAU e governance GDPR/PII.",
          "The Hub (2019–2021): Sviluppo modelli di credit risk e propensione al prestito per SMU/Unicard Cile con dati grocery, aumentando i pre-approvati dell'11% (~140k/mese), +18% spesa post-attivazione, -47–50% costi SMS (~$47k–$65k) e -25% budget promozionale (~131M CLP).",
          "Tesco Media (2018–2019): Analisi diagnostica e dashboard mensile per campagne Trade Drivers (£400M+ uplift); riduzione gruppi di controllo A/B dal 10% al 5% (+50k utenti esposti, +£150k uplift).",
          "Leadership & Formazione: Lead Trainer Python & PySpark, PySpark Toolkit Champion, membro Science Circle, co-sviluppatrice libreria GCUPS su GCP e mentor per junior data scientist e stagisti.",
        ],
      },
      {
        company: "iwoca",
        role: "Growth Marketing Analyst",
        period: "Mag 2018 – Nov 2018",
        location: "Londra, UK",
        summary:
          "Automazione e ottimizzazione dei processi di marketing e vendita B2B in Python e SQL.",
        highlights: [
          "Sviluppo script Python giornalieri collegati alle API del dialer commerciale per riattivare/disattivare automaticamente i lead PMI in base all'engagement email.",
          "Automazione del trasferimento dati da SQL all'API email per le campagne mensili, eliminando i caricamenti manuali.",
          "Gestione quotidiana del database marketing, definizione regole di validazione e controlli di sicurezza sui dati riservati.",
        ],
      },
      {
        company: "Sizmek (già Rocket Fuel)",
        role: "Senior Data & Strategy Analyst (Feb–Mag 2018) · Data & Strategy Analyst (Nov 2017–Gen 2018)",
        period: "Nov 2017 – Mag 2018",
        location: "Londra, UK",
        summary:
          "Strategie di crescita e analisi pubblicitaria digitale EMEA per i mercati UK, Spagna e Italia.",
        highlights: [
          "Sviluppo strategie per il principale cliente EMEA, contribuendo al rinnovo contrattuale da oltre €6M.",
          "Guida del progetto di attribuzione multi-touch per il primo cliente italiano (€2M+).",
          "Analisi cross-canale, forecasting, user journey e A/B testing.",
        ],
      },
      {
        company: "Rocket Fuel Inc.",
        role: "Data & Strategy Analyst (Gen–Ott 2017) · Associate Analyst (Lug 2015–Dic 2016)",
        period: "Lug 2015 – Ott 2017",
        location: "Londra, UK",
        badge: "Promozioni rapide (<18m e 12m)",
        summary:
          "Analisi strategica e sviluppo algoritmico per campagne digitali EMEA.",
        highlights: [
          "Progettazione e lancio di una dashboard Tableau alimentata via SQL per il monitoraggio EMEA a livello paese/account da parte del senior leadership.",
          "Supporto al team ingegneristico USA per migliorare l'algoritmo di attribuzione Cross-Device.",
        ],
      },
      {
        company: "GfK Boutique Research",
        role: "Research Associate (promossa da Intern in <2 mesi)",
        period: "Feb 2015 – Lug 2015",
        location: "Woking, Surrey, UK",
        summary:
          "Previsioni di mercato, ricerche sul mercato USA e coordinamento agile.",
        highlights: [
          "Miglioramento dell'accuratezza delle previsioni sul mercato PC e analisi di mercato USA per Best Buy.",
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
      },
      {
        degree: "Visiting Researcher, Dipartimento di Finanza",
        institution: "Imperial College Business School",
        location: "Londra, Regno Unito",
        period: "Feb 2014 – Giu 2014",
        grade: "Ricerca all'estero",
      },
      {
        degree: "Bachelor's Degree in Mathematical Statistics and Probability (Joint Degree)",
        institution: "University of Glasgow",
        location: "Glasgow, Regno Unito",
        period: "2011 – 2012",
        grade: "First Class Honours",
      },
      {
        degree: "Laurea Triennale in Statistica Matematica e Probabilità",
        institution: "Alma Mater Studiorum – Università di Bologna",
        location: "Bologna, Italia",
        period: "2009 – 2012",
        grade: "110/110 e lode",
      },
    ],

    certificationsTitle: "Certificazioni & Corsi",
    certifications: [
      {
        title: "6.00.1x: Introduction to Computer Science and Programming Using Python",
        issuer: "Massachusetts Institute of Technology (MIT)",
        date: "Ago 2021",
        note: "Corso intensivo di 9 settimane completato con il punteggio massimo.",
      },
      {
        title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
        issuer: "Udemy",
        date: "Giu 2019",
        note: "Percorso pratico di Machine Learning (41 ore).",
      },
      {
        title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
        issuer: "Udemy",
        date: "Giu 2019",
        note: "Corso completo di programmazione Python (24 ore).",
      },
      {
        title: "Credit Risk Modelling, Building Scorecards & GDPR Data Governance",
        issuer: "dunnhumby Internal Academy",
        date: "2019 – 2024",
        note: "Formazione specialistica + Lead Trainer interno per Python & PySpark.",
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