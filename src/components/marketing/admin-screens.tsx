import { Home, Calendar, ListTodo, Users, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CarimboHeader({ trailing }: { trailing?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 px-5 pt-12">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] bg-accent-bright">
        <Check className="h-3 w-3 text-white" strokeWidth={3.4} />
      </span>
      <span className="text-sm font-bold tracking-[-0.2px] text-foreground">
        Carimbo <span className="text-accent-bright">AI</span>
      </span>
      {trailing ? <span className="ml-auto">{trailing}</span> : null}
    </div>
  );
}

export function AdminBottomNav({ active }: { active: "home" | "schedule" | "todo" | "team" }) {
  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "schedule", label: "Schedule", icon: Calendar },
    { key: "todo", label: "To Do Lists", icon: ListTodo },
    { key: "team", label: "Team", icon: Users },
  ] as const;

  return (
    <div className="absolute inset-x-0 bottom-0 flex border-t border-border bg-background px-2 pb-5.5 pt-1.5">
      {items.map(({ key, label, icon: Icon }) => (
        <div key={key} className="flex min-h-[50px] flex-1 flex-col items-center justify-center gap-1">
          <Icon
            className={cn("h-[22px] w-[22px]", key === active ? "text-foreground" : "text-faint-foreground")}
            strokeWidth={key === active ? 2.2 : 2}
          />
          <span className={cn("text-[10.5px] font-bold", key === active ? "text-foreground" : "text-faint-foreground")}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HomeScreen() {
  return (
    <div className="relative h-full">
      <CarimboHeader />

      <div className="px-5 pb-3.5 pt-4.5">
        <div className="text-[26px] font-bold tracking-[-0.5px] text-foreground">Wednesday, July 16</div>
        <div className="mt-[3px] text-[13px] text-muted-foreground">Meridian Facilities · Dana Whitfield — Manager</div>
      </div>

      <div className="mx-5 border-t border-border pb-3.5 pt-4">
        <div className="flex items-baseline justify-between">
          <span className="text-[13px] font-bold uppercase tracking-[0.3px] text-muted-foreground">Needs review</span>
          <span className="text-xs text-faint-foreground">2 returned</span>
        </div>
        <div className="flex flex-col">
          <div className="flex min-h-11 items-center gap-3 border-b border-border py-3.5">
            <div className="min-w-0 flex-1">
              <div className="text-base font-bold text-foreground">Marcus Bell — Cedar Ridge Apt 4B</div>
              <div className="mt-0.5 text-[12.5px] text-muted-foreground">Returned 1:12 PM · 4 Yes · 1 No</div>
            </div>
            <ChevronRight className="h-[18px] w-[18px] shrink-0 text-faint-foreground" strokeWidth={2} />
          </div>
          <div className="flex min-h-11 items-center gap-3 py-3.5">
            <div className="min-w-0 flex-1">
              <div className="text-base font-bold text-foreground">Sofia Reyes — Maple Court 2C</div>
              <div className="mt-0.5 text-[12.5px] text-muted-foreground">Returned 11:48 AM · 6 Yes</div>
            </div>
            <ChevronRight className="h-[18px] w-[18px] shrink-0 text-faint-foreground" strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="mx-5 border-t border-border pb-2.5 pt-4">
        <div className="flex items-baseline justify-between">
          <span className="text-[13px] font-bold uppercase tracking-[0.3px] text-muted-foreground">Today</span>
          <span className="text-xs text-faint-foreground">5 projects</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2.5 border-b border-border py-3">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
            <div className="min-w-0 flex-1 text-[15px] font-bold text-foreground">Marcus Bell · Cedar Ridge 4B</div>
            <span className="text-xs font-bold text-primary">Checked in</span>
          </div>
          <div className="flex items-center gap-2.5 border-b border-border py-3">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-info" />
            <div className="min-w-0 flex-1 text-[15px] font-bold text-foreground">Sofia Reyes · Maple Court 2C</div>
            <span className="text-xs font-bold text-info">Submitted</span>
          </div>
          <div className="flex items-center gap-2.5 border-b border-border py-3">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-border-strong" />
            <div className="min-w-0 flex-1 text-[15px] font-bold text-foreground">Devon Carter · Birchwood Lofts</div>
            <span className="text-xs font-bold text-faint-foreground">Assigned</span>
          </div>
          <div className="flex items-center gap-2.5 py-3">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-danger" />
            <div className="min-w-0 flex-1 text-[15px] font-bold text-foreground">Priya Shah · Alder Row Duplex</div>
            <span className="text-xs font-bold text-danger">No check-in</span>
          </div>
        </div>
      </div>

      <div className="px-5 pt-3.5">
        <button className="h-[52px] w-full rounded-[10px] bg-foreground text-base font-bold text-background">
          New To Do List
        </button>
      </div>

      <AdminBottomNav active="home" />
    </div>
  );
}

const SCHEDULE_LEGEND = [
  { label: "Planned", swatch: "border-[1.5px] border-border-strong" },
  { label: "Checked in", swatch: "bg-primary" },
  { label: "Submitted", swatch: "bg-info" },
  { label: "Approved", swatch: "bg-accent" },
  { label: "Over est.", swatch: "bg-warning" },
  { label: "No check-in", swatch: "border-[1.5px] border-danger" },
  { label: "Locked", swatch: "bg-danger" },
] as const;

export function ScheduleScreen() {
  return (
    <div className="relative h-full">
      <CarimboHeader />

      <div className="flex items-end justify-between gap-2.5 px-5 pb-3 pt-4">
        <div>
          <div className="text-2xl font-bold tracking-[-0.5px] text-foreground">Schedule</div>
          <div className="mt-0.5 text-[13px] text-muted-foreground">Wed, Jul 16 · 6 AM – 6 PM</div>
        </div>
        <button className="h-11 shrink-0 rounded-[9px] border-[1.5px] border-border-strong bg-background px-3.5 text-[13px] font-bold text-foreground">
          Send all links now
        </button>
      </div>

      <div className="mx-5 py-3">
        <div className="text-[12.5px] font-bold uppercase tracking-[0.3px] text-danger">Needs attention</div>
        <div className="flex min-h-11 items-center gap-2.5 py-[11px]">
          <div className="min-w-0 flex-1">
            <div className="text-[14.5px] font-bold text-foreground">Drywall patch · Maple Court 2C</div>
            <div className="mt-px text-xs text-muted-foreground">Unassigned · Est. 2 hrs</div>
          </div>
          <button className="h-10 shrink-0 rounded-[9px] bg-foreground px-3.5 text-[13px] font-bold text-background">
            Assign
          </button>
        </div>
        <div className="flex min-h-11 items-center gap-2.5 py-[11px]">
          <div className="min-w-0 flex-1">
            <div className="text-[14.5px] font-bold text-foreground">Priya Shah · Alder Row Duplex</div>
            <div className="mt-px text-xs font-bold text-danger">Past 7 AM start — no check-in</div>
          </div>
          <button className="h-10 shrink-0 rounded-[9px] border-[1.5px] border-border-strong bg-background px-3.5 text-[13px] font-bold text-foreground">
            Call
          </button>
        </div>
      </div>

      <div className="mx-5 pt-2.5">
        <div className="flex pl-[76px]">
          <div className="relative h-3 w-[270px] text-[9px] text-faint-foreground">
            <span className="absolute left-0">6a</span>
            <span className="absolute left-[60px]">9a</span>
            <span className="absolute left-[128px]">12p</span>
            <span className="absolute left-[196px]">3p</span>
            <span className="absolute left-[255px]">6p</span>
          </div>
        </div>

        <div className="flex h-10 items-center">
          <div className="w-[76px] shrink-0 text-[13px] font-bold leading-[1.2] text-foreground">
            Marcus Bell
            <div className="text-[10.5px] font-normal text-faint-foreground">Cedar Ridge 4B</div>
          </div>
          <div className="relative h-[22px] w-[270px]">
            <div className="absolute left-[67px] top-1.5 h-2.5 w-[90px] overflow-hidden rounded-[6px] border-2 border-primary">
              <span className="absolute inset-y-0 left-0 w-[45px] bg-primary" />
            </div>
          </div>
        </div>

        <div className="flex h-10 items-center">
          <div className="w-[76px] shrink-0 text-[13px] font-bold leading-[1.2] text-foreground">
            Sofia Reyes
            <div className="text-[10.5px] font-normal text-faint-foreground">Maple Ct · Birch</div>
          </div>
          <div className="relative h-[22px] w-[270px]">
            <div className="absolute left-[23px] top-1.5 h-2.5 w-[67px] rounded-l-[6px] bg-accent" />
            <div className="absolute left-[90px] top-1.5 h-2.5 w-[22px] rounded-r-[6px] bg-warning" />
            <div className="absolute left-[118px] top-1.5 h-2.5 w-[76px] rounded-[6px] bg-info" />
          </div>
        </div>

        <div className="flex h-10 items-center">
          <div className="w-[76px] shrink-0 text-[13px] font-bold leading-[1.2] text-foreground">
            Devon Carter
            <div className="text-[10.5px] font-normal text-faint-foreground">Birchwood Lofts</div>
          </div>
          <div className="relative h-[22px] w-[270px]">
            <div className="absolute left-[45px] top-1.5 h-2.5 w-[90px] rounded-[6px] border-2 border-border-strong" />
          </div>
        </div>

        <div className="flex h-10 items-center">
          <div className="w-[76px] shrink-0 text-[13px] font-bold leading-[1.2] text-foreground">
            Priya Shah
            <div className="text-[10.5px] font-normal text-faint-foreground">Alder Row</div>
          </div>
          <div className="relative h-[22px] w-[270px]">
            <div className="absolute left-[23px] top-1.5 h-2.5 w-[90px] rounded-[6px] border-2 border-danger">
              <span className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 rounded-full bg-danger" />
            </div>
          </div>
        </div>

        <div className="-mx-5 flex h-10 items-center bg-danger-bg px-5">
          <div className="w-[76px] shrink-0 text-[13px] font-bold leading-[1.2] text-danger">
            Jordan Kim
            <div className="text-[10.5px] font-normal text-danger">Link locked</div>
          </div>
          <div className="relative h-[22px] w-[270px]">
            <div className="absolute left-[90px] top-1.5 h-2.5 w-[90px] rounded-[6px] bg-danger" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[86px] flex flex-wrap gap-x-3.5 gap-y-2 px-5 py-2.5">
        {SCHEDULE_LEGEND.map(({ label, swatch }) => (
          <span key={label} className="inline-flex items-center gap-[5px] text-[10.5px] text-muted-foreground">
            <span className={cn("h-2.5 w-4 rounded-[3px]", swatch)} />
            {label}
          </span>
        ))}
      </div>

      <AdminBottomNav active="schedule" />
    </div>
  );
}

export function TeamScreen() {
  return (
    <div className="relative h-full">
      <CarimboHeader />

      <div className="px-5 pb-3.5 pt-4.5">
        <div className="text-2xl font-bold tracking-[-0.5px] text-foreground">Team &amp; Invitations</div>
      </div>

      <div className="mx-5 flex gap-2 border-t border-border pb-3.5 pt-4">
        <span className="rounded-full bg-primary px-3 py-1.5 text-[13px] font-bold text-primary-foreground">Team</span>
        <span className="rounded-full px-3 py-1.5 text-[13px] font-bold text-muted-foreground">Invites</span>
      </div>

      <div className="mx-5 flex flex-col">
        {[
          { name: "Marcus Bell", role: "Team member", live: true },
          { name: "Sofia Reyes", role: "Team member", live: true },
          { name: "Devon Carter", role: "Supervisor", live: false },
        ].map((w) => (
          <div key={w.name} className="flex items-center gap-3 border-b border-border py-3">
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[12px] font-bold text-foreground">
              {w.name.split(" ").map((n) => n[0]).join("")}
              {w.live ? (
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent" />
              ) : null}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[15px] font-bold text-foreground">{w.name}</div>
              <div className="text-[12.5px] text-muted-foreground">{w.role}</div>
            </div>
            <span className="text-xs font-bold text-faint-foreground">{w.live ? "On site" : "Offline"}</span>
          </div>
        ))}
      </div>

      <div className="mx-5 pb-2 pt-4">
        <div className="text-[13px] font-bold uppercase tracking-[0.3px] text-muted-foreground">Pending invitations</div>
      </div>
      <div className="mx-5 flex items-center justify-between border-t border-border py-3">
        <div>
          <div className="text-[15px] font-bold text-foreground">(619) 555-0204</div>
          <div className="text-[12.5px] text-muted-foreground">Invite pending</div>
        </div>
        <span className="rounded-[6px] bg-warning-bg px-2.5 py-1 text-xs font-bold text-warning">Pending</span>
      </div>

      <AdminBottomNav active="team" />
    </div>
  );
}
