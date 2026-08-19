# Katas

A kata is one repetition against resistance. It is not "build something useful" — it is
"perform this movement under this constraint until the constraint stops feeling like one."

Three things make a directory here a kata rather than a task:

1. **A constraint.** The rule that makes it training. Without it you are just fixing a bug.
2. **A pass criterion someone else could check** without asking me. If I am the only one who
   can say whether it passed, it did not.
3. **A logbook entry**, written afterwards, that records what failed.

## Doing one

```bash
# 1. Reset the lab to broken
git checkout -- code/labs/broken-cart/src/cart.js

# 2. Read the kata README. Do it under the constraint.

# 3. Have the examiner judge it — not yourself
#    "Use the kata-reviewer subagent to judge code/katas/001-plan-before-code"

# 4. Write the entry
#    /logbook 001 plan before code
```

Step 3 is not optional and not ceremony. The agent that did the work is the worst possible
judge of whether the work is done, and so is the person who was watching it.

## Index

| # | Kata | Phase | Trains against |
|---|------|-------|----------------|
| [001](001-plan-before-code/) | Plan before code | 1 | Solving the wrong problem |
| [002](002-verification-in-one-prompt/) | Verification in one prompt | 1 | Being the verification loop yourself |
| [003](003-the-two-correction-rule/) | The two-correction rule | 1 | Context poisoned by failed attempts |

Phases refer to [`docs/roadmap/claude-code.md`](../../docs/roadmap/claude-code.md).

## Adding one

Use the `new-kata` skill: `/new-kata <topic>`. It will refuse to scaffold anything whose pass
criterion is not checkable, which is the point.
