"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUPPORT_EMAIL = "frescoai@xarp.org";

export function DemoRequestForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Demo request — ${company || name || "New lead"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${details}`
    );
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Your name">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Jordan Smith"
            className="h-11 w-full rounded-xl border border-border-strong bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
          />
        </Field>
        <Field label="Company">
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            placeholder="Acme Mechanical"
            className="h-11 w-full rounded-xl border border-border-strong bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
          />
        </Field>
      </div>
      <Field label="Email">
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="jordan@acmemechanical.com"
          className="h-11 w-full rounded-xl border border-border-strong bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
        />
      </Field>
      <Field label="What are you looking to solve?">
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          placeholder="Team size, trade, how you dispatch and sign off work today..."
          className="w-full resize-none rounded-xl border border-border-strong bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
        />
      </Field>
      <Button type="submit" size="lg" className="mt-2">
        <Send className="h-4 w-4" />
        Send Request
      </Button>
      <p className="text-xs text-faint-foreground">
        Opens your email client with these details prefilled to{" "}
        {SUPPORT_EMAIL}. Prefer to talk?{" "}
        <a href="tel:+18583711421" className="text-primary hover:underline">
          Call Alex Paydar at (858) 371-1421
        </a>
        .
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
