"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeroAnimatedVisual } from "@/components/hero/HeroAnimatedVisual";
import { heroContent } from "@/components/hero/content";
import { HeroTextContent } from "@/components/hero/HeroTextContent";

// Main hero container that coordinates rotating text timing and two-column layout.
export function HeroSection() {
   const reduceMotion = useReducedMotion() ?? false;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
      if (reduceMotion) {
         return;
      }

    const interval = setInterval(() => {
         setWordIndex((previous) => (previous + 1) % heroContent.rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
   }, [reduceMotion]);

  return (
    <section className="relative min-h-[100vh] lg:min-h-[92vh] flex pt-12 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 overflow-hidden bg-background">
      {/* Premium Animated Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-40 -z-20" />
      
      {/* Vibrant Glowing Orbs */}
      <div className="absolute top-0 -translate-y-1/2 left-1/3 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 translate-y-1/3 right-0 w-[700px] h-[600px] bg-gradient-to-t from-primary/10 via-primary/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-8 items-center">
               {/* Left column: headline, rotating word, CTAs, and trust proof. */}
               <HeroTextContent reduceMotion={reduceMotion} wordIndex={wordIndex} />

               {/* Right column: animated visual dashboard cards. */}
               <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end py-6 sm:py-8 lg:py-0 relative"
          >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/10 blur-[100px] rounded-full pointer-events-none" />
                  <HeroAnimatedVisual reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
