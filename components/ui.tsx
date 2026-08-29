"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

/* ----------------------------------------------------------------------- */
/*  Motion presets                                                         */
/* ----------------------------------------------------------------------- */
export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "p" | "h2" | "h3";
}) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/* ----------------------------------------------------------------------- */
/*  Button                                                                 */
/* ----------------------------------------------------------------------- */
type ButtonVariant = "gold" | "dark" | "outline" | "ghost";

export function Button({
  children,
  as: Tag = "button",
  variant = "gold",
  href,
  className = "",
  ...props
}: {
  children: ReactNode;
  as?: "button" | "a";
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  [key: string]: unknown;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bone";
  const variants: Record<ButtonVariant, string> = {
    gold: "bg-gold text-ivory shadow-[0_14px_30px_-12px_rgba(183,154,94,0.65)] hover:bg-gold-deep hover:-translate-y-0.5",
    dark: "bg-ink text-bone hover:bg-ink-soft hover:-translate-y-0.5",
    outline:
      "border border-ink/20 text-ink hover:border-gold hover:text-gold-deep hover:-translate-y-0.5",
    ghost: "text-ink hover:text-gold-deep",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (Tag === "a" && href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(props as Record<string, unknown>)}>
      {children}
    </button>
  );
}

/* ----------------------------------------------------------------------- */
/*  Badge                                                                  */
/* ----------------------------------------------------------------------- */
export function Badge({
  children,
  tone = "gold",
  className = "",
}: {
  children: ReactNode;
  tone?: "gold" | "dark" | "light";
  className?: string;
}) {
  const tones = {
    gold: "bg-gold/15 text-gold-deep border-gold/30",
    dark: "bg-ink/90 text-bone border-ink",
    light: "bg-ivory/80 text-ink border-ink/10",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] backdrop-blur ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------------- */
/*  Section heading                                                        */
/* ----------------------------------------------------------------------- */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold" />
          <span className="text-gold-deep">{eyebrow}</span>
          {align === "center" && <span className="h-px w-8 bg-gold" />}
        </div>
      )}
      <h2
        className={`headline text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] font-medium ${
          dark ? "text-bone" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${dark ? "text-bone/70" : "text-stone"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/*  Image with graceful fallback                                           */
/* ----------------------------------------------------------------------- */
export function Img({
  src,
  alt,
  className = "",
  fill,
  width,
  height,
  sizes,
  priority,
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  label?: string;
}) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-bone-2 via-bone to-gold/20 ${className}`}
      >
        <span className="headline text-5xl text-gold/50">{label ?? "A"}</span>
      </div>
    );
  }
  const common = {
    onError: () => setError(true),
    className,
  };
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        {...common}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      sizes={sizes}
      priority={priority}
      {...common}
    />
  );
}
