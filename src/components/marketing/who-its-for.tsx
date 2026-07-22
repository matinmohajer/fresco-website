import { Eye } from "lucide-react";
import { Container } from "@/components/ui/container";

const TRADE_GROUPS = [
  {
    label: "Construction & trades",
    trades: ["Demolition", "Concrete & Foundation", "Framing", "Plumbing", "Electrical", "HVAC", "Painting", "Structural"],
  },
  {
    label: "Facilities & property",
    trades: ["Cleaning", "Landscaping", "Hospitality"],
  },
  {
    label: "Inspection & compliance",
    trades: ["Inspections", "Municipal & County", "Architectural", "Soil Design & Engineering"],
  },
];

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container className="max-w-4xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            One Tool For Every Trade
          </span>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Dispatch daily and weekly to-do lists to your team.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="font-semibold text-foreground">
              Fresco AI is a general-purpose Field Service Management (FSM) mobile app.
            </span>{" "}
            It doesn&apos;t care what trade you&apos;re in. If a manager, supervisor, or foreman has a
            list of work that needs doing — and needs to know what got done, what didn&apos;t, and
            why — Fresco AI runs it.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The structure is the same every time. Only the work changes.
          </p>
        </div>

        <div className="mt-12 border-t border-border pt-10">
          <p className="mb-6 text-center text-sm text-faint-foreground">
            A few of the trades it&apos;s built for. The list isn&apos;t the limit.
          </p>

          <div className="flex flex-col gap-6">
            {TRADE_GROUPS.map((group) => (
              <div key={group.label}>
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-faint-foreground">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.trades.map((trade) => (
                    <span
                      key={trade}
                      className="rounded-full bg-primary-tint px-3 py-1.5 text-sm font-medium text-primary"
                    >
                      {trade}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-surface p-8">
          <div className="mb-3 flex items-center gap-2.5">
            <Eye className="h-5 w-5 text-primary" strokeWidth={1.75} />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-faint-foreground">
              Cross-trade discovery
            </span>
          </div>
          <h3 className="mb-3 text-xl font-semibold leading-snug tracking-tight text-foreground">
            The best inspector you have is the person already standing in the room.
          </h3>
          <p className="mb-3 text-base leading-relaxed text-muted-foreground">
            A cleaner notices a water stain spreading across the ceiling. A groundskeeper finds a
            light that won&apos;t come on. Neither is their job to fix — but both are worth knowing
            about today rather than next month.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            When a team member flags something outside their list, Fresco AI recognizes which
            trade it belongs to and returns it to the dispatcher as a new To Do List, ready to send
            to the right person.{" "}
            <span className="font-semibold text-foreground">Every completed list is also a walkthrough.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
