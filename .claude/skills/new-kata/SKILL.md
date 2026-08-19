---
name: new-kata
description: Scaffold a new kata in code/katas/ with the required structure and a pass criterion that is actually checkable. Use when starting a new exercise.
disable-model-invocation: true
---

Scaffold a new kata. The topic is: $ARGUMENTS

## Steps

1. Find the highest existing number in `code/katas/` and use the next one, zero-padded to
   three digits. Slug the topic in kebab-case: `code/katas/NNN-<slug>/`.

2. Before writing anything, settle the pass criterion. This is the part that matters and the
   part that is easy to fake. Interrogate the topic until the criterion is something a
   stranger could check without asking me:

   - Bad: "practice using subagents." Nothing to check.
   - Bad: "understand context management." Nothing to check.
   - Good: "`npm test` is green in `code/labs/broken-cart` and `plan.md` exists in the kata
     directory and every file touched in the diff appears in `plan.md`."
   - Good: "the logbook entry contains the verbatim prompt that failed and the verbatim
     prompt that worked, and they differ."

   If you cannot state a criterion in that form, the kata is not ready. Say so and ask me
   what observable outcome would prove the skill, rather than scaffolding something
   unfalsifiable.

3. Write `code/katas/NNN-<slug>/README.md` using the template below.

4. If the kata needs resistance to train against, check whether an existing lab in
   `code/labs/` fits. Only create a new lab if none does, and keep it dependency-free: Node's
   built-in test runner, no `npm install`.

5. Append a line to `code/katas/README.md` in the index table.

6. Do not solve the kata. Scaffolding it and doing it are separate sessions on purpose.

## Template

```markdown
# NNN — <Title>

**Phase:** <0–5, from docs/roadmap/claude-code.md>
**Lab:** <code/labs/... or "none">
**Time budget:** <a real number of minutes; over it, stop and log the failure>

## Why this rep

<Two or three sentences. What specific failure mode in the roadmap does this train against?
Name it. If it does not map to a real failure mode, it is busywork.>

## The constraint

<The rule that makes it training rather than just work. "Plan mode only." "One subagent,
no more." "You may not read the source before writing the plan." The constraint is what
builds the skill; without it you are just fixing a bug.>

## Pass criteria

- [ ] <checkable>
- [ ] <checkable>
- [ ] Logbook entry written, including what failed

## How to verify

<The exact commands. Someone else must be able to run these and reach the same verdict.>

## Notes for the reviewer

<Anything the kata-reviewer subagent needs in order to judge the constraint was honored.>
```
