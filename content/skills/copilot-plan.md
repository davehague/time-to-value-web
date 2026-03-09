---
title: "Parallel AI Planning"
description: "Pit two AI models against each other when planning features. Generate competing implementation plans, compare side by side, and cherry-pick the best ideas from each."
category: "Planning"
tags: ["planning", "multi-model", "comparison"]
downloadFile: "/claude-skills/copilot_plan_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## The Origin Story

This skill exists because of an auto-renewing subscription. A GitHub Copilot payment went through, and rather than cancelling it and eating the cost, the question became: "What can I actually do with this alongside Claude Code?"

The answer turned out to be surprisingly useful: use Copilot as a sparring partner for planning.

## How It Works

When you're planning a feature, the skill launches a second AI model in the background while Claude Code generates its own plan. You end up with two competing implementation plans, presented side by side with a comparison table covering architecture, task breakdown, testing strategy, and unique insights.

The two plans almost always catch different things. One model might suggest a simpler architecture while the other spots an edge case. One breaks tasks down more granularly. One thinks about testing differently. The best outcome is usually a hybrid — cherry-picking the strongest ideas from each.

## Not Just Copilot

The skill is written to work with any second model that has a CLI interface. GitHub Copilot CLI is the default because that's what prompted the idea, but the same pattern works with:

- **OpenAI CLI** for GPT-based planning
- **Ollama** for local models (free, private)
- **Any tool** that accepts text input and returns text output

Swap out the background command and you're set.

## Making Lemons into Lemonade

The broader lesson: if you're already paying for multiple AI tools, make them compete. A single model gives you one perspective. Two models give you a conversation between perspectives. The cost of running both is the subscription you're already paying for — the value is catching the things that one model alone would miss.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/copilot-plan/`
3. Save the file as `SKILL.md` in that directory
4. Install your preferred second model CLI tool and configure authentication
