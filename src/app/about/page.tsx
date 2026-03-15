"use client";


import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
const Linkedin = dynamic(() => import("lucide-react").then(mod => mod.Linkedin), { ssr: false });
const Mail = dynamic(() => import("lucide-react").then(mod => mod.Mail), { ssr: false });
const CheckCircle2 = dynamic(() => import("lucide-react").then(mod => mod.CheckCircle2), { ssr: false });
const Target = dynamic(() => import("lucide-react").then(mod => mod.Target), { ssr: false });
const Shield = dynamic(() => import("lucide-react").then(mod => mod.Shield), { ssr: false });
const Zap = dynamic(() => import("lucide-react").then(mod => mod.Zap), { ssr: false });
const Users = dynamic(() => import("lucide-react").then(mod => mod.Users), { ssr: false });
const RefreshCcw = dynamic(() => import("lucide-react").then(mod => mod.RefreshCcw), { ssr: false });

function TeamMemberCard({ member, index }: { member: any; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
      className="relative w-full h-[450px] rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-xl shadow-slate-950/50 select-none"
      onClick={() => setExpanded((v) => !v)}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${expanded ? "scale-110 opacity-40" : "opacity-70"}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent transition-opacity duration-500 ${expanded ? "opacity-90" : ""}`}></div>
      </div>

      {/* Content Container - Bottom aligned */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Visible Text */}
        <div className={`relative z-10 transform transition-transform duration-500 ease-out ${expanded ? "-translate-y-4" : ""}`}>
          <div className={`w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-md flex items-center justify-center p-1 mb-6 transition-all duration-500 ${expanded ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-4"}`}>
            <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-xl" />
          </div>

          <h3 className={`text-2xl font-bold text-white mb-1 transition-colors duration-300 ${expanded ? "text-blue-400" : ""}`}>{member.name}</h3>
          <p className={`font-medium tracking-wide text-sm uppercase transition-colors duration-300 ${expanded ? "text-slate-300" : "text-blue-500/80"}`}>{member.role}</p>
        </div>

        {/* Hidden Content that slides up on tap/hover */}
        <div className={`relative z-10 grid transition-[grid-template-rows] duration-500 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className={`overflow-hidden transition-opacity duration-500 delay-100 ${expanded ? "opacity-100" : "opacity-0"}`}>
            <p className="text-slate-400 text-sm leading-relaxed mt-4 mb-6 border-t border-slate-800/60 pt-4">
              {member.bio}
            </p>

            <div className="flex gap-3 mt-auto pb-2">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center py-3 min-h-[48px] bg-[#0077b5]/90 hover:bg-[#0077b5] text-white text-sm font-semibold rounded-xl backdrop-blur-md transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
              <a
                href={`mailto:${member.email}`}
                className="flex items-center justify-center px-4 min-h-[48px] min-w-[48px] bg-slate-800/80 hover:bg-slate-700 text-white rounded-xl backdrop-blur-md transition-all duration-300 border border-slate-700 hover:border-slate-600"
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile tap hint (shows only when collapsed) */}
      {!expanded && (
        <div className="absolute top-4 right-4 z-20 md:hidden px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-semibold text-slate-400 backdrop-blur-md">
          Tap to view
        </div>
      )}
    </motion.div>
  );
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Babul",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop",
      bio: "Visionary leader with 15+ years exploring enterprise IT transformation. Passionate about leveraging technology to drive business growth.",
      linkedin: "https://linkedin.com",
      email: "founder@babultech.com"
    },
    {
      name: "Jane Smith",
      role: "Co-Founder & COO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop",
      bio: "Operational mastermind streamlining processes and ensuring every client project is delivered with precision and excellence.",
      linkedin: "https://linkedin.com",
      email: "cofounder@babultech.com"
    },
    {
      name: "Michael Johnson",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop",
      bio: "Technical genius behind our infrastructure strategies. Dedicated to building secure, scalable, and cutting-edge software solutions.",
      linkedin: "https://linkedin.com",
      email: "cto@babultech.com"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Enterprise IT</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                At BabulTech, we specialize in transforming complex technical challenges into streamlined, scalable solutions. From CRM implementations to full-stack application development, we are your certified partners in digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center space-x-2 text-white">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>Certified Experts</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>Rapid Resolution</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>

            {/* Animation / GIF Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-900/20 bg-slate-900 aspect-video flex items-center justify-center group"
            >
              <img 
                src="/about-animation.svg" 
                alt="BabulTech Operations Animation" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-800">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Enterprise Clients", value: "150+" },
              { label: "Projects Delivered", value: "300+" },
              { label: "Team Experts", value: "50+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Meet Our <span className="text-blue-400">Leadership</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg"
            >
              The visionary minds behind BabulTech, dedicated to pushing the boundaries of technology and empowering enterprises.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <TeamMemberCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
