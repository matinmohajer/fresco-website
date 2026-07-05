import { cn } from "@/lib/utils";

export type FrescoStatus =
  | "open"
  | "assigned"
  | "in_progress"
  | "submitted"
  | "completed"
  | "cancelled";

const STATUS_CONFIG: Record<FrescoStatus, { label: string; dot: string; text: string }> = {
  open: { label: "Open", dot: "bg-[#9CA3AF]", text: "text-[#9CA3AF]" },
  assigned: { label: "Assigned", dot: "bg-[#A78BFA]", text: "text-[#A78BFA]" },
  in_progress: { label: "In progress", dot: "bg-[#FBBF24]", text: "text-[#FBBF24]" },
  submitted: { label: "Submitted", dot: "bg-[#5EEAD4]", text: "text-[#5EEAD4]" },
  completed: { label: "Completed", dot: "bg-[#14B8A6]", text: "text-[#14B8A6]" },
  cancelled: { label: "Cancelled", dot: "bg-[#6B7280]", text: "text-[#6B7280]" },
};

export function StatusPill({
  status,
  className,
}: {
  status: FrescoStatus;
  className?: string;
}) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold tracking-tight",
        cfg.text,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", cfg.dot)} />
      {cfg.label}
    </span>
  );
}
