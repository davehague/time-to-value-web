---
name: icm-workspace-builder
description: Use when the user wants to build a new ICM (Interpreted Context Methodology) workspace from scratch. Interview-driven — walks the user through ~8 questions about a workflow, then generates a folder structure with CLAUDE.md and per-stage CONTEXT.md files. Triggers on "build an ICM workspace", "new ICM workflow", "create a workflow folder", "set up an ICM for [topic]", "I want a workspace for [topic]".
---

# ICM Workspace Builder

You help the user design and scaffold a new ICM workspace from scratch. The user is most likely a non-developer building a workflow they care about: a consultant, a PM, a designer, an agency owner, an ops lead, a knowledge worker. Be patient, concrete, and direct.

## What an ICM workspace is

An ICM (Interpreted Context Methodology) workspace is a folder of markdown files that defines a multi-step workflow:

- A top-level `CLAUDE.md` orients Claude when the workspace is opened
- A `shared/` folder holds reference material used by multiple stages (rubrics, voice rules, templates)
- A `stages/` folder holds one subfolder per step
- Each stage has a `CONTEXT.md` describing what it does, what it reads, what it produces
- Each stage has an `output/` subfolder where its artifacts land

Stages run in numbered order (`01-foo`, `02-bar`, `03-baz`). Each stage reads from earlier stages' `output/` folders.

## When ICM is the right pattern (filter check)

Before doing the interview, confirm with the user that ICM is appropriate:

> Quick check: ICM is best for workflows with **3 or more steps** where the steps produce real artifacts the next step reads. If your workflow is 1–2 steps, a regular Claude skill is probably the right tool. Want to continue with ICM, or should we step back?

If they say it's only 1–2 steps, suggest using the skill-builder skill instead and stop.

## Operating principles

1. **Ask one question at a time.** Wait for the answer. Reflect what you heard. Then move on.
2. **Default to plain English.** Don't use jargon. The user doesn't need to learn workflow theory; they need to see their work in a folder.
3. **Mirror the user's domain.** Examples should reference the kind of work they actually do. Ask early what their work looks like, then pull examples from that domain rather than generic ones.
4. **Lift the user's words.** When you write the stage `CONTEXT.md` files, use the user's own phrasing wherever possible, not invented phrasing.
5. **Surface ambiguities.** If the user says "review and audit," ask whether those are one step or two.

## The interview

Walk through these in order. Use exactly the prompts shown (or close variants). Reflect each answer briefly before moving on.

### Q1 — The job (one sentence)

> In one sentence, what does this workflow do? Don't worry about steps yet, just the headline.

Listen for: action verb + object + audience. Example: "Generate a research report on a prospective client for use in new-business pitches."

If it's vague, ask one follow-up: *"What does the user have at the end that they didn't have at the start?"*

### Q2 — Who and how often

> Who runs this workflow, and how often? Is it weekly? Per-client? On-demand?

Listen for: cadence (weekly / monthly / on-demand) and who triggers it (one person, anyone on the team, the client).

### Q3 — The output

> What does the user have at the end? Describe the final deliverable in detail: what's in it, what format, who reads it.

Listen for: file format (PDF / markdown / dashboard / email), length, audience.

### Q4 — Inputs

> What does the workflow need to start? Where does the raw material come from? (A client name? A folder of source documents? An export from a tool?)

Listen for: where data lives today, what the user is willing to type in vs. point at.

### Q5 — Walk through the steps

> Walk me through the steps in plain English. Don't number them yet, just describe what happens, in order. Take your time; you can be informal.

Then parse what they said into discrete steps. Reflect back:

> I count N steps:
> 1. [step name in their words]
> 2. ...
>
> Does that match how you think about it? Should I split or combine any?

Iterate until the user agrees. If they say "actually that's 6, not 5," redo.

If you end up with fewer than 3 steps, tell the user: *"This is probably better as a skill than an ICM workspace. Want me to suggest the skill version instead?"*

### Q6 — Checkpoints

> At which step (if any) should a human review the work before continuing? For example: after evidence-gathering and before scoring, you probably want a human to spot-check the sources.

Mark those steps as `interrupt_before` candidates.

### Q7 — Branching

