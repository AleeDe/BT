'use client';

import React from 'react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/cloud-qube/ui/Button';
import { Badge } from '@/components/cloud-qube/ui/Badge';
import { GradientText } from '@/components/cloud-qube/ui/GradientText';
import { AnimatedBackground } from '@/components/cloud-qube/ui/AnimatedBackground';
import { ArrowRight, Zap } from 'lucide-react';

const PORTAL_URL = 'https://apex-accelerator-portal.vercel.app/auth';

const stats = [
  { label: 'Companies', value: '5+' },
  { label: 'Time Saved', value: '1000+ hrs' },
  { label: 'Success Rate', value: '99.8%' },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion() ?? false;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-28"
    >
      <AnimatedBackground animate className="absolute inset-0" />

      {/* Soft glow orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-[120px] pointer-events-none" />

      {/* Decorative grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cqGridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 100}
            y1="0"
            x2={i * 100}
            y2="800"
            stroke="url(#cqGridGradient)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={reduceMotion ? { opacity: 0.2 } : { opacity: [0, 0.3, 0] }}
            transition={{ duration: 8, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      {!reduceMotion &&
        Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-500/60 pointer-events-none"
            style={{ left: `${15 + i * 17}%`, top: `${22 + i * 11}%` }}
            animate={{
              y: [0, -22, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.85, 0.3],
            }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge variant="primary" animated>
              <Zap className="w-3.5 h-3.5" />
              Next Generation Consulting
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-dark-50 max-w-4xl"
          >
            From Problem{' '}
            <GradientText className="inline-block">to Solution</GradientText>
            <br className="hidden sm:block" />
            <span className="text-dark-50"> in </span>
            <span className="text-primary-400">Minutes</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg md:text-xl text-dark-300 max-w-2xl leading-relaxed"
          >
            Next-generation Salesforce consulting powered by advanced AI. Launch your portal
            in minutes, not months. No contracts. No surprises.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <Button
              size="lg"
              className="group w-full sm:w-auto"
              icon={
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              }
              iconPosition="right"
              onClick={() => {
                window.location.href = PORTAL_URL;
              }}
            >
              Launch Your Portal
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => {
                document
                  .getElementById('how-it-works')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See How It Works
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 w-full max-w-3xl pt-10 border-t border-white/10"
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="mt-2 text-xs sm:text-sm text-dark-400 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
