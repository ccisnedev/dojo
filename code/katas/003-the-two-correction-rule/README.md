# 003 — The two-correction rule

**Phase:** 1 — the loop
**Lab:** `code/labs/broken-cart`
**Time budget:** 25 minutes.

## Why this rep

Every failed attempt stays in the context window. After the second correction on the same
point, the conversation holds more wrong approaches than right ones, and the agent is now
reasoning from a transcript of its own mistakes. The instinct is to keep correcting, because
each correction feels closer than starting over. It is not.

Knowing this is easy. Doing it is not, because `/clear` feels like throwing away work. This
kata makes you feel the cost of not clearing, once, on purpose — so that later the reflex
comes from experience rather than from having read it.

## The constraint

**Start badly, on purpose. Then count.**

1. Reset the lab: `git checkout -- code/labs/broken-cart/src/cart.js`
2. Open with a deliberately vague prompt. Something like `fix the cart`. Nothing more.
3. Correct it when it goes wrong. Correct it a second time.
4. **On the second failed correction, stop.** Do not correct a third time. Run `/clear`.
5. Write one new prompt that carries everything you learned from the failed run.
6. Finish the kata with that prompt.

The temptation at step 4 is real and it is the whole point. If you never reach two failed
corrections because the vague prompt happened to work, the kata is void — reset and start
with something vaguer.

## Pass criteria

- [ ] `npm test` is green — 5 passing, 0 failing
- [ ] `test/cart.test.js` is unmodified
- [ ] `/clear` was run before the final prompt
- [ ] The logbook entry contains, verbatim: the vague prompt, both corrections, and the
      rewritten prompt
- [ ] The logbook entry states **what the rewrite carried that the original did not** — named
      specifically, not as "it was more detailed"

That final criterion is the entire deliverable. The green test suite is incidental; the
transferable artifact is the diff between the prompt that failed and the prompt that worked,
and the ability to say in one sentence what the difference was.

## How to verify

```bash
cd code/labs/broken-cart && npm test
git diff --stat -- test/cart.test.js       # must be empty
```

The rest is verified from the logbook entry, which is why the entry is not optional here.

## Notes for the reviewer

Judge the logbook entry hard on the last criterion. "The second prompt was more specific" is
a fail — it describes the shape of the fix without naming its content. "The second prompt
named the four root causes, pointed at `test/cart.test.js` as the specification, and said not
to modify it" is a pass, because a stranger could apply that.

The green suite is not evidence of anything here. Do not weight it.
