"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formatINR, type Property, type ListingMode } from "@/lib/data";
import { Badge, Img } from "./ui";

const modeLabel: Record<ListingMode, string> = {
  buy: "For Sale",
  rent: "For Rent",
  commercial: "Commercial",
};

function priceText(p: Property) {
  if (p.mode === "rent") return `${formatINR(p.price)} /mo`;
  return formatINR(p.price);
}

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  const slug = `/properties/${property.slug}`;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-ivory shadow-[0_20px_50px_-30px_rgba(0,0,0,0.4)] ring-1 ring-ink/6 transition-transform duration-500 hover:-translate-y-1"
    >
      <Link href={slug}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Img
            src={property.images[0]}
            alt={property.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            label={property.title[0]}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge tone="dark">{modeLabel[property.mode]}</Badge>
            {property.status === "new" && <Badge tone="gold">New</Badge>}
            {property.status === "under-offer" && <Badge tone="light">Under offer</Badge>}
          </div>
          {property.featured && (
            <div className="absolute right-4 top-4">
              <span className="text-xs text-gold-hi drop-shadow">★ Featured</span>
            </div>
          )}
        </div>

        <div className="p-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone">
            {property.area} · {property.city}
          </p>
          <h3 className="headline mt-1.5 text-lg text-ink transition group-hover:text-gold-deep">
            {property.title}
          </h3>

          <div className="mt-3 flex items-center gap-4 text-sm text-stone">
            <span className="flex items-center gap-1.5">
              <BedIcon /> {property.beds || "—"} bd
            </span>
            <span className="flex items-center gap-1.5">
              <BathIcon /> {property.baths} ba
            </span>
            <span className="flex items-center gap-1.5">
              <AreaIcon /> {property.areaSqft.toLocaleString("en-IN")} sqft
            </span>
          </div>

          <div className="mt-4 flex items-end justify-between border-t border-ink/8 pt-4">
            <span className="headline text-xl text-ink">{priceText(property)}</span>
            <span className="text-sm text-gold-deep transition group-hover:translate-x-1">
              View →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function BedIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 14h18M5 10V7h14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BathIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 12h16v2a5 5 0 01-5 5H9a5 5 0 01-5-5v-2zM6 12V6a2 2 0 012-2h1v2M8 21l-1 2M16 21l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function AreaIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 21h18M5 21V5a2 2 0 012-2h6l8 10-8 0-2-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
