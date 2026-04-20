"use client";

import { motion } from "framer-motion";
import type { TwoLineLabel } from "./content";
import {
  CardIntro,
  FlowNode,
  MetricTile,
  ProcessorNode,
  ResultNode,
} from "./HeroVisualPrimitives";
import { heroContent } from "./content";
import type { FlowAnimation, OverlayMode } from "./content";
import type { HeroIconKey } from "./content";
import { heroIconMap } from "./heroIconMap";

type VisualCardContent = {
  icons: {
    introIconKey: HeroIconKey;
    sourceIconKey: HeroIconKey;
    processorIconKey: HeroIconKey;
    resultIconKey: HeroIconKey;
    metricOneIconKey: HeroIconKey;
    metricTwoIconKey: HeroIconKey;
  };
  title: string;
  subtitle: string;
  sourceLabel: TwoLineLabel;
  processorLabel: string;
  resultLabel: TwoLineLabel;
  metricOneValue: string;
  metricOneLabel: string;
  metricTwoValue: string;
  metricTwoLabel: string;
  style: {
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
};

type VisualCardProps = {
  reduceMotion: boolean;
  content: VisualCardContent;
};

// Shared frame used by both card variants for process flow lanes.
function CardFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className={heroContent.visual.frame.containerClass}>
      <div className={heroContent.visual.frame.panelClass}>
        <div className={heroContent.visual.frame.overlayClass} />
        {children}
      </div>
    </div>
  );
}

// CRM-focused visual card variant.
export function CrmVisualCard({ reduceMotion, content }: VisualCardProps) {
  const IntroIcon = heroIconMap[content.icons.introIconKey];
  const SourceIcon = heroIconMap[content.icons.sourceIconKey];
  const ProcessorIcon = heroIconMap[content.icons.processorIconKey];
  const ResultIcon = heroIconMap[content.icons.resultIconKey];
  const MetricOneIcon = heroIconMap[content.icons.metricOneIconKey];
  const MetricTwoIcon = heroIconMap[content.icons.metricTwoIconKey];

  return (
    <motion.div
      key="crm"
      initial={heroContent.visual.cardMotion.initial}
      animate={heroContent.visual.cardMotion.animate}
      exit={heroContent.visual.cardMotion.exit}
      transition={{
        duration: heroContent.visual.timing.cardTransitionDurationSec,
        ease: heroContent.visual.cardMotion.ease as "easeOut",
      }}
      className="absolute inset-0 flex flex-col h-full"
    >
      {/* Card intro line with icon, title, and subtitle. */}
      <CardIntro icon={IntroIcon} title={content.title} subtitle={content.subtitle} />

      {/* Core flow: source -> processor -> result. */}
      <CardFrame>
        <FlowNode
          icon={SourceIcon}
          label={content.sourceLabel}
          reduceMotion={reduceMotion}
          pulseGlow={content.style.source.pulseGlow}
          spinRing={content.style.source.spinRing}
          shadowClass={content.style.source.shadowClass}
        />
        <ProcessorNode
          icon={ProcessorIcon}
          label={content.processorLabel}
          reduceMotion={reduceMotion}
          animation={content.style.processor.animation}
          beamDuration={content.style.processor.beamDuration}
          beamShadowClass={content.style.processor.beamShadowClass}
          nodeShadowClass={content.style.processor.nodeShadowClass}
        />
        <ResultNode
          icon={ResultIcon}
          label={content.resultLabel}
          reduceMotion={reduceMotion}
          overlayMode={content.style.result.overlayMode}
          shadowClass={content.style.result.shadowClass}
        />
      </CardFrame>

      {/* Bottom KPI tiles. */}
      <div className={heroContent.visual.frame.metricsGridClass}>
        <MetricTile icon={MetricOneIcon} value={content.metricOneValue} label={content.metricOneLabel} />
        <MetricTile icon={MetricTwoIcon} value={content.metricTwoValue} label={content.metricTwoLabel} />
      </div>
    </motion.div>
  );
}

// Problem-solving visual card variant.
export function ProblemVisualCard({ reduceMotion, content }: VisualCardProps) {
  const IntroIcon = heroIconMap[content.icons.introIconKey];
  const SourceIcon = heroIconMap[content.icons.sourceIconKey];
  const ProcessorIcon = heroIconMap[content.icons.processorIconKey];
  const ResultIcon = heroIconMap[content.icons.resultIconKey];
  const MetricOneIcon = heroIconMap[content.icons.metricOneIconKey];
  const MetricTwoIcon = heroIconMap[content.icons.metricTwoIconKey];

  return (
    <motion.div
      key="problem"
      initial={heroContent.visual.cardMotion.initial}
      animate={heroContent.visual.cardMotion.animate}
      exit={heroContent.visual.cardMotion.exit}
      transition={{
        duration: heroContent.visual.timing.cardTransitionDurationSec,
        ease: heroContent.visual.cardMotion.ease as "easeOut",
      }}
      className="absolute inset-0 flex flex-col h-full"
    >
      {/* Card intro line with icon, title, and subtitle. */}
      <CardIntro icon={IntroIcon} title={content.title} subtitle={content.subtitle} />

      {/* Core flow: challenge -> strategy -> best solution. */}
      <CardFrame>
        <FlowNode
          icon={SourceIcon}
          label={content.sourceLabel}
          reduceMotion={reduceMotion}
          pulseGlow={content.style.source.pulseGlow}
          spinRing={content.style.source.spinRing}
          shadowClass={content.style.source.shadowClass}
        />
        <ProcessorNode
          icon={ProcessorIcon}
          label={content.processorLabel}
          reduceMotion={reduceMotion}
          animation={content.style.processor.animation}
          beamDuration={content.style.processor.beamDuration}
          beamShadowClass={content.style.processor.beamShadowClass}
          nodeShadowClass={content.style.processor.nodeShadowClass}
        />
        <ResultNode
          icon={ResultIcon}
          label={content.resultLabel}
          reduceMotion={reduceMotion}
          overlayMode={content.style.result.overlayMode}
          shadowClass={content.style.result.shadowClass}
        />
      </CardFrame>

      {/* Bottom KPI tiles. */}
      <div className={heroContent.visual.frame.metricsGridClass}>
        <MetricTile icon={MetricOneIcon} value={content.metricOneValue} label={content.metricOneLabel} />
        <MetricTile icon={MetricTwoIcon} value={content.metricTwoValue} label={content.metricTwoLabel} />
      </div>
    </motion.div>
  );
}
