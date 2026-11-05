const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

/**
 * In-memory fixed-window limiter. Resets on redeploy/restart and is per-instance,
 * which is fine for a low-traffic contact form; swap for a shared store (e.g. Upstash)
 * if this ever runs across multiple instances under real load.
 */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > MAX_REQUESTS;
}
