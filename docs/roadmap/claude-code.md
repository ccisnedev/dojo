# Roadmap — Claude Code

Six phases, from empirical use to expert. Current as of August 2026. Each phase builds on the
one before it; the signal at the end of each is the gate, not the reading.

Phases 4 and 5 amplify habits, good or bad. Automating a workflow I do not yet control by hand
only multiplies the error, which is why the order is not negotiable.

An interactive version of this roadmap:
<https://claude.ai/code/artifact/cf33bad7-b18c-44ba-877f-58e3d97765a4>

---

## The two ideas everything else derives from

**Context is the scarce resource.** See
[principles/context-is-the-scarce-resource](../principles/context-is-the-scarce-resource.md).

**Give the agent a way to verify.** See
[principles/give-the-agent-a-way-to-verify](../principles/give-the-agent-a-way-to-verify.md).

---

## Phase 0 — Start in the right place

Trivial-sounding and the number one cause of frustrating sessions. Claude Code operates on a
project directory; launched outside a repository it loses checkpoints, git, and the context of
the code.

- Launch from a project root. `/cd` moves a running session without rebuilding the prompt cache.
- `/doctor` is a full setup checkup and can fix what it finds.
- Terminal, VS Code, JetBrains, Desktop and web share one engine, one `CLAUDE.md`, one set of
  settings.
- `/config key=value` changes any setting in place. `--safe-mode` starts with all
  customizations disabled, for troubleshooting.

**Signal:** I know which directory I am working in and why, and `/doctor` comes back clean.

---

## Phase 1 — The loop: explore, plan, implement, verify

Where most of the performance is won. Pure session handling — nothing to configure, everything
to practice.

- **Plan mode.** `Shift+Tab` until the status bar says so. `Ctrl+G` opens the plan in an editor
  to correct before approving. Skip it when the change fits in one sentence.
- **Specific prompts.** Name the file, the scenario, and what "fixed" means. Point at an
  existing pattern in the repo instead of describing one.
- **Rich input.** `@file` to reference, paste images, pass URLs, pipe with `cat error.log | claude`.
- **Correct early.** `Esc` interrupts and keeps context; `Esc Esc` or `/rewind` restores
  conversation, code, or both.
- **The two-correction rule.** After correcting the same thing twice, the context is polluted
  with failed approaches. `/clear` and rewrite the prompt with what was learned.
- **Be interviewed.** For a large feature, ask to be interviewed via `AskUserQuestion` and have
  a `SPEC.md` written. Execute it in a fresh session.

**Katas:** [001](../../code/katas/001-plan-before-code/) ·
[002](../../code/katas/002-verification-in-one-prompt/) ·
[003](../../code/katas/003-the-two-correction-rule/)

**Signal:** I tell without thinking whether a task deserves a plan, and `/clear` between
unrelated tasks is reflex.

---

## Phase 2 — Memory, permissions and tools

Configured once per project, paid back every session after.

- **`CLAUDE.md`.** `/init` generates a starting point. Loaded every session, so only what always
  applies belongs in it. The test for each line: *if I remove this, does it make a mistake?* If
  not, delete it.
- **What does not belong:** anything derivable by reading the code, standard language
  conventions, API documentation (link it), file-by-file descriptions. A bloated file causes the
  rules that matter to be ignored.
- **Auto memory.** Learnings persist across sessions — build commands, debugging findings —
  without writing anything.
- **Permissions.** Auto mode became the default on Pro, Max and Team on 14 August 2026: a
  classifier reviews actions in the background and blocks only what looks risky. Complement with
  allowlists via `/permissions` and OS-level isolation via `/sandbox`.
- **CLI tools before MCP.** `gh`, `aws`, `gcloud` are the most context-efficient way to reach
  external services. *"Use `foo --help` to learn the tool, then solve X."*

**Signal:** I have pruned my `CLAUDE.md` at least once, because I noticed a rule being ignored.

---

## Phase 3 — Skills, subagents, hooks, MCP, plugins

Where most people get lost, because the five primitives look interchangeable and are not. Each
changes something different: what the agent *knows*, *where* it thinks, or what it *can do*.

| Primitive | What it changes | Use it when |
|-----------|-----------------|-------------|
| `CLAUDE.md` | Context loaded always | The rule applies to every session in the project |
| Skill | Knowledge and workflows on demand | Domain logic or repeatable steps that apply only sometimes |
| Subagent | A separate context window | The task reads many files, or needs an independent opinion |
| Hook | Deterministic execution | Something must happen *always*. `CLAUDE.md` is advice; a hook is a guarantee |
| MCP | External tools and data | Jira, Figma, Notion, a database. Prefer a CLI where one exists |
| Plugin | Packaging and distribution | Sharing all of the above with a team as one installable unit |

