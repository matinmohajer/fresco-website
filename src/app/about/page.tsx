import type { Metadata } from "next";
import { PhoneCall, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/marketing/page-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fresco AI is developed and operated by XARP, a California company based in San Diego building AI-powered reporting software for field-based industries.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Fresco AI"
        title="Field documentation shouldn't be a second job."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <p className="text-xl leading-relaxed text-foreground">
              Fresco AI is developed and operated by <strong>XARP</strong>, a
              California company based in San Diego, CA. XARP builds software
              for field-based and property-adjacent industries, and Fresco AI
              is its flagship product: an AI-powered reporting platform for
              trades, construction, inspection, and municipal field teams.
            </p>

            <div className="mt-6 border-t border-border pt-8">
              <h2 className="text-2xl font-semibold text-foreground">Our Approach</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Field documentation shouldn&apos;t be a second job. Fresco AI
                exists to close the gap between the work that happens on-site
                and the written record of it — using AI to do the writing, so
                field teams can stay focused on the work itself, and managers
                can trust what lands in their inbox.
              </p>
            </div>
          </div>

          <aside className="flex flex-col gap-6 rounded-3xl border border-border bg-surface p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-tint text-primary">
                <MapPin className="h-[18px] w-[18px]" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">XARP</p>
                <p className="text-xs text-muted-foreground">San Diego, CA</p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-faint-foreground">Contact</p>
              <p className="mt-2 text-base font-semibold text-foreground">Alex Paydar</p>
              <a href="tel:+18583711421" className="block text-sm text-primary hover:underline">
                (858) 371-1421
              </a>
              <a href="mailto:frescoai@xarp.org" className="block text-sm text-primary hover:underline">
                frescoai@xarp.org
              </a>
            </div>

            <Button asChild className="mt-2">
              <a href="tel:+18583711421">
                <PhoneCall className="h-4 w-4" />
                Call Alex
              </a>
            </Button>
          </aside>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <Container>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Leadership
          </span>
          <div className="mt-6 flex flex-col gap-8 rounded-3xl border border-border bg-surface p-8 sm:p-10 lg:flex-row lg:gap-12">
            <div className="flex shrink-0 items-start gap-4 lg:flex-col lg:items-center lg:text-center">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-accent text-lg font-bold text-white lg:h-24 lg:w-24 lg:rounded-3xl lg:text-2xl">
                AP
              </span>
              <div className="lg:hidden">
                <p className="text-lg font-semibold text-foreground">Alex Paydar</p>
                <p className="text-sm text-muted-foreground">Founder &amp; CEO, XARP</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="hidden lg:block">
                <p className="text-lg font-semibold text-foreground">Alex Paydar</p>
                <p className="text-sm text-muted-foreground">Founder &amp; CEO, XARP</p>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Alex Paydar, founder and CEO of XARP, is a veteran of the
                computer industry and a lifelong entrepreneur. He got his
                start in the early days of Apple, then joined Sun
                Microsystems (now part of Oracle), where he developed data
                center server and storage systems for major organizations
                including Google, Amazon, Meta, and NASA. He later served as
                VP of Engineering at Lifeproof, where he helped grow the
                company from $60M to $350M. Today, he is focused on building
                Fresco AI, a mobile Field Service Management (FSM) platform.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
