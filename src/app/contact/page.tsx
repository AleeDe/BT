'use client';

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";

const Mail = dynamic(() => import("lucide-react").then(mod => mod.Mail), { ssr: false });
const Phone = dynamic(() => import("lucide-react").then(mod => mod.Phone), { ssr: false });
const MapPin = dynamic(() => import("lucide-react").then(mod => mod.MapPin), { ssr: false });
const Send = dynamic(() => import("lucide-react").then(mod => mod.Send), { ssr: false });
const MessageSquare = dynamic(() => import("lucide-react").then(mod => mod.MessageSquare), { ssr: false });
const User = dynamic(() => import("lucide-react").then(mod => mod.User), { ssr: false });
const CheckCircle2 = dynamic(() => import("lucide-react").then(mod => mod.CheckCircle2), { ssr: false });

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || 'Failed to send message. Please try again.');
      }

      const data = (await response.json()) as { submissionId?: string };

      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);

      if (data.submissionId) {
        void pollSubmissionStatus(data.submissionId);
      }
    } catch (err) {
      console.error('Failed to submit contact form:', err);
      setSubmitError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
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
          method: 'GET',
          cache: 'no-store',
        });

        if (!response.ok) {
          continue;
        }

        const statusData = (await response.json()) as {
          status?: 'processing' | 'success' | 'failed';
          error?: string;
        };

        if (statusData.status === 'success') {
          return;
        }

        if (statusData.status === 'failed') {
          setSubmitError(statusData.error || 'Your form was received, but backend processing failed. Please contact support.');
          return;
        }
      } catch (error) {
        console.error('Failed to check submission status:', error);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm.",
      value: "+1 (555) 000-0000",
      color: "from-primary to-primary"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Chat with us",
      description: "Our friendly team is here to help.",
      value: "hello@babultech.com",
      color: "from-primary to-primary"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit us",
      description: "Come say hello at our HQ.",
      value: "100 Innovation Drive, Tech City, TC 10010",
      color: "from-primary to-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-foreground pt-28 pb-20 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
              extraordinary
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="group p-6 rounded-2xl bg-background/50 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 flex items-start gap-5 hover:bg-white/[0.02]"
              >
                <div className={`mt-1 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${method.color} bg-opacity-10 text-foreground shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-sm text-slate-400 mb-3">{method.description}</p>
                  <p className="text-base font-medium text-primary">{method.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

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
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
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
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
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
                <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">Subject</label>
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
                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
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
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm font-medium text-center"
                  >
                    {submitError}
                  </motion.p>
                )}

                {isSubmitted && !submitError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-400 text-sm font-medium text-center"
                  >
                    Form submitted successfully. We are processing your request in background.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}