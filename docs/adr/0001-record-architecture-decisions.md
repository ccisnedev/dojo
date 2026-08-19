# ADR-0001 — Record architecture decisions

**Status:** Accepted
**Date:** 2026-08-19

## Context

This repository exists to make skill in working with AI agents durable and provable rather
than remembered. Skill has two halves. The first is capability — can I actually make the tool
do the thing — and katas train that. The second is judgment — should I have made the tool do
that thing, and what did I trade away. Judgment does not show up in a diff.

Left unrecorded, judgment decays into "this is how I do it," which is unteachable and
unfalsifiable. The specific risk in this domain is worse than usual: the tooling moves weekly,
so a choice that was correct in August will look arbitrary in December unless the constraints
that produced it are on the record.

## Decision

Every non-obvious decision about this repository, its tooling, or its practice gets an ADR in
`docs/adr/`, in the format described by Michael Nygard. Records are immutable once committed;
reversals are new records that supersede the old, with links in both directions.

## Alternatives considered

**A running notes file.** Cheap to write, unusable to read. Decisions get buried in
chronology and there is no way to answer "what is the current position on X" without reading
everything.

**Only the logbook.** The logbook is append-only and organized by time, which suits
*what happened*. A decision is not an event; it is a standing position that needs a stable
address so other documents can link to it and so a reversal has something to supersede.

**Nothing — rely on git history.** Commit messages record what changed, almost never why the
alternative was rejected. And the alternatives are the valuable part.

## Consequences

Slower. Writing an ADR costs real minutes, and a portion of them will turn out to have been
spent on decisions nobody revisits.

The compensation is that being wrong becomes legible. A superseded ADR next to its
replacement shows exactly what I believed, what changed, and what evidence moved me — which
is the closest thing to a measurable record of learning this repository can produce.

The failure mode to watch for is ceremony: writing ADRs for decisions that have no rejected
alternative. If the "Alternatives considered" section is hard to fill, there was no decision,
and the record should not exist.
