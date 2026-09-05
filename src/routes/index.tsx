import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookMarked } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/Tag";
import { GlossarySheet } from "@/components/GlossarySheet";
import { DANGER, DISCLAIMER } from "@/lib/hypotheses";
import { asOf } from "@/lib/measured";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="px-5 pt-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brass">
        research / unwind
      </p>
      <h1 className="mt-3 font-display text-[2.35rem] leading-[1.05] text-ink">
        Conversion Rate
      </h1>
      <p className="mt-4 text-[1.05rem] leading-snug text-mute">
        Twenty-one figures on whether installed silicon can still pay for the paper that bought it.
      </p>
      <p className="mt-3 font-mono text-[11px] text-faint">
        As-of {asOf} · not a book
      </p>

      <div className="mt-6 flex items-center gap-3 rounded-xl bg-panel px-4 py-3 shadow-[var(--shadow-border)]">
        <span className="tabular font-display text-3xl text-brass">{DANGER.level}</span>
        <div>
          <p className="text-sm text-ink">{DANGER.label}</p>
          <p className="text-xs text-mute">Loop danger · H5 live on the cheap tier</p>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-wash px-4 py-3 font-mono text-[13px] text-ink shadow-[var(--shadow-border)]">
        Profit = (P − Cv) · V − F
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <Button asChild size="lg" className="w-full">
          <Link to="/play">
            Play the identity
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg" className="w-full">
          <Link to="/figures">Browse 21 figures</Link>
        </Button>
      </div>

      <div className="mt-8 space-y-3">
        <ClaimRow id="H5" label="Conversion rate" state="Open, live on cheap tier" />
        <ClaimRow id="H4" label="Regime change" state="Fail as regime change" />
        <ClaimRow id="H2" label="Capex vs cash" state="Live on cash, not demand" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Tag kind="measured" />
        <Tag kind="hypothesis" />
        <Tag kind="mixed" />
        <GlossarySheet>
          <button
            type="button"
            className="inline-flex h-8 items-center gap-1.5 rounded-sm px-2 font-mono text-[11px] uppercase tracking-[0.08em] text-mute shadow-[inset_0_0_0_1px_var(--color-hair)]"
          >
            <BookMarked className="size-3.5" strokeWidth={1.6} />
            Glossary
          </button>
        </GlossarySheet>
      </div>

      <p className="mt-10 max-w-prose text-sm text-faint">{DISCLAIMER}</p>
      <p className="mt-3 pb-6 text-xs text-faint">
        Source pack: zfifteen / micro-hedge-fund · research/unwind/plots
      </p>
    </div>
  );
}

function ClaimRow({
  id,
  label,
  state,
}: {
  id: string;
  label: string;
  state: string;
}) {
  return (
    <Link
      to="/claims"
      className="flex min-h-14 items-center justify-between gap-3 rounded-xl bg-panel px-4 py-3 shadow-[var(--shadow-border)]"
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-brass">{id}</p>
        <p className="text-sm text-ink">{label}</p>
      </div>
      <p className="max-w-[46%] text-right text-xs text-mute">{state}</p>
    </Link>
  );
}
