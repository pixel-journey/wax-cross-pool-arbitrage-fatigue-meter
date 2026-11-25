# Education — seconds left on a gap

> **Rung:** `npm test` passes. The default gap is 20 seconds. This is not an arbitrage decision and not a fatigue score.  
> **The test is the rule.** A quote that is fresh at exactly 30 seconds is a different clock: [wax-high-frequency-position-monitor](https://github.com/pixel-journey/wax-high-frequency-position-monitor).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Compute waitSec and ready at the boundary |
| Intermediate | Inclusive ready at last+gap; refuse clock skew |
| Masterclass | Separate the gap from a cross-pool arb strategy |

---

## Beginner — one scene

`waitSec = max(0, lastSec + gapSec - nowSec)`. Ready means wait is 0. The **exact boundary is ready**.

| Call | Locked result |
| --- | --- |
| `cooled(100, 110)` | `{ ready: false, waitSec: 10 }` |
| `cooled(100, 120)` | `{ ready: true, waitSec: 0 }` |
| `cooled(100, 90)` | throws — `nowSec` before `lastSec` |

```bash
npm test
```

---

## Intermediate

| Rule | Detail |
| --- | --- |
| Default gap | 20 seconds |
| Boundary | `nowSec === lastSec + gapSec` → ready |
| Clock skew | now before last is refused |

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Exclusive boundary | not this lab |
| Treat ready as “trade now” | clock only |
| Arb decision from waitSec | forbidden |

### Exercises

1. last 100, now 120, gap 20 — ready? (**Yes**.)  
2. last 100, now 110 — waitSec? (**10**.)  
3. Is this an arb bot? (**No**.)

---

## Masterclass

Fatigue / rate limits in real bots need more than a pure gap (inventory, gas, pool impact). This file only answers whether enough seconds have elapsed since a timestamp you supplied.

---

## What this course will not teach

- Cross-pool routing
- Profit calculation
- That “ready” is a financial recommendation
