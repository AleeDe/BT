"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  website?: string;
  review: string;
  rating: number;
};

const REVIEW_WORD_LIMIT = 30;

function truncateWords(text: string, limit: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= limit) {
    return text;
  }
  return `${words.slice(0, limit).join(" ")}...`;
}

function hasMoreThanWords(text: string, limit: number): boolean {
  return text.trim().split(/\s+/).length > limit;
}

function getCompanyInitials(company: string): string {
  return company
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

const testimonials: Testimonial[] = [
{
  name: "Oren Falkovitz",
  role: "Climate Storyteller & Marketer",
  company: "Climate-focused Organizations",
  review:
    "At a high level, BabulTech stands out as a true problem-solving partner. Throughout our collaboration, they played a key role in making our organization more efficient and effective. Whenever we brought a request or challenge to them, they either had a solution ready or took the time to fully understand the requirement, research it, and come back with a well-thought-out approach.\n\nWhat sets BabulTech apart is their user-first mindset. They consistently prioritize the end-user experience while focusing on reducing manual work and improving overall system efficiency. At the same time, they maintain the reliability and integrity of the systems they build and support.\n\nWorking with BabulTech has been a great experience, and we highly value their ability to deliver practical, impactful solutions",
  rating: 5
},
{
  name: "Faizan ul Haq",
  role: "Director of Marketing",
  company: "Bentham Science",
  review:
    "I highly recommend BabulTech for any opportunities or projects. They are a highly skilled and professional team with strong expertise and an excellent work ethic. They consistently deliver high-quality solutions and communicate effectively, making even complex ideas easy to understand for both technical and non-technical stakeholders.\n\nTheir unique combination of technical capability and strong collaboration skills makes BabulTech a valuable partner for any organization",
  rating: 5
},
  {
    name: "Sam Mendelsohn",
    role: "President",
    company: "Client Leadership",
    review:
      "BabulTech was excellent to work with in ensuring our Salesforce was fully optimized for our business processes. They made sure everything was set up smoothly and helped us operate as efficiently as possible. Great experience working with them!",
    rating: 5
  }
];

function TestimonialCard({
  testimonial,
  index,
  onOpenFullReview,
}: {
  testimonial: Testimonial;
  index: number;
  onOpenFullReview: (testimonial: Testimonial) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const companyInitials = getCompanyInitials(testimonial.company);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
      className="relative w-full h-[450px] rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 shadow-xl shadow-black/50 select-none group"
      onClick={() => setExpanded((v) => !v)}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Background Logo Surface */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),rgba(255,255,255,0.02)_45%,transparent_70%)] transition-all duration-700 ${expanded ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute -right-6 -top-8 text-[8rem] font-black text-white/10 leading-none tracking-tighter transition-all duration-700 ${expanded ? "opacity-60 scale-110" : "opacity-35"}`}
          aria-hidden="true"
        >
          {companyInitials}
        </div>
        <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-500 ${expanded ? "opacity-90" : "opacity-80"}`}></div>
      </div>

      {/* Content Container - Bottom aligned */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Visible Text */}
        <div className={`relative z-10 transform transition-transform duration-500 ease-out ${expanded ? "-translate-y-4" : ""}`}>
          <div className={`w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-6 transition-all duration-500 ${expanded ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-4"}`}>
            <span className="text-xl font-extrabold tracking-tight text-foreground" aria-label={`${testimonial.company} logo`}>
              {companyInitials}
            </span>
          </div>

          <h3 className={`text-2xl font-bold text-foreground mb-1 transition-colors duration-300 ${expanded ? "text-primary" : ""}`}>{testimonial.name}</h3>
          <div className="flex items-center gap-1 flex-wrap">
            <span className={`font-medium tracking-wide text-sm uppercase transition-colors duration-300 ${expanded ? "text-body" : "text-primary"}`}>
              {testimonial.role} @ 
            </span>
            {testimonial.website ? (
              <a 
                href={testimonial.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`font-medium tracking-wide text-sm uppercase flex items-center gap-1 hover:underline transition-colors duration-300 ${expanded ? "text-primary" : "text-foreground"}`}
                onClick={(e) => e.stopPropagation()}
              >
                {testimonial.company} <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className={`font-medium tracking-wide text-sm uppercase transition-colors duration-300 ${expanded ? "text-body" : "text-primary"}`}>
                {testimonial.company}
              </span>
            )}
          </div>
        </div>

        {/* Hidden Content that slides up on tap/hover */}
        <div className={`relative z-10 grid transition-[grid-template-rows] duration-500 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className={`overflow-hidden transition-opacity duration-500 delay-100 ${expanded ? "opacity-100" : "opacity-0"}`}>
            <div className="flex gap-1 mt-4 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-primary fill-yellow-400" : "text-gray-600"}`} />
              ))}
            </div>
            <p className="text-body text-sm leading-relaxed mb-6 border-t border-white/10 pt-4 italic">
              &ldquo;{truncateWords(testimonial.review, REVIEW_WORD_LIMIT)}&rdquo;
            </p>
            {hasMoreThanWords(testimonial.review, REVIEW_WORD_LIMIT) && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenFullReview(testimonial);
                }}
                className="text-sm font-semibold text-primary hover:underline"
              >
                Read full review
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile tap hint (shows only when collapsed) */}
      {!expanded && (
        <div className="absolute top-4 right-4 z-20 md:hidden px-2.5 py-1 rounded-full bg-black/50 border border-white/10 text-[11px] font-semibold text-body backdrop-blur-md">
          Tap to read
        </div>
      )}
    </motion.div>
  );
}

export function TestimonialsSection() {
  const [activeReview, setActiveReview] = useState<Testimonial | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-black/20">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body text-lg"
          >
            Discover how we&apos;ve helped enterprises scale, secure, and innovate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              testimonial={testimonial}
              index={i}
              onOpenFullReview={setActiveReview}
            />
          ))}
        </div>
      </div>

      {activeReview && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveReview(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-white/15 bg-background/95 p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{activeReview.name}</h3>
                <p className="text-sm text-body mt-1">
                  {activeReview.role} @ {activeReview.company}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveReview(null)}
                className="text-sm font-semibold text-primary hover:underline"
              >
                Close
              </button>
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < activeReview.rating ? "text-primary fill-yellow-400" : "text-gray-600"}`} />
              ))}
            </div>

            <p className="text-body leading-relaxed italic max-h-[60vh] overflow-y-auto pr-1">
              &ldquo;{activeReview.review}&rdquo;
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
