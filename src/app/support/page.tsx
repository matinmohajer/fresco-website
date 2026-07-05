import type { Metadata } from "next";
import { Mail, PhoneCall, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/marketing/page-header";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { DemoRequestForm } from "@/components/marketing/demo-request-form";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Fresco AI, browse frequently asked questions, or request a demo with the Fresco AI team.",
};

const SUPPORT_EMAIL = "frescoai@xarp.org";

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Need help with Fresco AI?"
        description="Reach out directly, or browse answers to the questions we hear most from field teams."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <InfoCard icon={Mail} label="Email" value={SUPPORT_EMAIL} href={`mailto:${SUPPORT_EMAIL}`} />
          <InfoCard icon={PhoneCall} label="Call" value="(858) 371-1421" href="tel:+18583711421" />
          <InfoCard icon={Clock} label="Response time" value="Within 1–2 business days" />
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <Container className="max-w-3xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <FaqAccordion />
        </Container>
      </section>

      <section id="demo" className="scroll-mt-24 border-t border-border bg-surface py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Request a Demo
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s get your crew set up.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Tell us a bit about your team and what you&apos;re trying to
              solve. Alex will follow up personally to walk through Fresco AI
              and get you set up for early access.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-8">
            <DemoRequestForm />
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex flex-col gap-3 rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-primary/40">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-tint text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-faint-foreground">{label}</p>
        <p className="mt-1 text-base font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
