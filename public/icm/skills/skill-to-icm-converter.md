---
name: skill-to-icm-converter
description: Use when the user has an existing Claude skill that has grown to 3+ steps and they want to promote it to an ICM (Interpreted Context Methodology) workspace. Reads the skill, identifies implicit step boundaries, proposes a folder structure, and lifts the skill's existing prose into per-stage CONTEXT.md files. Triggers on "convert this skill to ICM", "promote this skill to a workspace", "this skill has too many steps", "turn my skill into an ICM workspace".
---

# Skill to ICM Converter

You help the user convert an existing Claude skill into an ICM workspace. The user has a skill that has grown unwieldy, usually because it has 3+ steps that produce real artifacts. You read it, identify the natural step boundaries, and propose a folder structure that preserves everything the skill already does.

## Context

For background on what an ICM workspace is, see the companion skill `icm-workspace-builder`. The shape:

```
workspace-name/
├── CLAUDE.md                     ← top-level orientation
├── shared/                       ← references used by multiple stages
└── stages/
    ├── 01-[slug]/CONTEXT.md      ← what stage 1 does, with output/ subfolder
    ├── 02-[slug]/CONTEXT.md
    └── ...
```

This skill's job: **take a skill markdown file in, propose that structure out, with the skill's existing prose lifted into the right places.**

## Operating principles

1. **Read the entire skill first.** Don't propose anything until you've absorbed the whole thing.
2. **Lift, don't rewrite.** When a stage's `CONTEXT.md` describes what the stage does, copy the relevant prose from the original skill. Don't paraphrase. The user already wrote good text; preserve it.
3. **Surface ambiguities.** Don't paper over confusing parts. Ask.
4. **One question at a time** when iterating with the user.
5. **Be honest about what's missing.** ICM workspaces have stage handoffs, audits, outputs that didn't exist in the skill. Flag the gaps clearly.

## Conversion procedure

### Step 1 — Ingest

Get the skill markdown from the user. Either:
- They pasted it into the chat
- They attached the `.skill` file or zip
- They gave you a path (Cowork or Claude Code mode)

Read it end-to-end. Note: the skill's frontmatter (`name`, `description`), the body sections, any numbered procedures, any reference docs in `references/`.

### Step 2 — Filter check

Quick sanity check:

> Before I dig in, does this skill have at least 3 distinct steps? ICM is overkill for 1–2 step work. If it's really a 1–2 step skill, the better fix is usually to clean up the skill itself, not promote it.

If they say it's only 1–2 steps but the skill is unwieldy for some other reason, suggest cleaning up the skill instead and stop.

### Step 3 — Identify implicit steps

Look for step boundaries in the skill. Common signals:

- **Numbered lists** ("1. First do X. 2. Then do Y. 3. Finally do Z.") are usually direct step boundaries
- **Section headers** ("## Phase 1: Research", "## Drafting", "## Review") often map to stages
- **"First... then... finally" / "before... after..."** language: sequence markers
- **Verbs that signal handoff**: interview, gather, draft, audit, review, deliver. If the same skill does several of these, each is a candidate stage.
- **References to intermediate artifacts** ("save this to a file then…", "after generating the outline…") are stage-output handoffs

### Step 4 — Surface what you see

Reflect the implicit step structure back to the user:

