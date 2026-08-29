import Link from "next/link";
import { notFound } from "next/navigation";
import { getProperty, getRelated, getAgent, properties, formatINR, type ListingMode } from "@/lib/data";
import Gallery from "@/components/Gallery";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading, Badge } from "@/components/ui";
import { EnquiryButton, WhatsAppButton } from "@/components/CTA";

const modeLabel: Record<ListingMode, string> = {
  buy: "For Sale",
  rent: "For Rent",
  commercial: "Commercial",
};

function priceText(price: number, mode: ListingMode) {
  if (mode === "rent") return `${formatINR(price)} /month`;
  return formatINR(price);
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) return {};
  return {
    title: `${property.title} · ${property.location} | Aurelia Estates`,
    description: `${property.description[0].slice(0, 155)}`,
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) notFound();

  const agent = getAgent(property.agentId);
  const related = getRelated(property);

  return (
    <div className="bg-bone pb-20 pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-stone">
          <Link href="/" className="transition hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/properties" className="transition hover:text-ink">Properties</Link>
          <span>/</span>
          <span className="text-ink">{property.title}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_400px]">
          {/* ============ LEFT — gallery + details ============ */}
          <div>
            <Gallery images={property.images} title={property.title} />

            {/* title block */}
            <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="mb-2 flex flex-wrap gap-2">
                  <Badge tone="dark">{modeLabel[property.mode]}</Badge>
                  {property.status === "new" && <Badge tone="gold">New</Badge>}
                  {property.status === "under-offer" && <Badge tone="light">Under offer</Badge>}
                  {property.featured && <Badge tone="gold">Featured</Badge>}
                </div>
                <h1 className="headline text-3xl text-ink sm:text-4xl">{property.title}</h1>
                <p className="mt-2 flex items-center gap-2 text-stone">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s-7-6.1-7-11a7 7 0 1114 0c0 4.9-7 11-7 11z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  {property.location}
                </p>
              </div>
              <div className="text-right">
                <p className="headline text-3xl text-ink">{priceText(property.price, property.mode)}</p>
                {property.additionalFees && (
                  <p className="mt-1 max-w-xs text-xs text-stone">{property.additionalFees}</p>
                )}
              </div>
            </div>

            {/* key facts */}
            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink/8 ring-1 ring-ink/8 sm:grid-cols-4">
              {[
                { label: "Bedrooms", value: property.beds ? `${property.beds}` : "—" },
                { label: "Bathrooms", value: `${property.baths}` },
                { label: "Area", value: `${property.areaSqft.toLocaleString("en-IN")} sqft` },
                { label: "Year built", value: `${property.yearBuilt}` },
              ].map((f) => (
                <div key={f.label} className="bg-ivory px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-stone">{f.label}</p>
                  <p className="headline mt-1 text-xl text-ink">{f.value}</p>
                </div>
              ))}
            </div>

            {/* description */}
            <section className="mt-10">
              <h2 className="headline text-2xl text-ink">About this residence</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-stone">
                {property.description.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>
            </section>

            {/* highlights */}
            <section className="mt-10">
              <h2 className="headline text-2xl text-ink">Highlights</h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {property.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 rounded-xl bg-ivory px-4 py-3 text-sm text-ink ring-1 ring-ink/6">
                    <span className="text-gold">✦</span> {h}
                  </li>
                ))}
              </ul>
            </section>

            {/* amenities */}
            {property.amenities.length > 0 && (
              <section className="mt-10">
                <h2 className="headline text-2xl text-ink">Amenities</h2>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-3 rounded-xl bg-bone-2 px-4 py-3 text-sm text-ink">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {a}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* floor plans */}
            {property.floorPlans.length > 0 && (
              <section className="mt-10">
                <h2 className="headline text-2xl text-ink">Floor plans</h2>
                <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {property.floorPlans.map((fp) => (
                    <div key={fp.name} className="overflow-hidden rounded-2xl bg-ivory ring-1 ring-ink/6">
                      <div className="relative aspect-[4/3] bg-bone-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={fp.image} alt={fp.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex items-center justify-between px-5 py-4">
                        <div>
                          <p className="text-sm font-medium text-ink">{fp.name}</p>
                          <p className="text-xs text-stone">{fp.rooms}</p>
                        </div>
                        <span className="text-sm font-medium text-gold-deep">{fp.area}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* map */}
            <section className="mt-10">
              <h2 className="headline text-2xl text-ink">Location</h2>
              <p className="mt-2 text-sm text-stone">{property.location}</p>
              <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-ink/10">
                <iframe
                  title="Location map"
                  className="h-[340px] w-full"
                  loading="lazy"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${property.lng - 0.02}%2C${property.lat - 0.02}%2C${property.lng + 0.02}%2C${property.lat + 0.02}&layer=mapnik&marker=${property.lat}%2C${property.lng}&attribution=false`}
                />
              </div>
            </section>
          </div>

          {/* ============ RIGHT — agent + sidebar ============ */}
          <aside className="lg:mt-0">
            <div className="space-y-6">
              {/* agent card */}
              <div className="rounded-3xl bg-ink p-6 text-bone">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-hi">
                  Your adviser
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={agent.avatar} alt={agent.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="headline text-lg">{agent.name}</h3>
                    <p className="text-sm text-bone/60">{agent.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-bone/70">{agent.bio}</p>

                <div className="mt-6 grid gap-3">
                  <EnquiryButton
                    intent={{
                      mode: "book",
                      format: "viewing",
                      title: property.title,
                    }}
                    className="w-full"
                  >
                    Schedule a private viewing
                  </EnquiryButton>
                  <EnquiryButton
                    intent={{
                      mode: "enquire",
                      format: "message",
                      title: property.title,
                    }}
                    variant="outline-light"
                    className="w-full"
                  >
                    Ask a question
                  </EnquiryButton>
                  <WhatsAppButton propertyTitle={property.title} className="w-full" />
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-bone/15 pt-4 text-sm">
                  <span className="text-bone/60">{agent.listings} homes advised</span>
                  <span className="text-bone/60">{agent.experienceYears} yrs experience</span>
                </div>
              </div>

            {/* quick facts */}
            <div className="rounded-3xl bg-ivory p-6 ring-1 ring-ink/6">
              <h3 className="headline text-lg text-ink">Essentials</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  {property.possession && (
                    <div className="flex justify-between">
                      <dt className="text-stone">Possession</dt>
                      <dd className="font-medium text-ink">{property.possession}</dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt className="text-stone">Type</dt>
                    <dd className="font-medium text-ink capitalize">{property.type}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-stone">Location</dt>
                    <dd className="font-medium text-ink">{property.area}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-stone">Agent reference</dt>
                    <dd className="font-medium text-ink">{property.id.toUpperCase()}</dd>
                  </div>
                </dl>
            </div>
            </div>
          </aside>
        </div>

        {/* related */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="You may also like"
            title="Similar residences"
            align="left"
          />
          <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return properties.map((p) => ({ id: p.slug }));
}
