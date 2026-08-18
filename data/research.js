/* ============================================================
   RESEARCH THEMES, drawn from the lab strategy workbook.
   Edit freely; each theme renders as a card + detail block.
   ============================================================ */
window.RESEARCH = [
  {
    id: "language-ai",
    title: "Language Technology for African Languages",
    kicker: "Theme 01",
    summary: "Speech and natural-language systems for Kinyarwanda, Swahili and other under-served African languages, so that digital public services do not exclude the people they are built for.",
    detail: "More than 2,000 African languages are effectively absent from mainstream AI. We build open speech and text corpora, benchmarks, and low-resource models, beginning with Kinyarwanda for government and financial services, and study what data quantity and quality are the true binding constraints for usable accuracy.",
    methods: ["Low-resource ASR/TTS", "Corpus construction & annotation", "LLM fine-tuning & evaluation", "Human-centred dialogue design"],
    status: "Flagship theme"
  },
  {
    id: "software-engineering",
    title: "Software Engineering for Low-Resource Contexts",
    kicker: "Theme 02",
    summary: "Engineering methods for systems that must work with intermittent power, expensive bandwidth, low-end devices, and small teams, the default operating conditions of African deployment.",
    detail: "Offline-first architectures, edge deployment of ML models, USSD/voice interfaces, and empirical studies of how African software teams build and maintain systems. This theme is the engineering backbone that every applied project in the lab draws on.",
    methods: ["Offline-first & edge architectures", "Empirical software engineering", "Developer-experience research", "MLOps in constrained settings"],
    status: "Core theme"
  },
  {
    id: "ai-health",
    title: "AI for Primary Healthcare",
    kicker: "Theme 03",
    summary: "Decision-support and diagnostic tools that extend the reach of clinicians and community health workers at the district level.",
    detail: "Following proven African precedents such as AI-assisted malaria microscopy, we investigate point-of-care triage and diagnostics that measurably improve turnaround and accuracy in the hands of mid-level health workers, evaluated against the standard of care, with ethics approval and health-system partners.",
    methods: ["Medical imaging ML", "Clinical study design", "Offline mobile deployment", "Health-systems integration (DHIS2)"],
    status: "Pipeline theme"
  },
  {
    id: "climate-agriculture",
    title: "Climate-Smart Agriculture & Earth Observation",
    kicker: "Theme 04",
    summary: "Computer vision and satellite analytics that bring early warning and agronomic advice to smallholder farmers.",
    detail: "Crop-disease detection from phone cameras, satellite-informed advisories, and, critically, research on which delivery channels actually change farmer behaviour and yields, not just model accuracy.",
    methods: ["Edge computer vision", "Remote sensing (Sentinel-2, Digital Earth Africa)", "Field experiments & impact evaluation"],
    status: "Flagship theme"
  },
  {
    id: "sensing",
    title: "Urban & Environmental Sensing",
    kicker: "Theme 05",
    summary: "Low-cost sensor networks with ML calibration for cities that currently make policy without exposure data.",
    detail: "Starting with a campus air-quality pilot and growing toward a city-scale network for Kigali, we ask whether machine-learned calibration can make sub-$100 sensors policy-grade, and whether public dashboards shift municipal decisions.",
    methods: ["IoT & embedded systems", "Time-series ML & calibration", "Open data platforms", "Policy communication"],
    status: "Pipeline theme"
  },
  {
    id: "responsible-computing",
    title: "Responsible AI, Data & Digital Society",
    kicker: "Theme 06",
    summary: "Data governance, fairness, and evaluation practice for AI deployed in African contexts, woven through every project rather than bolted on.",
    detail: "Fairness auditing for financial-inclusion models, consent and anonymisation practice for community data collection, and evidence standards (baselines, pre-registration, field evaluation) that keep our impact claims honest.",
    methods: ["Fairness & auditing", "Data governance & privacy", "Impact evaluation", "AI policy engagement"],
    status: "Cross-cutting theme"
  }
];
