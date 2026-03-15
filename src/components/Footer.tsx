import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group relative p-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2962FF] to-[#00E5FF] [mask-image:url('/logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] drop-shadow-[0_0_12px_rgba(41,98,255,0.7)] group-hover:from-[#00E5FF] group-hover:to-[#2962FF] transition-all duration-500 z-10" />
              <Image
                src="/logo.png"
                alt="BabulTech Logo"
                width={176}
                height={40}
                className="h-9 sm:h-10 w-auto object-contain opacity-0 z-0"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Delivering certified expertise and rapid resolution across enterprise IT, CRM implementation, and scalable full-stack applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Expertise</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Enterprise IT Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  CRM Implementation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Full-Stack Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Cloud Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Our Subsidiaries</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">News & Insights</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">123 Tech Avenue, Innovation District<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-slate-400 hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                <a href="mailto:hello@babultech.com" className="text-sm text-slate-400 hover:text-white transition-colors">hello@babultech.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-500">
          <p>&copy; {currentYear} BabulTech. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Cookie Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
