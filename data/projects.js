/* ============================================================
   PROJECTS — from the lab strategy workbook.
   status: "current" | "proposed" | "completed"
   featured: true shows the project on the Home page.
   ============================================================ */
window.PROJECTS = [
  {
    id: "kinyavoice",
    title: "KinyaVoice",
    subtitle: "Speech & language AI for Kinyarwanda public services",
    status: "proposed",
    featured: true,
    theme: "Language Technology",
    problem: "Citizens who do not read or write French or English are excluded from digital government and financial services.",
    solution: "An open Kinyarwanda speech corpus, fine-tuned speech recognition and synthesis, and an LLM-based service assistant — edge-deployable and built on the existing Kinyarwanda Common Voice foundation.",
    impact: "Language inclusion for millions of Kinyarwanda speakers; a reusable open corpus for the whole Rwandan technology ecosystem; a template for other African languages.",
    beneficiaries: "Rwandan citizens — especially rural, elderly and low-literacy users; regional Swahili speakers in a later phase.",
    kpis: ["Hours of open speech data released", "Word-error-rate vs. baseline", "Pilot task-completion rate", "Dataset & benchmark publications"],
    timeline: "0–6 mo data pilot · 6–18 mo models & service pilot · 18–36 mo scale",
    tags: ["NLP", "Speech", "Open data", "GovTech"]
  },
  {
    id: "imyaka-ai",
    title: "ImyakaAI",
    subtitle: "Crop-disease detection & advisory for smallholder farmers",
    status: "proposed",
    featured: true,
    theme: "Climate-Smart Agriculture",
    problem: "Cassava, coffee and maize diseases destroy yields, and extension officers cannot reach most farmers.",
    solution: "Phone-camera disease detection plus satellite-informed advice, delivered through cooperative agents and USSD/WhatsApp channels.",
    impact: "Yield protection for thousands of farmers and an open Rwandan crop-disease image dataset.",
    beneficiaries: "Smallholder farmers, agricultural cooperatives, extension services.",
    kpis: ["Model F1 on local crops", "Farmers reached", "Behaviour-change rate", "Yield delta in pilot plots", "Dataset released"],
    timeline: "0–6 mo baseline & partner · 6–18 mo field pilot · 18–36 mo scale & rigorous evaluation",
    tags: ["Computer vision", "Agriculture", "Remote sensing", "Open data"]
  },
  {
    id: "soma-ai",
    title: "SomaAI",
    subtitle: "An AI teaching assistant, rigorously evaluated at ALU",
    status: "proposed",
    featured: true,
    theme: "Software Engineering / EdTech",
    problem: "Instructors cannot give timely, rich feedback at scale, and learning loss persists across the region.",
    solution: "An LLM-based feedback and tutoring tool embedded in ALU courses and A/B evaluated for measured learning outcomes — not just satisfaction.",
    impact: "Evidence-based AI pedagogy exported to African universities; ALU itself is the living laboratory.",
    beneficiaries: "ALU students first; secondary and tertiary students regionally in phase two.",
    kpis: ["Learning-gain effect size vs. control", "Usage & retention", "Instructor time saved", "Courses deployed"],
    timeline: "0–3 mo build · 3–9 mo first course evaluation · 9–24 mo multi-institution trial",
    tags: ["LLMs", "Education", "Experimentation"]
  },
  {
    id: "ubuzima-ai",
    title: "UbuzimaAI",
    subtitle: "Point-of-care triage for district health facilities",
    status: "proposed",
    featured: false,
    theme: "AI for Primary Healthcare",
    problem: "Clinician shortage delays malaria and anaemia diagnosis and maternal-risk detection at district level.",
    solution: "Smartphone-microscopy or clinical-triage decision support integrated with existing workflows, offline-first.",
    impact: "Faster diagnosis and reduced referral burden, with an evidence base for national scale through health-system partners.",
    beneficiaries: "Patients and health workers in district hospitals and health posts.",
    kpis: ["Sensitivity/specificity vs. gold standard", "Time-to-result", "Facilities piloted", "Ethics approval & health-worker satisfaction"],
    timeline: "0–6 mo partners & ethics · 6–24 mo build & clinical pilot · 24–36 mo multi-site study",
    tags: ["Health AI", "Medical imaging", "Deployment research"]
  },
  {
    id: "kigali-airwatch",
    title: "Kigali AirWatch",
    subtitle: "Low-cost air-quality network & forecasting for Kigali",
    status: "proposed",
    featured: false,
    theme: "Urban & Environmental Sensing",
    problem: "There is no dense air-quality monitoring in Kigali, so policy decisions are made without exposure data.",
    solution: "A network of low-cost sensors with machine-learned calibration, public dashboards, and forecasting — beginning with a five-sensor campus pilot.",
    impact: "The first continuous exposure map of Kigali and a replicable kit for other African cities.",
    beneficiaries: "City residents, respiratory patients, urban planners.",
    kpis: ["Sensors live & uptime", "Calibration error vs. reference", "Dashboard users", "Policy citations"],
    timeline: "0–6 mo campus pilot · 6–18 mo city network · 18–36 mo forecasting & policy",
    tags: ["IoT", "Time-series ML", "Open data", "Policy"]
  },
  {
    id: "sokoflow",
    title: "SokoFlow",
    subtitle: "Fair SME cash-flow & credit analytics",
    status: "proposed",
    featured: false,
    theme: "Responsible AI / Financial Inclusion",
    problem: "African SMEs are credit-invisible, and lenders lack risk models suited to informal cash-flow patterns.",
    solution: "Privacy-preserving machine learning on anonymised transaction data for credit scoring and cash-flow forecasting, with explicit fairness auditing across gender and region.",
    impact: "Expanded SME credit access and a fairness methodology for African fintech.",
    beneficiaries: "Small businesses, cooperatives, and responsible lenders.",
    kpis: ["AUC vs. incumbent models", "Fairness metrics across groups", "Loans piloted", "Default-rate delta"],
    timeline: "0–6 mo data partner & baseline · 6–18 mo model & pilot · 18–36 mo fairness study & scale",
    tags: ["Fintech", "Fairness", "Privacy"]
  }
];
