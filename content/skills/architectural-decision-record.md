---
title: "Architectural Decision Record"
description: "Document significant technical decisions with context, rationale, and alternatives considered. Never re-litigate a settled decision again."
category: "Documentation"
tags: ["documentation", "architecture", "decisions"]
downloadFile: "/claude-skills/architectural_decision_record_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## Why ADRs Matter

Every codebase accumulates decisions. Why PostgreSQL over MongoDB? Why server-side rendering? Why this auth library over that one? Six months later, someone (often you) asks "why did we do it this way?" and nobody remembers.

ADRs solve this by capturing the decision, the context, the alternatives considered, and the consequences accepted — all at the moment the decision is made, when the reasoning is freshest.

## How This Skill Works

This skill teaches Claude to proactively suggest creating ADRs when it detects a significant technical decision in conversation. When you say "let's go with X" after discussing tradeoffs, Claude recognises that's worth recording.

It creates structured markdown files in `docs/adr/` with:

- **Context** — the situation and forces at play
- **Decision** — what was decided, in active voice
- **Rationale** — why this option won over alternatives
- **Alternatives Considered** — what was rejected and why
- **Consequences** — benefits accepted and tradeoffs made

## When to Use It

The skill triggers automatically during conversations involving architecture changes, technology choices, data decisions, API design, or infrastructure patterns. You can also invoke it explicitly after any significant decision.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/adr/`
3. Save the file as `SKILL.md` in that directory
4. Create a `docs/adr/` directory in your project root
