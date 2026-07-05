import { CheckSquare, Mic2, Sparkles, ShieldCheck, ListTodo } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const STEPS = [
  {
    number: "01",
    icon: CheckSquare,
    title: "Check In",
    description: "Team members check in to a site or job visit directly from the Fresco AI worker app.",
  },
  {
    number: "02",
    icon: Mic2,
    title: "Capture",
    description: "Record a voice note describing the work, snap photos, or shoot a short video. No forms to fill out in the field.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI Processing",
    description: "Fresco AI transcribes and analyzes the input, generating a structured report: work summary, task list, timeline, and any flagged issues or follow-up items.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Review & Approve",
    description: "Supervisors and admins review AI-drafted reports in the admin app, request changes if needed, and approve finished work — with a clear audit trail from first submission to sign-off.",
  },
  {
    number: "05",
    icon: ListTodo,
    title: "Track & Assign",
    description: "Approved reports convert into trackable tasks with owners and due dates, so nothing falls through the cracks between visits.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From the job site to a signed-off report."
          description="Five steps, most of them automatic. The only thing a worker does is check in, talk, and shoot a few photos."
        />

        <div className="relative mt-20">
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-linear-to-b from-primary via-border to-transparent lg:block"
            aria-hidden="true"
          />
          <ol className="flex flex-col gap-12 lg:gap-16">
            {STEPS.map(({ number, icon: Icon, title, description }) => (
              <li key={number} className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-10 lg:pl-20">
                <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-2xl border border-border-strong bg-background text-primary shadow-sm lg:flex">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="flex items-center gap-4 lg:hidden">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border-strong bg-background text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-sm font-semibold text-faint-foreground">{number}</span>
                </div>
                <div className="flex-1 lg:max-w-2xl">
                  <div className="mb-1.5 hidden font-mono text-xs font-semibold uppercase tracking-[0.14em] text-faint-foreground lg:block">
                    Step {number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
