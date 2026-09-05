import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Tag as TagKind } from "@/lib/figures";

const STYLES: Record<TagKind, string> = {
  measured:
    "text-up shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-up)_35%,transparent)]",
  hypothesis:
    "text-brass shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-brass)_35%,transparent)]",
  mixed:
    "text-info shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-info)_35%,transparent)]",
  unscored: "text-mute shadow-[inset_0_0_0_1px_var(--color-hair)]",
};

const LABELS: Record<TagKind, string> = {
  measured: "Measured",
  hypothesis: "Hypothesis",
  mixed: "Mixed",
  unscored: "Not scored",
};

export function Tag({
  kind,
  children,
  className,
}: {
  kind?: TagKind;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-sm px-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-mute shadow-[inset_0_0_0_1px_var(--color-hair)]",
        kind && STYLES[kind],
        className,
      )}
    >
      {children ?? (kind ? LABELS[kind] : null)}
    </span>
  );
}
