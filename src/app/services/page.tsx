"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap, Users, Database, Lightbulb } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export default function ServicesPage() {
  const services = [
    {
      icon: <Database className="w-8 h-8 text-[#00E5FF]" />,
      title: "CRM Implementation & Support",
      description: "We integrate any CRM system and resolve related issues on a flexible, pay-as-you-go basis.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Smart Solutions",
      description: "We provide intelligent, tailor-made solutions to solve your specific business bottlenecks efficiently.",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Precision & Strategy",
      description: "We align our IT solutions perfectly with your business goals, ensuring every implementation drives measurable success.",
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: "Uncompromising Security",
      description: "Security isn't an afterthought. It's built into the foundation of every application and infrastructure we deploy.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00E5FF]" />,
      title: "Rapid Execution",
      description: "Our agile methodologies and deep expertise allow us to deliver complex projects faster without sacrificing quality.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#2962FF]" />,
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, providing transparent communication and dedicated support.",
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A1128] text-white selection:bg-[#2962FF] selection:text-white pb-32">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2962FF] drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              We empower your business with cutting-edge digital transformation strategies, secure infrastructures, and robust application deployments tailored to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border md:border-2 border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#2962FF]/10 border border-[#2962FF]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
