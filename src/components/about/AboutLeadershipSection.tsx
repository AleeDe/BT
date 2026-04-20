"use client";

import { motion } from "framer-motion";
import { teamMembers } from "./aboutData";
import { TeamMemberCard } from "./TeamMemberCard";

export function AboutLeadershipSection() {
  return (
    <section className="py-24 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Leadership</span>
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
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.email} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
