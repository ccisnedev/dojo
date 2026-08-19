---
name: logbook
description: Write an append-only logbook entry in docs/logbook/, structured around what failed rather than what worked. Use after finishing a kata or after any session worth recording.
disable-model-invocation: true
---

Write a logbook entry about: $ARGUMENTS

## Rules

- Filename `docs/logbook/YYYY-MM-DD-<slug>.md`. Get today's date from `git log -1 --format=%cd`
  or the system, never guess it.
- Append-only. If an earlier entry turned out to be wrong, write a new entry that corrects it
  and link both ways. Never edit a committed entry.
- English, first person, past tense.
- The repository is public. No secrets, no client code, no internal information, no names of
  colleagues without asking.

## The one thing that makes an entry worth writing

An entry that records what worked is self-congratulation and will be worthless in a month.
An entry that records **the prompt that failed, why it failed, and the prompt that worked
instead** is a manual.

So: before writing, ask me what went wrong. If I say nothing went wrong, push back once —
either the task was too easy to be training, or I have already forgotten the friction. Ask
what I had to say twice, where I intervened, what I expected that did not happen. If the
answer is genuinely "nothing," record that, and record that the kata was too easy.

Never invent a failure to fill the section.

## Template

```markdown
# YYYY-MM-DD — <what this was>

**Kata:** <code/katas/... or "none — free session">
**Verdict:** <pass | fail | abandoned>
**Elapsed:** <real minutes>

## What I set out to do

<One paragraph.>

## What failed

<The core of the entry. Quote prompts verbatim in fenced blocks. Name the failure mode from
docs/roadmap if it maps to one: kitchen-sink session, repeated correction, bloated CLAUDE.md,
trust-then-verify gap, infinite exploration.>

## What worked instead

<The prompt, setting, or structure that resolved it. Verbatim again.>

## What I would tell someone else

<One or two sentences. If this hardens into something tool-agnostic, promote it to
docs/principles/ and link it here. If it is a decision rather than a lesson, write an ADR
instead and link that.>
```

## After writing

Say plainly whether anything in the entry is worth promoting to `docs/principles/` or
`docs/adr/`, and why. Do not promote it yourself — that is my call.
