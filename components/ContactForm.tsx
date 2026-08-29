"use client";

import { useState } from "react";
import { useEnquiry } from "./enquiry/EnquiryContext";

const inputCls =
  "w-full rounded-xl border border-ink/12 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-stone-light focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition";

const topics = ["Buying a home", "Selling / valuation", "Renting", "Commercial space", "Something else"];

export default function ContactForm() {
  const { addConfirmation, hasSubmitted } = useEnquiry();
  const [done, setDone] = useState(hasSubmitted("contact-form"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    addConfirmation("contact-form", `${name} · ${topic}`);
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-ivory px-8 py-16 text-center ring-1 ring-ink/6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#997c44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="headline mt-5 text-2xl text-ink">Message received.</h3>
        <p className="mt-3 max-w-sm text-sm text-stone">
          Thank you, {name || "friend"}. A member of the Aurelia team will reach out within one
          working day. We keep every conversation private.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-7 rounded-full border border-ink/15 px-6 py-2.5 text-sm text-ink transition hover:border-gold hover:text-gold-deep"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl bg-ivory p-6 ring-1 ring-ink/6 sm:p-8">
      <div className="mb-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold-deep">Contact</p>
        <h3 className="headline mt-1 text-2xl text-ink">Tell us what you have in mind</h3>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-stone">Full name</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ayesha Khan" className={inputCls} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-stone">Phone</label>
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98xxx xxxxx" className={inputCls} />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-stone">Email</label>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-stone">I&apos;m interested in</label>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={`rounded-full border px-4 py-2 text-xs transition ${
                  topic === t
                    ? "border-gold bg-gold/10 text-gold-deep"
                    : "border-ink/10 text-stone hover:border-gold/40"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-stone">Message</label>
          <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us a little about what you're looking for…" className={inputCls} />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-gold py-3.5 text-sm font-medium text-ivory shadow-[0_14px_30px_-12px_rgba(183,154,94,0.65)] transition hover:bg-gold-deep"
        >
          Send message
        </button>
        <p className="text-center text-xs text-stone-light">
          Your details stay with us. No newsletters, no lists.
        </p>
      </div>
    </form>
  );
}
