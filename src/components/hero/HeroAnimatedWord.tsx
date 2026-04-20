"use client";

import { AnimatePresence, motion } from "framer-motion";

type HeroAnimatedWordProps = {
  words: string[];
  wordIndex: number;
  reduceMotion: boolean;
};

// Animated keyword slot used inside the hero headline.
export function HeroAnimatedWord({ words, wordIndex, reduceMotion }: HeroAnimatedWordProps) {
  return (
    // Fixed-height slot prevents layout jump when words change.
    <div className="h-[1.25em] relative overflow-hidden mt-1 pb-2">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={wordIndex}
          initial={reduceMotion ? false : { y: 60, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { y: -60, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="absolute min-w-max origin-bottom text-[0.72em] text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary drop-shadow-sm"
        >
          {words[wordIndex]}.
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
