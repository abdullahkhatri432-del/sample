import Link from "next/link";
import { properties, agents, testimonials, stats, formatINR } from "@/lib/data";
import Search from "@/components/Search";
import { PropertyCard } from "@/components/PropertyCard";
import { AgentCard } from "@/components/AgentCard";
import { Reveal, SectionHeading, Button, Badge, Img } from "@/components/ui";
import { EnquiryButton, WhatsAppButton } from "@/components/CTA";

const HERO =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80";
const HERO_2 =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80";

export default function HomePage() {
  const featured = properties.filter((p) => p.featured).slice(0, 3);
  const latest = properties.slice(0, 6);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Img
            src={HERO}
            alt="Signature residence at dusk"
            fill
            priority
            sizes="100vw"
            label="A"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-40 pt-32 sm:px-8">
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-hi">
            <span className="h-px w-10 bg-gold-hi" /> Curated Luxury Real Estate
          </p>
          <h1 className="headline max-w-3xl text-4xl leading-[1.05] text-bone sm:text-6xl lg:text-7xl">
            Homes that feel like they always knew you.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/80">
            Aurelia Estates is a premium advisory for exceptional residences — considered,
            discreet and obsessive about the details most people never notice.
          </p>

          <div className="mt-10 max-w-4xl">
            <Search />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-bone/60">
          <span className="h-8 w-px bg-bone/40" />
          <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-b border-ink/8 bg-bone">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-14 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="px-4 py-6 text-center lg:py-8">
              <div className="headline text-3xl text-ink sm:text-4xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-stone">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FEATURED ============ */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Signature Collection"
              title="Featured residences"
              lead="A hand-picked selection from our current portfolio — homes chosen as much for how they make you feel as for what they're worth."
            />
            <Link
              href="/properties"
              className="hidden shrink-0 items-center gap-2 text-sm font-medium text-gold-deep transition hover:text-ink sm:flex"
            >
              View all properties →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ LATEST ============ */}
      <section className="bg-bone-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Fresh off the register"
            title="Latest additions"
            lead="The most recent residences to join the Aurelia portfolio."
          />
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center sm:hidden">
            <Button href="/properties" as="a">
              View all properties
            </Button>
          </div>
        </div>
      </section>

      {/* ============ EDITORIAL BAND ============ */}
      <section className="relative overflow-hidden bg-ink py-20 text-bone sm:py-28">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <Img src={HERO_2} alt="" fill sizes="50vw" label="A" className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-xl">
            <Reveal>
              <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-hi">
                <span className="h-px w-10 bg-gold-hi" /> The Aurelia standard
              </p>
              <h2 className="headline text-3xl leading-tight sm:text-4xl">
                We don&apos;t sell square feet. We match you to a life.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-bone/70">
                Every mandate begins the same way — over a coffee, not over a portal. We listen
                first, advise second, and only then do we open the portfolio.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/about" variant="gold" as="a">
                  Our story
                </Button>
                <EnquiryButton variant="outline" className="border-bone/60 text-bone hover:text-gold-hi hover:border-gold-hi">
                  Book a consultation
                </EnquiryButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ AGENTS ============ */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The people"
            title="Your advisers"
            lead="Seasoned professionals who treat your home as if it were their own."
          />
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {agents.slice(0, 3).map((a, i) => (
              <AgentCard key={a.id} agent={a} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/agents" as="a" variant="dark">
              Meet the full team
            </Button>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-bone-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="In their words"
            title="Trusted on both sides"
            lead="From first viewings to final signatures, here's what those we've guided have to say."
          />
          <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 0.08}
                className="flex flex-col rounded-2xl bg-ivory p-7 ring-1 ring-ink/6 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.4)]"
              >
                <div className="mb-4 flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="headline flex-1 text-lg leading-relaxed text-ink">“{t.quote}”</p>
                <div className="mt-6 border-t border-ink/8 pt-4">
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-stone">{t.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STRONG CTA ============ */}
      <section className="relative overflow-hidden bg-ink py-24 text-center text-bone">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(183,154,94,0.18),transparent_70%)]" />
        <Reveal className="relative mx-auto max-w-2xl px-5">
          <span className="headline text-gold-hi">· Aurelia Estates ·</span>
          <h2 className="headline mt-4 text-3xl leading-tight sm:text-5xl">
            The right address changes everything.
          </h2>
          <p className="mt-5 text-lg text-bone/70">
            Whether you&apos;re buying, renting or letting us guide a sale, start with a conversation.
            No pressure, no obligation — just considered advice.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <EnquiryButton intent={{ mode: "book", format: "viewing", title: "Introductory consultation" }}>
              Book a consultation
            </EnquiryButton>
            <WhatsAppButton />
          </div>
        </Reveal>
      </section>

      {/* ============ PRICE MARQUEE / TRUST ============ */}
      <section className="border-t border-ink/8 bg-bone py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <Badge tone="gold">Featured home</Badge>
            <span className="text-sm text-stone">from {formatINR(Math.min(...properties.map((p) => p.price)), true)}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-[0.2em] text-stone-light">
            <span>RERA verified</span>
            <span>Legal & title due diligence</span>
            <span>Off-market access</span>
            <span>Property management</span>
          </div>
        </div>
      </section>
    </>
  );
}
