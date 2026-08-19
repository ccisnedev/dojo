# Logbook

Append-only. One file per entry, `YYYY-MM-DD-<slug>.md`.

## What goes in an entry

**What failed.** That is the whole instruction.

An entry recording what worked is self-congratulation and will be worthless in a month,
because by then it will describe something I do automatically. An entry recording *the prompt
that failed, why it failed, and the prompt that worked instead* stays useful, because the
delta between those two prompts is the transferable part.

Quote prompts verbatim. Paraphrased prompts lose the exact thing that made them fail — a
missing acceptance criterion, an implicit "obviously", a scope left open. "My prompt was too
vague" is not an entry. The prompt, in a fenced block, next to the one that worked, is.

## Rules

- **Append-only.** If an entry turns out to be wrong, write a new one that corrects it and
  link both ways. Never edit a committed entry. Being wrong on the record is the point.
- **Never invent a failure to fill the section.** If a session genuinely had no friction, say
  so — and treat it as evidence the exercise was too easy, which is itself worth recording.
- English. Public repository: no secrets, no client code, no internal information, no
  colleagues named without asking.

## Where things graduate to

Not everything belongs here permanently:

- A lesson that holds independently of the tool → promote to `docs/principles/`, link back.
- A standing position rather than an observation → write an ADR instead, link to it.
- Everything else stays an entry and that is fine. Most of it will.

## Writing one

```
/logbook <what this was about>
```

The skill will ask what went wrong before it writes anything, and will push back once if the
answer is "nothing."
