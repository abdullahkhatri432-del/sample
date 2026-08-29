"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ListingMode } from "@/lib/data";

const tabs: { value: ListingMode; label: string }[] = [
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
  { value: "commercial", label: "Commercial" },
];

const maxByMode: Record<ListingMode, number> = {
  buy: 200000000,
  rent: 1200000,
  commercial: 5000000,
};

const fmt = (n: number) =>
  n >= 10000000
    ? `₹${(n / 10000000).toFixed(1)} Cr`
    : n >= 100000
    ? `₹${Math.round(n / 100000)} L`
    : `₹${(n / 1000).toFixed(0)}k`;

export default function Search() {
  const router = useRouter();
  const [mode, setMode] = useState<ListingMode>("buy");
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState(maxByMode.buy / 2);
  const [beds, setBeds] = useState(0);
  const [open, setOpen] = useState(false);

  function switchMode(m: ListingMode) {
    setMode(m);
    setMaxPrice(maxByMode[m] / 2);
  }

  function submit() {
    const params = new URLSearchParams();
    params.set("mode", mode);
    if (keyword) params.set("q", keyword);
    if (location) params.set("location", location);
    if (beds) params.set("beds", String(beds));
    params.set("max", String(maxPrice));
    router.push(`/properties?${params.toString()}`);
  }

  return (
    <div className="rounded-3xl bg-ivory/90 p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)] ring-1 ring-white/60 backdrop-blur-xl">
      {/* tabs */}
      <div className="mb-2 flex gap-1 rounded-2xl bg-bone-2 p-1">
        {tabs.map((t) => (
          <button
            key={t.value}
            onClick={() => switchMode(t.value)}
            className={`relative flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              mode === t.value ? "text-ivory" : "text-stone hover:text-ink"
            }`}
          >
            {mode === t.value && (
              <motion.span
                layoutId="search-tab"
                className="absolute inset-0 rounded-xl bg-ink"
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              />
            )}
            <span className="relative">{t.label}</span>
          </button>
        ))}
      </div>

      {/* keyword row */}
      <div className="flex flex-col gap-2 lg:flex-row">
        <div className="flex flex-1 items-center gap-3 rounded-2xl border border-ink/10 bg-ivory px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="Search by name, area or address"
            className="w-full bg-transparent text-sm text-ink placeholder:text-stone-light focus:outline-none"
          />
        </div>

        <div className="relative flex items-center gap-3 rounded-2xl border border-ink/10 bg-ivory px-4 py-3 lg:w-56">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 21s-7-6.1-7-11a7 7 0 1114 0c0 4.9-7 11-7 11z" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="w-full bg-transparent text-sm text-ink placeholder:text-stone-light focus:outline-none"
          />
        </div>

        <button
          onClick={submit}
          className="rounded-2xl bg-gold px-8 py-3.5 text-sm font-medium text-ivory shadow-[0_14px_30px_-12px_rgba(183,154,94,0.7)] transition hover:bg-gold-deep"
        >
          Search
        </button>
      </div>

      {/* filters */}
      <div className="mt-2">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 px-3 py-2 text-[13px] text-stone transition hover:text-ink"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Advanced filters
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition ${open ? "rotate-180" : ""}`}>
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-2 grid grid-cols-1 gap-5 rounded-2xl border border-ink/10 bg-ivory p-5 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-stone">Maximum budget</span>
                    <span className="font-medium text-ink">{fmt(maxPrice)}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={maxByMode[mode]}
                    step={maxByMode[mode] / 100}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full"
                    style={{ "--fill": `${(maxPrice / maxByMode[mode]) * 100}%` } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-stone">Min. bedrooms</label>
                  <div className="flex gap-1.5">
                    {[0, 2, 3, 4, 5].map((b) => (
                      <button
                        key={b}
                        onClick={() => setBeds(b)}
                        className={`flex-1 rounded-lg border px-2 py-2 text-sm transition ${
                          beds === b
                            ? "border-gold bg-gold/10 text-gold-deep"
                            : "border-ink/10 text-stone hover:border-gold/40"
                        }`}
                      >
                        {b === 0 ? "Any" : b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
