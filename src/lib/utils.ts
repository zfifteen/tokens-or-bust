import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function money(x: number): string {
  if (!Number.isFinite(x)) return "—";
  const sign = x < 0 ? "−" : "";
  const a = Math.abs(x);
  if (a >= 1000) return `${sign}$${(a / 1000).toFixed(1)}B`;
  if (a >= 1) return `${sign}$${a.toFixed(0)}M`;
  if (a === 0) return "$0";
  return `${sign}$${a.toFixed(2)}M`;
}

export function tickMoney(x: number): string {
  if (!Number.isFinite(x)) return "";
  if (x === 0) return "$0";
  const sign = x < 0 ? "−" : "";
  const a = Math.abs(x);
  if (a >= 1000) return `${sign}$${(a / 1000).toFixed(a >= 10000 ? 0 : 1)}B`;
  return `${sign}$${a.toFixed(0)}M`;
}

export function dollars(x: number, digits = 2): string {
  if (!Number.isFinite(x)) return "—";
  return `$${x.toFixed(digits)}`;
}

export function pct(x: number, digits = 1): string {
  if (!Number.isFinite(x)) return "—";
  const sign = x > 0 ? "+" : x < 0 ? "−" : "";
  return `${sign}${Math.abs(x).toFixed(digits)}%`;
}
