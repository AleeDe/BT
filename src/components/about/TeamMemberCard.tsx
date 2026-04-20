"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import type { TeamMember } from "./aboutData";

type TeamMemberCardProps = {
  member: TeamMember;
  index: number;
};

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
      className="relative w-full h-[450px] rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-xl shadow-slate-950/50 select-none"
      onClick={() => setExpanded((value) => !value)}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${expanded ? "scale-110 opacity-40" : "opacity-70"}`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent transition-opacity duration-500 ${expanded ? "opacity-90" : ""}`}
        />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className={`relative z-10 transform transition-transform duration-500 ease-out ${expanded ? "-translate-y-4" : ""}`}>
          <div
            className={`w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-md flex items-center justify-center p-1 mb-6 transition-all duration-500 ${expanded ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-4"}`}
          >
            <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-xl" />
          </div>

          <h3 className={`text-2xl font-bold text-foreground mb-1 transition-colors duration-300 ${expanded ? "text-primary" : ""}`}>
            {member.name}
          </h3>
          <p className={`font-medium tracking-wide text-sm uppercase transition-colors duration-300 ${expanded ? "text-slate-300" : "text-primary/80"}`}>
            {member.role}
          </p>
        </div>

        <div className={`relative z-10 grid transition-[grid-template-rows] duration-500 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className={`overflow-hidden transition-opacity duration-500 delay-100 ${expanded ? "opacity-100" : "opacity-0"}`}>
            <p className="text-slate-400 text-sm leading-relaxed mt-4 mb-6 border-t border-slate-800/60 pt-4">{member.bio}</p>

            <div className="flex gap-3 mt-auto pb-2">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center py-3 min-h-[48px] bg-[#0077b5]/90 hover:bg-[#0077b5] text-foreground text-sm font-semibold rounded-xl backdrop-blur-md transition-all duration-300"
                onClick={(event) => event.stopPropagation()}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
              <a
                href={`mailto:${member.email}`}
                className="flex items-center justify-center px-4 min-h-[48px] min-w-[48px] bg-slate-800/80 hover:bg-slate-700 text-foreground rounded-xl backdrop-blur-md transition-all duration-300 border border-slate-700 hover:border-slate-600"
                onClick={(event) => event.stopPropagation()}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {!expanded && (
        <div className="absolute top-4 right-4 z-20 md:hidden px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-semibold text-slate-400 backdrop-blur-md">
          Tap to view
        </div>
      )}
    </motion.div>
  );
}
