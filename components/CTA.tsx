"use client";

import { useEnquiry } from "./enquiry/EnquiryContext";
import type { EnquiryIntent } from "./enquiry/EnquiryContext";

export function EnquiryButton({
  children,
  intent,
  className = "",
  variant = "gold",
}: {
  children: React.ReactNode;
  intent?: EnquiryIntent;
  className?: string;
  variant?: "gold" | "dark" | "outline" | "outline-light" | "ghost";
}) {
  const { openEnquiry } = useEnquiry();
  const variants = {
    gold: "bg-gold text-ivory hover:bg-gold-deep",
    dark: "bg-ink text-bone hover:bg-ink-soft",
    outline: "border border-ink/20 text-ink hover:border-gold hover:text-gold-deep",
    "outline-light":
      "border border-bone/40 text-bone hover:border-gold-hi hover:bg-gold-hi hover:text-ink",
    ghost: "text-ink hover:text-gold-deep",
  };
  return (
    <button
      onClick={() => openEnquiry(intent ?? { mode: "enquire", format: "message" })}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function WhatsAppButton({
  propertyTitle,
  className = "",
}: {
  propertyTitle?: string;
  className?: string;
}) {
  const text = propertyTitle
    ? `Hello Aurelia, I'd like to know more about ${propertyTitle}.`
    : "Hello Aurelia, I'd like to know more about your properties.";
  const url = `https://wa.me/919820011400?text=${encodeURIComponent(text)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 hover:-translate-y-0.5 bg-[#25D366] hover:bg-[#1fb457] ${className}`}
    >
      <WhatsAppGlyph />
      WhatsApp
    </a>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.83 14.12c-.25.7-1.45 1.33-2 1.4-.5.06-1.13.09-1.82-.11-.42-.12-.96-.28-1.65-.52-2.89-1.19-4.78-3.96-4.93-4.15-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12.99-2.41.25-.29.55-.36.73-.36.18 0 .37 0 .53.01.17.01.4-.06.63.49.25.58.83 2.02.9 2.17.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.3.38-.42.51-.14.14-.29.29-.13.57.17.29.74 1.22 1.59 1.98 1.09.97 2 1.27 2.28 1.41.29.14.45.12.62-.07.17-.19.71-.83.9-1.12.19-.29.38-.24.64-.14.26.09 1.67.79 1.96.93.29.14.48.21.55.33.07.12.07.69-.18 1.38z" />
    </svg>
  );
}
