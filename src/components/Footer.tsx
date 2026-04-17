import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group relative p-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary [mask-image:url('/logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] drop-shadow-[0_0_12px_rgba(16,185,129,0.7)] group-hover:from-primary group-hover:to-primary transition-all duration-500 z-10" />
              <Image
                src="/logo.png"
                alt="BabulTech Logo"
                width={176}
                height={40}
                loading="lazy"
                className="h-9 sm:h-10 w-auto object-contain opacity-0 z-0"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Delivering certified expertise and rapid resolution across enterprise IT, CRM implementation, and functioning as your strategic technical partner.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-foreground transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-foreground transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-foreground transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-foreground transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Expertise</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://core-services-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Enterprise IT Solutions
                </a>
              </li>
              <li>
                <a href="https://core-services-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  CRM Implementation
                </a>
              </li>
              <li>
                <a href="https://core-services-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Technical Partnership
                </a>
              </li>
              <li>
                <a href="https://core-services-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Cloud Infrastructure
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm text-slate-400 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-slate-400 hover:text-primary transition-colors">Our Case Studies</Link>
              </li>
              <li>
                <a href="https://core-services-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-primary transition-colors">Our Core Services</a>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-slate-400 hover:text-primary transition-colors">Industries</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">Skardu, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 shrink-0" />
                <a href="tel:+923102700403" className="text-sm text-slate-400 hover:text-foreground transition-colors">+92 310 2700403</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 shrink-0" />
                <a href="mailto:contact@babultech.com" className="text-sm text-slate-400 hover:text-foreground transition-colors">contact@babultech.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-500">
          <p>&copy; {currentYear} BabulTech. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-slate-300 transition-colors">Cookie Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
