import { Camera, Clock, MessageSquareOff, Search, Mic, FileCheck, Check, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const PROBLEMS = [
  {
    icon: Clock,
    title: "Hours lost every week",
    description: "Field teams lose hours writing up work they already did, after the fact, from memory.",
  },
  {
    icon: Camera,
    title: "Photos with no home",
    description: "Photos sit in camera rolls, disconnected from the job they document.",
  },
  {
    icon: MessageSquareOff,
    title: "Details get dropped",
    description: "Verbal updates get relayed secondhand, and the important details don't survive the handoff.",
  },
  {
    icon: Search,
    title: "Supervisors chase status",
    description: "Managers spend their day chasing down what happened instead of reviewing finished work.",
  },
];

export function ProblemSolution() {
  return (
    <section className="relative border-t border-border bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Field documentation is stuck in the last decade."
          description="Field teams do skilled, accountable work — then lose the rest of the day writing it up."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-4 bg-surface p-8">
              <Icon className="h-6 w-6 text-danger" strokeWidth={1.75} />
              <h3 className="text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              The Solution
            </span>
            <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built around how field work actually happens.
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Fresco AI is a mobile-first reporting and work-track platform
              built for how the job really gets documented: out loud, on-site,
              in the moment.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A worker checks in at a site, talks through what they did, and
              captures a few photos or a short video. Fresco AI&apos;s AI
              engine converts that raw input into a clean, structured report —
              complete with a summary, itemized tasks, and suggested
              follow-ups — ready for a supervisor to review and approve.
            </p>
          </div>

          <div className="relative rounded-3xl border border-border bg-background p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 border-b border-border pb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-tint">
                <Mic className="h-4 w-4 text-primary" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Raw field input</p>
                <p className="text-xs text-muted-foreground">Voice · Photos · Video</p>
              </div>
            </div>
            <p className="mt-5 rounded-2xl bg-surface-2 p-4 text-sm italic leading-relaxed text-muted-foreground">
              &ldquo;Replaced the condenser fan motor on unit two, cleared the
              drain line, tenant said the breaker trips sometimes in the
              afternoon — might want to send someone to look at the panel.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-b border-t border-border py-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-tint">
                <FileCheck className="h-4 w-4 text-accent" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Structured report</p>
                <p className="text-xs text-muted-foreground">Generated automatically</p>
              </div>
            </div>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-foreground">
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Replaced condenser fan motor, unit 2
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Cleared condensate drain line
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                Follow-up suggested: inspect electrical panel
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
