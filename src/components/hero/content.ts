export type TwoLineLabel = [string, string];
export type HeroIconKey =
  | "users"
  | "database"
  | "refreshCw"
  | "heart"
  | "target"
  | "trendingUp"
  | "star"
  | "alertTriangle"
  | "cpu"
  | "trophy"
  | "checkCircle2";

export type FlowAnimation = "rotate" | "scale";
export type OverlayMode = "scale" | "pulse";

// Style token contract for each visual card lane (source, processor, result).
type VisualCardStyleConfig = {
  source: {
    shadowClass: string;
    pulseGlow?: boolean;
    spinRing?: boolean;
  };
  processor: {
    animation: FlowAnimation;
    beamDuration: number;
    beamShadowClass: string;
    nodeShadowClass: string;
  };
  result: {
    overlayMode: OverlayMode;
    shadowClass: string;
  };
};

// Icon token contract so icon selection remains data-driven.
type VisualCardIconConfig = {
  introIconKey: HeroIconKey;
  sourceIconKey: HeroIconKey;
  processorIconKey: HeroIconKey;
  resultIconKey: HeroIconKey;
  metricOneIconKey: HeroIconKey;
  metricTwoIconKey: HeroIconKey;
};

// Single source of truth for hero copy, style tokens, timing, and card config.
export const heroContent = {
  // Top badge and rotating headline copy.
  badge: "Beyond Traditional Development",
  headingPrefix: "Architecting For You",
  rotatingWords: [
    "SAAS Applications",
    "Custom CRMs",
    "Enterprise AI",
    "Web Platforms",
    "Mobile Applications",
    "Client Engagements",
    "Smart ROIs",
    "System Integrations",
  ],
  // Supporting paragraph with highlighted fragments.
  description: {
    beforeFirstHighlight: "We don't just write code-we solve complex business bottlenecks. From high-converting ",
    firstHighlight: "CRM platforms",
    betweenHighlights: " to robust ",
    secondHighlight: "Technical Partnerships",
    afterSecondHighlight: ", we turn raw ideas into your ultimate competitive advantage.",
  },
  // Primary and secondary CTA labels/links.
  actions: {
    primaryLabel: "Start Your Transformation",
    secondaryLabel: "Our Core Services",
    secondaryHref: "https://core-services-kappa.vercel.app/",
  },
  // Trust strip values and labels.
  trust: {
    avatarLetters: ["A", "K", "T", "M"],
    plusLabel: "15+",
    stars: [1, 2, 3, 4, 5],
    caption: "Empowering visionary brands worldwide",
    qualityLabel: "Premium Quality",
  },
  // Visual dashboard motion, shell classes, and per-card settings.
  visual: {
    timing: {
      cardSwitchIntervalMs: 5000,
      shellFloatDurationSec: 7,
      cardTransitionDurationSec: 0.5,
    },
    shell: {
      glowClass: "absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/20 to-primary/20 blur-[80px] rounded-full mix-blend-screen animate-pulse pointer-events-none",
      containerClass:
        "relative w-full h-full max-h-[500px] sm:max-h-[480px] rounded-3xl bg-background/80 border border-white/10 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-5 sm:p-7 flex flex-col overflow-hidden",
      topLineClass: "absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50",
      rootClass:
        "relative w-full aspect-[4/5] sm:aspect-video lg:aspect-[4/3] max-w-[600px] flex items-center justify-center mt-2 sm:mt-4 lg:mt-0 perspective-[1000px] z-10",
    },
    indicators: {
      crmAriaLabel: "Show CRM",
      problemAriaLabel: "Show Problem Solving",
      baseClass: "h-1.5 rounded-full transition-all duration-300",
      inactiveClass: "w-4 bg-slate-700",
      activeClass: "w-8 bg-primary",
      crmActiveShadowClass: "shadow-[0_0_10px_rgba(16,185,129,0.8)]",
      problemActiveShadowClass: "shadow-[0_0_10px_rgba(168,85,247,0.8)]",
    },
    cardMotion: {
      initial: { opacity: 0, x: -20, filter: "blur(8px)" },
      animate: { opacity: 1, x: 0, filter: "blur(0px)" },
      exit: { opacity: 0, x: 20, filter: "blur(8px)" },
      ease: "easeOut",
    },
    frame: {
      containerClass: "flex-1 flex flex-col gap-3 sm:gap-4 relative h-full",
      panelClass:
        "flex items-center justify-between bg-slate-900/80 rounded-xl p-3 sm:p-5 border border-slate-700/50 relative overflow-hidden group",
      overlayClass: "absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50",
      metricsGridClass: "grid grid-cols-2 gap-3 sm:gap-4 flex-1",
    },
    crm: {
      icons: {
        introIconKey: "users",
        sourceIconKey: "database",
        processorIconKey: "refreshCw",
        resultIconKey: "heart",
        metricOneIconKey: "target",
        metricTwoIconKey: "trendingUp",
      } as VisualCardIconConfig,
      title: "CRM Intelligence",
      subtitle: "Automating Connections into Revenue",
      sourceLabel: ["Data", "Ingestion"] as TwoLineLabel,
      processorLabel: "Auto-Nurture",
      resultLabel: ["Loyal", "Clients"] as TwoLineLabel,
      metricOneValue: "3x",
      metricOneLabel: "Faster Conversions",
      metricTwoValue: "+300%",
      metricTwoLabel: "Revenue Growth",
      style: {
        source: {
          shadowClass: "shadow-[0_0_15px_rgba(59,130,246,0.15)]",
          pulseGlow: true,
        },
        processor: {
          animation: "rotate",
          beamDuration: 2,
          beamShadowClass: "shadow-[0_0_10px_rgba(34,211,238,0.8)]",
          nodeShadowClass: "shadow-[0_0_15px_rgba(34,211,238,0.2)]",
        },
        result: {
          overlayMode: "scale",
          shadowClass: "shadow-[0_0_15px_rgba(99,102,241,0.3)]",
        },
      } as VisualCardStyleConfig,
    },
    problem: {
      icons: {
        introIconKey: "star",
        sourceIconKey: "alertTriangle",
        processorIconKey: "cpu",
        resultIconKey: "trophy",
        metricOneIconKey: "trendingUp",
        metricTwoIconKey: "checkCircle2",
      } as VisualCardIconConfig,
      title: "Strategic Problem Solving",
      subtitle: "Transforming Roadblocks into the Best Solution",
      sourceLabel: ["Client", "Challenge"] as TwoLineLabel,
      processorLabel: "Our Strategy",
      resultLabel: ["Best", "Solution"] as TwoLineLabel,
      metricOneValue: "10x",
      metricOneLabel: "Value ROI Delivered",
      metricTwoValue: "100%",
      metricTwoLabel: "Goal Achievement",
      style: {
        source: {
          shadowClass: "shadow-[0_0_15px_rgba(244,63,94,0.15)]",
          spinRing: true,
        },
        processor: {
          animation: "scale",
          beamDuration: 1.5,
          beamShadowClass: "shadow-[0_0_10px_rgba(168,85,247,0.8)]",
          nodeShadowClass: "shadow-[0_0_15px_rgba(168,85,247,0.2)]",
        },
        result: {
          overlayMode: "pulse",
          shadowClass: "shadow-[0_0_15px_rgba(52,211,153,0.3)]",
        },
      } as VisualCardStyleConfig,
    },
  },
};
