"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEnquiry } from "./EnquiryContext";

const inputCls =
  "w-full rounded-xl border border-ink/12 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-stone-light focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition";

export default function EnquiryModal() {
  const { open, intent, closeEnquiry } = useEnquiry();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => {
    setSubmitted(false);
    closeEnquiry();
  }, [closeEnquiry]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const booking = intent?.mode === "book";
  const title = intent?.title;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function flattern(name: string) {
    return name?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "enquiry";
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-ivory shadow-2xl"
          >
            {submitted ? (
              <Confirmation title={title} format={intent?.format} onClose={close} />
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                <div className="mb-1 flex items-start justify-between">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold-deep">
                      {booking ? "Private Viewing" : "Enquire"}
                    </p>
                    <h3 className="headline mt-1 text-2xl text-ink">
                      {booking ? "Schedule a viewing" : "Speak with an adviser"}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close"
                    className="text-stone hover:text-ink transition"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {title && (
                  <p className="mt-2 rounded-xl bg-gold/10 px-4 py-3 text-sm text-gold-deep">
                    {title}
                  </p>
                )}

                <div className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  {booking && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-stone">Preferred date</label>
                          <input required type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-stone">Preferred time</label>
                          <input required type="time" value={time} onChange={(e) => setTime(e.target.value)} className={inputCls} />
                        </div>
                      </div>
                      <p className="text-xs text-stone">
                        Please note this is a no-obligation viewing request. Our adviser will confirm availability within one working day.
                      </p>
                    </>
                  )}

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-stone">Message (optional)</label>
                    <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Anything our team should know?" className={inputCls} />
                  </div>

                  <button
                    type="submit"
                    data-id={`form-${flattern(title ?? "general")}`}
                    className="w-full rounded-full bg-gold py-3.5 text-sm font-medium text-ivory shadow-[0_14px_30px_-12px_rgba(183,154,94,0.65)] transition hover:bg-gold-deep"
                  >
                    {booking ? "Request viewing" : "Send enquiry"}
                  </button>
                  <p className="text-center text-xs text-stone-light">
                    By submitting you agree to be contacted about this property. No spam, ever.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Confirmation({
  title,
  format,
  onClose,
}: {
  title?: string;
  format?: "viewing" | "callback" | "message";
  onClose: () => void;
}) {
  const lines: Record<string, string> = {
    viewing: "We've reserved a slot and our adviser will confirm your private viewing shortly.",
    callback: "A member of the Aurelia team will call you within one working day.",
    message: "Your enquiry has been received. We'll be in touch within one working day.",
  };
  const text =
    lines[format ?? "message"] ??
    "We've received your enquiry and will be in touch within one working day.";
  return (
    <div className="p-8 sm:p-10 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="#997c44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <h3 className="headline mt-5 text-2xl text-ink">Thank you.</h3>
      {title && <p className="mt-1 text-sm text-stone">{title}</p>}
      <p className="mt-4 text-sm leading-relaxed text-stone">{text}</p>
      <button
        onClick={onClose}
        className="mt-7 rounded-full bg-ink px-8 py-3 text-sm font-medium text-bone transition hover:bg-ink-soft"
      >
        Done
      </button>
    </div>
  );
}
