"use client";

import { useState } from "react";
import { LayoutDashboard, ShieldCheck, Users2, Mic, Wifi, WifiOff } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { DashboardScreen, VisitReviewScreen, TeamScreen } from "@/components/marketing/admin-screens";
import { cn } from "@/lib/utils";

const ADMIN_TABS = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard, Screen: DashboardScreen },
  { key: "review", label: "Visit Review", icon: ShieldCheck, Screen: VisitReviewScreen },
  { key: "team", label: "Team", icon: Users2, Screen: TeamScreen },
] as const;

export function PlatformShowcase() {
  const [active, setActive] = useState<(typeof ADMIN_TABS)[number]["key"]>("dashboard");
  const ActiveScreen = ADMIN_TABS.find((t) => t.key === active)?.Screen ?? DashboardScreen;

  return (
    <section id="platform" className="scroll-mt-24 border-t border-border bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Built for Two Roles"
          title="One platform, two apps that actually talk to each other."
          description="The admin app and the worker app are built from the same data model — a report submitted in the field shows up for review instantly, no re-entry, no sync headaches."
        />

        <div className="mt-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Admin App
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                For managers, supervisors, and foremen.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Assign work, review incoming reports, approve or request
                changes, and track task status across every site and crew —
                all in one place.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              {ADMIN_TABS.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActive(key)}
                  className={cn(
                    "flex items-center gap-2.5 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors",
                    active === key
                      ? "border-primary bg-primary-tint text-primary"
                      : "border-border-strong bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </button>
              ))}
            </div>

            <ul className="flex flex-col gap-3 border-t border-border pt-5 text-sm text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Three ways to close a visit out</span> — approve,
                approve and spin up a follow-up task, or send it back with a required reason.
              </li>
              <li>
                <span className="font-semibold text-foreground">Phone-first crew invites</span> — invite a worker by
                number with a 48-hour expiry, no account setup required on your end.
              </li>
              <li>
                <span className="font-semibold text-foreground">Night &amp; Sunlight themes</span> — the same admin
                screens, tuned for the office and for direct sun on a job site.
              </li>
            </ul>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative scale-[0.82] sm:scale-100">
              <PhoneFrame>
                <ActiveScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>

        <div className="mt-28 grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
          <div className="flex justify-center">
            <div className="relative scale-[0.82] sm:scale-100">
              <PhoneFrame light>
                <WorkerCheckInScreen />
              </PhoneFrame>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Worker App
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                For field teams doing the work.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Check in, capture voice, photo, and video, and submit
                AI-drafted reports in minutes instead of hours — even offline,
                with sync when signal returns.
              </p>
            </div>
            <ul className="flex flex-col gap-3 border-t border-border pt-5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Mic className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                No forms in the field — just talk through what you did.
              </li>
              <li className="flex items-start gap-2.5">
                <WifiOff className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Works with zero signal; queued submissions sync automatically.
              </li>
              <li className="flex items-start gap-2.5">
                <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Reports land on the supervisor&apos;s desk the moment you&apos;re back in range.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WorkerCheckInScreen() {
  return (
    <div className="relative flex h-full flex-col px-5 pb-8 pt-14">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#78716C]">Checked in · 14:02</p>
      <h1 className="mb-5 text-lg font-bold tracking-tight text-[#1C1917]">Riverside HVAC</h1>

      <div className="mb-4 flex items-center justify-center gap-1.5 rounded-2xl border border-[#E7E5E4] bg-white py-6 shadow-sm">
        {[10, 22, 14, 28, 18, 30, 12, 24, 16, 26, 11, 20].map((h, i) => (
          <span
            key={i}
            className="w-1 rounded-full bg-[#6D28D9]"
            style={{ height: `${h}px`, opacity: 0.55 + (i % 4) * 0.12 }}
          />
        ))}
      </div>
      <p className="mb-6 text-center text-xs font-medium text-[#78716C]">Recording voice note — 0:24</p>

      <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#A8A29E]">Attachments</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="aspect-square rounded-xl bg-[#E7E5E4]" />
        <div className="aspect-square rounded-xl bg-[#E7E5E4]" />
        <div className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-[#D6D3D0] text-2xl text-[#A8A29E]">
          +
        </div>
      </div>

      <button className="fr-reset mt-auto flex h-12 items-center justify-center rounded-xl bg-[#6D28D9] text-[13px] font-bold text-white">
        Finish &amp; Submit Report
      </button>
    </div>
  );
}
