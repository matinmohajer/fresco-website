import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-[844px] w-[390px] overflow-hidden rounded-2xl bg-background text-foreground shadow-[0_18px_44px_-20px_rgba(20,24,27,0.28)]",
        className
      )}
    >
      {children}
    </div>
  );
}
