import { Apple, PhoneCall, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function AvailabilityCta() {
  return (
    <section id="availability" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border-strong bg-linear-to-br from-primary/10 via-background to-accent/10 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div
            className="bg-grid-fresco pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              iOS &amp; Android · Launching soon
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Be one of the first crews on Fresco AI.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              We&apos;re onboarding early field teams ahead of our public
              launch. Request a walkthrough and we&apos;ll get your crew set
              up personally.
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="tel:+18583711421">
                  <PhoneCall className="h-4 w-4" />
                  Request a Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/support#demo">Get Early Access</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="flex cursor-not-allowed items-center gap-2.5 rounded-2xl border border-border-strong bg-background/60 px-5 py-3 opacity-60">
                <Apple className="h-6 w-6 text-foreground" />
                <span className="text-left leading-none">
                  <span className="block text-[10px] font-semibold uppercase tracking-wide text-faint-foreground">
                    Coming soon to the
                  </span>
                  <span className="block text-sm font-bold text-foreground">App Store</span>
                </span>
              </span>
              <span className="flex cursor-not-allowed items-center gap-2.5 rounded-2xl border border-border-strong bg-background/60 px-5 py-3 opacity-60">
                <Smartphone className="h-6 w-6 text-foreground" />
                <span className="text-left leading-none">
                  <span className="block text-[10px] font-semibold uppercase tracking-wide text-faint-foreground">
                    Coming soon to
                  </span>
                  <span className="block text-sm font-bold text-foreground">Google Play</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
