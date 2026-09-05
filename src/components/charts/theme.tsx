import type { ReactElement } from "react";
import {
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
} from "recharts";
import { ink, muted, grid, edge } from "@/lib/palette";
import { cn } from "@/lib/utils";

export const tick = {
  fill: muted,
  fontSize: 10,
  fontFamily: "IBM Plex Mono, ui-monospace, monospace",
};
export const axisLine = { stroke: edge };
export const gridProps = {
  stroke: grid,
  strokeDasharray: "3 4",
  vertical: false,
};

export const chartMargin = { top: 10, right: 10, left: 2, bottom: 4 };

export function ChartBox({
  children,
  className,
  height = 228,
}: {
  children: ReactElement;
  className?: string;
  height?: number;
}) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-lg bg-wash shadow-[var(--shadow-border)]",
        className,
      )}
      style={{ height }}
    >
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}

export function SeriesLegend({
  items,
}: {
  items: { color: string; label: string }[];
}) {
  return (
    <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 px-0.5">
      {items.map((i) => (
        <li key={i.label} className="flex items-center gap-1.5 text-[11px] text-mute">
          <span
            className="inline-block size-2 shrink-0 rounded-full"
            style={{ backgroundColor: i.color }}
          />
          {i.label}
        </li>
      ))}
    </ul>
  );
}

export function Tip({
  active,
  payload,
  label,
  formatter,
}: TooltipProps<number, string> & {
  formatter?: (value: number, name: string) => string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="max-w-56 rounded-md bg-panel px-2.5 py-2 text-xs shadow-[var(--shadow-border)]">
      {label != null && label !== "" && (
        <p className="mb-1 font-mono text-[11px] text-mute">{String(label)}</p>
      )}
      <ul className="space-y-0.5">
        {payload.map((p) => (
          <li
            key={String(p.dataKey)}
            className="flex items-baseline justify-between gap-3"
          >
            <span className="text-mute">{p.name}</span>
            <span className="tabular font-mono text-ink">
              {formatter && typeof p.value === "number"
                ? formatter(p.value, String(p.name))
                : String(p.value)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const tooltip = (
  <Tooltip
    content={<Tip />}
    cursor={{ stroke: ink, strokeOpacity: 0.25 }}
    wrapperStyle={{ zIndex: 20, outline: "none" }}
  />
);

export function tooltipMoney(suffix = "") {
  return (
    <Tooltip
      content={
        <Tip
          formatter={(v) => {
            const a = Math.abs(v);
            const sign = v < 0 ? "−" : "";
            if (a >= 1000) return `${sign}$${(a / 1000).toFixed(1)}B${suffix}`;
            if (a >= 1) return `${sign}$${a.toFixed(1)}M${suffix}`;
            return `${sign}$${a.toFixed(2)}${suffix}`;
          }}
        />
      }
      cursor={{ stroke: ink, strokeOpacity: 0.25 }}
      wrapperStyle={{ zIndex: 20, outline: "none" }}
    />
  );
}
