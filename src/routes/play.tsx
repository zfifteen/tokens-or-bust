import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { RotateCcw, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KnobRow } from "@/components/KnobRow";
import { FigureChart } from "@/components/FigureChart";
import { Tag } from "@/components/Tag";
import { useKnobs, knobsFromSearch, knobsToSearch } from "@/lib/knobs";
import { computePaths } from "@/lib/identity";
import { FIGURES } from "@/lib/figures";
import { sharePayload } from "@/lib/share";
import { money, cn } from "@/lib/utils";

export const Route = createFileRoute("/play")({ component: Play });

const PLAY_FIGS: { id: (typeof PLAY_IDS)[number]; chip: string }[] = [
  { id: "01", chip: "01 Peak" },
  { id: "05", chip: "05 P&L" },
  { id: "06", chip: "06 GPU-h" },
  { id: "07", chip: "07 Mix" },
  { id: "02", chip: "02 Regime" },
  { id: "04", chip: "04 Break-even" },
];
const PLAY_IDS = ["01", "05", "06", "07", "02", "04"] as const;

function Play() {
  const { knobs, setKnob, setKnobs, reset } = useKnobs();
  const [fig, setFig] = useState<(typeof PLAY_IDS)[number]>("01");
  const [toast, setToast] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fromUrl = knobsFromSearch(new URLSearchParams(window.location.search));
    if (Object.keys(fromUrl).length) setKnobs(fromUrl);
    setReady(true);
  }, [setKnobs]);

  const { C } = useMemo(() => computePaths(knobs), [knobs]);
  const last = C[C.length - 1];
  const meta = FIGURES.find((f) => f.id === fig);

  async function share() {
    const url = `${window.location.origin}/play?${knobsToSearch(knobs)}`;
    const result = await sharePayload(
      "Conversion Rate — identity sketch",
      "Interactive Profit = (P − Cv) · V − F",
      url,
    );
    if (result === "copied") setToast("Link copied");
    if (result === "shared") setToast("Shared");
    window.setTimeout(() => setToast(null), 1800);
  }

  return (
    <div className="px-5 pt-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brass">
        Identity sketch
      </p>
      <h1 className="mt-2 font-display text-[1.85rem] text-ink">Play the knobs</h1>
      <p className="mt-2 text-sm text-mute">
        The first seven figures are a teaching sketch. Change F, price, and volume. The charts recompute. This is Hypothesis, not a company.
      </p>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {PLAY_FIGS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFig(item.id)}
            className={cn(
              "h-10 shrink-0 rounded-lg px-3 font-mono text-xs",
              fig === item.id
                ? "bg-ink text-canvas"
                : "bg-panel text-mute shadow-[var(--shadow-border)]",
            )}
          >
            {item.chip}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <Tag kind="hypothesis" />
          <Tag>H5</Tag>
        </div>
        <h2 className="font-display text-xl text-ink">{meta?.title}</h2>
        <p className="mt-1 text-sm text-mute">{meta?.lede}</p>
        <div className="mt-3">
          <FigureChart id={fig} />
        </div>
        {last && (
          <p className="mt-2 font-mono text-[11px] text-faint">
            Path C · month {knobs.months - 1} · rev {money(last.rev)} · profit {money(last.profit)}
          </p>
        )}
      </div>

      {ready ? (
        <div className="mt-6 space-y-5 rounded-xl bg-panel px-4 py-4 shadow-[var(--shadow-border)]">
          <KnobRow
            label="Fixed cost F"
            value={knobs.F}
            display={`${money(knobs.F)} / mo`}
            min={200}
            max={2000}
            step={50}
            onChange={(v) => setKnob("F", v)}
          />
          <KnobRow
            label="Starting P"
            value={knobs.p0}
            display={`$${knobs.p0.toFixed(2)} / MTok`}
            min={0.5}
            max={10}
            step={0.1}
            onChange={(v) => setKnob("p0", v)}
          />
          <KnobRow
            label="Path C variable cost"
            value={knobs.cvC}
            display={`$${knobs.cvC.toFixed(2)} / MTok`}
            min={0.2}
            max={3}
            step={0.05}
            onChange={(v) => setKnob("cvC", v)}
          />
          <KnobRow
            label="Price monthly multiplier"
            value={knobs.pMulC}
            display={`${(knobs.pMulC * 100).toFixed(0)}% of last month`}
            min={0.8}
            max={0.99}
            step={0.01}
            onChange={(v) => setKnob("pMulC", v)}
          />
          <KnobRow
            label="Volume monthly growth"
            value={knobs.vMulC}
            display={`+${((knobs.vMulC - 1) * 100).toFixed(0)}% / mo`}
            min={1.02}
            max={1.3}
            step={0.01}
            onChange={(v) => setKnob("vMulC", v)}
          />
          <KnobRow
            label="Price floor"
            value={knobs.floorC}
            display={`$${knobs.floorC.toFixed(2)}`}
            min={0.1}
            max={2}
            step={0.05}
            onChange={(v) => setKnob("floorC", v)}
          />
        </div>
      ) : (
        <div className="mt-6 h-72 animate-pulse rounded-xl bg-panel" />
      )}

      <div className="mt-4 flex gap-2 pb-8">
        <Button variant="secondary" className="flex-1" onClick={reset} disabled={!ready}>
          <RotateCcw className="size-4" />
          Reset sketch
        </Button>
        <Button variant="secondary" className="flex-1" onClick={share} disabled={!ready}>
          <Share2 className="size-4" />
          Share knobs
        </Button>
      </div>
      {toast && (
        <p className="fixed bottom-20 left-1/2 z-40 -translate-x-1/2 rounded-full bg-ink px-3 py-1.5 text-xs text-canvas">
          {toast}
        </p>
      )}
    </div>
  );
}
