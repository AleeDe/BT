'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Badge } from '@/components/cloud-qube/ui/Badge';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Sign Up & Get Started',
    description: 'Create your account and access your personalized Salesforce consulting portal instantly.',
  },
  {
    number: '02',
    title: 'Submit Your Needs',
    description: 'Describe your requirements, challenges, or desired outcomes. Our AI analyzes and routes appropriately.',
  },
  {
    number: '03',
    title: 'Real-Time Collaboration',
    description: 'Chat with experts, review progress, provide feedback—all within your secure portal.',
  },
  {
    number: '04',
    title: 'Deploy & Scale',
    description: 'Solutions are delivered, deployed, and documented. Your knowledge base grows with every project.',
  },
];

export function ProcessSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="primary" className="mb-6">
            HOW IT WORKS
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Zero Friction, <span className="gradient-text">All Results</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            The entire process from initial consultation to deployed solution is streamlined for speed and clarity
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -8 }}
            >
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300 overflow-hidden h-full">
                {/* Animated background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="absolute inset-0 grid-bg" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Number with glow */}
                  <motion.div
                    className="text-5xl font-bold gradient-text mb-4 inline-block"
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(16, 185, 129, 0.3)',
                        '0 0 40px rgba(16, 185, 129, 0.6)',
                        '0 0 20px rgba(16, 185, 129, 0.3)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-dark-300 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Check icon */}
                  <motion.div
                    className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-dark-300 text-lg mb-6">
            Ready to experience the Customer Portal difference?
          </p>
          <motion.button
            className="px-8 py-4 rounded-xl bg-gradient-emerald text-white font-semibold hover:shadow-glow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'https://apex-accelerator-portal.vercel.app/auth'}
          >
            Start Your Free Portal →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
