import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fresco-mark-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#fresco-mark-grad)" />
      <path
        d="M13 20.5l4.8 4.8L27.5 15"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={iconClassName} />
      <span className="flex items-baseline gap-1 text-lg font-bold tracking-tight text-foreground">
        Fresco
        <span className="rounded-md bg-primary-tint px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
          AI
        </span>
      </span>
    </span>
  );
}