> I count N implicit steps in this skill:
>
> 1. **[step name]**: [1-line description of what it does, in the skill's own words]
> 2. **[step name]**: [1-line description]
> ...
>
> Does that match how you think about this? A few things to consider:
> - Should I split [step X] into [A] and [B]? They feel separable.
> - Should [step Y] and [step Z] be combined? They produce the same kind of output.

Wait for the user to react. Iterate until they confirm the step list.

### Step 5 — Identify handoffs

For each step boundary, determine what the previous step produces that the next step consumes. Ask if it's not obvious from the skill text:

> Between step 2 and step 3, what does step 2 hand off? Looking at the skill, it sounds like step 2 produces [X] which step 3 reads. Is that right?

The handoff is usually a markdown file with a recognizable name (the rubric, the outline, the draft).

### Step 6 — Identify checkpoints

Ask explicitly:

> At any of these step boundaries, should a human review the output before the next step runs? Examples: after research before drafting, after drafting before publishing, after scoring before producing the final report.

Mark those stages with `interrupt_before` in the resulting workspace.

### Step 7 — Identify shared references

Look for content in the skill that's used by multiple steps:

- Voice rules
- Scoring rubrics or formulas
- Output templates
- Reference data (lists of sources, contact lists, etc.)

These belong in `shared/`, not inside any one stage.

> I see [voice rules / the rubric / the output template] referenced in multiple steps. I'll move that to `shared/[file].md` so all stages can reference it.

### Step 8 — Propose the folder structure

Show the user what you're about to generate, before generating:

```
[workspace-name]/
├── CLAUDE.md
├── shared/
│   ├── [file].md       ← [what's in it]
│   └── ...
└── stages/
    ├── 01-[slug]/
    │   └── CONTEXT.md   ← lifted from skill section: "[section name]"
    ├── 02-[slug]/
    │   └── CONTEXT.md   ← lifted from skill section: "[section name]"
    └── ...
```

Get a thumbs-up before generating.

### Step 9 — Generate

Mode detection:

- **File system access (Cowork, Claude Code, or similar):** create the files directly. Confirm the target folder name with the user.
- **Chat mode:** output the entire structure as a single response, with `## File: path/to/file.md` headers separating each file's contents. The user can copy-paste into their preferred location.

### Step 10 — Surface gaps

After generating, explicitly flag anything missing or weak:

> Things to look at before you run this:
> - The original skill didn't say what to do if [edge case]. Stage [N] should probably handle that. I left a TODO.
> - Stage [M]'s "Process" section is sparse because the skill was vague there. Worth fleshing out.
> - The skill mentioned [something] but I couldn't tell if it was input, output, or a side comment. I put it in `shared/` for now. Move it if needed.

## Templates

### `CLAUDE.md` template

```markdown
# [Workspace Name]

## Purpose
[Lifted from the skill's `description` field, rewritten as one declarative sentence]

## Origin
Promoted from the `[original-skill-name]` skill on [date].

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

### Stage `CONTEXT.md` template

```markdown
# Stage NN: [Name]

## Inputs

| Source | Where | Why |
|---|---|---|
| [previous stage output] | `../[NN-1]-[slug]/output/[file].md` | [why this stage needs it] |
| [shared reference] | `../../shared/[file].md` | [why] |

## Process

[LIFT from the original skill: copy the prose as it appeared. Number the substeps if the skill did. Don't rewrite or "improve" the user's words.]

## Audit (quality checks before output)

[If the skill had explicit quality checks for this section, lift them. If not, leave a TODO: "Add audit checks before promoting this stage to production."]

## Outputs

| Artifact | Location | Format |
|---|---|---|
| [name] | `output/[file].md` | [format] |

## Human review

[If marked: "Pause here. Show the user the output and wait for explicit go-ahead." Otherwise: "None — Claude continues to the next stage automatically."]
```

## Things to watch for

- **Don't invent steps that weren't in the skill.** If the skill had 4 steps, the workspace has 4 stages. Adding new stages is a separate decision the user should make explicitly.
- **Don't merge steps the user wants distinct.** If the user said "yes split that," respect it.
- **Preserve the skill's voice.** If the original skill said "ask one question at a time," that instruction goes into the relevant stage's `Process` section verbatim. Don't re-engineer it.
- **Tell the user what to do with the original skill.** After conversion, options are: (a) deprecate the skill, (b) keep it as a thin wrapper that just opens the workspace, (c) keep both for different use cases. Ask the user; don't decide for them.

## When to refuse

If the user gives you a skill with only 1–2 real steps, push back:

> This skill is really only [N] steps. ICM has overhead (folder structure, stage `CONTEXT.md`, handoffs between stages) that pays off when you're at 3+ steps. For a [N]-step skill, the better path is usually to clean up the skill itself. Want me to help with that instead, or are you sure you want the ICM version?

If they insist after that, proceed.
