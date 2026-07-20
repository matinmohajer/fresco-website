import { Mic2, ListTree, Send, CheckSquare, FileCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const STEPS = [
  {
    number: "01",
    icon: Mic2,
    title: "Create",
    description: "A manager, supervisor, or foreman builds a To Do List by voice, text, or annotated photo in the Admin app. No forms.",
  },
  {
    number: "02",
    icon: ListTree,
    title: "Structure",
    description: "The deterministic engine transcribes and organizes it into a consistent, itemized list — the same clean structure every time.",
  },
  {
    number: "03",
    icon: Send,
    title: "Send",
    description: "Assign the list to the responsible team member. They get a text with a secure link — nothing to install to get started.",
  },
  {
    number: "04",
    icon: CheckSquare,
    title: "Complete & Sign Off",
    description: "Each task is checked done or not done, with spoken reasons and photos for anything incomplete — can't check out until all are addressed.",
  },
  {
    number: "05",
    icon: FileCheck,
    title: "Return",
    description: "Fresco AI compiles a verified report — photos, reasons, timestamps, completion certificate — sent back automatically.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How Fresco AI Works"
          title="Scan. Structure. Sign off."
          description="Five steps, most of them automatic. The only thing a team member does is open the link, work the list, and sign off."
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
