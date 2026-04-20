import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactMethods } from "@/components/contact/ContactMethods";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-foreground pt-28 pb-20 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContactHeader />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          <ContactMethods />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}