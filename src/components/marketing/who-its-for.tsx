import { Wrench, HardHat, ClipboardCheck, Landmark } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const SEGMENTS = [
  {
    icon: Wrench,
    title: "Trades",
    description: "Plumbing, electrical, HVAC, and cleaning crews documenting every visit without slowing down the job.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Site documentation, progress tracking, and punch lists that stay tied to the right project and date.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspections",
    description: "Structured findings backed by photo and video evidence, ready to hand to a client or regulator.",
  },
  {
    icon: Landmark,
    title: "Municipal & County Operations",
    description: "Auditable, timestamped field records suitable for public-sector accountability requirements.",
  },
];

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Who It's For"
          title="Built for teams that do skilled, accountable work in the field."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SEGMENTS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-primary/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-tint text-primary transition-transform group-hover:scale-105">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
