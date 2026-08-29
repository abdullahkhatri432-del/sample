"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Img } from "./ui";

export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      {/* main image */}
      <div
        className="group relative aspect-[16/10] overflow-hidden rounded-3xl cursor-zoom-in"
        onClick={() => setLightbox(active)}
      >
        <Img
          src={images[active]}
          alt={`${title} — view ${active + 1}`}
          fill
          priority
          sizes="100vw"
          label={title[0]}
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white backdrop-blur">
          {active + 1} / {images.length} · Tap to enlarge
        </span>
      </div>

      {/* thumbnails */}
      <div className="mt-3 grid grid-cols-5 gap-3 sm:grid-cols-7">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-square overflow-hidden rounded-xl transition ${
              active === i
                ? "ring-2 ring-gold ring-offset-2 ring-offset-ivory"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Img
              src={img}
              alt=""
              fill
              sizes="80px"
              label={title[0]}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox - 1 + images.length) % images.length);
              }}
              className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[lightbox]}
              alt=""
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox + 1) % images.length);
              }}
              className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {lightbox + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
