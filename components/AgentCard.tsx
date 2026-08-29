"use client";

import { motion } from "framer-motion";
import { Img } from "./ui";
import type { Agent } from "@/lib/data";

export function AgentCard({ agent, index = 0 }: { agent: Agent; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl bg-ivory ring-1 ring-ink/6 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.4)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Img
          src={agent.avatar}
          alt={agent.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          label={agent.name[0]}
          className="object-cover grayscale-[0.2] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-hi">
            {agent.specialty}
          </p>
          <h3 className="headline mt-1 text-xl text-white">{agent.name}</h3>
          <p className="text-sm text-white/80">{agent.role}</p>
        </div>
      </div>
      <div className="p-5">
        {agent.verified && (
          <p className="mb-3 flex items-center gap-1.5 text-xs text-gold-deep">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l2.4 2.6 3.6-.4.4 3.6L21 10l-1.8 3.2.6 3.4-3.4.4L15 22l-3-1.6L9 22l-.4-3-3.4-.4.6-3.4L3 10l2.6-2.2.4-3.6 3.6.4L12 2z" fill="#b79a5e" />
              <path d="M9 12l2 2 4-4" stroke="#fbfaf7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Verified adviser
          </p>
        )}
        <div className="flex items-center justify-between border-t border-ink/8 pt-4 text-sm">
          <span className="text-stone">{agent.experienceYears} yrs · {agent.listings} deals</span>
          <a
            href={`tel:${agent.phone.replace(/\s/g, "")}`}
            className="font-medium text-gold-deep transition hover:text-ink"
          >
            Book
          </a>
        </div>
      </div>
    </motion.div>
  );
}
