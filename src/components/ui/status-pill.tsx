import { cn } from "@/lib/utils";

export type CarimboStatus =
  | "open"
  | "assigned"
  | "checked_in"
  | "in_progress"
  | "submitted"
  | "approved"
  | "completed"
  | "over_est"
  | "no_check_in"
  | "locked"
  | "cancelled";

const STATUS_CONFIG: Record<CarimboStatus, { label: string; dot: string; text: string }> = {
  open: { label: "Open", dot: "bg-[#9CA3AF]", text: "text-muted-foreground" },
  assigned: { label: "Planned", dot: "bg-[#9CA3AF]", text: "text-muted-foreground" },
  checked_in: { label: "Checked in", dot: "bg-[#2DD4BF]", text: "text-primary" },
  in_progress: { label: "In progress", dot: "bg-[#FBBF24]", text: "text-warning" },
  submitted: { label: "Submitted", dot: "bg-[#3B82F6]", text: "text-info" },
  approved: { label: "Approved", dot: "bg-[#22C55E]", text: "text-accent" },
  completed: { label: "Completed", dot: "bg-[#22C55E]", text: "text-accent" },
  over_est: { label: "Over est.", dot: "bg-[#FBBF24]", text: "text-warning" },
  no_check_in: { label: "No check-in", dot: "bg-[#FB7185]", text: "text-danger" },
  locked: { label: "Locked", dot: "bg-[#FB7185]", text: "text-danger" },
  cancelled: { label: "Cancelled", dot: "bg-[#9CA3AF]", text: "text-faint-foreground" },
};

export function StatusPill({
  status,
  className,
}: {
  status: CarimboStatus;
  className?: string;
}) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold tracking-tight",
        cfg.text,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", cfg.dot)} />
      {cfg.label}
    </span>
  );
}
