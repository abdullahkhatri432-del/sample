"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/agents", label: "Agents" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// paths whose heroes are full-bleed dark, so the top-of-page nav should be light
const DARK_HERO = new Set(["/", "/about", "/contact"]);

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const darkHero = DARK_HERO.has(pathname) && !scrolled;
  const text = darkHero ? "text-bone" : "text-ink";
  const muted = darkHero ? "text-bone/70" : "text-stone";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-bone/85 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(0,0,0,0.3)]"
            : "py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition group-hover:bg-gold/10 ${
                darkHero ? "border-gold-hi/70 text-gold-hi" : "border-gold/60 text-gold-deep"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l9 9h-3v8h-5v-5h-2v5H6v-8H3l9-9z" fill="currentColor" />
              </svg>
            </span>
            <span className={`headline text-xl tracking-wide ${text}`}>Aurelia</span>
            <span className={`mt-1 hidden text-[10px] font-medium uppercase tracking-[0.3em] sm:block ${muted}`}>
              Estates
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                    active
                      ? darkHero
                        ? "bg-white/10 text-gold-hi shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_24px_-14px_rgba(205,178,124,0.6)]"
                        : "bg-gold/15 text-gold-deep shadow-[inset_0_1px_0_rgba(183,154,94,0.25),0_10px_24px_-16px_rgba(153,124,68,0.7)]"
                      : `${muted} ${
                          darkHero ? "hover:text-bone hover:bg-white/5" : "hover:text-ink hover:bg-ink/5"
                        }`
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className={`pointer-events-none absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-transparent via-current to-transparent opacity-80`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition ${
                darkHero
                  ? "bg-gold-hi text-ink hover:bg-gold-hi/90"
                  : "bg-ink text-bone hover:bg-ink-soft"
              }`}
            >
              Book a call
            </Link>
          </div>

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`h-px w-6 transition ${text} ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 transition ${text} ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bone/98 pt-24 md:hidden"
          >
            <nav className="flex flex-col gap-2 px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`headline block border-b border-ink/8 py-4 text-2xl ${
                      pathname === l.href ? "text-gold-deep" : "text-ink"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-gold py-4 text-center text-sm font-medium text-ivory"
              >
                Book a call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
