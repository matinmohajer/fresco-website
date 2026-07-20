import Link from "next/link";
import { Logo } from "@/components/ui/logo-mark";
import { Container } from "@/components/ui/container";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "/#how-it-works", label: "How It Works" },
      { href: "/#platform", label: "Admin & Team Apps" },
      { href: "/#schedule", label: "Schedule" },
      { href: "/#who-its-for", label: "Who It's For" },
      { href: "/#availability", label: "Availability" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/support", label: "Support" },
      { href: "/support#demo", label: "Request a Demo" },
    ],
  },
  {
    title: "Legal",
    links: [{ href: "/privacy", label: "Privacy Policy" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              To Do Lists that create themselves — and sign themselves off.
              A deterministic engine turns a spoken walk-through into a
              dispatched, verified sign-off report.
            </p>
            <p className="text-xs text-faint-foreground">
              Fresco AI is developed and operated by XARP, a California
              company based in San Diego, CA.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-faint-foreground">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-xs text-faint-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} XARP. All rights reserved.</p>
          <p>
            Questions? Alex Paydar ·{" "}
            <a href="tel:+18583711421" className="text-foreground hover:text-primary">
              (858) 371-1421
            </a>{" "}
            ·{" "}
            <a href="mailto:frescoai@xarp.org" className="text-foreground hover:text-primary">
              frescoai@xarp.org
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
