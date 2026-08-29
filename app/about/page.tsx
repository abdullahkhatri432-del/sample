import { Img, Reveal, SectionHeading } from "@/components/ui";
import { WhatsAppButton, EnquiryButton } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Aurelia",
  description:
    "Aurelia Estates is a premium real-estate advisory founded on discretion, considered advice and an obsessive standard of care.",
};

const HERO =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80";

const milestones = [
  { year: "2008", title: "Founded in Mumbai", text: "Solas began as a two-person firm advising on a handful of Worli penthouses." },
  { year: "2012", title: "The off-market principle", text: "We built a private portfolio of homes that never appear on public portals." },
  { year: "2016", title: "Pan-India reach", text: "Mandates from Goa to Gurugram, with a single house standard across every city." },
  { year: "2022", title: "₹7,400 Cr transacted", text: "Two-thousand-plus homes advised and a reputation built on referrals, not advertising." },
];

const values = [
  {
    title: "Considered",
    text: "We move at the pace of your decision, never at the pace of our pipeline. A home is bought once a decade, not once a week.",
  },
  {
    title: "Discreet",
    text: "Privacy is a feature. Our name appears nowhere you haven't asked us to be.",
  },
  {
    title: "True",
    text: "We give advice that serves you whether or not it serves the deal. It's the only reason clients return.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-bone">
      {/* hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Img src={HERO} alt="Aurelia Estates — interior" fill priority sizes="100vw" label="A" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-5 pt-28 text-center sm:px-8">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-hi">
            <span className="h-px w-10 bg-gold-hi" /> Our story
          </p>
          <h1 className="headline text-4xl leading-tight text-bone sm:text-5xl">
            Real estate, reimagined as a long-term relationship.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-bone/80">
            Aurelia Estates was founded on a belief most of the industry quietly abandoned — that
            the right home is not found but advised, and that trust is rarer than any address.
          </p>
        </div>
      </section>

      {/* story */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
                alt="Aurelia home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                label="A"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading align="left" eyebrow="Who we are" title="Small on names. Specific on taste." />
            <p className="mt-5 text-[15px] leading-relaxed text-stone">
              We are a team of six — former lawyers, designers and private-bankers who found more
              meaning in helping families find their next address than in the balance sheets we
              once kept.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-stone">
              The firm began advising penthouses in Worli. Today we work across the country&apos;s finest
              corridors — but we still operate exactly the way we did with the first client: small
              mandates, senior advisers, and a standard of care that would embarrass most brokerage.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-stone">
              When you work with us, the person you meet is the person who stays with you — from the
              first viewing to the handing over of keys, and long after.
            </p>
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section className="bg-bone-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What we stand for" title="Three words, kept" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="rounded-2xl bg-ivory p-8 ring-1 ring-ink/6">
                <span className="headline text-4xl text-gold-hi">{v.title[0]}</span>
                <h3 className="headline mt-4 text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading eyebrow="The journey" title="From two people to a national standard" />
          <div className="relative mt-14 border-l border-gold/40 pl-8 sm:pl-12">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.06} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold sm:-left-[57px]">
                  <span className="h-2 w-2 rounded-full bg-ivory" />
                </span>
                <p className="headline text-2xl text-gold-deep">{m.year}</p>
                <h3 className="headline mt-1 text-xl text-ink">{m.title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-stone">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center text-bone">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="headline text-3xl text-bone sm:text-4xl">See if we&apos;re a good fit.</h2>
          <p className="mt-4 text-bone/70">
            Whether you&apos;re buying, selling or simply curious, we&apos;d be glad to talk — over a coffee
            if you&apos;re in Mumbai, over video if you&apos;re not.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <EnquiryButton intent={{ mode: "book", format: "viewing", title: "About-page consultation" }}>
              Book a consultation
            </EnquiryButton>
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </div>
  );
}
