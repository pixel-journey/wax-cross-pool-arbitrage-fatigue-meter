# Education — seconds left on a gap

> **Rung:** `npm test` passes. The default gap is 20 seconds. This is not an arbitrage decision and not a fatigue score.  
> **The test is the rule.** A quote that is fresh at exactly 30 seconds is a different clock: [wax-high-frequency-position-monitor](https://github.com/pixel-journey/wax-high-frequency-position-monitor).

## Predict, then run

`waitSec = max(0, lastSec + gapSec - nowSec)`. Ready means the wait is 0. The exact boundary is ready.

| Call | Locked result |
| --- | --- |
| `cooled(100, 110)` | `{ ready: false, waitSec: 10 }` |
| `cooled(100, 120)` | `{ ready: true, waitSec: 0 }` |
| `cooled(100, 90)` | throws. `nowSec` is before `lastSec`. |

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this clock.
