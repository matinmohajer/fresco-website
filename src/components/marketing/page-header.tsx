import { Container } from "@/components/ui/container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-16 pt-36 sm:pt-44">
      <div className="bg-grid-fresco pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <Container className="relative flex flex-col items-start gap-5">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
