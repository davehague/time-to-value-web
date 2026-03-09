---
title: "Feature Impact Analysis"
description: "Find edge cases before you code. A 6-question framework that systematically identifies how new features intersect with existing functionality."
category: "Planning"
tags: ["planning", "quality", "edge-cases"]
downloadFile: "/claude-skills/feature_impact_analysis_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## Why I Built This

I built this skill after shipping a feature that broke three things I didn't think about. The problem was subtle: my spec was solid, my plan was solid, but the new feature intersected with existing functionality in ways I hadn't considered.

Edge cases live at the boundaries between new and existing features. A new "archive" feature seems straightforward until you realise: do archived items show up in search results? Do count badges include them? What happens to a bulk operation that includes both archived and active items?

## How It Works

The skill walks through every existing feature and asks six questions about how the new thing interacts with it:

| Question | What It Catches |
|----------|----------------|
| Does existing feature display items the new feature affects? | Visibility issues |
| Does existing feature filter/search items the new feature modifies? | Filter logic gaps |
| Does existing feature have state the new feature changes? | State conflicts |
| Does existing feature have navigation assuming old behaviour? | Broken references |
| Does existing feature cache data the new feature invalidates? | Stale data |
| Does existing feature have permissions the new feature affects? | Auth gaps |

## When to Use It

Invoke this skill after your implementation plan is reviewed but before you start coding. Point it at your design doc. It produces a categorised list of edge cases grouped by type.

The output feeds directly back into your plan. Sometimes it catches things that change the plan significantly. Sometimes it confirms you've already covered everything. Either way, it takes minutes and has saved me hours of debugging after the fact.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/feature-impact-analysis/`
3. Save the file as `SKILL.md` in that directory
4. Adapt the project context paths to match your project
