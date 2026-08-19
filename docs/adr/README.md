# Architecture Decision Records

An ADR records **one decision**: what was decided, the context that forced the choice, the
alternatives, and the consequences accepted. It is dated and immutable.

Katas produce skill. ADRs produce judgment. They are here because the durable half of
learning to work with agents is not "how do I write a hook" — it is "when is a hook the right
answer and what did I give up by choosing it." That knowledge only survives in the form
*"I chose X over Y because Z"*, and only if it is written down at the moment the reasoning is
still live.

## Rules

- **Immutable once committed.** To reverse a decision, write a new ADR that supersedes the old
  one and link both ways. Never edit a merged ADR except to add the superseded link. A record
  of what I used to believe is more valuable than a record that is always right.
- One decision per record. If it needs "and", it is two ADRs.
- Numbered sequentially, four digits, never reused.
- Write it when the decision is made, not when it is proven correct. Consequences get added
  as a new record, not backfilled into the old one.

## Status values

`Proposed` · `Accepted` · `Superseded by ADR-NNNN` · `Deprecated`

## Index

| # | Decision | Status |
|---|----------|--------|
| [0001](0001-record-architecture-decisions.md) | Record architecture decisions | Accepted |
| [0002](0002-repository-macro-architecture.md) | Repository macro architecture | Accepted |
| [0003](0003-public-from-day-one.md) | Public from day one | Accepted |
| [0004](0004-labs-are-plain-subdirectories.md) | Labs are plain subdirectories | Accepted |
| [0005](0005-english-is-the-committed-language.md) | English is the committed language | Accepted |

## Template

```markdown
# ADR-NNNN — <Title>

**Status:** Accepted
**Date:** YYYY-MM-DD

## Context
<The forces at play. What made a decision necessary.>

## Decision
<What was decided, in the active voice.>

## Alternatives considered
<What was rejected, and why. An ADR with no rejected alternatives is not a decision.>

## Consequences
<What this makes easy, what it makes hard, and what has to be true for it to keep holding.>
```