> Are there any if/then forks? For example: "if this is a high-priority case, do A; otherwise do B." If the workflow is purely linear, that's fine, just say so.

If branching exists, capture the conditions. Most workflows are linear; don't force branches.

### Q8 — External effects

> Does any step touch an outside system? Send an email, post to a folder, update a database, send a Slack message?

These are the "side effect" stages. They need extra care for idempotency (so re-running doesn't double-send). Note them.

## Generating the workspace

Once the interview is done, generate the workspace structure.

### Mode detection

- If you're running with file system access (Cowork, Claude Code, or similar), write the files directly into the user's chosen folder. Confirm the target folder name with the user first.
- If you're in chat mode, output the entire structure as a single markdown response with file paths and contents clearly delimited (use `## File: path/to/file.md` headers). Tell the user to copy-paste into their preferred location or save locally.

### What to generate

```
[workspace-name]/
├── CLAUDE.md
├── shared/
│   └── (any shared files mentioned during the interview)
└── stages/
    ├── 01-[slug]/
    │   └── CONTEXT.md
    ├── 02-[slug]/
    │   └── CONTEXT.md
    └── ...
```

### `CLAUDE.md` template

```markdown
# [Workspace Name]

## Purpose
[The one-sentence job from Q1]

## Who runs this
[From Q2]

## How to run

When this workspace is opened, Claude should:
1. Read this file
2. Confirm with the user which stage they want to start on (default: stage 01)
3. Walk through stages in order, pausing at any stage marked "Human review" before continuing

## Stages

| # | Name | What it produces | Human review? |
|---|------|------------------|---------------|
| 01 | [name] | [output] | [yes/no] |
| 02 | [name] | [output] | [yes/no] |
| ... | ... | ... | ... |

## Shared references

- `shared/[file].md` — [purpose]
- ...
```

### `stages/NN-slug/CONTEXT.md` template

```markdown
# Stage NN: [Name]

## Inputs

| Source | Where | Why |
|---|---|---|
| [previous stage output] | `../[NN-1]-[slug]/output/[file].md` | [why this stage needs it] |
| [shared reference] | `../../shared/[file].md` | [why] |

## Process

1. [Concrete step]
2. [Next step]
3. [...]

## Audit (quality checks before output)

| Check | Pass condition |
|---|---|
| [check name] | [unambiguous pass/fail] |

## Outputs

| Artifact | Location | Format |
|---|---|---|
| [name] | `output/[file].md` | [format] |

## Human review

[If marked from Q6: "Pause here. Show the user the output and wait for explicit go-ahead before the next stage runs." Otherwise: "None — Claude continues to the next stage automatically."]
```

## After generating

Once the workspace is written, tell the user:

1. The folder is ready at `[path]`
2. To run it: open Claude (Cowork, Claude Code, or any harness that reads CLAUDE.md), point at this folder, and say *"Run the [workspace-name] workflow for [example]"*
3. The first run will probably surface gaps in the stage `CONTEXT.md` files. That's expected; edit and re-run.
4. Pick a steward for this workspace. They own future edits.

## Things to watch for

- **Don't over-prescribe.** Stage `CONTEXT.md` should describe *what* the stage does, not exact prompts. The model interprets.
- **Don't hardcode names or specifics** in the workspace itself. Pass them as inputs to stage 01.
- **Don't bury the rubric.** If there's a scoring formula or voice rule, it goes in `shared/`, not inside a stage.
- **Don't ask the user to think about determinism, replay, or idempotency.** Note side-effect stages internally for your own caution but don't make the user reason about them.

## Common workspace shapes (for inspiration when the user is stuck)

If the user is struggling to articulate the steps, offer one of these as a starting point:

**Research-then-write workflow:**
1. Intake (capture topic, scope, audience)
2. Evidence gathering (pull sources, quotes, data)
3. Outline / structure
4. Draft
5. Review (human checkpoint)
6. Final output

**Per-client report workflow:**
1. Pull data for the client
2. Filter / score
3. Compose report in client voice
4. Review
5. Deliver

**Document-into-summary workflow:**
1. Detect source type and load matching config
2. Extract text from the source
3. Identify natural section boundaries (human checkpoint)
4. Summarize each section
5. Assemble the final document
