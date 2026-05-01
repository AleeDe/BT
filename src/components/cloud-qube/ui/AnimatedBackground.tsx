'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  animate?: boolean;
}

export function AnimatedBackground({
  className = '',
  children,
  animate = true,
}: AnimatedBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Floating orbs for futuristic effect */}
      {animate && (
        <>
          {/* Orb 1 - Top Left */}
          <motion.div
            className="absolute w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"
            style={{
              top: '-40px',
              left: '-40px',
            }}
            animate={{
              y: [0, 40, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Orb 2 - Top Right */}
          <motion.div
            className="absolute w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
            style={{
              top: '100px',
              right: '-100px',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Orb 3 - Bottom Center */}
          <motion.div
            className="absolute w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"
            style={{
              bottom: '-100px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{
              y: [0, 60, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Orb 4 - Bottom Left */}
          <motion.div
            className="absolute w-72 h-72 bg-primary-500/8 rounded-full blur-3xl"
            style={{
              bottom: '50px',
              left: '50px',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      )}

      {/* Morphing SVG shapes */}
      {animate && (
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1000 1000"
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated paths */}
          <motion.path
            d="M300,200 Q400,100 500,200 T700,200"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            animate={{
              strokeDashoffset: [1000, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#0d9668" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {/* Content overlay */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
