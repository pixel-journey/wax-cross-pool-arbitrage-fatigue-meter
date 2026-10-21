/**
 * Seconds left before another attempt. Not an arbitrage decision.
 */

export function cooled(lastSec: number, nowSec: number, gapSec = 20): { ready: boolean; waitSec: number } {
  if (!Number.isInteger(lastSec) || lastSec < 0) throw new Error("lastSec must be a non-negative integer");
  if (!Number.isInteger(nowSec) || nowSec < 0) throw new Error("nowSec must be a non-negative integer");
  if (!Number.isInteger(gapSec) || gapSec < 1 || gapSec > 3600) throw new Error("gapSec must be an integer from 1 to 3600");
  if (nowSec < lastSec) throw new Error("nowSec is before lastSec");
  const waitSec = Math.max(0, lastSec + gapSec - nowSec);
  return { ready: waitSec === 0, waitSec };
}
