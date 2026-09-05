import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import { CHAPTERS, FIGURES, type Chapter, type Tag as TagKind } from "@/lib/figures";
import { Tag } from "@/components/Tag";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/figures/")({ component: FiguresIndex });

const FILTERS: { id: "all" | Chapter; label: string }[] = [
  { id: "all", label: "All" },
  ...CHAPTERS.map((c) => ({ id: c.id, label: c.label })),
];

function FiguresIndex() {
  const [filter, setFilter] = useState<"all" | Chapter>("all");
  const [tag, setTag] = useState<"all" | TagKind>("all");

  const list = useMemo(
    () =>
      FIGURES.filter((f) => (filter === "all" ? true : f.chapter === filter)).filter((f) =>
        tag === "all" ? true : f.tag === tag,
      ),
    [filter, tag],
  );

  return (
    <div className="px-5 pt-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brass">
        Twenty-one figures
      </p>
      <h1 className="mt-2 font-display text-[1.85rem] text-ink">The suite</h1>
      <p className="mt-2 text-sm text-mute">
        Tap a figure to open the live chart. Identity sketches follow the playground knobs. The rest are the 5 September 2026 pack.
      </p>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "h-10 shrink-0 rounded-lg px-3 text-sm",
              filter === f.id
                ? "bg-ink text-canvas"
                : "bg-panel text-mute shadow-[var(--shadow-border)]",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
        {(["all", "hypothesis", "measured", "mixed", "unscored"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTag(t)}
            className={cn(
              "h-8 shrink-0 rounded-sm px-2 font-mono text-[10px] uppercase tracking-[0.08em]",
              tag === t ? "bg-panel text-ink" : "text-faint",
            )}
          >
            {t === "all" ? "Any tag" : t}
          </button>
        ))}
      </div>

      <ol className="mt-5 space-y-2 pb-8">
        {list.map((f) => (
          <li key={f.id}>
            <Link
              to="/figures/$id"
              params={{ id: f.id }}
              className="flex min-h-16 items-start gap-3 rounded-xl bg-panel px-3 py-3 shadow-[var(--shadow-border)]"
            >
              <span className="mt-0.5 w-6 shrink-0 font-mono text-[11px] text-faint">
                {String(f.n).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-1.5">
                  <Tag kind={f.tag} />
                  {f.claims.map((c) => (
                    <Tag key={c}>{c}</Tag>
                  ))}
                </div>
                <h2 className="font-display text-[1.05rem] leading-snug text-ink">{f.title}</h2>
                <p className="mt-1 line-clamp-2 text-sm text-mute">{f.lede}</p>
              </div>
              <ChevronRight className="mt-1 size-4 shrink-0 text-faint" />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
