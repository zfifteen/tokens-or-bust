import { useEffect, useState, type ReactNode } from "react";

export function ClientOnly({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      fallback ?? (
        <div className="h-52 animate-pulse rounded-lg bg-panel" aria-hidden />
      )
    );
  }
  return children;
}
