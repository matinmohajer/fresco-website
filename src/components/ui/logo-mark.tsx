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
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#fresco-mark-grad)" />
      <path
        d="M20 30c-4-3.8-8-8.6-8-13.2A8 8 0 0 1 20 8a8 8 0 0 1 8 8.8c0 4.6-4 9.4-8 13.2z"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16.5 16.6l2.4 2.4 4.6-4.6"
        stroke="white"
        strokeWidth="2.2"
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
