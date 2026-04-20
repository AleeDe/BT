import Link from 'next/link';

export function DesktopCta() {
  return (
    <div className="hidden md:flex items-center gap-3">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-foreground shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:bg-primary transition focus:outline-none"
      >
        Consult an Expert
      </Link>
    </div>
  );
}
