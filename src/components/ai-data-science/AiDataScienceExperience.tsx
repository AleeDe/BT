"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  Cpu,
  Database,
  Eye,
  LineChart,
  MessageSquare,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const PRIMARY_CTA = "/contact";

const capabilities = [
  {
    icon: Sparkles,
    title: "Generative AI & LLMs",
    description:
      "Custom GPT, Claude, and open-source LLM integration with retrieval-augmented generation over your private data.",
    bullets: ["RAG over private docs", "Fine-tuning & evals", "Prompt engineering"],
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Multi-step AI agents that orchestrate Salesforce, Boomi, and internal APIs — with human-in-the-loop where it counts.",
    bullets: ["LangChain & LangGraph", "n8n workflows", "Tool-use orchestration"],
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "Forecasting, classification, churn, and recommendation models that ship to production with measurable lift.",
    bullets: ["Time-series forecasting", "Recommendation engines", "Anomaly detection"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Image classification, object detection, OCR, and visual QA for manufacturing, retail, and healthcare workflows.",
    bullets: ["Defect detection", "Document OCR", "Real-time inference"],
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description:
      "Entity extraction, sentiment, semantic search, summarization, and conversational interfaces over enterprise data.",
    bullets: ["Semantic search", "Sentiment & intent", "Auto-summarization"],
  },
  {
    icon: Workflow,
    title: "Data Engineering & MLOps",
    description:
      "Production pipelines, feature stores, model deployment, monitoring, and continuous training on cloud-native stacks.",
    bullets: ["Pipelines & feature stores", "Model deployment", "Drift monitoring"],
  },
];

const techStack = [
  "OpenAI",
  "Anthropic Claude",
  "LangChain",
  "Hugging Face",
  "Python",
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
  "Pandas",
  "n8n",
  "AWS SageMaker",
  "Azure AI Foundry",
  "Vertex AI",
  "Pinecone",
  "Weaviate",
  "Apache Airflow",
];

const useCases = [
  {
    industry: "Banking & Finance",
    title: "Fraud Detection & Credit Scoring",
    description:
      "Gradient-boosted classifiers and graph models that flag suspicious transactions in milliseconds and lift approval accuracy.",
  },
  {
    industry: "Retail & eCommerce",
    title: "Demand Forecasting & Recommendations",
    description:
      "Time-series forecasting that powers buying decisions and personalized recommendation engines for higher conversion.",
  },
  {
    industry: "Healthcare",
    title: "Clinical Decision Support",
    description:
      "HIPAA-compliant NLP over patient records and imaging models that surface high-risk cases earlier in the workflow.",
  },
  {
    industry: "Manufacturing",
    title: "Predictive Maintenance & Visual QA",
    description:
      "Sensor analytics that predict failures before they cost downtime, plus computer vision for assembly-line defect detection.",
  },
  {
    industry: "Customer Operations",
    title: "AI Support Agents",
    description:
      "Tier-1 deflection agents grounded in your knowledge base, escalating cleanly to humans with full context handoff.",
  },
  {
    industry: "Sales & Marketing",
    title: "Pipeline Intelligence",
    description:
      "Lead scoring, churn prediction, and AI-drafted outreach that plugs directly into Salesforce and HubSpot.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We audit your data, systems, and goals — then identify the highest-leverage AI opportunity with a measurable success metric.",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "Architecture, model selection, build vs. API trade-offs, data governance, and compliance — documented before code lands.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Working proof-of-concept in 2–4 weeks. We iterate with your team, evaluate against the success metric, and harden for production.",
  },
  {
    step: "04",
    title: "Operate",
    description:
      "Production deployment with monitoring, drift detection, retraining pipelines, and on-call support tailored to your team.",
  },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Privacy-first deployments" },
  { icon: Brain, label: "Frontier-model expertise" },
  { icon: Cpu, label: "Production-grade MLOps" },
  { icon: Network, label: "Integration-ready agents" },
];

const heroSignals = [
  { label: "Data quality", value: "98%", width: "98%" },
  { label: "Model confidence", value: "94%", width: "94%" },
  { label: "Manual work reduced", value: "61%", width: "61%" },
];

const heroPipeline = [
  { icon: Database, label: "Private Data", detail: "CRM + Docs" },
  { icon: Brain, label: "Reasoning", detail: "RAG + Evals" },
  { icon: Workflow, label: "Automation", detail: "APIs + Agents" },
];

function AiHeroAnimation({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: 36, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      className="relative hidden min-h-[590px] lg:block"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_25%,rgba(16,185,129,0.22),transparent_34%),linear-gradient(145deg,rgba(15,23,42,0.88),rgba(2,6,23,0.52))] shadow-[0_30px_100px_-50px_rgba(16,185,129,0.65)]" />
      <div className="absolute inset-6 rounded-[1.5rem] bg-slate-950/55 backdrop-blur-xl" />

      {!reduceMotion && (
        <>
          <motion.div
            className="absolute left-16 right-16 top-32 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
            animate={{ opacity: [0.25, 0.9, 0.25], scaleX: [0.72, 1, 0.72] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-36 left-20 right-20 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
            animate={{ opacity: [0.2, 0.75, 0.2], scaleX: [1, 0.76, 1] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="relative z-10 flex h-full flex-col p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Live AI Command Center
            </p>
            <h3 className="mt-2 text-2xl font-extrabold text-white">Decision Engine</h3>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3">
          {heroPipeline.map(({ icon: Icon, label, detail }, index) => (
            <motion.div
              key={label}
              className="relative rounded-2xl bg-white/[0.05] p-3.5"
              animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{
                duration: 3.4,
                delay: index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-center text-xs font-bold text-slate-100 xl:text-sm">{label}</p>
              <p className="mt-1 text-center text-[11px] text-slate-500">{detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-7 rounded-3xl bg-slate-950/70 p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-200">Opportunity detected</span>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary">
              High impact
            </span>
          </div>

          <div className="mt-5 space-y-3.5">
            {heroSignals.map((signal, index) => (
              <div key={signal.label}>
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{signal.label}</span>
                  <span className="font-bold text-slate-100">{signal.value}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-300"
                    initial={reduceMotion ? false : { width: 0 }}
                    animate={{ width: signal.width }}
                    transition={{ duration: 1.1, delay: 0.45 + index * 0.18, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-5 rounded-3xl bg-white/[0.06] p-5"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Recommended next action</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                Automate ticket triage, summarize customer intent, and route priority cases to the
                right team with measurable SLA lift.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function AiDataScienceExperience() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid items-center gap-14 lg:grid-cols-[1fr_0.86fr]"
          >
            <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md text-xs font-semibold tracking-wide text-slate-200 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              Enterprise AI &amp; Data Science
            </span>

            <h1 className="text-[2.75rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="block text-slate-200">Turn Data Into</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-emerald-300">
                Decisions That Compound.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              We build production AI — LLM agents, predictive models, computer vision, and the
              data pipelines that keep them honest. Salesforce-, Boomi-, and cloud-native, deployed
              with the compliance posture your industry demands.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={PRIMARY_CTA}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary hover:bg-primary/90 text-foreground font-semibold transition-all shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:shadow-[0_0_32px_rgba(16,185,129,0.55)]"
              >
                Start Your AI Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold transition-colors"
              >
                Explore Capabilities
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-300 leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            </div>

            <AiHeroAnimation reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-24 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Capabilities
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Six disciplines. One delivery team.
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
              We pick the smallest model and simplest architecture that solves your problem — and
              level up only when the metrics demand it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-7 hover:border-primary/40 hover:bg-slate-900/70 transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-colors pointer-events-none" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{capability.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">
                      {capability.description}
                    </p>
                    <ul className="space-y-2">
                      {capability.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-2 text-xs text-slate-500"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Stack
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Best tool for the problem — never tool first.
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              We&apos;re comfortable across closed and open ecosystems, frontier APIs and
              self-hosted inference. The choice always serves the use case, not vice versa.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-4 py-2.5 rounded-full border border-slate-700/60 bg-slate-900/60 text-sm text-slate-300 font-medium hover:border-primary/40 hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Use Cases
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Where AI earns its keep.
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
              Real outcomes from production engagements. Each one started narrow with a measurable
              metric — and only scaled once it was proven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={useCase.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-900/20 p-7 hover:border-primary/30 transition-colors"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 mb-4">
                  {useCase.industry}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Engagement
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              From idea to production in four steps.
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
              Our process is biased toward shipping. We start narrow, measure honestly, and scale
              what works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-7"
              >
                <span className="text-5xl font-black text-primary/30">{step.step}</span>
                <h3 className="mt-3 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH/CTA */}
      <section className="py-24 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl blur-2xl" />

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Ready to ship AI that actually works?
          </h2>
          <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us the problem you&apos;re trying to solve. We&apos;ll come back with a plan, a
            timeline, and the smallest viable starting point.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={PRIMARY_CTA}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-foreground font-semibold transition-all shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:shadow-[0_0_32px_rgba(16,185,129,0.55)]"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold transition-colors"
            >
              See Case Studies
              <Search className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 text-xs text-slate-500">
            <Database className="w-4 h-4" />
            <span>Privacy-first · Production-grade · Compliance-aware</span>
          </div>
        </div>
      </section>
    </main>
  );
}
