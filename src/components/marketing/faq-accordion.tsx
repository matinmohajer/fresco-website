"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Is Fresco AI available for my industry?",
    a: "Fresco AI is built for trades, construction, inspection, and municipal field teams. If you're unsure whether it fits your workflow, contact us for a walkthrough.",
  },
  {
    q: "Does Fresco AI work offline?",
    a: "Yes. Field teams can check in and capture reports without a signal; submissions sync automatically once connectivity is restored.",
  },
  {
    q: "How does AI generate reports?",
    a: "Fresco AI transcribes voice input and analyzes accompanying photos/video to draft a structured report, which a supervisor reviews and approves before it's finalized.",
  },
  {
    q: "Who can see submitted reports?",
    a: "Reports are visible to your organization's admins and supervisors through the admin app, following your organization's configured review workflow.",
  },
  {
    q: "How do I request a demo or get pricing?",
    a: "Contact Alex Paydar at (858) 371-1421 or frescoai@xarp.org, or use the form below and we'll follow up personally.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-border rounded-3xl border border-border bg-surface">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-foreground">{item.q}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                  isOpen && "rotate-180 text-primary"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
