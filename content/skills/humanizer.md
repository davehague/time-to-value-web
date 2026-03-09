---
title: "Humanizer"
description: "Remove signs of AI-generated writing from text. A 24-pattern checklist based on Wikipedia's 'Signs of AI writing' guide that makes AI-assisted text sound natural."
category: "Writing"
tags: ["writing", "editing", "ai-patterns"]
downloadFile: "/claude-skills/humanizer_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## Where this came from

This skill came from the [OpenClaw](https://openclaw.com) community, and it's one of the few I haven't modified at all. It was already good enough to use as-is.

It's built on Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) page, which is maintained by WikiProject AI Cleanup -- a group that has catalogued thousands of examples of AI-generated text sneaking into Wikipedia articles. They've distilled their observations into concrete patterns, and this skill turns those patterns into an actionable editing checklist.

## Why it's useful

Most people can tell when something "sounds like AI" but can't articulate why. This skill breaks that intuition into 24 specific, fixable patterns. Things like inflated symbolism ("marking a pivotal moment"), the rule of three, em dash overuse, sycophantic tone, and the vocabulary words that appear far more often in post-2023 text ("delve", "tapestry", "landscape").

The part that makes this more than a simple find-and-replace list is the two-pass process at the end. After the initial rewrite, the skill asks "what makes this so obviously AI generated?" -- catching patterns that survived the first pass. Then it revises again. That second audit catches the subtle stuff: rhythmic uniformity, soulless neutrality, and the kind of sterile prose that's technically clean but obviously not written by a person.

## How I use it

This is installed as a global skill (in `~/.claude/skills/`) because it's not tied to any project. Any time I'm writing something that matters -- a blog post, guide, client-facing document -- I run my draft through it. It's also useful when reviewing AI-assisted text from colleagues.

## Setup

1. Download the skill file below
2. Create a directory: `~/.claude/skills/humanizer/`
3. Save the file as `SKILL.md` in that directory
4. It's now available globally across all your projects
