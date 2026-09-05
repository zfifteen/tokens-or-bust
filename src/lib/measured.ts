export type Tier = "flagship" | "mid" | "cheap";

export const tokenCards: {
  name: string;
  short: string;
  inp: number;
  out: number;
  tier: Tier;
  note?: string;
}[] = [
  { name: "GPT-6 Astra", short: "Astra", inp: 10, out: 50, tier: "flagship" },
  { name: "Claude Fable 5.1", short: "Fable 5.1", inp: 10, out: 50, tier: "flagship" },
  { name: "Claude Opus 5", short: "Opus 5", inp: 5, out: 25, tier: "flagship" },
  {
    name: "GPT-5.6 Sol promo",
    short: "Sol promo",
    inp: 4,
    out: 20,
    tier: "mid",
    note: "Promotional through at least 21 November 2026",
  },
  { name: "GPT-5.6 Terra", short: "Terra", inp: 2, out: 12, tier: "mid" },
  { name: "Gemini 3.1 Pro ≤200k", short: "Gemini Pro", inp: 2, out: 12, tier: "mid" },
  { name: "Claude Sonnet 5", short: "Sonnet 5", inp: 2, out: 10, tier: "mid" },
  { name: "Grok 4.6 <200k", short: "Grok 4.6", inp: 2, out: 6, tier: "mid" },
  { name: "Claude Haiku 4.5", short: "Haiku 4.5", inp: 1, out: 5, tier: "cheap" },
  {
    name: "Gemini 3.8 Flash intro",
    short: "Flash intro",
    inp: 0.75,
    out: 3.75,
    tier: "cheap",
    note: "Introductory through 31 December 2026",
  },
  { name: "GPT-5.6 Luna", short: "Luna", inp: 0.2, out: 1.2, tier: "cheap" },
];

export function blended(inp: number, out: number, wIn = 3, wOut = 1) {
  return (wIn * inp + wOut * out) / (wIn + wOut);
}

export const julyCuts = [
  { label: "Luna input", before: 1.0, after: 0.2 },
  { label: "Luna output", before: 6.0, after: 1.2 },
  { label: "Terra input", before: 2.5, after: 2.0 },
  { label: "Terra output", before: 15.0, after: 12.0 },
];

export const gpuRental = [
  { sil: "B300", hs: null as number | null, neo: 7.67, mkt: 7.42 },
  { sil: "B200", hs: 14.24, neo: 6.69, mkt: 5.99 },
  { sil: "H200", hs: 10.3, neo: 4.4, mkt: 4.0 },
  { sil: "H100", hs: 10.53, neo: 3.71, mkt: 3.03 },
  { sil: "A100", hs: 4.45, neo: 2.04, mkt: 1.43 },
];

export const nvdaGuarantees = [
  { name: "AI-cloud land / power / shell", short: "Land / power / shell", value: 3.5 },
  { name: "SB Energy residual-value cap", short: "Residual-value cap", value: 105 },
];

export const h100Rental = [
  { name: "H100 marketplace", short: "Marketplace", value: 3.03 },
  { name: "H100 neocloud", short: "Neocloud", value: 3.71 },
  { name: "H100 hyperscaler", short: "Hyperscaler", value: 10.53 },
];

export const circularBook = [
  { name: "Oracle remaining performance obligations", short: "Oracle RPO", value: 638 },
  { name: "AWS performance obligations not yet recognized", short: "AWS unearned", value: 496 },
  { name: "Microsoft uncommenced datacenter leases", short: "MSFT leases", value: 329 },
  { name: "Microsoft contracted incremental Azure (OpenAI)", short: "MSFT–OpenAI Azure", value: 250 },
  { name: "AWS–OpenAI commercial (38 + 100)", short: "AWS–OpenAI", value: 138 },
  { name: "NVIDIA residual-value cap", short: "NVDA residual cap", value: 105 },
  { name: "AWS–Anthropic expansion (more than)", short: "AWS–Anthropic", value: 100 },
  { name: "Amazon OpenAI equity closed", short: "AMZN OpenAI equity", value: 50 },
  { name: "NVIDIA funded OpenAI equity", short: "NVDA OpenAI equity", value: 30 },
];

export const cashRows = [
  { name: "AMZN", period: "Q2", capex: 53.1, ocf: 45.4, fcf: -7.6, note: "FCF is TTM" },
  { name: "GOOGL", period: "Q2", capex: 44.9, ocf: 39.1, fcf: -5.9, note: "Quarter" },
  { name: "META", period: "Q2", capex: 30.1, ocf: 31.9, fcf: 0.78, note: "Quarter" },
  { name: "MSFT", period: "FY Q4", capex: 35.8, ocf: 55.4, fcf: 19.6, note: "Quarter" },
  { name: "ORCL", period: "FY26", capex: 55.7, ocf: 32.0, fcf: -23.7, note: "Full year" },
];

export const guideRevisions = [
  { name: "AMZN", before: 200, after: 220 },
  { name: "GOOGL mid", before: 185, after: 200 },
  { name: "META floor", before: 125, after: 130 },
];

export const mag7 = [
  { name: "NVDA", weight: 8.01 },
  { name: "AAPL", weight: 7.26 },
  { name: "MSFT", weight: 5.66 },
  { name: "AMZN", weight: 3.8 },
  { name: "GOOGL", weight: 2.99 },
  { name: "GOOG", weight: 2.39 },
  { name: "META", weight: 1.93 },
  { name: "TSLA", weight: 1.53 },
];

export const equalWeight = [
  { label: "3-month", rsp: 4.48, spy: 0.99 },
  { label: "Year to date", rsp: 15.04, spy: 12.8 },
];

export const rimCredit = {
  equityHigh: 153.2,
  equityClose: 89.36,
  cds: [
    { label: "Dec 2025", bp: 881 },
    { label: "Early Jun", bp: 452 },
    { label: "Late Jul", bp: 855 },
  ],
  debt: [
    { label: "YE 2025", bn: 21 },
    { label: "2026-06-30", bn: 35 },
  ],
};

export const nvdaHub = {
  total: 96.221,
  dataCenter: 89.023,
  customers: [
    { name: "Customer A", pct: 16 },
    { name: "Customer B", pct: 15 },
    { name: "Customer C", pct: 13 },
  ],
  gm: 75.0,
  yoy: 117,
  qoq: 18,
  close: 230.36,
  ath: 236.54,
};

export const asOf = "2026-09-05";
export const tapeClose = "2026-09-04";
