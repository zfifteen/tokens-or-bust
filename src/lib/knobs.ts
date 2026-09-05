import { create } from "zustand";

export type Knobs = {
  F: number;
  p0: number;
  cvA: number;
  cvB: number;
  cvC: number;
  pMulA: number;
  pMulB: number;
  pMulC: number;
  cvMulA: number;
  cvMulB: number;
  cvMulC: number;
  v0: number;
  vMulA: number;
  vMulB: number;
  vMulC: number;
  floorB: number;
  floorC: number;
  gpuHours: number;
  cvBe: number;
  months: number;
};

/** Defaults match research/unwind/plots/generate_suite.py as-of 2026-09-05. */
export const DEFAULT_KNOBS: Knobs = {
  F: 900,
  p0: 4,
  cvA: 1.1,
  cvB: 1.1,
  cvC: 1.3,
  pMulA: 0.96,
  pMulB: 0.88,
  pMulC: 0.85,
  cvMulA: 0.96,
  cvMulB: 0.95,
  cvMulC: 0.97,
  v0: 200e6,
  vMulA: 1.12,
  vMulB: 1.16,
  vMulC: 1.18,
  floorB: 0.5,
  floorC: 0.35,
  gpuHours: 1.2e6,
  cvBe: 0.9,
  months: 25,
};

type KnobStore = {
  knobs: Knobs;
  setKnob: <K extends keyof Knobs>(key: K, value: Knobs[K]) => void;
  setKnobs: (partial: Partial<Knobs>) => void;
  reset: () => void;
};

export const useKnobs = create<KnobStore>((set) => ({
  knobs: DEFAULT_KNOBS,
  setKnob: (key, value) =>
    set((s) => ({ knobs: { ...s.knobs, [key]: value } })),
  setKnobs: (partial) =>
    set((s) => ({ knobs: { ...s.knobs, ...partial } })),
  reset: () => set({ knobs: DEFAULT_KNOBS }),
}));

export function knobsFromSearch(search: URLSearchParams): Partial<Knobs> {
  const out: Partial<Knobs> = {};
  const num = (k: string) => {
    const v = search.get(k);
    if (v == null || v === "") return;
    const n = Number(v);
    if (Number.isFinite(n)) (out as Record<string, number>)[k] = n;
  };
  (
    [
      "F",
      "p0",
      "cvC",
      "pMulC",
      "vMulC",
      "floorC",
      "gpuHours",
      "cvBe",
    ] as const
  ).forEach(num);
  return out;
}

export function knobsToSearch(k: Knobs): string {
  const p = new URLSearchParams();
  p.set("F", String(k.F));
  p.set("p0", String(k.p0));
  p.set("cvC", String(k.cvC));
  p.set("pMulC", String(k.pMulC));
  p.set("vMulC", String(k.vMulC));
  p.set("floorC", String(k.floorC));
  return p.toString();
}
