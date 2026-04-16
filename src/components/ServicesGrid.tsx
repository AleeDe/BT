"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap, Users, Database, Lightbulb, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "CRM Implementation & Support",
    description: "We integrate any CRM system and resolve related issues on a flexible, pay-as-you-go basis.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Smart Solutions",
    description: "We provide intelligent, tailor-made solutions to solve your specific business bottlenecks efficiently.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Precision & Strategy",
    description: "We align our IT solutions perfectly with your business goals, ensuring every implementation drives measurable success.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Uncompromising Security",
    description: "Security isn't an afterthought. It's built into the foundation of every application and infrastructure we deploy.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Rapid Execution",
    description: "Our agile methodologies and deep expertise allow us to deliver complex projects faster without sacrificing quality.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaborative Partnership",
    description: "We work as an extension of your team, providing transparent communication and dedicated support.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "AI & Data Science",
    description: "Coming Soon",
  },
];

export default function ServicesGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 backdrop-blur-sm border md:border-2 border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{service.title}</h3>
            <p className="text-body leading-relaxed text-sm md:text-base">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
