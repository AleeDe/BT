'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/cloud-qube/ui/Button';
import { Card } from '@/components/cloud-qube/ui/Card';
import { ArrowRight, Zap } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-950" />

      {/* Dynamic gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scale: [1, 1.15, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="glass" className="backdrop-blur-2xl border-primary-500/30">
          <motion.div
            className="p-8 sm:p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Animated background grid */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/40 mb-6 text-sm font-semibold text-primary-300"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-4 h-4" />
                Get Started Today
              </motion.div>

              {/* Headline */}
              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Salesforce{' '}
                <span className="gradient-text">Implementation?</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Join hundreds of companies that have accelerated their Salesforce
                deployment with Customer Portal. Experience the power of AI-driven consulting
                with zero complexity.
              </motion.p>

              {/* Feature list */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                {[
                  '✨ No Setup Required',
                  '🚀 Launch in Minutes',
                  '📞 24/7 Support',
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-center gap-2 text-dark-200 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                    iconPosition="right"
                    onClick={() => window.location.href = 'https://apex-accelerator-portal.vercel.app/auth'}
                  >
                    Get Free Portal
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Schedule Demo
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust badge */}
              <motion.p
                className="text-dark-400 text-sm mt-8 border-t border-white/5 pt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                Trusted by enterprise teams. No credit card required. Free forever plan
                available.
              </motion.p>
            </motion.div>
          </motion.div>
        </Card>
      </div>
    </section>
  );
}
