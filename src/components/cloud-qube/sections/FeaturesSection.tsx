'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Badge } from '@/components/cloud-qube/ui/Badge';
import {
  Lock,
  Send,
  Eye,
  CreditCard,
  Rocket,
} from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Create Your Free Portal',
    description: 'Set up with a click. No credit card. Your personalized Salesforce consulting portal is instantly provisioned with just one click.',
  },
  {
    icon: Send,
    title: 'Submit a Ticket',
    description: 'Describe what you need — a big fix, integration, migration, or change request. Our AI companion can summarize and schedule you with experts.',
  },
  {
    icon: Eye,
    title: 'Track in Real-Time',
    description: 'Watch your ticket progress through stages. Chat with your consultant, review deliverables, and request changes — all inside your portal.',
  },
  {
    icon: CreditCard,
    title: 'Pay Only for What You Use',
    description: 'Only pay for completed stages based on your specific needs. No hidden fees. Our support team can estimate costs before work begins.',
  },
  {
    icon: Rocket,
    title: 'Deploy & Learn',
    description: 'Solutions are deployed with documentation. Your knowledge base automatically updates alongside all our work.',
  },
];

export function FeaturesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-dark-900 via-dark-900 to-dark-950"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="primary" className="mb-6">
            SIMPLE PROCESS
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            From Problem to Solution,{' '}
            <span className="gradient-text">In Minutes</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            We've reimagined Salesforce consulting for the AI era. Here's exactly how your journey works
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Icon */}
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/40 transition-colors duration-300"
                  whileHover={{ rotate: 10, scale: 1.15 }}
                >
                  <Icon className="w-6 h-6 text-primary-400" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-primary-500 to-transparent mt-3 w-0"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Features Section */}
        <motion.div
          className="mt-20 pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            What Your Portal Includes
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Ticket Management',
              'Real-Time Chat',
              'App Exchange Advisor',
              'Knowledge Base',
            ].map((item, i) => (
              <motion.button
                key={i}
                className="px-6 py-3 border border-dark-600 rounded-xl text-dark-200 hover:border-primary-500 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300 text-sm font-medium"
                whileHover={{ y: -4, borderColor: '#10B981' }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
