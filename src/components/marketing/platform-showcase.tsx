"use client";

import { useState } from "react";
import { LayoutDashboard, ShieldCheck, Users2, Mic, MessageSquareText, Camera, Wifi, WifiOff } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { DashboardScreen, CompletionCertificateScreen, TeamScreen } from "@/components/marketing/admin-screens";
import { cn } from "@/lib/utils";

const ADMIN_TABS = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard, Screen: DashboardScreen },
  { key: "certificate", label: "Completion Certificate", icon: ShieldCheck, Screen: CompletionCertificateScreen },
  { key: "team", label: "Team", icon: Users2, Screen: TeamScreen },
] as const;

const MOCKUP_CAPTION =
  "Your company name and logo sit at the top of every list and every report — because these get forwarded to your client.";

export function PlatformShowcase() {
  const [active, setActive] = useState<(typeof ADMIN_TABS)[number]["key"]>("dashboard");
  const ActiveScreen = ADMIN_TABS.find((t) => t.key === active)?.Screen ?? DashboardScreen;

  return (
    <section id="platform" className="scroll-mt-24 border-t border-border bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="One Data Model, Two Apps"
          title="One platform, from assignment to proof."
          description="The admin app and the team member link are built from the same data model — a signed-off task shows up as a verified report instantly, no re-entry, no chasing."
        />

        <div className="mt-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Admin App
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                Managers, supervisors &amp; foremen.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Create To Do Lists by voice, dispatch them to the right team
                member, and receive verified sign-off reports with a full
                audit trail — across every site and crew, in one place.
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
                <span className="font-semibold text-foreground">Deterministic engine</span> — the same walk-through
                becomes the same clean, itemized list every time.
              </li>
              <li>
                <span className="font-semibold text-foreground">Phone-first team invites</span> — invite a team
                member by number. No account setup required on your end.
              </li>
              <li>
                <span className="font-semibold text-foreground">One consistent theme</span> — the same admin
                screens everywhere, legible in the office and on a job site.
              </li>
            </ul>
          </div>

          <div className="order-1 flex flex-col items-center lg:order-2">
            <div className="relative scale-[0.82] sm:scale-100">
              <PhoneFrame>
                <ActiveScreen />
              </PhoneFrame>
            </div>
            <p className="mt-6 max-w-xs text-center text-xs leading-relaxed text-faint-foreground">
              {MOCKUP_CAPTION}
            </p>
          </div>
        </div>

        <div className="mt-28 grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col items-center lg:order-1">
            <div className="relative scale-[0.82] sm:scale-100">
              <PhoneFrame>
                <ToDoListScreen />
              </PhoneFrame>
            </div>
            <p className="mt-6 max-w-xs text-center text-xs leading-relaxed text-faint-foreground">
              {MOCKUP_CAPTION}
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:order-2">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Team Member App &amp; Link
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                Field teams.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Open a texted link, work through each task, capture proof,
                and sign off in minutes — in the app or straight from the
                link, and even offline, with sync when signal returns.
              </p>
            </div>

            <div className="flex gap-3 border-t border-border pt-5">
              {[
                { icon: Mic, label: "Voice" },
                { icon: MessageSquareText, label: "Text" },
                { icon: Camera, label: "Photos" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex flex-1 flex-col items-center gap-2 rounded-2xl border border-border-strong bg-surface py-4"
                >
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="text-xs font-semibold text-foreground">{label}</span>
                </span>
              ))}
            </div>

            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Mic className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                No app to install — no forms in the field either. Just open the link.
              </li>
              <li className="flex items-start gap-2.5">
                <WifiOff className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Works with zero signal; sign-offs queue and sync automatically.
              </li>
              <li className="flex items-start gap-2.5">
                <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Verified reports land on the dispatcher&apos;s desk the moment you&apos;re back in range.
              </li>
            </ul>

            <p className="rounded-2xl border border-dashed border-border-strong bg-surface p-4 text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">How it feels:</span> &ldquo;You&apos;ve got a To Do List
              from your foreman.&rdquo; → tap the link → check off tasks, add a photo or a spoken reason → sign off.
              Done in minutes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ToDoListScreen() {
  return (
    <div className="relative flex h-full flex-col px-5 pb-8 pt-14">
      <div className="mb-3 flex items-center gap-2.5 border-b border-border pb-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-[10px] font-bold text-primary-foreground">
          M
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-bold leading-tight text-foreground">Meridian Facilities</p>
          <p className="text-[9px] leading-tight text-faint-foreground">(619) 555-0139</p>
        </div>
      </div>

      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-faint-foreground">Unit 214 · Final Walk</p>
      <h1 className="mb-5 text-lg font-bold tracking-tight text-foreground">To Do List</h1>

      <div className="mb-2.5 flex items-center gap-3 rounded-2xl border border-border bg-white p-3.5 shadow-sm">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
          <svg viewBox="0 0 12 10" className="h-2.5 w-3" fill="none">
            <path d="M1 5l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="flex-1">
          <p className="text-[13px] font-semibold text-foreground">Touch up drywall — north wall</p>
          <p className="text-[11px] text-faint-foreground">Signed off · photo · 9:42 AM</p>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-3 rounded-2xl border border-border bg-white p-3.5 shadow-sm">
        <span className="h-6 w-6 shrink-0 rounded-full border-2 border-border-strong" />
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[13px] font-semibold text-foreground">Replace cracked tile — bath 2</p>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
              <Mic className="h-3 w-3" />
            </span>
          </div>
          <p className="text-[11px] text-faint-foreground">Needs a reason or photo to close</p>
        </div>
      </div>

      <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-faint-foreground">Attach proof</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="aspect-square rounded-xl bg-surface-2" />
        <div className="aspect-square rounded-xl bg-surface-2" />
        <div className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-border-strong text-2xl text-faint-foreground">
          +
        </div>
      </div>

      <button className="fr-reset mt-auto flex h-12 items-center justify-center rounded-xl bg-primary text-[13px] font-bold text-primary-foreground">
        Sign &amp; Complete
      </button>
    </div>
  );
}
