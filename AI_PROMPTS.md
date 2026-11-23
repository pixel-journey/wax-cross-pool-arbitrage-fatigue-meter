# AI handoff — cross-pool arbitrage fatigue meter

## Non-negotiables

1. Teaching gap is **20 seconds** between attempts.
2. Ten seconds in → ten remain. Exact boundary is **ready**.
3. **Ready does not mean a swap is sent.**
4. Not an arbitrage decision engine. Nothing is polled or broadcast.
5. Earlier README live-product claims are not what this tree ships.

## Prompt seeds

- "Ten seconds after last attempt — remaining wait?"
- "Ready flag true — may we broadcast a swap?"
- "Refuse treating this as a live cross-pool arb bot."

## Do not

- Auto-swap when ready.
- Fetch pool prices from this pure lab.
- Claim an arbitrage profit was computed.
