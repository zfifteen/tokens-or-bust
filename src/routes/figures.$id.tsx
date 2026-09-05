import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/Tag";
import { FigureChart } from "@/components/FigureChart";
import { figureById, nextFigure, prevFigure, FIGURES } from "@/lib/figures";
import { sharePayload } from "@/lib/share";

export const Route = createFileRoute("/figures/$id")({
  component: FigurePage,
});

function FigurePage() {
  const { id } = Route.useParams();
  const fig = figureById(id) ?? FIGURES[0];
  const prev = prevFigure(fig.id);
  const next = nextFigure(fig.id);
  const navigate = useNavigate();
  const [toast, setToast] = useState<string | null>(null);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if ((e.key === "j" || e.key === "J") && next) {
        e.preventDefault();
        navigate({ to: "/figures/$id", params: { id: next.id } });
      }
      if ((e.key === "k" || e.key === "K") && prev) {
        e.preventDefault();
        navigate({ to: "/figures/$id", params: { id: prev.id } });
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, next, prev]);

  async function share() {
    const result = await sharePayload(
      `Conversion Rate — ${fig.title}`,
      fig.lede,
    );
    if (result === "copied") setToast("Link copied");
    if (result === "shared") setToast("Shared");
    window.setTimeout(() => setToast(null), 1800);
  }

  return (
    <article
      className="px-5 pt-6"
      onTouchStart={(e) => {
        startX.current = e.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const x = e.changedTouches[0]?.clientX;
        if (startX.current == null || x == null) return;
        const dx = x - startX.current;
        if (dx < -56 && next) navigate({ to: "/figures/$id", params: { id: next.id } });
        if (dx > 56 && prev) navigate({ to: "/figures/$id", params: { id: prev.id } });
        startX.current = null;
      }}
    >
      <div className="flex items-center justify-between">
        <Link
          to="/figures"
          className="inline-flex h-11 items-center gap-1 text-sm text-mute"
        >
          <ChevronLeft className="size-4" />
          Suite
        </Link>
        <span className="font-mono text-[11px] text-faint">
          {String(fig.n).padStart(2, "0")} / 21
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <Tag kind={fig.tag} />
        {fig.claims.map((c) => (
          <Tag key={c}>{c}</Tag>
        ))}
      </div>
      <h1 className="mt-3 font-display text-[1.7rem] text-ink">{fig.title}</h1>
      <p className="mt-2 text-[1.02rem] text-mute">{fig.lede}</p>

      <div className="mt-4">
        <FigureChart id={fig.id} />
      </div>
      <p className="mt-2 font-mono text-[10px] leading-snug text-faint">{fig.footer}</p>

      <div className="mt-5 space-y-3 text-sm text-mute">
        <p>
          <strong className="font-medium text-ink">What this shows. </strong>
          {fig.what}
        </p>
        {fig.how && (
          <p>
            <strong className="font-medium text-ink">How to read it. </strong>
            {fig.how}
          </p>
        )}
        {fig.change && (
          <p>
            <strong className="font-medium text-ink">What would change it. </strong>
            {fig.change}
          </p>
        )}
      </div>

      <div className="mt-6 flex gap-2 pb-10">
        <Button
          variant="secondary"
          className="flex-1"
          disabled={!prev}
          onClick={() => prev && navigate({ to: "/figures/$id", params: { id: prev.id } })}
        >
          <ChevronLeft className="size-4" />
          Prev
        </Button>
        <Button variant="secondary" size="icon" onClick={share} aria-label="Share figure">
          <Share2 className="size-4" />
        </Button>
        <Button
          variant="secondary"
          className="flex-1"
          disabled={!next}
          onClick={() => next && navigate({ to: "/figures/$id", params: { id: next.id } })}
        >
          Next
          <ChevronRight className="size-4" />
        </Button>
      </div>
      {toast && (
        <p className="fixed bottom-20 left-1/2 z-40 -translate-x-1/2 rounded-full bg-ink px-3 py-1.5 text-xs text-canvas">
          {toast}
        </p>
      )}
    </article>
  );
}
