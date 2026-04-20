"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Send, User } from "lucide-react";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [formState, setFormState] = useState<ContactFormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Failed to send message. Please try again.");
      }

      const data = (await response.json()) as { submissionId?: string };

      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);

      if (data.submissionId) {
        void pollSubmissionStatus(data.submissionId);
      }
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      setSubmitError(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const pollSubmissionStatus = async (submissionId: string) => {
    const maxAttempts = 12;

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      try {
        const response = await fetch(`/api/contact?submissionId=${encodeURIComponent(submissionId)}`, {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          continue;
        }

        const statusData = (await response.json()) as {
          status?: "processing" | "success" | "failed";
          error?: string;
        };

        if (statusData.status === "success") {
          return;
        }

        if (statusData.status === "failed") {
          setSubmitError(statusData.error || "Your form was received, but backend processing failed. Please contact support.");
          return;
        }
      } catch (error) {
        console.error("Failed to check submission status:", error);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="lg:col-span-3 bg-background/60 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">
              Full Name
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-500 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-[#020617]/50 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-[var(--primary)] transition-all duration-300 hover:border-slate-700"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-[#020617]/50 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-[var(--primary)] transition-all duration-300 hover:border-slate-700"
                placeholder="john@company.com"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formState.subject}
            onChange={handleChange}
            className="w-full bg-[#020617]/50 border border-slate-800 rounded-xl py-3 px-4 text-foreground placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-[var(--primary)] transition-all duration-300 hover:border-slate-700"
            placeholder="How can we help you?"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formState.message}
            onChange={handleChange}
            className="w-full bg-[#020617]/50 border border-slate-800 rounded-xl py-3 px-4 text-foreground placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-[var(--primary)] transition-all duration-300 hover:border-slate-700 resize-none"
            placeholder="Tell us about your project or inquiry..."
          />
        </div>

        <div className="space-y-3">
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary p-[1px] font-semibold text-foreground transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            <div className="relative flex items-center justify-center gap-2 rounded-xl bg-[#020617]/20 px-4 py-3 backdrop-blur-md transition-colors group-hover:bg-transparent">
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : isSubmitted ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Form Submitted!</span>
                </motion.div>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </div>
          </button>

          {submitError && (
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm font-medium text-center">
              {submitError}
            </motion.p>
          )}

          {isSubmitted && !submitError && (
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-400 text-sm font-medium text-center">
              Form submitted successfully. We are processing your request in background.
            </motion.p>
          )}
        </div>
      </form>
    </motion.div>
  );
}
