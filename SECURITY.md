# Security — cooldown only

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Teaching gap | **20** seconds between attempts |
| Exact boundary | remaining 0 → **ready** |
| Mid-window | remaining time floors toward 0 |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Live pool prices | Not read |
| Auto-swap when ready | Forbidden |
| Arbitrage profit | Not computed |

## Attack angles

1. Broadcasting a swap because ready is true.  
2. Claiming cross-pool arb was scanned.  
3. Treating the cooldown as a risk model.  
4. Mixing with quote-age (different product).

## Honesty limits

Timer arithmetic only. Prefer WharfKit SessionKit and explicit confirm if a host later swaps. Prefer Alcor **v3** for any live market data outside this package.

| Sibling | Distinction |
| --- | --- |
| [quote age](https://github.com/pixel-journey/wax-high-frequency-position-monitor) | Fresh @30 / stale @31 |
| [slippage fixture](https://github.com/pixel-journey/wax-automated-slippage-tolerance-optimizer) | Book walk |

[docs.wax.io](https://docs.wax.io/) · [docs.alcor.exchange/api](https://docs.alcor.exchange/api)
