import { agents } from "@/lib/data";
import { AgentCard } from "@/components/AgentCard";
import { SectionHeading } from "@/components/ui";
import { EnquiryButton } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Advisers",
  description:
    "Meet the senior team behind Aurelia Estates — seasoned advisers who take every mandate personally, from first viewing to signature.",
};

const values = [
  {
    title: "Discretion first",
    text: "Mandates are handled privately. Our off-market portfolio rarely reaches a public portal.",
  },
  {
    title: "Advice over commission",
    text: "We'll tell you when a property is wrong for you — even if it means a smaller deal for us.",
  },
  {
    title: "Obsessive detail",
    text: "From title due diligence to the finishing of a single light switch, nothing is left to chance.",
  },
];

export default function AgentsPage() {
  return (
    <div className="bg-bone pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The people behind the portfolio"
          title="Your advisers"
          lead="A small, senior team that treats every mandate as if the home were its own. No juniors, no hand-offs — the person you meet stays with you to signature."
        />

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((a, i) => (
            <AgentCard key={a.id} agent={a} index={i} />
          ))}
        </div>

        {/* values */}
        <div className="mt-20">
          <SectionHeading eyebrow="How we work" title="Three principles" align="left" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl bg-ivory p-7 ring-1 ring-ink/6">
                <span className="headline text-gold-hi">0{i + 1}</span>
                <h3 className="headline mt-3 text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl bg-ink px-8 py-12 text-center text-bone">
          <h2 className="headline text-2xl text-bone sm:text-3xl">Start with a conversation, not a contract.</h2>
          <p className="mx-auto mt-3 max-w-md text-bone/70">
            Tell us what you&apos;re looking for and we&apos;ll match you with the adviser best suited to it.
          </p>
          <div className="mt-7 flex justify-center">
            <EnquiryButton intent={{ mode: "book", format: "callback", title: "Adviser introduction" }}>
              Request an introduction
            </EnquiryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
