import type { Metadata } from "next";
import { AiDataScienceExperience } from "@/components/ai-data-science/AiDataScienceExperience";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, canonical, faqJsonLd, serviceJsonLd } from "@/lib/seo";

const AI_DESCRIPTION =
  "BabulTech delivers enterprise AI and data science — LLMs, custom AI agents, predictive analytics, computer vision, and MLOps. Production-grade, end to end.";

export const metadata: Metadata = {
  title: "AI & Data Science | Enterprise AI, LLMs & MLOps",
  description: AI_DESCRIPTION,
  alternates: { canonical: canonical("/ai-data-science") },
  openGraph: {
    url: canonical("/ai-data-science"),
    title: "AI & Data Science | Enterprise AI, LLMs & MLOps",
    description: AI_DESCRIPTION,
  },
  twitter: {
    title: "AI & Data Science | Enterprise AI, LLMs & MLOps",
    description: AI_DESCRIPTION,
  },
};

const aiFaqs = [
  {
    question: "Which AI models and platforms does BabulTech work with?",
    answer:
      "We build with frontier LLMs from OpenAI (GPT-4/5), Anthropic (Claude), and open models on Hugging Face. We deploy on AWS SageMaker, Azure AI Foundry, Google Vertex AI, and self-hosted infrastructure depending on data residency and cost requirements.",
  },
  {
    question: "Can BabulTech integrate AI into our existing systems?",
    answer:
      "Yes. We specialize in retrieval-augmented generation (RAG) over your private data, AI agents that orchestrate Salesforce, Boomi, and internal APIs, and ML pipelines that connect to your data warehouse — without ripping out what already works.",
  },
  {
    question: "How do you handle data privacy and compliance?",
    answer:
      "Every engagement starts with a data classification and threat model. We support private VPC deployments, on-prem inference, PII redaction, and audit logging. We work within HIPAA, GDPR, and SOC 2 boundaries depending on the industry.",
  },
  {
    question: "What is a typical AI engagement timeline?",
    answer:
      "Discovery and a working proof-of-concept ship in 2–4 weeks. Production-ready integration with monitoring and MLOps usually lands in 8–16 weeks. We start narrow with one measurable use case before scaling.",
  },
];

export default function AiDataSciencePage() {
  return (
    <>
      <JsonLd
        id="ld-ai-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "AI & Data Science", url: "/ai-data-science" },
        ])}
      />
      <JsonLd
        id="ld-ai-services"
        data={[
          serviceJsonLd({
            name: "Generative AI & LLM Engineering",
            description:
              "Custom GPT, Claude, and open-model integration with retrieval-augmented generation, fine-tuning, and prompt engineering for enterprise teams.",
            url: "/ai-data-science",
            serviceType: "Generative AI",
          }),
          serviceJsonLd({
            name: "AI Agents & Workflow Automation",
            description:
              "Custom AI agents built with LangChain, n8n, and orchestration layers that connect Salesforce, Boomi, and internal APIs.",
            url: "/ai-data-science",
            serviceType: "AI Agents",
          }),
          serviceJsonLd({
            name: "Predictive Analytics & Machine Learning",
            description:
              "Forecasting, classification, recommendation engines, and time-series ML built with Python, scikit-learn, PyTorch, and TensorFlow.",
            url: "/ai-data-science",
            serviceType: "Machine Learning",
          }),
          serviceJsonLd({
            name: "Computer Vision",
            description:
              "Image classification, object detection, OCR, and quality-control vision systems for manufacturing, retail, and healthcare.",
            url: "/ai-data-science",
            serviceType: "Computer Vision",
          }),
          serviceJsonLd({
            name: "Natural Language Processing",
            description:
              "Entity extraction, sentiment analysis, summarization, semantic search, and conversational interfaces over private data.",
            url: "/ai-data-science",
            serviceType: "Natural Language Processing",
          }),
          serviceJsonLd({
            name: "Data Engineering & MLOps",
            description:
              "Production data pipelines, feature stores, model deployment, monitoring, and continuous training infrastructure on AWS, Azure, and GCP.",
            url: "/ai-data-science",
            serviceType: "MLOps",
          }),
        ]}
      />
      <JsonLd id="ld-ai-faq" data={faqJsonLd(aiFaqs)} />
      <AiDataScienceExperience />
    </>
  );
}
