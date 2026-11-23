# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | Network context |
| [docs.alcor.exchange/api](https://docs.alcor.exchange/api) | Live pools are a **different** product |
| [quote age](https://github.com/pixel-journey/wax-high-frequency-position-monitor) | Age, not cooldown |
| [wharfkit/skill](https://github.com/wharfkit/skill) | SessionKit if a host later swaps |

```bash
git clone https://github.com/wharfkit/skill.git ~/.claude/skills/wharfkit
```

## Product facts locked by tests

- Teaching gap is **20 seconds** between attempts.
- Ten seconds in → ten remain. Exact boundary is **ready**.
- **Ready does not mean a swap is sent.**
- Not an arbitrage decision engine. Nothing is polled or broadcast.

## Portability

Cooldown timers port. Pool pairs and chain accounts do not.

## Suggested topics

`antelope` `education` `pixel-journey` `defi` `wax`
