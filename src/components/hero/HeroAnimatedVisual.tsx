"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { heroContent } from "./content";
import { CrmVisualCard, ProblemVisualCard } from "./HeroVisualCards";

type HeroAnimatedVisualProps = {
  reduceMotion: boolean;
};

// Right-side animated dashboard shell with togglable CRM/Problem cards.
export function HeroAnimatedVisual({ reduceMotion }: HeroAnimatedVisualProps) {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const interval = setInterval(() => {
      setActiveCard((previous) => (previous === 0 ? 1 : 0));
    }, heroContent.visual.timing.cardSwitchIntervalMs);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    // Visual shell root and background glow layer.
    <div className={heroContent.visual.shell.rootClass}>
      <div className={heroContent.visual.shell.glowClass} />

      {/* Floating glass panel with shared shell motion. */}
      <motion.div
        animate={reduceMotion ? { opacity: 1 } : { y: [-10, 10, -10], rotateX: [1, -1, 1], rotateY: [-1, 1, -1] }}
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : { duration: heroContent.visual.timing.shellFloatDurationSec, repeat: Infinity, ease: "easeInOut" }
        }
        className={heroContent.visual.shell.containerClass}
      >
        <div className={heroContent.visual.shell.topLineClass} />

        {/* Manual card selector indicators. */}
        <div className="flex justify-center mb-5 sm:mb-6 z-20 w-full gap-2">
          <button
            onClick={() => setActiveCard(0)}
            className={`${heroContent.visual.indicators.baseClass} ${activeCard === 0 ? `${heroContent.visual.indicators.activeClass} ${heroContent.visual.indicators.crmActiveShadowClass}` : heroContent.visual.indicators.inactiveClass}`}
            aria-label={heroContent.visual.indicators.crmAriaLabel}
          />
          <button
            onClick={() => setActiveCard(1)}
            className={`${heroContent.visual.indicators.baseClass} ${activeCard === 1 ? `${heroContent.visual.indicators.activeClass} ${heroContent.visual.indicators.problemActiveShadowClass}` : heroContent.visual.indicators.inactiveClass}`}
            aria-label={heroContent.visual.indicators.problemAriaLabel}
          />
        </div>

        {/* Animated card viewport. */}
        <div className="flex-1 relative z-10 h-full w-full">
          <AnimatePresence mode="wait">
            {activeCard === 0 ? (
              <CrmVisualCard reduceMotion={reduceMotion} content={heroContent.visual.crm} />
            ) : (
              <ProblemVisualCard reduceMotion={reduceMotion} content={heroContent.visual.problem} />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
