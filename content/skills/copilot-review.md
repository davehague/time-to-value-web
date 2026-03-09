---
title: "Dual AI Code Review"
description: "Get a second AI opinion on Claude Code's work before merging. Send diffs to another model for independent verification — because two perspectives catch more than one."
category: "Quality"
tags: ["code-review", "multi-model", "quality"]
downloadFile: "/claude-skills/copilot_review_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## The Companion Skill

This is the review counterpart to the [Parallel AI Planning](/skills/copilot-plan) skill. Same origin story — an accidental Copilot subscription that became a quality gate.

Where the planning skill uses a second model to generate competing plans *before* building, this skill uses a second model to review Claude Code's work *after* building. Together they bookend the development process: plan with two perspectives, build, review with two perspectives.

## How It Works

The skill gathers the git diff of recent changes (uncommitted, last N commits, branch diff, or a specific PR) and sends it to a second AI model with a structured review prompt. The review is formatted into Critical, Important, and Minor issues.

If there's an open PR on GitHub and you're using Copilot, the skill can also request an automated PR review — giving you both the CLI-based review and the native GitHub review experience.

## Why Two Reviews Matter

Claude Code reviewing its own work is better than no review. But there's an inherent blind spot: the same model that wrote the code has the same biases when reviewing it. A different model brings different training data, different weights, different tendencies. It catches things Claude misses, and vice versa.

This isn't about one model being better than the other. It's about the delta between them surfacing issues that neither would catch alone.

## Works With Any Second Model

Like its planning counterpart, the skill isn't tied to GitHub Copilot. Any CLI tool that accepts text input works: OpenAI's API, Ollama for local models, or whatever else you have available. Swap the command, keep the workflow.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/copilot-review/`
3. Save the file as `SKILL.md` in that directory
4. Install your preferred second model CLI tool and configure authentication
