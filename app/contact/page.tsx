import { Img, Reveal, SectionHeading, Button } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with an Aurelia Estates adviser about viewings, valuations or a question about any market. No obligation, ever.",
};

const HERO =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";

const offices = [
  {
    city: "Mumbai · HQ",
    address: "4th Floor, Tower A, Maker Chambers, Nariman Point, Mumbai 400021",
    phone: "+91 22 4080 1100",
  },
  {
    city: "Bengaluru",
    address: "Level 2, Neo Square, Indiranagar 100 Ft Road, Bengaluru 560038",
    phone: "+91 80 4666 2100",
  },
  {
    city: "Delhi NCR",
    address: "Penthouse, One Horizon, Golf Course Road, Gurugram 122002",
    phone: "+91 124 487 0900",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-bone">
      {/* hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Img src={HERO} alt="Aurelia Estates" fill priority sizes="100vw" label="A" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-5 pt-28 text-center sm:px-8">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-hi">
            <span className="h-px w-10 bg-gold-hi" /> Get in touch
          </p>
          <h1 className="headline text-4xl leading-tight text-bone sm:text-5xl">
            Start with a conversation.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-bone/80">
            Whether it&apos;s a viewing, a valuation, or simply a question about a market you&apos;re
            watching — we&apos;d be glad to help. No obligation, ever.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="#contact-form"
              as="a"
              variant="gold"
              className="scroll-smooth"
            >
              Send a message
            </Button>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* contact details + form */}
      <section className="bg-bone py-20 sm:py-28" id="contact-form">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Reach us"
              title="Direct lines, senior minds"
              lead="Write, call or drop by. Every enquiry — however small — is answered by a person, not a portal."
            />

            <div className="mt-8 space-y-6">
              {[
                {
                  label: "General enquiries",
                  value: "hello@aurelia.estate",
                  href: "mailto:hello@aurelia.estate",
                },
                {
                  label: "Private sales",
                  value: "meera@aurelia.estate",
                  href: "mailto:meera@aurelia.estate",
                },
                {
                  label: "Commercial",
                  value: "arjun@aurelia.estate",
                  href: "mailto:arjun@aurelia.estate",
                },
                {
                  label: "Phone",
                  value: "+91 98200 11400",
                  href: "tel:+919820011400",
                },
              ].map((c) => (
                <Reveal key={c.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/12 text-gold-deep">
                    {c.label === "Phone" ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.8.7a2 2 0 011.7 2z" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    )}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-stone">{c.label}</p>
                    <a href={c.href} className="text-[15px] font-medium text-ink transition hover:text-gold-deep">
                      {c.value}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* offices */}
            <div className="mt-10 border-t border-ink/8 pt-8">
              <h3 className="headline text-lg text-ink">Our offices</h3>
              <div className="mt-5 space-y-5">
                {offices.map((o) => (
                  <div key={o.city}>
                    <p className="text-sm font-medium text-ink">{o.city}</p>
                    <p className="mt-1 text-sm text-stone">{o.address}</p>
                    <p className="mt-0.5 text-sm text-stone">{o.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* map */}
      <section className="border-t border-ink/8">
        <div className="relative h-[420px] w-full">
          <iframe
            title="Aurelia Estates — Nariman Point, Mumbai"
            className="h-full w-full"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.80%2C18.90%2C72.84%2C18.94&layer=mapnik&marker=18.9261%2C72.8246&attribution=false"
          />
          <div className="pointer-events-none absolute bottom-5 left-5 rounded-2xl bg-ivory/95 px-5 py-4 shadow ring-1 ring-ink/6 backdrop-blur">
            <p className="headline text-sm text-ink">Aurelia Estates — Mumbai HQ</p>
            <p className="text-xs text-stone">Maker Chambers, Nariman Point</p>
          </div>
        </div>
      </section>
    </div>
  );
}
