import { Check, Minus, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const ROWS = [
  { label: "Voice, photo & video capture", capture: true, scheduling: false, fresco: true },
  { label: "AI-generated structured reports", capture: false, scheduling: false, fresco: true },
  { label: "Admin review & approve workflow", capture: false, scheduling: true, fresco: true },
  { label: "Task assignment & tracking", capture: false, scheduling: true, fresco: true },
  { label: "Audit trail, submission to sign-off", capture: false, scheduling: false, fresco: true },
];

function Cell({ on }: { on: boolean }) {
  return on ? (
    <Check className="mx-auto h-4 w-4 text-accent" />
  ) : (
    <Minus className="mx-auto h-4 w-4 text-faint-foreground/50" />
  );
}

export function Differentiator() {
  return (
    <section className="border-t border-border bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What Sets Fresco AI Apart"
          title="The combination, not just another point tool."
          description="Most field tools are either voice/photo capture with no organizational structure, or heavyweight scheduling software with no real AI reporting."
        />

        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-border bg-background">
          <div className="grid grid-cols-4 border-b border-border text-xs font-semibold uppercase tracking-wide">
            <div className="p-5 text-muted-foreground">Capability</div>
            <div className="p-5 text-center text-muted-foreground">Capture apps</div>
            <div className="p-5 text-center text-muted-foreground">Scheduling software</div>
            <div className={cn("relative p-5 text-center text-primary")}>
              <span className="flex items-center justify-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Fresco AI
              </span>
            </div>
          </div>
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={cn(
                "grid grid-cols-4 items-center text-sm",
                i !== ROWS.length - 1 && "border-b border-border"
              )}
            >
              <div className="p-5 font-medium text-foreground">{row.label}</div>
              <div className="p-5">
                <Cell on={row.capture} />
              </div>
              <div className="p-5">
                <Cell on={row.scheduling} />
              </div>
              <div className="bg-primary-tint/40 p-5">
                <Cell on={row.fresco} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
