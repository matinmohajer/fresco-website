import { MicOff, Camera, Clock, FileQuestion, Mic, ListTree, Send, ShieldCheck, FileCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const PROBLEMS = [
  {
    icon: MicOff,
    title: "Dictated, then lost",
    description: "To Do Lists get spoken in the field and never make it cleanly to the crew.",
  },
  {
    icon: Camera,
    title: "No proof of done",
    description: "Work is handed off verbally, with nothing to show it was actually completed.",
  },
  {
    icon: Clock,
    title: "Chasing status",
    description: "Supervisors chase updates instead of reviewing finished work.",
  },
  {
    icon: FileQuestion,
    title: "No record for the ask",
    description: "When a client or inspector wants a record, there isn't one.",
  },
];

const ENGINE_STEPS = [
  { icon: Mic, title: "Speak or snap", description: "Voice, text, or annotated photo — no forms." },
  { icon: ListTree, title: "Structure", description: "Deterministic engine builds a consistent list." },
  { icon: Send, title: "Dispatch", description: "Sent to the right team member as a secure text link." },
  { icon: ShieldCheck, title: "Sign off", description: "Each task closed with proof, even offline." },
  { icon: FileCheck, title: "Verified report", description: "Returns automatically to everyone who needs it." },
];

export function ProblemSolution() {
  return (
    <section className="relative border-t border-border bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Field work gets lost between the walk-through and the crew."
          description="Field teams do skilled, accountable work — then the To Do List gets lost somewhere between the walk-through and the work getting done."
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
              The missing loop between assigning work and proving it&apos;s done.
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A manager speaks or photographs what needs doing. Fresco
              AI&apos;s deterministic engine turns it into a clean, itemized
              To Do List.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The team member completes it with proof — a photo or a spoken
              reason for anything incomplete — and a verified report returns
              automatically to everyone who needs it.
            </p>
          </div>

          <div className="relative flex flex-col gap-3 rounded-3xl border border-border-strong bg-linear-to-br from-primary to-primary-hover p-3 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
            {ENGINE_STEPS.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <Icon className="h-4 w-4 shrink-0 text-white/70" strokeWidth={1.75} />
                <div>
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="text-xs leading-snug text-white/70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
