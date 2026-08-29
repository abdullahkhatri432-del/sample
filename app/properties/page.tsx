"use client";

import { useMemo, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { properties, cities, type ListingMode, type Property } from "@/lib/data";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading } from "@/components/ui";

const modes: { value: ListingMode | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
  { value: "commercial", label: "Commercial" },
];

const typeLabels: Record<string, string> = {
  villa: "Villa",
  apartment: "Apartment",
  penthouse: "Penthouse",
  bungalow: "Bungalow",
  townhouse: "Townhouse",
  office: "Office",
  retail: "Retail",
  warehouse: "Warehouse",
};

function PropertiesInner() {
  const params = useSearchParams();
  const [mode, setMode] = useState<ListingMode | "all">(
    (params.get("mode") as ListingMode) || "all"
  );
  const [location, setLocation] = useState(params.get("location") ?? "");
  const [type, setType] = useState("all");
  const [beds, setBeds] = useState(Number(params.get("beds")) || 0);
  const [maxPrice, setMaxPrice] = useState(Number(params.get("max")) || 0);
  const [q, setQ] = useState(params.get("q") ?? "");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc" | "newest">("featured");
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // small fake loading state on filter changes for polish
  function runFilter(fn: () => void) {
    setLoading(true);
    window.setTimeout(() => {
      fn();
      setLoading(false);
    }, 250);
  }

  const results = useMemo(() => {
    let r = properties.filter((p) => {
      if (mode !== "all" && p.mode !== mode) return false;
      if (location && p.location.toLowerCase().includes(location.toLowerCase())) {
        // keep
      } else if (location && cities.some((c) => c.toLowerCase() === location.toLowerCase())) {
        if (!p.city.toLowerCase().includes(location.toLowerCase())) return false;
      } else if (location) {
        const loc = location.toLowerCase();
        const hay = `${p.title} ${p.location} ${p.city} ${p.area}`.toLowerCase();
        if (!hay.includes(loc)) return false;
      }
      if (type !== "all" && p.type !== type) return false;
      if (beds && p.beds < beds) return false;
      if (maxPrice && p.price > maxPrice) return false;
      if (q) {
        const hay = `${p.title} ${p.location} ${p.city} ${p.area}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });

    r = [...r].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "newest") return b.yearBuilt - a.yearBuilt;
      return Number(b.featured) - Number(a.featured);
    });
    return r;
  }, [mode, location, type, beds, maxPrice, q, sort]);

  const counts: Record<string, number> = useMemo(() => {
    const c: Record<string, number> = {};
    properties.forEach((p) => (c[p.city] = (c[p.city] ?? 0) + 1));
    return c;
  }, []);

  return (
    <div className="bg-bone pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="left"
          eyebrow="The Portfolio"
          title="Available residences"
          lead="Browse our current collection of exceptional homes and commercial spaces across the country's most sought-after addresses."
        />

        {/* toolbar */}
        <div className="sticky top-16 z-30 mt-10 rounded-2xl bg-ivory/95 p-4 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.5)] ring-1 ring-ink/6 backdrop-blur">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* mode tabs */}
            <div className="flex flex-wrap gap-1 rounded-xl bg-bone-2 p-1">
              {modes.map((m) => (
                <button
                  key={m.value}
                  onClick={() => runFilter(() => setMode(m.value))}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    mode === m.value ? "bg-ink text-bone" : "text-stone hover:text-ink"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 rounded-lg border border-ink/10 px-3 py-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  value={q}
                  onChange={(e) => runFilter(() => setQ(e.target.value))}
                  placeholder="Search portfolio"
                  className="w-40 bg-transparent text-sm text-ink placeholder:text-stone-light focus:outline-none"
                />
              </div>
              <button
                onClick={() => setShowFilters((v) => !v)}
                className="flex items-center gap-2 rounded-lg border border-ink/10 px-4 py-2 text-sm text-stone transition hover:border-gold hover:text-ink"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Filters
              </button>
              <select
                value={sort}
                onChange={(e) => runFilter(() => setSort(e.target.value as typeof sort))}
                className="rounded-lg border border-ink/10 bg-ivory px-3 py-2 text-sm text-ink focus:outline-none"
              >
                <option value="featured">Featured first</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="newest">Newest first</option>
              </select>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-ink/8 pt-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label className="mb-1.5 block text-xs text-stone">Location</label>
                <select
                  value={location}
                  onChange={(e) => runFilter(() => setLocation(e.target.value))}
                  className="w-full rounded-lg border border-ink/10 bg-ivory px-3 py-2.5 text-sm text-ink focus:outline-none"
                >
                  <option value="">All locations</option>
                  {Object.keys(counts).sort().map((c) => (
                    <option key={c} value={c}>
                      {c} ({counts[c]})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-stone">Property type</label>
                <select
                  value={type}
                  onChange={(e) => runFilter(() => setType(e.target.value))}
                  className="w-full rounded-lg border border-ink/10 bg-ivory px-3 py-2.5 text-sm text-ink focus:outline-none"
                >
                  <option value="all">All types</option>
                  {Object.entries(typeLabels).map(([k, v]) => (
                    <option key={k} value={k}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-stone">Min. bedrooms</label>
                <div className="flex gap-1.5">
                  {[0, 2, 3, 4, 5].map((b) => (
                    <button
                      key={b}
                      onClick={() => runFilter(() => setBeds(b))}
                      className={`flex-1 rounded-lg border py-2 text-sm transition ${
                        beds === b ? "border-gold bg-gold/10 text-gold-deep" : "border-ink/10 text-stone"
                      }`}
                    >
                      {b === 0 ? "Any" : `${b}+`}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-stone">Max budget</label>
                <select
                  value={maxPrice}
                  onChange={(e) => runFilter(() => setMaxPrice(Number(e.target.value)))}
                  className="w-full rounded-lg border border-ink/10 bg-ivory px-3 py-2.5 text-sm text-ink focus:outline-none"
                >
                  <option value={0}>Any price</option>
                  <option value={20000000}>Up to ₹2 Cr</option>
                  <option value={50000000}>Up to ₹5 Cr</option>
                  <option value={100000000}>Up to ₹10 Cr</option>
                  <option value={150000000}>Up to ₹15 Cr</option>
                  <option value={999999999}>₹15 Cr+</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* result count */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-stone">
            <span className="font-medium text-ink">{results.length}</span>{" "}
            {results.length === 1 ? "residence" : "residences"} found
          </p>
          {loading && (
            <span className="text-xs text-stone-light">Refining…</span>
          )}
        </div>

        {/* grid / loading / empty */}
        <div className="relative mt-6">
          <div
            className={`grid grid-cols-1 gap-7 transition-opacity sm:grid-cols-2 lg:grid-cols-3 ${loading ? "opacity-30" : "opacity-100"}`}
          >
            {!loading &&
              results.map((p: Property, i) => <PropertyCard key={p.id} property={p} index={i} />)}
            {!loading && results.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink/15 bg-ivory px-6 py-20 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="7" stroke="#997c44" strokeWidth="1.5" />
                    <path d="M20 20l-3.5-3.5" stroke="#997c44" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="headline mt-4 text-xl text-ink">No residences match yet</h3>
                <p className="mt-2 max-w-sm text-sm text-stone">
                  Try widening your search, or speak with an adviser about off-market options we
                  don&apos;t publish.
                </p>
                <button
                  onClick={() =>
                    runFilter(() => {
                      setMode("all");
                      setLocation("");
                      setType("all");
                      setBeds(0);
                      setMaxPrice(0);
                      setQ("");
                    })
                  }
                  className="mt-6 rounded-full bg-ink px-6 py-3 text-sm text-bone transition hover:bg-ink-soft"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* helper strip */}
        {results.length > 0 && (
          <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl bg-ink px-7 py-6 text-bone sm:flex-row">
            <p className="text-sm text-bone/70">
              Looking for something off-market? Our private portfolio includes homes that never
              reach the portal.
            </p>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-ivory transition hover:bg-gold-deep"
            >
              Request off-market access
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="py-40 text-center text-stone pt-40">Loading portfolio…</div>}>
      <PropertiesInner />
    </Suspense>
  );
}
