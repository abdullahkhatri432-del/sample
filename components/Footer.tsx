import Link from "next/link";

const explore = [
  { href: "/properties", label: "All properties" },
  { href: "/properties?mode=buy", label: "Buy" },
  { href: "/properties?mode=rent", label: "Rent" },
  { href: "/properties?mode=commercial", label: "Commercial" },
  { href: "/agents", label: "Our agents" },
];

const company = [
  { href: "/about", label: "About Aurelia" },
  { href: "/agents", label: "Meet the team" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Request a valuation" },
];

const cities = [
  "Mumbai",
  "Bengaluru",
  "Delhi NCR",
  "Hyderabad",
  "Goa",
  "Jaipur",
  "Pune",
];

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-8">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold-hi">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l9 9h-3v8h-5v-5h-2v5H6v-8H3l9-9z" fill="currentColor" />
                </svg>
              </span>
              <span className="headline text-xl tracking-wide">Aurelia Estates</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-bone/60">
              A premium advisory for exceptional homes. Discreet, considered and obsessive about
              the details that make a residence feel like it was always yours.
            </p>
            <div className="mt-6 flex gap-3">
              {["Instagram", "LinkedIn"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-bone/15 px-4 py-2 text-xs text-bone/70 transition hover:border-gold hover:text-gold-hi"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-hi">Explore</h4>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-bone/70 transition hover:text-bone">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-hi">Company</h4>
            <ul className="mt-5 space-y-3">
              {company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-bone/70 transition hover:text-bone">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-hi">Locations</h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {cities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-bone/10 px-3 py-1.5 text-xs text-bone/60"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-bone/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-bone/40">© {new Date().getFullYear()} Aurelia Estates. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-bone/40">
            <span>Privacy</span>
            <span>Terms</span>
            <span>RERA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
