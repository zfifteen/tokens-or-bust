import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, FlaskConical, Layers, Sigma } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Cover", icon: BookOpen },
  { to: "/play", label: "Play", icon: FlaskConical },
  { to: "/figures", label: "Figures", icon: Layers },
  { to: "/claims", label: "Claims", icon: Sigma },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col bg-canvas">
      <main className="flex-1 pb-24">{children}</main>
      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-hair bg-canvas/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md"
        aria-label="Primary"
      >
        <ul className="mx-auto grid max-w-lg grid-cols-4">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] tracking-wide",
                    active ? "text-ink" : "text-faint",
                  )}
                >
                  <Icon
                    className={cn("size-5", active ? "text-brass" : "text-faint")}
                    strokeWidth={1.6}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
