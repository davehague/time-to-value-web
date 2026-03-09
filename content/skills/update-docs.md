---
title: "Documentation Update"
description: "Keep documentation in sync with code changes. Automatically updates changelogs, feature docs, and technical docs after every commit."
category: "Documentation"
tags: ["documentation", "changelog", "automation"]
downloadFile: "/claude-skills/update_docs_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## The Problem

Documentation that doesn't match the code. Everyone knows this problem. The usual approach is to update docs manually, which means they're perpetually slightly wrong.

## How This Skill Solves It

After you commit a feature or fix, this skill updates three layers of documentation:

1. **CHANGELOG** — user-facing: what changed, written from the user's perspective
2. **Feature Docs** — how things work, what they do, how they connect
3. **Technical Docs** — implementation details: API endpoints, database schema, architecture

The skill includes a mapping table that connects feature areas to their documentation files. When you change authentication code, it knows to update `docs/auth.md`. When you add an API endpoint, it knows to update `docs/api.md`.

## The Feedback Loop

This skill pairs with the [Feature Impact Analysis](/skills/feature-impact-analysis) skill. The documentation this skill maintains is the knowledge base that impact analysis reads before the next feature.

Build feature → Update docs → Next feature → Analyse impact using docs → Build → Update docs → ...

Without current documentation, impact analysis is guessing. Without impact analysis, you're shipping edge cases that become bugs. The two skills create a virtuous cycle.

## When to Use It

Invoke after committing any user-facing feature or fix. The skill runs through a checklist: CHANGELOG updated, feature docs updated, technical docs updated, CLAUDE.md updated if needed, implementation plan moved to completed.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/update-docs/`
3. Save the file as `SKILL.md` in that directory
4. Customise the feature-to-doc mapping table to match your project structure
