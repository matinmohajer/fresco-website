import { Bell, Home, ListTodo, FolderKanban, Users, Check, MessageSquareWarning, Camera, Clock, ListTree, ShieldCheck } from "lucide-react";
import { StatusPill } from "@/components/ui/status-pill";
import { cn } from "@/lib/utils";

function CompanyHeader() {
  return (
    <div className="mb-4 flex items-center gap-2.5 border-b border-border pb-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-[10px] font-bold text-primary-foreground">
        M
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-bold leading-tight text-foreground">Meridian Facilities</p>
        <p className="text-[9px] leading-tight text-faint-foreground">(619) 555-0139</p>
      </div>
    </div>
  );
}

function PoweredByFresco() {
  return (
    <div className="flex items-center justify-center gap-1.5 pt-3 text-faint-foreground">
      <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm bg-primary">
        <svg viewBox="0 0 40 40" className="h-2 w-2" fill="none">
          <path d="M13 20.5l4.8 4.8L27.5 15" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[9px] font-semibold">Powered by Fresco AI</span>
    </div>
  );
}

export function AdminBottomNav({ active }: { active: "home" | "tasks" | "projects" | "team" }) {
  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "tasks", label: "Tasks", icon: ListTodo },
    { key: "projects", label: "Projects", icon: FolderKanban },
    { key: "team", label: "Team", icon: Users },
  ] as const;

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-around border-t border-border bg-white/90 pb-6 pt-2.5 backdrop-blur-xl">
      {items.map(({ key, label, icon: Icon }) => (
        <div key={key} className="flex flex-col items-center gap-1">
          <Icon
            className={cn("h-[18px] w-[18px]", key === active ? "text-primary" : "text-faint-foreground")}
            strokeWidth={key === active ? 2.25 : 1.75}
          />
          <span className={cn("text-[9px] font-medium", key === active ? "text-primary" : "text-faint-foreground")}>
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
      <CompanyHeader />

      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-faint-foreground">Tuesday, Jul 14</p>
          <h1 className="text-lg font-bold tracking-tight text-foreground">Good morning, Alex</h1>
        </div>
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-danger" />
        </div>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-3">
        <div className="widget-depth-light rounded-2xl p-3.5">
          <p className="text-2xl font-bold text-foreground">7</p>
          <p className="mt-0.5 text-[11px] font-semibold text-accent">Needs review</p>
        </div>
        <div className="widget-depth-light rounded-2xl p-3.5">
          <p className="text-2xl font-bold text-foreground">12</p>
          <p className="mt-0.5 text-[11px] font-semibold text-warning">In progress</p>
        </div>
        <div className="widget-depth-light rounded-2xl p-3.5">
          <p className="text-2xl font-bold text-foreground">3</p>
          <p className="mt-0.5 text-[11px] font-semibold text-danger">Overdue</p>
        </div>
        <div className="widget-depth-light rounded-2xl p-3.5">
          <p className="text-2xl font-bold text-foreground">24</p>
          <p className="mt-0.5 text-[11px] font-semibold text-muted-foreground">Active team</p>
        </div>
      </div>

      <p className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-faint-foreground">
        Recent sign-offs
      </p>
      <div className="flex flex-col gap-2.5">
        {[
          { site: "Unit 214 — Final Walk", member: "Sam T.", status: "submitted" as const },
          { site: "Oak St. Site Walk", member: "D. Kim", status: "in_progress" as const },
          { site: "County Bridge #4", member: "J. Alvarez", status: "completed" as const },
        ].map((row) => (
          <div key={row.site} className="widget-depth-light flex items-center justify-between rounded-2xl px-3.5 py-3">
            <div>
              <p className="text-[13px] font-semibold text-foreground">{row.site}</p>
              <p className="text-[11px] text-muted-foreground">{row.member}</p>
            </div>
            <StatusPill status={row.status} />
          </div>
        ))}
      </div>

      <AdminBottomNav active="home" />
    </div>
  );
}

export function CompletionCertificateScreen() {
  return (
    <div className="relative flex h-full flex-col px-5 pb-8 pt-14">
      <CompanyHeader />

      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-faint-foreground">Completion Certificate</p>
      <h1 className="mb-4 text-lg font-bold tracking-tight text-foreground">Unit 214 · Final Walk</h1>

      <div className="widget-depth-light mb-2.5 flex items-center justify-between rounded-2xl p-3.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent">
            <Check className="h-4 w-4 text-accent-foreground" strokeWidth={3} />
          </span>
          <div>
            <p className="text-[12.5px] font-semibold text-foreground">Touch up drywall — north wall</p>
            <p className="text-[11px] text-muted-foreground">Signed off · photo · 9:42 AM</p>
          </div>
        </div>
        <span className="rounded-full bg-accent-tint px-2.5 py-1 text-[10px] font-bold text-accent">DONE</span>
      </div>

      <div className="widget-depth-light mb-2.5 flex items-center justify-between rounded-2xl p-3.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent">
            <Check className="h-4 w-4 text-accent-foreground" strokeWidth={3} />
          </span>
          <div>
            <p className="text-[12.5px] font-semibold text-foreground">Reseat outlet cover — kitchen</p>
            <p className="text-[11px] text-muted-foreground">Signed off · photo · 9:47 AM</p>
          </div>
        </div>
        <span className="rounded-full bg-accent-tint px-2.5 py-1 text-[10px] font-bold text-accent">DONE</span>
      </div>

      <div className="widget-depth-light mb-4 flex items-center justify-between rounded-2xl p-3.5">
        <div className="flex items-center gap-2.5">
          <MessageSquareWarning className="h-4 w-4 shrink-0 text-warning" />
          <div>
            <p className="text-[12.5px] font-semibold text-foreground">Replace cracked tile — bath 2</p>
            <p className="text-[11px] text-muted-foreground">Reason: material on order · photo</p>
          </div>
        </div>
        <span className="rounded-full bg-warning-bg px-2.5 py-1 text-[10px] font-bold text-warning">REASON</span>
      </div>

      <div className="mb-4 flex items-center gap-3 border-t border-border pt-3.5 text-faint-foreground">
        <span className="flex items-center gap-1 text-[10px] font-medium"><Camera className="h-3 w-3" /> Photos</span>
        <span className="flex items-center gap-1 text-[10px] font-medium"><Clock className="h-3 w-3" /> Timestamps</span>
        <span className="flex items-center gap-1 text-[10px] font-medium"><ListTree className="h-3 w-3" /> Reasons</span>
        <span className="flex items-center gap-1 text-[10px] font-medium"><ShieldCheck className="h-3 w-3" /> Audit trail</span>
      </div>

      <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-faint-foreground">Delivered to</p>
      <div className="flex flex-wrap gap-1.5">
        {["Dispatcher", "Manager", "Supervisor", "Foreman", "Client / Inspector"].map((who) => (
          <span key={who} className="rounded-full bg-surface-2 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
            {who}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <PoweredByFresco />
      </div>
    </div>
  );
}

export function TeamScreen() {
  return (
    <div className="relative flex h-full flex-col px-5 pb-24 pt-14">
      <CompanyHeader />

      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-faint-foreground">Team</p>
      <h1 className="mb-4 text-lg font-bold tracking-tight text-foreground">Team &amp; Invitations</h1>

      <div className="mb-4 flex gap-2">
        <span className="rounded-full bg-primary px-3 py-1.5 text-[11px] font-bold text-primary-foreground">Team</span>
        <span className="rounded-full px-3 py-1.5 text-[11px] font-semibold text-muted-foreground">Invites</span>
      </div>

      <div className="flex flex-col gap-2.5">
        {[
          { name: "Marcus Torres", role: "Team Member", live: true },
          { name: "Dana Kim", role: "Inspector", live: true },
          { name: "Jose Alvarez", role: "Team Member", live: false },
        ].map((w) => (
          <div key={w.name} className="widget-depth-light flex items-center gap-3 rounded-2xl px-3.5 py-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-[11px] font-bold text-foreground">
              {w.name.split(" ").map((n) => n[0]).join("")}
              {w.live ? (
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-accent" />
              ) : null}
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-semibold text-foreground">{w.name}</p>
              <p className="text-[11px] text-muted-foreground">{w.role}</p>
            </div>
            <span className="text-[10px] font-semibold text-faint-foreground">{w.live ? "On site" : "Offline"}</span>
          </div>
        ))}
      </div>

      <p className="mb-2.5 mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-faint-foreground">
        Pending invitations
      </p>
      <div className="widget-depth-light flex items-center justify-between rounded-2xl px-3.5 py-3">
        <div>
          <p className="text-[13px] font-semibold text-foreground">(619) 555-0204</p>
          <p className="text-[11px] text-muted-foreground">Invite pending</p>
        </div>
        <span className="rounded-full bg-warning-bg px-2.5 py-1 text-[10px] font-semibold text-warning">
          Pending
        </span>
      </div>

      <AdminBottomNav active="team" />
    </div>
  );
}
