---
title: "AI Tool Code Review"
description: "Systematic code review for AI-generated code from tools like Lovable, Bolt, v0, and Cursor. Catches the specific anti-patterns these tools produce that a standard review would miss."
category: "Quality"
tags: ["code-review", "lovable", "ai-tools", "quality"]
downloadFile: "/claude-skills/ai_tool_code_review_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## The Problem With AI-Generated Code

Tools like Lovable, Bolt, v0, and Cursor are genuinely useful for generating code quickly. But they produce a specific category of mistakes that a standard code review wouldn't think to check for.

A human developer who creates a new button component probably checked whether a button component already existed. An AI tool almost certainly didn't. A human developer who needs a list of items knows to fetch them from the database. An AI tool might generate a realistic-looking hardcoded array that passes a visual review but will never update when the data changes.

These aren't bugs in the traditional sense. The code works. It passes tests. It looks professional. But it's structurally wrong in ways that compound over time.

## The Anti-Pattern Checklist

This skill checks for seven specific anti-patterns that AI tools produce repeatedly:

1. **Orphaned files** — created but never imported anywhere
2. **Static data that should be dynamic** — hardcoded arrays that should be API calls
3. **Not reusing existing components** — new components when existing ones would work
4. **Not reusing existing hooks/utilities** — duplicate utility functions
5. **DRY violations** — copy-pasted code across files
6. **Hardcoded values** — literal values instead of existing constants
7. **Ignoring project conventions** — different patterns from the rest of the codebase

A standard code review might catch items 5-7. Items 1-4 are the AI-specific ones that slip through because they require knowledge of the existing codebase that the AI tool didn't have when generating code.

## Works for Any AI Coding Tool

The skill is configured with a git author filter. For Lovable, that's `gpt-engineer`. For other tools, check your git log for the author they use. For tools like Cursor that commit as you, filter by branch name or date range instead.

The anti-patterns are the same regardless of which tool generated the code. The specific tool matters less than the structural review.

## The Review Log

An optional feature: the skill can append findings to a review log file. Over time, this reveals which anti-patterns a specific tool produces most frequently. If Lovable consistently creates orphaned files but never violates DRY, you know where to focus your review time. Pattern tracking turns a reactive review into a proactive checklist.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/ai-tool-code-review/`
3. Save the file as `SKILL.md` in that directory
4. Update the `AI_TOOL_AUTHOR` to match your AI tool's git author
5. Optionally set a `REVIEW_LOG` path for pattern tracking
