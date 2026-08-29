"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import type { ReactNode } from "react";

export interface EnquiryIntent {
  propertyId?: string;
  title?: string;
  mode?: "book" | "enquire";
  format?: "viewing" | "callback" | "message";
}

interface EnquiryState {
  open: boolean;
  intent: EnquiryIntent | null;
  confirmations: { [key: string]: string };
  openEnquiry: (intent?: EnquiryIntent) => void;
  closeEnquiry: () => void;
  addConfirmation: (id: string, text: string) => void;
  hasSubmitted: (id: string) => boolean;
}

const EnquiryContext = createContext<EnquiryState | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState<EnquiryIntent | null>(null);
  const [confirmations, setConfirmations] = useState<{ [key: string]: string }>({});

  const openEnquiry = useCallback((intent?: EnquiryIntent) => {
    setIntent(intent ?? { mode: "enquire", format: "message" });
    setOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => {
    setOpen(false);
    setIntent(null);
  }, []);

  const addConfirmation = useCallback((id: string, text: string) => {
    setConfirmations((prev) => {
      // keep a rolling list capped so the demo stays tidy
      const next = { ...prev, [id]: text };
      const keys = Object.keys(next);
      if (keys.length > 6) {
        delete next[keys[0]];
      }
      return next;
    });
  }, []);

  const hasSubmitted = useCallback((id: string) => {
    return !!confirmations[id];
  }, [confirmations]);

  return (
    <EnquiryContext.Provider
      value={{ open, intent, confirmations, openEnquiry, closeEnquiry, addConfirmation, hasSubmitted }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry(): EnquiryState {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error("useEnquiry must be used within EnquiryProvider");
  }
  return ctx;
}
