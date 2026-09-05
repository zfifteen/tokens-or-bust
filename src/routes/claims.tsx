import { createFileRoute, Link } from "@tanstack/react-router";
import { CLAIMS, DANGER, DISCLAIMER } from "@/lib/hypotheses";
import { LoopDiagram } from "@/components/LoopDiagram";
import { Tag } from "@/components/Tag";
import { cn } from "@/lib/utils";
import { cashRows, mag7, asOf } from "@/lib/measured";

export const Route = createFileRoute("/claims")({ component: Claims });

const STATUS_TAG: Record<string, "measured" | "hypothesis" | "mixed" | "unscored"> = {
  live: "measured",
  open: "hypothesis",
  fail: "mixed",
  unscored: "unscored",
};

function Claims() {
  const mag = mag7.reduce((s, r) => s + r.weight, 0);
  return (
    <div className="px-5 pt-8 pb-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brass">
        Standing claims
      </p>
      <h1 className="mt-2 font-display text-[1.85rem] text-ink">The loop</h1>
      <p className="mt-2 text-sm text-mute">
        Hub equity funds silicon. Silicon sells tokens and GPU-hours. That conversion rate is supposed to retire the paper. The clocks do not match.
      </p>

      <div className="mt-5 rounded-xl bg-panel px-3 py-3 shadow-[var(--shadow-border)]">
        <LoopDiagram />
      </div>

      <div className="mt-5 rounded-xl bg-panel px-4 py-3 shadow-[var(--shadow-border)]">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
          Danger level · {asOf}
        </p>
        <p className="mt-1 font-display text-2xl text-ink">
          {DANGER.level} · {DANGER.label}
        </p>
        <p className="mt-2 text-sm text-mute">{DANGER.why}</p>
      </div>

      <ol className="mt-6 space-y-3">
        {CLAIMS.map((c) => (
          <li
            key={c.id}
            className="rounded-xl bg-panel px-4 py-4 shadow-[var(--shadow-border)]"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-brass">
                {c.id}
              </p>
              <Tag kind={STATUS_TAG[c.status]}>{c.statusLabel}</Tag>
            </div>
            <h2 className="mt-1 font-display text-xl text-ink">{c.title}</h2>
            <p className="mt-2 text-sm text-ink">{c.claim}</p>
            <p className="mt-2 text-sm text-mute">{c.now}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-8 font-display text-xl text-ink">Ten-number panel, condensed</h2>
      <ul className="mt-3 divide-y divide-hair rounded-xl bg-panel shadow-[var(--shadow-border)]">
        <PanelRow k="Mag7 in SPY" v={`${mag.toFixed(1)}%`} />
        <PanelRow k="Four-name capex / OCF" v="0.95" />
        <PanelRow k="AMZN TTM FCF" v="−$7.6B" />
        <PanelRow k="NVDA data-center YoY" v="+117%" />
        <PanelRow k="NVDA residual-value cap" v="$105B" />
        <PanelRow k="H100 neocloud / hyperscaler" v="$3.71 / $10.53" />
        <PanelRow k="Luna input after 7/30" v="$0.20 / 1M" />
        <PanelRow k="CY2026 capex guides" v="3 up / 0 down" />
        <PanelRow k="CoreWeave vs 52-week high" v="−42%" />
        <PanelRow k="RSP vs SPY, 3-month" v="+4.48 / +0.99" />
      </ul>
      <p className="mt-2 text-xs text-faint">
        Cash rows use company periods
        {cashRows.map((r) => ` · ${r.name} ${r.period}`).join("")}.
      </p>

      <Link
        to="/figures"
        className={cn(
          "mt-6 flex min-h-12 items-center justify-center rounded-xl bg-ink text-sm font-medium text-canvas",
        )}
      >
        Open the figures
      </Link>
      <p className="mt-6 text-sm text-faint">{DISCLAIMER}</p>
    </div>
  );
}

function PanelRow({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex min-h-12 items-center justify-between gap-3 px-4 text-sm">
      <span className="text-mute">{k}</span>
      <span className="tabular font-mono text-ink">{v}</span>
    </li>
  );
}
