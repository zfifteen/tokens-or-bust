import type { Knobs } from "./knobs";

export type MonthPoint = {
  m: number;
  P: number;
  Cv: number;
  V: number;
  rev: number;
  vc: number;
  profit: number;
};

export type PathKey = "A" | "B" | "C";

function pathOf(
  k: Knobs,
  pMul: number,
  cv0: number,
  cvMul: number,
  vMul: number,
  floor: number | null,
): MonthPoint[] {
  const out: MonthPoint[] = [];
  for (let m = 0; m < k.months; m++) {
    let P = k.p0 * pMul ** m;
    if (floor != null) P = Math.max(P, floor);
    const Cv = cv0 * cvMul ** m;
    const V = k.v0 * vMul ** m;
    const rev = (P * V) / 1e6;
    const vc = (Cv * V) / 1e6;
    out.push({ m, P, Cv, V, rev, vc, profit: rev - vc - k.F });
  }
  return out;
}

export function computePaths(k: Knobs) {
  return {
    A: pathOf(k, k.pMulA, k.cvA, k.cvMulA, k.vMulA, null),
    B: pathOf(k, k.pMulB, k.cvB, k.cvMulB, k.vMulB, k.floorB),
    C: pathOf(k, k.pMulC, k.cvC, k.cvMulC, k.vMulC, k.floorC),
  };
}

export type Regime = {
  key: PathKey;
  P: number;
  Cv: number;
  label: string;
};

export function regimes(_k: Knobs): Regime[] {
  return [
    { key: "A", P: 3.5, Cv: 1.0, label: "P > Cv   volume helps" },
    { key: "B", P: 1.4, Cv: 1.1, label: "thin margin" },
    { key: "C", P: 0.7, Cv: 1.1, label: "P < Cv   volume hurts" },
  ];
}

export function volumeGrid(): number[] {
  const n = 80;
  const lo = 10e6;
  const hi = 800e6;
  return Array.from({ length: n }, (_, i) => lo + ((hi - lo) * i) / (n - 1));
}

export function profitAtVolume(P: number, Cv: number, V: number, F: number) {
  return ((P - Cv) * V) / 1e6 - F;
}

export function breakEvenSeries(k: Knobs) {
  const n = 120;
  const lo = 0.3;
  const hi = 4;
  return Array.from({ length: n }, (_, i) => {
    const P = lo + ((hi - lo) * i) / (n - 1);
    const ok = P > k.cvBe + 0.02;
    const Vbe = ok ? (k.F * 1e6) / (P - k.cvBe) / 1e6 : null;
    return { P, Vbe };
  });
}

export function mixShift(k: Knobs) {
  return Array.from({ length: k.months }, (_, m) => {
    const flagship = k.p0;
    const budget = Math.max(2.0 * 0.86 ** m, 0.25);
    const share = Math.max(0.7 * 0.94 ** m, 0.12);
    const blended = share * flagship + (1 - share) * budget;
    return { m, flagship, budget, blended, share };
  });
}

export function gpuHour(k: Knobs, pathC: MonthPoint[]) {
  const cost = (k.F * 1e6) / k.gpuHours;
  return pathC.map((p) => ({
    m: p.m,
    revPerHour: (p.P * p.V) / k.gpuHours,
    cost,
  }));
}
