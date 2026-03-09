---
title: "Save Claude Working Session"
description: "Preserve context across Claude Code sessions by saving structured summaries to a markdown file. Essential when juggling multiple projects across multiple terminals."
category: "Productivity"
tags: ["context", "sessions", "workflow"]
downloadFile: "/claude-skills/save_claude_working_session_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## The Problem

You have three or four Claude Code sessions open across different projects. Maybe you've been bouncing between a frontend feature, a backend API, and a documentation update. Now you need to restart your machine, or you're done for the day, or you just need to clear your head.

The `/rename` command in Claude Code helps you label individual sessions so you can find them later. But it doesn't give you a single overview of everything that was in flight. When you come back tomorrow, you're opening each session one by one trying to remember what state things were in.

## How This Skill Solves It

The skill writes a structured markdown summary of the current session to a file. Each entry captures what you were doing, where things stand, key decisions, open questions, and — critically — specific next steps with file paths.

Run it in each terminal before shutting down and you get a single file (or set of files) that serves as a bird's-eye view of your entire working context.

## Not Just for Obsidian

The default configuration points to a notes directory, but there's nothing Obsidian-specific about the output. It writes standard markdown files. Point the `OUTPUT_DIR` at any folder: an Obsidian vault, a plain `~/notes` directory, a synced folder, a project's `docs/` directory. The skill doesn't care where the files go — it just needs a path.

## When to Use It

- Before restarting your machine with multiple sessions open
- At the end of a working day to log what was in progress
- When context-switching between projects and you want a breadcrumb trail back
- Any time you think "I'll remember where I left off" (you won't)

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/save-claude-working-session/`
3. Save the file as `SKILL.md` in that directory
4. Update the `OUTPUT_DIR` path to your preferred markdown notes folder
