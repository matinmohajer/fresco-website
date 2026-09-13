"use client";

import { useState } from "react";
import { Home, CalendarDays, Users2, Mic, MessageSquareText, Camera, KeyRound, Check, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { HomeScreen, ScheduleScreen, TeamScreen, CarimboHeader } from "@/components/marketing/admin-screens";
import { cn } from "@/lib/utils";

const ADMIN_TABS = [
  { key: "home", label: "Home", icon: Home, Screen: HomeScreen },
  { key: "schedule", label: "Schedule", icon: CalendarDays, Screen: ScheduleScreen },
  { key: "team", label: "Team", icon: Users2, Screen: TeamScreen },
] as const;

const MOCKUP_CAPTION = "These are the actual Carimbo AI screens — not simplified mockups.";

export function PlatformShowcase() {
  const [active, setActive] = useState<(typeof ADMIN_TABS)[number]["key"]>("home");
  const ActiveScreen = ADMIN_TABS.find((t) => t.key === active)?.Screen ?? HomeScreen;

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
            <div className="relative scale-[0.7] sm:scale-100">
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
            <div className="relative scale-[0.7] sm:scale-100">
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
                Every To Do List arrives as a texted link — no app store, no
                account. Yes is one tap; a No just needs a reason before the
                task can close.
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
                <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Opens with their own initials + birth year — never a one-time code to wait on.
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Yes is one tap. A No prompts for a reason — text, voice, or photo.
              </li>
              <li className="flex items-start gap-2.5">
                <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                A verified, itemized report — every photo and voice note included — returns straight to the dispatcher.
              </li>
            </ul>

            <p className="rounded-2xl border border-dashed border-border-strong bg-surface p-4 text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">How it feels:</span> &ldquo;You&apos;ve got a To Do List
              from your foreman.&rdquo; → tap the link → enter your password → tap Yes on each task, or add a reason
              for No → send the report. Done in minutes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

const TO_DO_TASKS = [
  { title: "Replace cracked outlet cover", meta: "Living room, south wall", answered: true },
  { title: "Re-caulk tub surround", meta: "Main bath", answered: true },
  { title: "Touch up hallway paint", meta: "Scuffs near unit door — SW 7029", answered: false },
  { title: "Install door stop", meta: "Bedroom 2", answered: true },
  { title: "Test smoke detector", meta: "Hallway unit — replace battery if needed", answered: false },
] as const;

function ToDoListScreen() {
  return (
    <div className="relative h-full">
      <CarimboHeader trailing={<span className="text-xs font-bold text-primary">Checked in 9:02 AM</span>} />

      <div className="px-5 pb-2 pt-3.5">
        <div className="text-[23px] font-bold tracking-[-0.5px] text-foreground">Today&apos;s To Do List</div>
        <div className="mt-0.5 text-[12.5px] text-muted-foreground">
          Cedar Ridge Apartments, Unit 4B · from Dana Whitfield
        </div>
      </div>

      <div className="mx-5 flex flex-col">
        {TO_DO_TASKS.map((task) => (
          <div key={task.title} className="flex items-center gap-3 py-[11px]">
            <div className="min-w-0 flex-1">
              <div className="text-[15.5px] font-bold leading-[1.3] text-foreground">{task.title}</div>
              <div className="mt-0.5 text-[12.5px] text-muted-foreground">{task.meta}</div>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                className={cn(
                  "h-[46px] w-14 rounded-[9px] text-sm font-bold",
                  task.answered ? "bg-accent text-white" : "bg-surface-2 text-muted-foreground"
                )}
              >
                Yes
              </button>
              <button className="h-[46px] w-14 rounded-[9px] bg-surface-2 text-sm font-bold text-muted-foreground">
                No
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-5 mt-2 pt-2.5">
        <p className="mb-[7px] text-[11px] font-bold uppercase tracking-[0.3px] text-faint-foreground">
          Add photo, voice, or note
        </p>
        <div className="flex gap-1.5">
          {[
            { icon: Mic, label: "Voice" },
            { icon: MessageSquareText, label: "Text" },
            { icon: Camera, label: "Photo" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex h-[42px] flex-1 items-center justify-center gap-1.5 rounded-[10px] bg-surface-2 text-[13px] font-bold text-muted-foreground"
            >
              <Icon className="h-[15px] w-[15px]" strokeWidth={2.2} />
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-background px-5 pb-8 pt-2.5">
        <button className="h-11 w-full rounded-[10px] bg-surface-2 text-[15px] font-bold text-faint-foreground">
          Send report — 3 of 5 answered
        </button>
      </div>
    </div>
  );
}
