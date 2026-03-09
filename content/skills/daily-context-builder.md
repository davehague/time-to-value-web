---
title: "Daily Context Builder"
description: "Generate a unified daily report by pulling from multiple sources — notes, tasks, time tracking, whatever you use. The pattern for synthesising your day into a single document."
category: "Productivity"
tags: ["daily-review", "context", "synthesis"]
downloadFile: "/claude-skills/daily_context_builder_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## The Problem

Your day's information lives in three, four, maybe five different tools. Notes in one place. Tasks in another. Time tracking in a third. Slack messages, calendar events, git commits — all separate silos.

When someone asks "what did you work on today?" or you sit down to plan tomorrow, you're mentally stitching together fragments from across your entire toolchain. It's exhausting and unreliable.

## The Pattern, Not the Tools

The original version of this skill was built for a specific stack: Obsidian for notes, Todoist for tasks, Toggl for time tracking. But the tools are the least interesting part. The pattern is what matters.

The pattern is: pull data from multiple sources, cross-reference it, synthesise it into a single narrative, and surface action items. Whether your stack is Notion + Linear + Clockify, or Apple Notes + Things + no time tracking at all, the same structure applies.

The skill includes a `DATA_SOURCES` configuration block where you list your tools and how to query them. Swap in your tools, keep the synthesis logic.

## Synthesise, Don't Concatenate

The critical distinction. A bad daily report is three data dumps stacked on top of each other: here are your notes, here are your tasks, here are your time entries. You already have that — it's your three separate tools.

A good daily report cross-references: that task you completed but didn't track time against, the meeting note that spawned two new action items, the unplanned work that pushed your planned tasks to tomorrow. The synthesis is where the value lives.

## What the Output Looks Like

Quick stats at the top (tasks completed, time tracked, unplanned work). A 2-3 sentence narrative overview. Key takeaways. Then the details: completed tasks with time, in-progress items, time breakdown by project, action items for tomorrow, and notable decisions from the day's notes.

The format is designed to be scannable. You should be able to glance at the Quick Stats and Overview and know how your day went in ten seconds. The details are there when you need them.

## Weekly Roll-Ups

Ask for a week's summary and the skill generates daily reports first, then synthesises them into a weekly view with patterns: what you spent the most time on, tasks that carried over multiple days, unplanned work that emerged. Useful for weekly standups, status reports, or personal retrospectives.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/daily-context-builder/`
3. Save the file as `SKILL.md` in that directory
4. Update the `DATA_SOURCES` configuration with your specific tools and query methods
5. Set the `OUTPUT_DIR` to where you want daily summaries saved
