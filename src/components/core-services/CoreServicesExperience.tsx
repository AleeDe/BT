"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SHIFTDEPLOY_URL = "https://shiftdeploy.com/";
const CUSTOMER_PORTAL_URL = "/contact";

/* ============================================================
   Inline icons - single visual language for all sections
   ============================================================ */
const Icon = {
  code: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M8 18L2 12L8 6M16 6L22 12L16 18M14 4L10 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12H21M12 3C14.5 6 14.5 18 12 21M12 3C9.5 6 9.5 18 12 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M12 19L21 10L14 3L5 12V19H12Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 19H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M4 21V6L12 3L20 6V21" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 10H15M9 14H15M9 18H15M4 21H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 18H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M7 18C4.2 18 2 15.8 2 13C2 10.5 3.9 8.4 6.3 8.1C7 5.7 9.3 4 12 4C15.3 4 18 6.7 18 10C20.2 10.2 22 12 22 14.3C22 16.4 20.4 18 18.3 18H7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
      <path d="M12 3V8M12 16V21M3 12H8M16 12H21M5.6 5.6L9.2 9.2M14.8 14.8L18.4 18.4M5.6 18.4L9.2 14.8M14.8 9.2L18.4 5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
      <path d="M12 3L21 8L12 13L3 8L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 12L12 17L21 12M3 16L12 21L21 16" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M4 13L9 18L20 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20L16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M12 3L21 8V16L12 21L3 16V8L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 8L12 13L21 8M12 13V21" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M12 2C16 5 18 9 18 13L15 16H9L6 13C6 9 8 5 12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 16L7 22L12 19L17 22L15 16" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  dot: (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="6" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 5V19C4 20.6 7.5 22 12 22S20 20.6 20 19V5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 12C4 13.6 7.5 15 12 15S20 13.6 20 12" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  shop: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M3 7L5 3H19L21 7M3 7V20C3 20.6 3.4 21 4 21H20C20.6 21 21 20.6 21 20V7M3 7H21M9 11C9 12.7 10.3 14 12 14C13.7 14 15 12.7 15 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M12 5C12 3.9 11.1 3 10 3C8.9 3 8 3.9 8 5C7 5 6 6 6 7C5 7 4 8 4 9.5C4 10.5 4.5 11.4 5.2 12C4.5 12.6 4 13.5 4 14.5C4 16 5 17 6 17C6 18 7 19 8 19C8 20.1 8.9 21 10 21C11.1 21 12 20.1 12 19V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 5C12 3.9 12.9 3 14 3C15.1 3 16 3.9 16 5C17 5 18 6 18 7C19 7 20 8 20 9.5C20 10.5 19.5 11.4 18.8 12C19.5 12.6 20 13.5 20 14.5C20 16 19 17 18 17C18 18 17 19 16 19C16 20.1 15.1 21 14 21C12.9 21 12 20.1 12 19V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 9H10M14 9H12M12 13H10M14 13H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M4 4V20H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 16L11 12L14 14L20 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="8" r="1.5" fill="currentColor" />
      <path d="M11 12L11 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  sfCloud: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M7 18C4.5 18 2.5 16 2.5 13.5C2.5 11.5 4 9.8 6 9.5C6.5 7.5 8.5 6 11 6C13.5 6 15.5 7.5 16 9.8C18.5 9.8 20.5 11.5 20.5 14C20.5 16.2 18.7 18 16.5 18H7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 13.5L11 15.5L15 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/* ============================================================
   Content
   ============================================================ */
const services = [
  {
    icon: Icon.code,
    title: "Web Development",
    description:
      "Blazing-fast, scalable web platforms built with React, Next.js & TanStack - pixel-perfect & production-ready.",
    tags: ["React", "Next.js", "TanStack", "TypeScript", "Tailwind"],
    highlight: "Avg ship cycle · 4 weeks",
    details:
      "We build modern web platforms engineered for performance and longevity. From marketing sites to data-heavy SaaS dashboards, every project ships with a 95+ Lighthouse score, full type-safety, and a CI/CD pipeline that catches regressions before users do.",
    deliverables: [
      "Production-ready Next.js app with App Router & SSR",
      "Type-safe API layer (tRPC, GraphQL, or REST)",
      "Component library aligned to your design system",
      "Automated tests, CI/CD, and observability dashboards",
    ],
  },
  {
    icon: Icon.globe,
    title: "WordPress Customization",
    description:
      "Custom themes, plugins, WooCommerce stores, and headless WP builds tailored to your brand.",
    tags: ["WordPress", "WooCommerce", "Headless", "Gutenberg", "PHP"],
    highlight: "300+ stores launched",
    details:
      "From bespoke Gutenberg block themes to high-velocity WooCommerce stores and headless WP-as-a-CMS builds, we make WordPress feel like a custom platform - fast, secure, and editor-friendly.",
    deliverables: [
      "Custom Gutenberg blocks & page-builder integrations",
      "WooCommerce store with payment & shipping setup",
      "Headless WP + Next.js / Astro frontend",
      "Performance, security, and SEO hardening",
    ],
  },
  {
    icon: Icon.pen,
    title: "UI / UX Design",
    description:
      "Editorial-grade interfaces, design systems, and motion that turn visitors into loyal customers.",
    tags: ["Figma", "Design Systems", "Motion", "Prototyping", "Research"],
    highlight: "+38% avg conversion lift",
    details:
      "Design grounded in research, validated through prototyping, and shipped as a living design system. Every screen is reviewed against HCI principles - Fitts' Law, Hick's Law, Jakob's Law - so users move forward without thinking.",
    deliverables: [
      "User research, journey maps & usability tests",
      "Design system in Figma with tokens & components",
      "High-fidelity flows and motion prototypes",
      "Hand-off documentation for engineering",
    ],
  },
  {
    icon: Icon.building,
    title: "Enterprise Applications",
    description:
      "Mission-critical CRMs, ERPs, and internal tools on .NET, Java & Salesforce - built to scale.",
    tags: [".NET", "Java", "Salesforce", "SAP", "Spring Boot"],
    highlight: "Trusted by 40+ enterprises",
    details:
      "We engineer the systems your business runs on - modern CRMs, ERPs, claim engines, and internal tooling - with strict SLAs, audit trails, and integrations into your existing stack. SOC 2 and ISO 27001 ready by default.",
    deliverables: [
      "Domain-driven architecture & data modelling",
      "Role-based access, audit logs & compliance hooks",
      "Salesforce / SAP / legacy ERP integration",
      "Performance SLAs, observability, and runbooks",
    ],
  },
  {
    icon: Icon.phone,
    title: "Mobile Development",
    description:
      "Native iOS & Android plus cross-platform Flutter and React Native apps with delightful UX.",
    tags: ["iOS", "Android", "Flutter", "React Native", "Swift"],
    highlight: "4.8★ avg App Store rating",
    details:
      "Whether you need a single Flutter codebase shipping to both stores or a deeply native Swift/Kotlin experience, we cover the full lifecycle - from UX research and prototyping through TestFlight, Play Console, and post-launch analytics.",
    deliverables: [
      "Native iOS (Swift) or Android (Kotlin) build",
      "Cross-platform option in Flutter or React Native",
      "Push notifications, deep links & in-app purchases",
      "App Store & Play Console launch playbook",
    ],
  },
  {
    icon: Icon.cloud,
    title: "SaaS & Cloud Platforms",
    description:
      "Multi-tenant SaaS, APIs, and cloud-native architecture on AWS, Azure & GCP.",
    tags: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
    highlight: "99.99% uptime SLO",
    details:
      "From greenfield SaaS architecture to lifting legacy systems into the cloud - we design for tenant isolation, cost-efficiency, and zero-downtime releases. Infrastructure as code, automated rollback, and full observability come standard.",
    deliverables: [
      "Multi-tenant architecture & data partitioning",
      "Terraform / Pulumi infrastructure as code",
      "CI/CD with blue-green or canary deploys",
      "Monitoring, alerting & on-call runbooks",
    ],
  },
];

const techStack = [
  // ===== Build layer =====
  {
    category: "Frontend",
    icon: Icon.code,
    tagline: "Pixel-perfect UIs at scale",
    description:
      "Production frontends that load fast and feel inevitable. Every component is type-safe, accessible, and tuned to a 95+ Lighthouse score before it ships.",
    items: ["React", "Next.js", "Angular", "Vue", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Mobile",
    icon: Icon.phone,
    tagline: "Native + cross-platform reach",
    description:
      "Whether you need a single Flutter codebase shipping to both stores or a deeply native Swift/Kotlin experience, we cover the full lifecycle - UX, build, store listings, and post-launch analytics.",
    items: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    category: "Backend",
    icon: Icon.cube,
    tagline: "Resilient services & APIs",
    description:
      "We architect domain-driven services with strict SLAs, audit trails, and clear boundaries. Built to scale without becoming a monolith you regret.",
    items: ["Node.js", "Python", "Django", ".NET", "Java", "Spring Boot", "Go", "GraphQL"],
  },
  // ===== Intelligence layer =====
  {
    category: "Data",
    icon: Icon.database,
    tagline: "Persistence, search & cache",
    description:
      "We pick the right store for the workload - relational for transactions, document for flexibility, columnar for analytics, in-memory for speed - and design schemas that age well.",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "ClickHouse"],
  },
  {
    category: "Data Science",
    icon: Icon.chart,
    tagline: "Insight, models & forecasting",
    description:
      "From exploratory analysis to production ML pipelines - we turn raw data into models that drive real business decisions, with reproducibility and monitoring baked in.",
    items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Apache Spark", "Jupyter"],
  },
  {
    category: "AI",
    icon: Icon.brain,
    tagline: "LLMs, agents & automation",
    description:
      "We integrate LLMs into real product workflows - RAG over your docs, agents that take action, and pipelines that scale safely with cost & latency controls. No demo-ware.",
    items: [
      "LLM Implementation",
      "LLM Optimization",
      "RAG Systems",
      "AI Agents",
      "n8n Workflows",
      "LangChain",
      "Claude API",
      "OpenAI",
    ],
  },
  // ===== Platforms layer =====
  {
    category: "CMS / ERP",
    icon: Icon.shop,
    tagline: "Off-the-shelf, customised",
    description:
      "Customised commerce, content, and operations platforms - we extend, integrate, and modernise existing tools so they stop feeling like templates.",
    items: ["WordPress", "WooCommerce", "Odoo", "Shopify", "Magento"],
  },
  {
    category: "Salesforce",
    icon: Icon.sfCloud,
    tagline: "End-to-end Salesforce delivery",
    description:
      "Full-spectrum Salesforce delivery - from Sales / Service / Commerce Cloud setup, to AppExchange product engineering, to Agentforce-powered automations across your business.",
    items: [
      "Sales Cloud",
      "Service Cloud",
      "Commerce Cloud",
      "Marketing Cloud",
      "Experience Cloud",
      "AppExchange Products",
      "Agentforce",
      "Apex / LWC",
    ],
  },
  {
    category: "Cloud",
    icon: Icon.cloud,
    tagline: "Deploy anywhere, scale everywhere",
    description:
      "Multi-cloud architecture, infrastructure as code, and zero-downtime deployments. Cost-optimised by default, observable end-to-end, and ready for compliance audits.",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Vercel"],
  },
];

const journeySteps = [
  {
    step: "01",
    phase: "Discovery",
    duration: "1-2 weeks",
    icon: Icon.search,
    title: "Diagnose User Friction",
    detail:
      "We map where your users get blocked and convert unclear pain points into prioritized, solvable service problems.",
    outcomes: ["Stakeholder workshops", "User journey audit", "Prioritized backlog"],
  },
  {
    step: "02",
    phase: "Build",
    duration: "4-12 weeks",
    icon: Icon.cube,
    title: "Engineer Efficient Solutions",
    detail:
      "Core services built for reliability and speed, focused on reducing effort for your users and your internal teams.",
    outcomes: ["Modular architecture", "Test & CI gates", "Performance budgets"],
  },
  {
    step: "03",
    phase: "Scale",
    duration: "Ongoing",
    icon: Icon.rocket,
    title: "Launch, Learn, Improve",
    detail:
      "We onboard your teams and customers, track outcomes, and continuously optimize service flow for long-term value.",
    outcomes: ["Phased rollout", "Live observability", "Quarterly optimisation"],
  },
];

/* ============================================================
   Page
   ============================================================ */
export function CoreServicesExperience() {
  const [openService, setOpenService] = useState<number | null>(null);
  const [openTech, setOpenTech] = useState<number | null>(null);

  const anyModalOpen = openService !== null || openTech !== null;

  useEffect(() => {
    if (!anyModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenService(null);
        setOpenTech(null);
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [anyModalOpen]);

  const active = openService !== null ? services[openService] : null;
  const activeTech = openTech !== null ? techStack[openTech] : null;

  return (
    <div className="core-services-page relative min-h-screen">
      <div className="grid-overlay" />



      <main id="top" className="relative px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            HERO - text + animated stage (code-editor mock + pills + chips)
           ============================================================ */}
        <section
          className="mx-auto w-full max-w-7xl pb-20 pt-16 sm:pt-24 lg:pt-28"
          aria-labelledby="hero-title"
        >
          <div className="grid items-center gap-x-12 gap-y-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal space-y-7">
              {/* ShiftDeploy flagship banner - high-visibility entry point to the core product */}
              <a
                href={SHIFTDEPLOY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-emerald-400/40 bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-transparent px-3 py-1.5 text-xs font-semibold text-emerald-100 shadow-[0_0_24px_rgba(16,185,129,0.18)] transition-all hover:border-emerald-300/70 hover:from-emerald-500/25 hover:shadow-[0_0_32px_rgba(16,185,129,0.35)] sm:text-sm"
                aria-label="Visit our flagship platform ShiftDeploy"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                </span>
                <span className="hidden sm:inline">Looking for our flagship platform?</span>
                <span className="sm:hidden">Our flagship platform</span>
                <span className="font-bold text-emerald-300">ShiftDeploy</span>
                <span className="text-emerald-200 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <h1
                id="hero-title"
                className="font-[var(--font-secondary)] text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-slate-50 sm:text-6xl lg:text-[4.25rem]"
              >
                Core Services that{" "}
                <span className="gradient-text">power</span>
                <br className="hidden sm:block" /> your vision.
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                From custom web platforms to enterprise-grade applications and mobile experiences - we architect, design, and build software that scales with your ambition.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <a href="#services" className="btn-primary">
                  Explore Services
                  {Icon.arrow}
                </a>
                <a href="#tech" className="btn-ghost">View Tech Stack</a>
              </div>
            </div>

            {/* HERO CONSOLE - premium ops dashboard */}
            <aside
              className="reveal delay-2 console-shell"
              aria-label="Live production console snapshot"
            >
              <div className="console" role="img" aria-label="Production operations dashboard preview">
                <div className="console-header">
                  <span className="live-pill">
                    <span className="live-dot" aria-hidden="true" />
                    Live
                  </span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span className="text-slate-400">Production</span>
                  <span className="console-region">us-east-1</span>
                </div>

                <div className="console-body">
                  <div className="kpi-hero-row">
                    <div>
                      <div className="kpi-hero-val">99.9%</div>
                      <div className="kpi-hero-lab">Uptime · 30-day SLO</div>
                      <span className="kpi-hero-trend">
                        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
                          <path d="M2 8L6 4L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        +0.1%
                      </span>
                    </div>

                    <svg className="spark" viewBox="0 0 140 56" aria-hidden="true">
                      <defs>
                        <linearGradient id="sparkStroke" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="0" stopColor="#0d9488" stopOpacity="0.4" />
                          <stop offset="0.6" stopColor="#10b981" />
                          <stop offset="1" stopColor="#34d399" />
                        </linearGradient>
                        <linearGradient id="sparkAreaFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0" stopColor="#34d399" stopOpacity="0.28" />
                          <stop offset="1" stopColor="#34d399" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        className="spark-area"
                        d="M0,50 L20,44 L40,46 L60,36 L80,30 L100,22 L120,12 L140,4 L140,56 L0,56 Z"
                      />
                      <path
                        className="spark-line"
                        d="M0,50 L20,44 L40,46 L60,36 L80,30 L100,22 L120,12 L140,4"
                      />
                      <path
                        className="spark-flow"
                        d="M0,50 L20,44 L40,46 L60,36 L80,30 L100,22 L120,12 L140,4"
                      />
                      <path
                        className="spark-flow spark-flow-2"
                        d="M0,50 L20,44 L40,46 L60,36 L80,30 L100,22 L120,12 L140,4"
                      />
                      <circle className="spark-tip-ring" cx="138" cy="4" r="3" />
                      <circle className="spark-tip" cx="138" cy="4" r="2.5" />
                    </svg>
                  </div>

                  <div className="kpi-tile-grid">
                    <div className="kpi-tile">
                      <div className="kpi-tile-val">210<small>ms</small></div>
                      <div className="kpi-tile-lab">p95 Latency</div>
                    </div>
                    <div className="kpi-tile">
                      <div className="kpi-tile-val">18</div>
                      <div className="kpi-tile-lab">Deploys / wk</div>
                    </div>
                    <div className="kpi-tile">
                      <div className="kpi-tile-val">4.8<small>K</small></div>
                      <div className="kpi-tile-lab">Req / min</div>
                    </div>
                  </div>
                </div>

                <div className="console-footer">
                  <span className="console-footer-label">Stack</span>
                  <div className="tech-row">
                    <span className="tech-row-item">React</span>
                    <span className="tech-row-sep">·</span>
                    <span className="tech-row-item">Next.js</span>
                    <span className="tech-row-sep">·</span>
                    <span className="tech-row-item">AWS</span>
                    <span className="tech-row-sep">·</span>
                    <span className="tech-row-item">Postgres</span>
                  </div>
                </div>
              </div>

              <div className="console-badge" aria-label="Security posture">
                <span className="bx">{Icon.check}</span>
                GDPR · TLS 1.3
              </div>
            </aside>
          </div>
        </section>

        {/* ============================================================
            SERVICES V2 - numbered cards, tech tags, sliding CTA arrow
           ============================================================ */}
        <section
          id="services"
          aria-labelledby="services-title"
          className="mx-auto w-full max-w-7xl py-20"
        >
          <div className="mb-14 mx-auto max-w-3xl text-center">
            <span className="eyebrow inline-flex items-center justify-center gap-2">
              <span className="text-emerald-300">{Icon.layers}</span>
              Our Core Services
            </span>
            <h2
              id="services-title"
              className="mt-4 font-[var(--font-secondary)] text-3xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-5xl"
            >
              Everything you need to ship{" "}
              <span className="gradient-text">world-class software.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Six pillars of expertise covering the entire product lifecycle - strategy, design, engineering, and scale.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <article
                key={service.title}
                className={`service-card-v2 reveal delay-${Math.min(idx + 1, 4)}`}
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                aria-label={`Learn more about ${service.title}`}
                onClick={() => setOpenService(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenService(idx);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <span className="service-num">{`0${idx + 1}`}</span>

                <span className="service-icon-v2" aria-hidden="true">
                  {service.icon}
                </span>

                <h3 className="mt-5 font-[var(--font-secondary)] text-xl font-bold text-slate-50">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>

                <div className="service-highlight" aria-hidden="true">
                  <span className="hl-icon">{Icon.zap}</span>
                  {service.highlight}
                </div>

                <div className="service-tags" aria-hidden="true">
                  {service.tags.slice(0, 3).map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>

                <span className="service-cta">
                  Learn more {Icon.arrow}
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* ============================================================
            JOURNEY V2 - timeline with icons, outcomes & connector
           ============================================================ */}
        <section
          aria-labelledby="journey-title"
          className="mx-auto w-full max-w-7xl py-20"
        >
          <div className="mb-12 text-center">
            <span className="eyebrow inline-flex items-center justify-center gap-2">
              <span className="text-emerald-300">{Icon.spark}</span>
              How We Deliver
            </span>
            <h2
              id="journey-title"
              className="mt-4 font-[var(--font-secondary)] text-3xl font-extrabold tracking-tight text-slate-50 sm:text-5xl"
            >
              A structured service journey,{" "}
              <span className="gradient-text">end to end.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Each phase is paced by what your users actually need next - not a rigid template.
            </p>
          </div>

          {/* Top progress timeline - connects the 3 phases visually */}
          <div className="journey-timeline" aria-hidden="true">
            <div className="jt-track" />
            <div className="jt-progress" />
            {journeySteps.map((s, idx) => (
              <div key={s.step} className="jt-stop" style={{ left: `${idx * 50}%` }}>
                <div className="jt-dot">
                  <span>{idx + 1}</span>
                </div>
                <div className="jt-label">{s.phase}</div>
              </div>
            ))}
          </div>

          <ol className="journey-grid-v3" role="list">
            {journeySteps.map((step) => (
              <li key={step.step} className="journey-card-v3">
                <div className="jc-header">
                  <span className="jc-icon" aria-hidden="true">{step.icon}</span>
                  <span className="jc-phase">
                    <span className="pdot" aria-hidden="true" />
                    {step.duration}
                  </span>
                </div>

                <span className="jc-step-tag">Phase {step.step} · {step.phase}</span>
                <h3 className="mt-2 font-[var(--font-secondary)] text-xl font-bold text-slate-50">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {step.detail}
                </p>

                <div className="jc-deliverables">
                  <span className="jc-deliverables-label">
                    {Icon.check} What we deliver
                  </span>
                  <ul className="jc-outcomes" aria-label={`Deliverables for ${step.title}`}>
                    {step.outcomes.map((o) => (
                      <li key={o} className="jc-outcome">
                        <span className="check-bg" aria-hidden="true">{Icon.check}</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ============================================================
            TECH STACK - categorised chips
           ============================================================ */}
        <section
          id="tech"
          aria-labelledby="tech-title"
          className="mx-auto w-full max-w-7xl py-20"
        >
          <div className="mb-12 text-center">
            <span className="eyebrow inline-flex items-center justify-center gap-2">
              <span className="text-emerald-300">{Icon.spark}</span>
              Technology Arsenal
            </span>
            <h2
              id="tech-title"
              className="mt-4 font-[var(--font-secondary)] text-3xl font-extrabold tracking-tight text-slate-50 sm:text-5xl"
            >
              Industry-leading tools.{" "}
              <span className="gradient-text">Built for scale.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              We pick the right stack for the job - from web to mobile to desktop, our engineers are fluent across the modern ecosystem.
            </p>
          </div>

          <div className="tech-grid">
            {techStack.map((group, idx) => (
              <article
                key={group.category}
                className={`tech-category-card reveal delay-${Math.min(idx + 1, 4)}`}
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                aria-label={`Explore ${group.category} stack`}
                onClick={() => setOpenTech(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenTech(idx);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="tcc-corner-glow" aria-hidden="true" />

                <div className="tcc-header">
                  <span className="tcc-icon" aria-hidden="true">
                    <span className="tcc-icon-orbit" aria-hidden="true" />
                    {group.icon}
                  </span>
                  <span className="tcc-count">
                    <span className="tcc-count-pulse" aria-hidden="true" />
                    <span className="tcc-count-num">{group.items.length}</span>
                    <span className="tcc-count-lbl">techs</span>
                  </span>
                </div>

                <span className="tcc-eyebrow">Stack</span>
                <h3 className="tcc-name">{group.category}</h3>
                <p className="tcc-tagline">{group.tagline}</p>

                <div className="tcc-chips" role="list">
                  {group.items.map((item) => (
                    <span key={item} className="tcc-chip" role="listitem" tabIndex={0}>
                      <span className="tcc-chip-dot" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============================================================
            CTA
           ============================================================ */}
        <section
          id="contact"
          aria-labelledby="cta-title"
          className="mx-auto w-full max-w-7xl py-16"
        >
          <div className="aurora px-6 py-14 sm:px-12 sm:py-20 text-center">
            <h2
              id="cta-title"
              className="font-[var(--font-secondary)] text-3xl font-extrabold tracking-tight text-slate-50 sm:text-5xl"
            >
              Let&apos;s build something{" "}
              <span className="gradient-text">extraordinary.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Tell us about your project - we&apos;ll respond within 24 hours with a roadmap.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={CUSTOMER_PORTAL_URL} className="btn-primary">
                Start Your Transformation
                {Icon.arrow}
              </a>
              <a
                href={SHIFTDEPLOY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost group"
                aria-label="Explore ShiftDeploy - our flagship deployment platform"
              >
                <span className="text-emerald-300">{Icon.rocket}</span>
                Explore ShiftDeploy
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
              {["24-hour response", "Senior-only engineers", "Outcome-driven delivery"].map((point) => (
                <li key={point} className="inline-flex items-center gap-1.5">
                  <span className="text-emerald-300">{Icon.check}</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>



      {/* ============================================================
          SERVICE DETAIL MODAL
         ============================================================ */}
      {active && openService !== null && (
        <div
          className="modal-backdrop"
          onClick={() => setOpenService(null)}
          role="presentation"
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setOpenService(null)}
              aria-label="Close"
            >
              {Icon.close}
            </button>

            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-icon" aria-hidden="true">
                  {active.icon}
                </span>
                <div>
                  <span className="modal-num">{`Service 0${openService + 1}`}</span>
                  <h3 id="modal-title" className="modal-title">
                    {active.title}
                  </h3>
                </div>
              </div>

              <p className="modal-desc">{active.details}</p>

              <div className="modal-stat">
                <span className="ms-icon">{Icon.zap}</span>
                <span>{active.highlight}</span>
              </div>

              <h4 className="modal-section-title">What you get</h4>
              <ul className="modal-list" role="list">
                {active.deliverables.map((d) => (
                  <li key={d} className="modal-list-item">
                    <span className="ml-check" aria-hidden="true">{Icon.check}</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <h4 className="modal-section-title">Tech stack</h4>
              <div className="modal-tags">
                {active.tags.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>

              <div className="modal-cta-row">
                <a href={CUSTOMER_PORTAL_URL} className="btn-primary">
                  Start a project
                  {Icon.arrow}
                </a>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setOpenService(null)}
                >
                  Browse other services
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TECH CATEGORY DETAIL MODAL
         ============================================================ */}
      {activeTech && openTech !== null && (
        <div
          className="modal-backdrop"
          onClick={() => setOpenTech(null)}
          role="presentation"
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="tech-modal-title"
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setOpenTech(null)}
              aria-label="Close"
            >
              {Icon.close}
            </button>

            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-icon" aria-hidden="true">
                  {activeTech.icon}
                </span>
                <div>
                  <span className="modal-num">
                    {`${activeTech.items.length} Technologies`}
                  </span>
                  <h3 id="tech-modal-title" className="modal-title">
                    {activeTech.category}
                  </h3>
                </div>
              </div>

              <p className="modal-desc">{activeTech.description}</p>

              <div className="modal-stat">
                <span className="ms-icon">{Icon.zap}</span>
                <span>{activeTech.tagline}</span>
              </div>

              <h4 className="modal-section-title">Technologies we use</h4>
              <ul className="modal-list" role="list">
                {activeTech.items.map((t) => (
                  <li key={t} className="modal-list-item">
                    <span className="ml-check" aria-hidden="true">{Icon.check}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="modal-cta-row">
                <a href={CUSTOMER_PORTAL_URL} className="btn-primary">
                  Discuss your project
                  {Icon.arrow}
                </a>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setOpenTech(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
