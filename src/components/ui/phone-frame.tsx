import { cn } from "@/lib/utils";

function StatusBar() {
  const color = "var(--foreground)";
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-30 flex h-11 items-center justify-between px-7"
      aria-hidden="true"
    >
      <span className="text-[0.8125rem] font-semibold" style={{ color }}>
        9:41
      </span>
      <span className="flex items-center gap-1.5">
        <svg width="15" height="10" viewBox="0 0 18 12" fill={color}>
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5" width="3" height="7" rx="1" />
          <rect x="10" y="2.5" width="3" height="9.5" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="22" height="11" viewBox="0 0 26 13" fill="none">
          <rect x="1" y="1" width="21" height="11" rx="3" stroke={color} strokeOpacity="0.5" />
          <rect x="3" y="3" width="16" height="7" rx="1.5" fill={color} />
        </svg>
      </span>
    </div>
  );
}

export function PhoneFrame({
  children,
  className,
  screenClassName,
}: {
  children: React.ReactNode;
  className?: string;
  screenClassName?: string;
}) {
  return (
    <div
      className={cn(
        "iphone-bezel relative flex h-145 w-70 flex-col rounded-[3rem]",
        className
      )}
    >
      <div className="hardware-btn absolute -left-0.75 top-30 z-0 h-6.25 w-0.75 rounded-l-md" />
      <div className="hardware-btn absolute -left-0.75 top-40 z-0 h-11.25 w-0.75 rounded-l-md" />
      <div className="hardware-btn absolute -left-0.75 top-55 z-0 h-11.25 w-0.75 rounded-l-md" />
      <div className="hardware-btn absolute -right-0.75 top-42.5 z-0 h-17.5 w-0.75 scale-x-[-1] rounded-r-md" />

      <div
        className={cn(
          "relative z-10 flex-1 overflow-hidden rounded-[2.5rem] bg-background text-foreground shadow-[inset_0_0_15px_rgba(0,0,0,0.15)]",
          screenClassName
        )}
      >
        <div className="absolute left-1/2 top-1.25 z-50 flex h-7 w-25 -translate-x-1/2 items-center justify-end rounded-full bg-black px-3">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </div>
        <StatusBar />
        <div className="relative h-full w-full">{children}</div>
      </div>
    </div>
  );
}
