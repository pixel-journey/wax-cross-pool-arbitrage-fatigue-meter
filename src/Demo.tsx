"use client";

import { cooled } from "./cool";

export function Demo() {
  const early = cooled(100, 110);
  const later = cooled(100, 120);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Twenty seconds between attempts</h1>
      <p className="lede">Ten seconds after the last attempt, 10 remain. At 20 seconds it is ready. Ready does not mean a swap should be sent.</p>
      <p>
        At +10s, wait {early.waitSec}. At +20s, ready {String(later.ready)}.
      </p>
    </main>
  );
}
