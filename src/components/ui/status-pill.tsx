import { cn } from "@/lib/utils";

export type FrescoStatus =
  | "open"
  | "assigned"
  | "checked_in"
  | "in_progress"
  | "submitted"
  | "approved"
  | "completed"
  | "over_est"
  | "locked"
  | "cancelled";

const STATUS_CONFIG: Record<FrescoStatus, { label: string; dot: string; text: string }> = {
  open: { label: "Open", dot: "bg-[#9CA3AF]", text: "text-[#9CA3AF]" },
  assigned: { label: "Assigned", dot: "bg-[#9CA3AF]", text: "text-[#9CA3AF]" },
  checked_in: { label: "Checked in", dot: "bg-[#5EEAD4]", text: "text-[#5EEAD4]" },
  in_progress: { label: "In progress", dot: "bg-[#FBBF24]", text: "text-[#FBBF24]" },
  submitted: { label: "Submitted", dot: "bg-[#60A5FA]", text: "text-[#60A5FA]" },
  approved: { label: "Approved", dot: "bg-[#4ADE80]", text: "text-[#4ADE80]" },
  completed: { label: "Completed", dot: "bg-[#4ADE80]", text: "text-[#4ADE80]" },
  over_est: { label: "Over est.", dot: "bg-[#FBBF24]", text: "text-[#FBBF24]" },
  locked: { label: "Locked", dot: "bg-[#FB7185]", text: "text-[#FB7185]" },
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