- A skill is a directory in `.claude/skills/` with a `SKILL.md`: frontmatter with `name` and
  `description`, instructions below. `disable-model-invocation: true` for anything with side
  effects that should be triggered manually.
- A subagent is a `.md` in `.claude/agents/` with `name`, `description`, `tools`, `model`. They
  run in the background by default and can nest their own.
- Have hooks written for you: *"write a hook that runs eslint after every edit."* Browse with
  `/hooks`.
- `/plugin` opens the marketplace. For a typed language, a code-intelligence plugin gives
  precise symbol navigation.

**This repository's own examples:** [`.claude/skills/new-kata`](../../.claude/skills/new-kata/SKILL.md) ·
[`.claude/agents/kata-reviewer.md`](../../.claude/agents/kata-reviewer.md) ·
[`.claude/hooks/block-secrets.mjs`](../../.claude/hooks/block-secrets.mjs)

**Signal:** faced with a new need, I say without hesitating whether it is a skill, a hook, or a
subagent.

---

## Phase 4 — Parallelism and unattended work

Once one session pays off, the next lever is running several and letting them work without me.
The precondition for letting go is automatic verification.

- **Git worktrees.** Each session in its own isolated checkout so two agents do not collide.
- **Writer / reviewer.** One session implements, another reviews with fresh context, unbiased
  toward the code it just wrote.
- **Adversarial review.** A subagent reviews the diff against the plan before anything counts as
  done. Scope it to correctness and stated requirements, or it will find gaps that do not matter.
- **`/goal`.** A completion condition, re-checked by a separate evaluator after every turn.
- **`Stop` hook.** The deterministic version: the turn cannot end until the script passes.
- **Agent view and teams.** `claude agents` shows what is running, what is blocked on me, what
  is done. Agent teams coordinate several sessions with shared tasks and a lead.
- **Cross-session messaging.** Since August 2026, sessions pass findings to each other.

This is also where containers earn their place — an isolated blast radius is what makes
unattended runs sensible. Not before.

**Signal:** I walk away from a running session and trust the result, because a check closes the
loop without me.

---

## Phase 5 — Automation, CI and orchestration

Claude Code stops being a tool I open and becomes a piece of infrastructure.

- **Non-interactive.** `claude -p "prompt"` with `--output-format json` or `stream-json`.
  `--allowedTools` scopes what it may do unsupervised.
- **Fan out across files.** Generate the file list, loop `claude -p` over it. Test on two or
  three, refine the prompt, then run it across two thousand.
- **CI.** GitHub Actions, GitLab CI/CD, automated PR review, issue triage.
- **Routines.** Cloud agents on a schedule that keep running with my machine off, also triggered
  by GitHub events or API calls. Created with `/schedule`.
- **Dynamic workflows.** Scripts orchestrating dozens to hundreds of subagents deterministically:
  parallelization, staged pipelines, judge-panel verification.
- **Agent SDK.** Building custom agents on Claude Code's tools, with full control of
  orchestration, permissions, and custom tools. TypeScript and Python.

**Signal:** at least one task runs on its own, on a schedule or an event, and I only review the
result.

---

## The five failure patterns

Documented officially because they are universal.

| Pattern | Fix |
|---------|-----|
| The kitchen-sink session | `/clear` between unrelated tasks |
| Correcting over and over | After two failed corrections, `/clear` and a better opening prompt |
| The over-specified `CLAUDE.md` | Prune ruthlessly, or convert the rule to a hook |
| The trust-then-verify gap | Always provide verification. If it cannot be verified, do not ship it |
| The infinite exploration | Scope investigations, or delegate them to subagents |

---

## References

- [Best practices](https://code.claude.com/docs/en/best-practices)
- [What's new — weekly digest](https://code.claude.com/docs/en/whats-new)
- [Extend Claude Code](https://code.claude.com/docs/en/features-overview)
- [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works)
- [Dynamic workflows](https://code.claude.com/docs/en/workflows)
- [Full documentation index](https://code.claude.com/docs/llms.txt)

Inside the CLI: `/powerup` opens interactive lessons, `/team-onboarding` packages a setup as a
replayable guide.
