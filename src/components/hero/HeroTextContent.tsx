"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HeroAnimatedWord } from "./HeroAnimatedWord";
import { HeroActions } from "./HeroActions";
import { HeroSocialProof } from "./HeroSocialProof";
import { heroContent } from "./content";

type HeroTextContentProps = {
  reduceMotion: boolean;
  wordIndex: number;
};

// Left-side hero content block: badge, title, supporting copy, actions, and trust row.
export function HeroTextContent({ reduceMotion, wordIndex }: HeroTextContentProps) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col space-y-7"
    >
      {/* Hero badge line. */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center px-4 py-2.5 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md w-fit shadow-[0_0_20px_rgba(16,185,129,0.1)] gap-2.5 group cursor-default"
      >
        <Sparkles className="w-4 h-4 text-primary group-hover:scale-110 group-hover:text-primary transition-all" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">{heroContent.badge}</span>
      </motion.div>

      {/* Main heading and rotating solution word. */}
      <div className="space-y-4">
        <h1 className="text-[2.75rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground sm:leading-[1.1]">
          <span className="block mb-1 sm:mb-2 text-slate-300 text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {heroContent.headingPrefix}
          </span>
          <HeroAnimatedWord words={heroContent.rotatingWords} wordIndex={wordIndex} reduceMotion={reduceMotion} />
        </h1>
        <p className="text-sm sm:text-base md:text-[1.1rem] text-slate-400 max-w-xl leading-relaxed font-medium mt-4 sm:mt-0">
          {heroContent.description.beforeFirstHighlight}
          <strong className="text-slate-200 font-bold">{heroContent.description.firstHighlight}</strong>
          {heroContent.description.betweenHighlights}
          <strong className="text-slate-200 font-bold">{heroContent.description.secondHighlight}</strong>
          {heroContent.description.afterSecondHighlight}
        </p>
      </div>

      {/* Primary/secondary action buttons. */}
      <HeroActions
        primaryLabel={heroContent.actions.primaryLabel}
        secondaryLabel={heroContent.actions.secondaryLabel}
        secondaryHref={heroContent.actions.secondaryHref}
      />

      {/* Social proof and quality badge row. */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <HeroSocialProof
          avatarLetters={heroContent.trust.avatarLetters}
          plusLabel={heroContent.trust.plusLabel}
          stars={heroContent.trust.stars}
          caption={heroContent.trust.caption}
          qualityLabel={heroContent.trust.qualityLabel}
        />
      </motion.div>
    </motion.div>
  );
}
