import { AlertTriangle, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusPill, type CarimboStatus } from "@/components/ui/status-pill";
import { cn } from "@/lib/utils";

type CrewRow = {
  name: string;
  meta: string;
  task: string;
  time: string;
  status: CarimboStatus;
  barLeft: number;
  barWidth: number;
  flagged?: boolean;
};

const CREW: CrewRow[] = [
  { name: "Marcus Bell", meta: "Cedar Ridge Apt 4B", task: "Unit 4B turnover", time: "9a – 1p", status: "checked_in", barLeft: 25, barWidth: 30 },
  { name: "Sofia Reyes", meta: "Maple Court 2C", task: "Punch list walk", time: "10a – 2p · Submitted", status: "submitted", barLeft: 40, barWidth: 32 },
  { name: "Devon Carter", meta: "Birchwood Lofts", task: "Move-in prep", time: "1p – 3p", status: "assigned", barLeft: 58, barWidth: 20 },
  { name: "Priya Shah", meta: "Alder Row Duplex", task: "Backflow check", time: "7a – 9a", status: "no_check_in", barLeft: 8, barWidth: 22, flagged: true },
  { name: "Jordan Kim", meta: "Link locked", task: "Cedar Ridge cert", time: "9a – 11a", status: "locked", barLeft: 33, barWidth: 22, flagged: true },
];

const LEGEND: CarimboStatus[] = ["assigned", "checked_in", "submitted", "approved", "over_est", "no_check_in", "locked"];

export function SchedulerShowcase() {
  return (
    <section id="schedule" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Scheduler"
          title="Every team member's day, on one live board."
          description="The dispatcher sees each team member's tasks, durations, and status across the day — what's checked in, what's running long, and what still needs attention — without chasing a single update."
        />

        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-background shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-4 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-foreground">Crew schedule</p>
              <p className="text-sm text-muted-foreground">Meridian Facilities · 5 dispatched</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                Wed, Jul 16
              </span>
              <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground">
                Send all links now
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-border bg-danger-bg px-6 py-3.5">
            <AlertTriangle className="h-4 w-4 shrink-0 text-danger" />
            <p className="text-xs font-semibold uppercase tracking-wide text-danger">Needs attention</p>
            <p className="ml-auto text-xs font-medium text-muted-foreground">
              Drywall patch · Maple Court 2C, unassigned &nbsp;·&nbsp; Priya Shah past 7 AM start, no check-in
            </p>
          </div>

          <div className="flex flex-col divide-y divide-border">
            {CREW.map((row) => (
              <div
                key={row.name}
                className={cn(
                  "flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:gap-6",
                  row.flagged && "bg-danger-bg"
                )}
              >
                <div className="flex w-44 shrink-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary">
                    {row.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{row.name}</p>
                    <p className="text-xs text-muted-foreground">{row.meta}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="mb-1.5 text-xs font-medium text-muted-foreground">{row.task}</p>
                  <div className="relative h-3.5 rounded-full bg-surface-2">
                    <div
                      className={cn(
                        "absolute inset-y-0 rounded-full",
                        row.status === "checked_in" && "border-2 border-primary bg-primary/30",
                        row.status === "submitted" && "bg-info",
                        row.status === "approved" && "bg-accent",
                        row.status === "over_est" && "bg-warning",
                        row.status === "assigned" && "border-2 border-border-strong",
                        row.status === "no_check_in" && "border-2 border-danger",
                        row.status === "locked" && "bg-danger"
                      )}
                      style={{ left: `${row.barLeft}%`, width: `${row.barWidth}%` }}
                    />
                  </div>
                </div>

                <div className="flex w-44 shrink-0 items-center justify-between gap-3 sm:justify-end">
                  <span className="text-xs text-muted-foreground">{row.time}</span>
                  <StatusPill status={row.status} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border px-6 py-4">
            {LEGEND.map((status) => (
              <span key={status} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <StatusPill status={status} className="bg-transparent! px-0" />
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
