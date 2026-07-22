import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/marketing/page-header";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Fresco AI plans for teams of every size — Free, Premium, and Enterprise.",
};

const TIERS = [
  {
    name: "Free",
    tagline: "Try Fresco AI with a small crew.",
    features: [
      "Voice, text & photo To Do Lists",
      "Text-link dispatch to team members",
      "Completion certificates with photos & reasons",
    ],
  },
  {
    name: "Premium",
    tagline: "For teams dispatching daily.",
    highlighted: true,
    features: [
      "Everything in Free",
      "The Scheduler — live crew schedule board",
      "Recurring daily & weekly dispatch",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For multi-site and municipal operations.",
    features: [
      "Everything in Premium",
      "Custom roles & audit-trail retention",
      "Dedicated onboarding",
      "Municipal & county compliance support",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Plans for teams of every size."
        description="Fresco AI is still in pre-launch onboarding — reach out for current pricing and to get your crew set up."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={
                  tier.highlighted
                    ? "flex flex-col gap-6 rounded-3xl border-2 border-primary bg-background p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
                    : "flex flex-col gap-6 rounded-3xl border border-border bg-surface p-8"
                }
              >
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{tier.name}</h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">{tier.tagline}</p>
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-faint-foreground">
                  Contact us for pricing
                </p>
                <ul className="flex flex-1 flex-col gap-3 text-sm text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={tier.highlighted ? "primary" : "outline"}>
                  <a href="/support#demo">Request a Demo</a>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
