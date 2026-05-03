'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
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
    description: 'Describe what you need - a big fix, integration, migration, or change request. Our AI companion can summarize and schedule you with experts.',
  },
  {
    icon: Eye,
    title: 'Track in Real-Time',
    description: 'Watch your ticket progress through stages. Chat with your consultant, review deliverables, and request changes - all inside your portal.',
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

const portalIncludes = [
  'Ticket Management',
  'Real-Time Chat',
  'Secure Portal',
  'Knowledge Base',
];

const portalSlides = [
  {
    title: 'Secure Portal',
    eyebrow: 'Client workspace',
    description: 'One protected place for requests, files, project notes, and consultant updates.',
    details: ['Role-based access', 'Private project threads', 'Centralized knowledge base'],
  },
  {
    title: 'Ticket Management',
    eyebrow: 'Queue overview',
    description: 'Track every request from intake to resolution with clear status, owner, and priority.',
    details: ['Priority labels', 'Assigned consultant', 'Stage-by-stage progress'],
  },
  {
    title: 'Ticket Details',
    eyebrow: 'Request timeline',
    description: 'Open a ticket to review scope, messages, attachments, estimates, and next actions.',
    details: ['Timeline history', 'Deliverable approvals', 'Cost and schedule notes'],
  },
];

export function FeaturesSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % portalSlides.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

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
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/40 transition-colors duration-300"
                  whileHover={{ rotate: 10, scale: 1.15 }}
                >
                  <Icon className="w-6 h-6 text-primary-400" />
                </motion.div>

                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>

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
            {portalIncludes.map((item, i) => (
              <motion.button
                key={i}
                className="px-6 py-3 rounded-xl text-dark-200 bg-white/[0.04] hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300 text-sm font-medium"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-white/[0.04] p-6 sm:p-8 shadow-[0_24px_80px_-42px_rgba(16,185,129,0.55)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={portalSlides[activeSlide].title}
                initial={{ opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-300">
                    {portalSlides[activeSlide].eyebrow}
                  </p>
                  <h4 className="mt-3 text-2xl font-bold text-white">
                    {portalSlides[activeSlide].title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-dark-300">
                    {portalSlides[activeSlide].description}
                  </p>
                </div>

                <div className="space-y-3">
                  {portalSlides[activeSlide].details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center justify-between gap-4 rounded-2xl bg-dark-900/70 px-4 py-3"
                    >
                      <span className="text-sm font-medium text-dark-100">{detail}</span>
                      <span className="h-2 w-16 rounded-full bg-primary-400/70" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex justify-center gap-2">
              {portalSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Show ${slide.title}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'w-8 bg-primary-400' : 'w-2 bg-white/25'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
