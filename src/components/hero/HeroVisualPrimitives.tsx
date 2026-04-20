"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { TwoLineLabel } from "./content";

type CardIntroProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

type FlowNodeProps = {
  icon: LucideIcon;
  label: TwoLineLabel;
  reduceMotion: boolean;
  spinRing?: boolean;
  pulseGlow?: boolean;
  shadowClass: string;
};

type ProcessorNodeProps = {
  icon: LucideIcon;
  label: string;
  reduceMotion: boolean;
  animation: "rotate" | "scale";
  beamDuration: number;
  beamShadowClass: string;
  nodeShadowClass: string;
};

type ResultNodeProps = {
  icon: LucideIcon;
  label: TwoLineLabel;
  reduceMotion: boolean;
  overlayMode: "scale" | "pulse";
  shadowClass: string;
};

type MetricTileProps = {
  icon: LucideIcon;
  value: string;
  label: string;
};

// Intro row for a visual card (icon + title + subtitle).
export function CardIntro({ icon: Icon, title, subtitle }: CardIntroProps) {
  return (
    <div className="flex items-center gap-3 mb-4 sm:mb-5">
      <div className="p-2 bg-primary/20 rounded-xl border border-primary/30">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      </div>
      <div>
        <h3 className="text-foreground font-bold text-sm sm:text-base">{title}</h3>
        <p className="text-primary/70 text-[10px] sm:text-xs">{subtitle}</p>
      </div>
    </div>
  );
}

// Shared 2-line label renderer for flow nodes.
function TwoLineLabelText({ label, accent }: { label: TwoLineLabel; accent: boolean }) {
  return (
    <span
      className={`text-[9px] sm:text-[10px] font-medium text-center leading-tight ${
        accent ? "text-primary font-bold" : "text-slate-400"
      }`}
    >
      {label[0]}
      <br />
      {label[1]}
    </span>
  );
}

// Source/challenge node block in the 3-column flow lane.
export function FlowNode({ icon: Icon, label, reduceMotion, spinRing = false, pulseGlow = false, shadowClass }: FlowNodeProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 z-10 w-1/3">
      <div
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative ${shadowClass}`}
      >
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary relative z-10" />
        {pulseGlow ? <div className="absolute inset-0 bg-primary/20 blur-[10px] rounded-full animate-pulse" /> : null}
        {spinRing ? (
          <motion.div
            animate={reduceMotion ? { rotate: 0 } : { rotate: 360 }}
            transition={reduceMotion ? { duration: 0.2 } : { duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-primary/30 border-t-transparent border-l-transparent"
          />
        ) : null}
      </div>
      <TwoLineLabelText label={label} accent={false} />
    </div>
  );
}

// Middle processor node with animated beam and icon motion.
export function ProcessorNode({
  icon: Icon,
  label,
  reduceMotion,
  animation,
  beamDuration,
  beamShadowClass,
  nodeShadowClass,
}: ProcessorNodeProps) {
  return (
    <div className="flex flex-col items-center justify-center w-1/3 relative z-10 pt-2">
      <div className="h-0.5 w-[140%] bg-slate-700/50 absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 -z-10 rounded-full overflow-hidden">
        <motion.div
          animate={reduceMotion ? { opacity: 0.9 } : { x: ["-100%", "200%"] }}
          transition={reduceMotion ? { duration: 0.2 } : { duration: beamDuration, repeat: Infinity, ease: "linear" }}
          className={`w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent ${beamShadowClass}`}
        />
      </div>

      <motion.div
        animate={
          animation === "rotate"
            ? reduceMotion
              ? { rotate: 0 }
              : { rotate: [0, 360] }
            : reduceMotion
              ? { scale: 1 }
              : { scale: [0.95, 1.05, 0.95] }
        }
        transition={
          animation === "rotate"
            ? reduceMotion
              ? { duration: 0.2 }
              : { duration: 8, repeat: Infinity, ease: "linear" }
            : reduceMotion
              ? { duration: 0.2 }
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center backdrop-blur-md ${nodeShadowClass}`}
      >
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
      </motion.div>
      <span className="text-[8px] sm:text-[9px] text-primary font-bold mt-1.5 text-center px-2 py-0.5 bg-primary/10 rounded-full border border-primary/20 tracking-wider uppercase">
        {label}
      </span>
    </div>
  );
}

// Result node block with configurable overlay animation mode.
export function ResultNode({ icon: Icon, label, reduceMotion, overlayMode, shadowClass }: ResultNodeProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 z-10 w-1/3">
      <div
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center relative ${shadowClass}`}
      >
        {overlayMode === "scale" ? (
          <motion.div
            animate={reduceMotion ? { opacity: 0.75 } : { scale: [1, 1.2, 1] }}
            transition={reduceMotion ? { duration: 0.2 } : { duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-primary/20 blur-[10px] rounded-full"
          />
        ) : (
          <div className="absolute inset-0 bg-primary/20 blur-[10px] rounded-full animate-pulse" />
        )}
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary relative z-10" />
      </div>
      <TwoLineLabelText label={label} accent={true} />
    </div>
  );
}

// Reusable metric tile used in card KPI grids.
export function MetricTile({ icon: Icon, value, label }: MetricTileProps) {
  return (
    <div className="bg-slate-900/60 rounded-xl p-3 sm:p-4 border border-primary/20 flex flex-col justify-center relative overflow-hidden group hover:bg-slate-800/80 transition-colors">
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 blur-[15px] rounded-full group-hover:bg-primary/20 transition-all pointer-events-none" />
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2 relative z-10" />
      <div className="text-foreground font-black text-xl sm:text-2xl tracking-tight relative z-10">{value}</div>
      <div className="text-[10px] sm:text-xs text-slate-400 font-medium relative z-10 mt-0.5">{label}</div>
    </div>
  );
}
