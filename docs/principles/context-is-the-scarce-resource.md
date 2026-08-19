# Context is the scarce resource

> **Status: seeded, not earned.** Taken from the official documentation on day one, before any
> repetitions. It is written here to be tested against practice and rewritten in my own terms —
> or deleted if practice does not support it.

## The principle

Everything the agent has is in one window: the conversation, every file it read, every command
it ran and everything that command printed. Capability degrades as that window fills — earlier
instructions get lost, mistakes increase — and it fills faster than intuition suggests. A
single exploration of an unfamiliar module can cost tens of thousands of tokens.

So the scarce resource is not the agent's ability. It is the space I let it think in. Almost
every practice worth having is a way of spending that space deliberately:

- **Clear between unrelated tasks.** Two tasks sharing a window means each pays for the other's
  noise.
- **Delegate reading.** Work whose output is far smaller than its input — searching, surveying,
  auditing — belongs in a separate window that returns only the conclusion.
- **Scope investigations.** "Look into X" with no boundary is an instruction to read until
  something interesting appears, and it will consume the window before it does.
- **Prune standing instructions.** Anything loaded into every session competes with the
  session's actual work. A rule that is always present and usually irrelevant costs more than
  it returns.

## Why it survives a change of tool

Nothing above depends on a feature name. It depends on the fact that transformer attention
operates over a bounded window and that relevance density inside that window determines output
quality. Any agent built on the same substrate inherits the constraint; only the commands for
managing it change.

## The tell

I am violating this whenever I am reluctant to clear the session because it feels like
throwing away work. The reluctance is real and it is a bad signal — by the time it appears,
the window is usually already carrying more failed approaches than useful state.

## Where this came from

Seeded from [Claude Code best practices](https://code.claude.com/docs/en/best-practices),
2026-08-18. No logbook provenance yet.
