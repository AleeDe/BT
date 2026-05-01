"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactMethods } from "./contactData";
import { CONTACT_EMAIL_HREF, CONTACT_PHONE_HREF, OFFICE_LOCATIONS } from "@/lib/contact";

function iconFor(name: "phone" | "mail" | "map-pin") {
  if (name === "phone") return <Phone className="w-6 h-6" />;
  if (name === "mail") return <Mail className="w-6 h-6" />;
  return <MapPin className="w-6 h-6" />;
}

export function ContactMethods() {
  return (
    <div className="lg:col-span-2 space-y-6">
      {contactMethods.map((method, idx) => (
        <motion.div
          key={method.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
          className="group p-6 rounded-2xl bg-background/50 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 flex items-start gap-5 hover:bg-white/[0.02]"
        >
          <div
            className={`mt-1 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${method.color} bg-opacity-10 text-foreground shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300`}
          >
            {iconFor(method.icon)}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">{method.title}</h3>
            <p className="text-sm text-slate-400 mb-3">{method.description}</p>
            {method.icon === "map-pin" ? (
              <div className="space-y-2">
                {OFFICE_LOCATIONS.map((office) => (
                  <a
                    key={office.label}
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-medium text-primary hover:text-emerald-300 transition-colors"
                  >
                    {office.label}: {office.address}
                  </a>
                ))}
              </div>
            ) : (
              <a
                href={method.icon === "phone" ? CONTACT_PHONE_HREF : CONTACT_EMAIL_HREF}
                className="text-base font-medium text-primary hover:text-emerald-300 transition-colors"
              >
                {method.value}
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
