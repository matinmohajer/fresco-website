import { CalendarClock, CalendarRange } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const TRADES = [
  "Demolition",
  "Concrete & Foundation",
  "Framing",
  "Plumbing",
  "Electrical",
  "HVAC",
  "Painting",
  "Landscaping",
  "Architectural",
  "Structural",
  "Soil Design & Engineering",
  "Cleaning",
  "Hospitality",
  "Inspections",
  "Municipal & County",
];

const FEATURES = [
  {
    icon: CalendarClock,
    title: "Daily & weekly dispatch",
    description: "Build recurring To Do Lists once and send them out on a schedule — every crew, every site.",
  },
  {
    icon: CalendarRange,
    title: "Dispatcher schedule",
    description: "The dispatcher — manager, supervisor, or foreman — sees a live schedule of every team member's tasks and estimated durations across the day or week.",
  },
];

const SAMPLE_SCHEDULE = [
  { name: "Carlos M.", task: "Framing — north wall", duration: "3h" },
  { name: "Dana R.", task: "Electrical rough-in — Unit 214", duration: "4h" },
  { name: "Sam T.", task: "Drywall patch & touch-up", duration: "1.5h" },
  { name: "Priya N.", task: "Final walk & sign-off", duration: "2h" },
];

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="One Tool For Every Trade"
          title="Dispatch daily & weekly to-do lists to your team."
          description="Fresco AI fits any team in the business of Field Service Management (FSM) that needs to know the status of work performed by its team members over a day or a week."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {TRADES.map((trade) => (
            <span
              key={trade}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-2 text-sm font-medium text-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {trade}
            </span>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-4 rounded-3xl border border-border bg-surface p-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-tint text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-border bg-background">
          <div className="border-b border-border bg-surface px-6 py-4">
            <p className="text-sm font-semibold text-foreground">Dispatcher schedule — Tue</p>
            <p className="text-xs text-muted-foreground">Manager / Supervisor / Foreman view</p>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {SAMPLE_SCHEDULE.map((row) => (
              <div key={row.name} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">{row.name}</p>
                  <p className="text-xs text-muted-foreground">{row.task}</p>
                </div>
                <span className="rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
                  {row.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
