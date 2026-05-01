import { Mail, Phone, MapPin } from 'lucide-react';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_HOURS,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  OFFICE_LOCATIONS,
} from '@/lib/contact';

export function FooterContact() {
  return (
    <div>
      <h3 className="text-foreground font-semibold mb-6">Contact Us</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
          <div className="space-y-2">
            {OFFICE_LOCATIONS.map((office) => (
              <a
                key={office.label}
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-slate-400 hover:text-foreground transition-colors"
              >
                <span className="text-slate-300">{office.label}:</span> {office.address}
              </a>
            ))}
          </div>
        </li>
        <li className="flex items-start">
          <Phone className="w-5 h-5 text-primary mr-3 shrink-0" />
          <div>
            <a href={CONTACT_PHONE_HREF} className="text-sm text-slate-400 hover:text-foreground transition-colors">
              {CONTACT_PHONE}
            </a>
            <p className="mt-1 text-xs text-slate-500">{CONTACT_HOURS}</p>
          </div>
        </li>
        <li className="flex items-center">
          <Mail className="w-5 h-5 text-primary mr-3 shrink-0" />
          <a href={CONTACT_EMAIL_HREF} className="text-sm text-slate-400 hover:text-foreground transition-colors">
            {CONTACT_EMAIL}
          </a>
        </li>
      </ul>
    </div>
  );
}
