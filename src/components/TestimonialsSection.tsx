"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Reviewer = {
  name: string;
  title: string;
  review: string;
};

const reviewers: Reviewer[] = [
  {
    name: "Oren Falkovitz",
    title: "Climate Storyteller & Marketer",
    review:
      "BabulTech stands out as a true problem-solving partner. They consistently prioritize the end-user experience while reducing manual work.",
  },
  {
    name: "Faizan ul Haq",
    title: "Director of Marketing",
    review:
      "A highly skilled and professional team with strong expertise, excellent work ethic, and clear communication.",
  },
  {
    name: "Sam Mendelsohn",
    title: "President",
    review:
      "BabulTech helped ensure our Salesforce was fully optimized for our business processes. Great experience working with them.",
  },
  {
    name: "Ayesha Khan",
    title: "Operations Lead",
    review:
      "Their team brought structure, speed, and clarity to a complex workflow improvement project.",
  },
  {
    name: "Bilal Ahmed",
    title: "Technology Director",
    review:
      "Reliable delivery, thoughtful architecture, and practical technical guidance from start to finish.",
  },
  {
    name: "Mariam Noor",
    title: "Enterprise Program Manager",
    review:
      "They understood the business goal first, then shaped the enterprise implementation around measurable outcomes.",
  },
];

function initialsFor(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function ReviewerCard({ reviewer }: { reviewer: Reviewer }) {
  return (
    <article className="success-card group">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.13),transparent_42%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col justify-between gap-5">
        <div>
          <div className="mb-5 flex gap-1.5 text-primary" aria-label="5 star review">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-primary" />
            ))}
          </div>
          <p className="line-clamp-3 text-sm leading-7 text-slate-300">
            &ldquo;{reviewer.review}&rdquo;
          </p>
        </div>

        <div className="h-px bg-white/10" />

        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.24)]">
            {initialsFor(reviewer.name)}
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-base font-bold tracking-tight text-foreground">
              {reviewer.name}
            </h3>
            <p className="mt-1 truncate text-sm font-medium text-body">
              {reviewer.title}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const marqueeItems = [...reviewers, ...reviewers];

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.35em] text-primary"
            >
              <Star className="h-4 w-4 fill-primary" />
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-6xl"
            >
              Client Success Stories
              <span className="block bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                trusted by builders
              </span>
            </motion.h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-body">
            A quick roll-call of leaders who trust BabulTech for delivery, enterprise solutions, and technical partnership.
          </p>
        </div>

        <div className="success-marquee relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="success-marquee-track">
            {marqueeItems.map((reviewer, index) => (
              <ReviewerCard key={`${reviewer.name}-${index}`} reviewer={reviewer} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 text-xs text-slate-500">
          <div className="h-px flex-1 bg-white/10" />
          <span>Auto-scrolling - hover to pause</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
