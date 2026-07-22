import { AlertTriangle, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusPill, type FrescoStatus } from "@/components/ui/status-pill";
import { cn } from "@/lib/utils";

type CrewRow = {
  name: string;
  meta: string;
  task: string;
  time: string;
  status: FrescoStatus;
  barLeft: number;
  barWidth: number;
  flagged?: boolean;
};

const CREW: CrewRow[] = [
  { name: "John M", meta: "3 jobs", task: "Framing inspection", time: "8a – 11a", status: "checked_in", barLeft: 32, barWidth: 22 },
  { name: "Maria S", meta: "2 jobs", task: "Framing inspection", time: "8a – 10a · Approved", status: "approved", barLeft: 55, barWidth: 25 },
  { name: "Tomas L", meta: "running long", task: "Electrical rough-in", time: "9a – 1p", status: "over_est", barLeft: 28, barWidth: 34 },
  { name: "Dev R", meta: "not started", task: "Repair main line — 402 Oak", time: "1p – 3p", status: "assigned", barLeft: 58, barWidth: 20 },
  { name: "Luis R", meta: "can't get in", task: "Backflow cert — 402 Oak", time: "9a – 11a", status: "locked", barLeft: 12, barWidth: 22, flagged: true },
];

const LEGEND: { label: string; status: FrescoStatus }[] = [
  { label: "Assigned", status: "assigned" },
  { label: "Checked in", status: "checked_in" },
  { label: "Submitted", status: "submitted" },
  { label: "Approved", status: "approved" },
  { label: "Over est.", status: "over_est" },
  { label: "Locked", status: "locked" },
];

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
              <p className="text-sm text-muted-foreground">Meridian Facilities · 8 dispatched</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                Tue, Jul 14
              </span>
              <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground">
                Dispatch
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-border bg-danger-bg px-6 py-3.5">
            <AlertTriangle className="h-4 w-4 shrink-0 text-danger" />
            <p className="text-xs font-semibold uppercase tracking-wide text-danger">Needs attention</p>
            <p className="ml-auto text-xs font-medium text-muted-foreground">
              Backflow cert overdue · Jul 11 &nbsp;·&nbsp; Repair main line — 402 Oak, unassigned
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
                <div className="flex w-40 shrink-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary">
                    {row.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{row.name}</p>
                    <p className="text-xs text-muted-foreground">{row.meta}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative h-6 rounded-full bg-surface-2">
                    {row.barWidth > 0 ? (
                      <div
                        className={cn(
                          "absolute inset-y-0 flex items-center rounded-full px-3 text-[11px] font-semibold whitespace-nowrap",
                          row.status === "checked_in" && "bg-accent-tint text-accent",
                          row.status === "approved" && "bg-primary-tint text-primary",
                          row.status === "over_est" && "bg-warning-bg text-warning",
                          row.status === "assigned" && "border border-border-strong bg-background text-muted-foreground",
                          row.status === "locked" && "bg-danger-bg text-danger"
                        )}
                        style={{ left: `${row.barLeft}%`, width: `${row.barWidth}%` }}
                      >
                        {row.task}
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[11px] font-medium text-faint-foreground">
                        Assign a task →
                      </div>
                    )}
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
            {LEGEND.map(({ label, status }) => (
              <span key={label} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <StatusPill status={status} className="bg-transparent! px-0" />
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
