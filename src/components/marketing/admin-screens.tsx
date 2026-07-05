import { Bell, Home, ListTodo, FolderKanban, Users, Check, X, ArrowUpRight, MessageSquareWarning } from "lucide-react";
import { StatusPill } from "@/components/ui/status-pill";
import { cn } from "@/lib/utils";

export function AdminBottomNav({ active }: { active: "home" | "tasks" | "projects" | "team" }) {
  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "tasks", label: "Tasks", icon: ListTodo },
    { key: "projects", label: "Projects", icon: FolderKanban },
    { key: "team", label: "Team", icon: Users },
  ] as const;

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-around border-t border-white/10 bg-[#0A0F1A]/90 pb-6 pt-2.5 backdrop-blur-xl">
      {items.map(({ key, label, icon: Icon }) => (
        <div key={key} className="flex flex-col items-center gap-1">
          <Icon
            className={cn("h-[18px] w-[18px]", key === active ? "text-[#A78BFA]" : "text-neutral-500")}
            strokeWidth={key === active ? 2.25 : 1.75}
          />
          <span className={cn("text-[9px] font-medium", key === active ? "text-[#A78BFA]" : "text-neutral-500")}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function DashboardScreen() {
  return (
    <div className="relative flex h-full flex-col px-5 pb-24 pt-14">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Tuesday, Jul 14</p>
          <h1 className="text-lg font-bold tracking-tight text-white">Good morning, Alex</h1>
        </div>
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <Bell className="h-4 w-4 text-neutral-300" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#FB7185]" />
        </div>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-3">
        <div className="widget-depth rounded-2xl p-3.5">
          <p className="text-2xl font-extrabold text-white">7</p>
          <p className="mt-0.5 text-[11px] font-semibold text-[#5EEAD4]">Needs review</p>
        </div>
        <div className="widget-depth rounded-2xl p-3.5">
          <p className="text-2xl font-extrabold text-white">12</p>
          <p className="mt-0.5 text-[11px] font-semibold text-[#FBBF24]">In progress</p>
        </div>
        <div className="widget-depth rounded-2xl p-3.5">
          <p className="text-2xl font-extrabold text-white">3</p>
          <p className="mt-0.5 text-[11px] font-semibold text-[#FB7185]">Overdue</p>
        </div>
        <div className="widget-depth rounded-2xl p-3.5">
          <p className="text-2xl font-extrabold text-white">24</p>
          <p className="mt-0.5 text-[11px] font-semibold text-neutral-400">Active crew</p>
        </div>
      </div>

      <p className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500">
        Recent submissions
      </p>
      <div className="flex flex-col gap-2.5">
        {[
          { site: "Riverside HVAC", worker: "M. Torres", status: "submitted" as const },
          { site: "Oak St. Site Walk", worker: "D. Kim", status: "in_progress" as const },
          { site: "County Bridge #4", worker: "J. Alvarez", status: "completed" as const },
        ].map((row) => (
          <div key={row.site} className="widget-depth flex items-center justify-between rounded-2xl px-3.5 py-3">
            <div>
              <p className="text-[13px] font-semibold text-white">{row.site}</p>
              <p className="text-[11px] text-neutral-400">{row.worker}</p>
            </div>
            <StatusPill status={row.status} />
          </div>
        ))}
      </div>

      <AdminBottomNav active="home" />
    </div>
  );
}

export function VisitReviewScreen() {
  return (
    <div className="relative flex h-full flex-col px-5 pb-8 pt-14">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Visit Review</p>
      <h1 className="mb-4 text-lg font-bold tracking-tight text-white">Riverside HVAC — Unit 2</h1>

      <div className="widget-depth mb-3 rounded-2xl p-3.5">
        <p className="mb-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#A78BFA]">AI Summary</p>
        <p className="text-[12.5px] leading-relaxed text-neutral-200">
          Replaced condenser fan motor and cleared the condensate drain line.
          Tenant reported intermittent breaker trips in the afternoon.
        </p>
      </div>

      <div className="widget-depth mb-3 flex items-start gap-2.5 rounded-2xl p-3.5">
        <MessageSquareWarning className="mt-0.5 h-4 w-4 shrink-0 text-[#FBBF24]" />
        <div>
          <p className="text-[12.5px] font-semibold text-white">Flagged follow-up</p>
          <p className="text-[11.5px] text-neutral-400">Inspect electrical panel for intermittent trips.</p>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2">
        <div className="aspect-square rounded-xl bg-linear-to-br from-white/10 to-white/[0.02]" />
        <div className="aspect-square rounded-xl bg-linear-to-br from-white/10 to-white/[0.02]" />
        <div className="aspect-square rounded-xl bg-linear-to-br from-white/10 to-white/[0.02]" />
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <button className="fr-reset flex h-11 items-center justify-center gap-2 rounded-xl bg-[#14B8A6] text-[13px] font-bold text-[#04211D]">
          <Check className="h-4 w-4" /> Approve
        </button>
        <button className="fr-reset flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 text-[13px] font-bold text-white">
          <ArrowUpRight className="h-4 w-4" /> Approve + Follow-up
        </button>
        <button className="fr-reset flex h-11 items-center justify-center gap-2 rounded-xl text-[13px] font-semibold text-[#FB7185]">
          <X className="h-4 w-4" /> Send Back
        </button>
      </div>
    </div>
  );
}

export function TeamScreen() {
  return (
    <div className="relative flex h-full flex-col px-5 pb-24 pt-14">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Team</p>
      <h1 className="mb-4 text-lg font-bold tracking-tight text-white">Workers &amp; Invitations</h1>

      <div className="mb-4 flex gap-2">
        <span className="rounded-full bg-[#A78BFA] px-3 py-1.5 text-[11px] font-bold text-[#1a1033]">Workers</span>
        <span className="rounded-full px-3 py-1.5 text-[11px] font-semibold text-neutral-400">Invites</span>
      </div>

      <div className="flex flex-col gap-2.5">
        {[
          { name: "Marcus Torres", role: "Field Tech", live: true },
          { name: "Dana Kim", role: "Inspector", live: true },
          { name: "Jose Alvarez", role: "Field Tech", live: false },
        ].map((w) => (
          <div key={w.name} className="widget-depth flex items-center gap-3 rounded-2xl px-3.5 py-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-white">
              {w.name.split(" ").map((n) => n[0]).join("")}
              {w.live ? (
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0A0F1A] bg-[#14B8A6]" />
              ) : null}
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-semibold text-white">{w.name}</p>
              <p className="text-[11px] text-neutral-400">{w.role}</p>
            </div>
            <span className="text-[10px] font-semibold text-neutral-500">{w.live ? "On site" : "Offline"}</span>
          </div>
        ))}
      </div>

      <p className="mb-2.5 mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500">
        Pending invitations
      </p>
      <div className="widget-depth flex items-center justify-between rounded-2xl px-3.5 py-3">
        <div>
          <p className="text-[13px] font-semibold text-white">(619) 555-0204</p>
          <p className="text-[11px] text-neutral-400">Expires in 41 hours</p>
        </div>
        <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold text-[#FBBF24]">
          Pending
        </span>
      </div>

      <AdminBottomNav active="team" />
    </div>
  );
}
