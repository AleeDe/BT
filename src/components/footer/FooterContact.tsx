import { Mail, Phone, MapPin } from 'lucide-react';

export function FooterContact() {
  return (
    <div>
      <h3 className="text-foreground font-semibold mb-6">Contact Us</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
          <a
            href="https://www.google.com/maps?q=Skardu,+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-foreground transition-colors"
          >
            Skardu, Pakistan
          </a>
        </li>
        <li className="flex items-center">
          <Phone className="w-5 h-5 text-primary mr-3 shrink-0" />
          <a href="tel:+923102700403" className="text-sm text-slate-400 hover:text-foreground transition-colors">
            +92 310 2700403
          </a>
        </li>
        <li className="flex items-center">
          <Mail className="w-5 h-5 text-primary mr-3 shrink-0" />
          <a href="mailto:contact@babultech.com" className="text-sm text-slate-400 hover:text-foreground transition-colors">
            contact@babultech.com
          </a>
        </li>
      </ul>
    </div>
  );
}
