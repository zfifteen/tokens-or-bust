export async function sharePayload(title: string, text: string, url?: string) {
  const href = url ?? (typeof window !== "undefined" ? window.location.href : "");
  try {
    if (typeof navigator !== "undefined" && navigator.share) {
      await navigator.share({ title, text, url: href });
      return "shared";
    }
  } catch (err) {
    if ((err as { name?: string }).name === "AbortError") return "aborted";
  }
  try {
    await navigator.clipboard.writeText(href);
    return "copied";
  } catch {
    return "failed";
  }
}
