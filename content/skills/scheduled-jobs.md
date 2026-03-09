---
title: "Scheduled Jobs Manager"
description: "Enforce consistency when Claude creates scheduled tasks on macOS. Standardises naming conventions, file locations, and launchd workflows so every job follows the same pattern."
category: "DevOps"
tags: ["macos", "launchd", "automation", "scheduling"]
downloadFile: "/claude-skills/scheduled_jobs_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## The problem: every job was different

Every time I asked Claude to create a scheduled job, it would do it differently. Sometimes cron, sometimes launchd. Different naming conventions. Logs in different places. Different approaches to error handling. Each job worked fine on its own, but managing a dozen of them was chaos because none followed the same pattern.

The worst part was cron. On macOS, cron silently drops missed jobs when the Mac is asleep. If you schedule something for 2am and your laptop lid is closed, it just doesn't run -- no error, no retry, no notification. Launchd, on the other hand, retries missed jobs when the Mac wakes up. That single difference is reason enough to standardise on launchd for everything.

## What this skill enforces

This is less about scheduling and more about standards:

- **Always launchd, never cron** -- for the sleep/wake retry behaviour
- **Consistent naming** -- every job follows the same `com.yourname.<job-name>` convention
- **Consistent file locations** -- plists in `~/Library/LaunchAgents/`, logs in one directory
- **Same workflow every time** -- create the plist, load it, verify it, test it manually
- **Full absolute paths** -- because plists don't expand `~` or `$HOME`, and this catches that mistake before it wastes your time

The skill also includes schedule templates for common patterns: daily at a specific time, multiple times per day, every N seconds, specific days of the week.

## macOS only

This skill is specific to macOS and launchd. If you're on Linux, you'd want a similar skill built around systemd timers (which solve the same "missed job" problem that cron has). The principle is the same -- enforce one way of doing it so every job is manageable -- but the implementation is platform-specific.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/scheduled-jobs/`
3. Save the file as `SKILL.md` in that directory
4. Update the `com.yourname` prefix and log directory path to match your setup
5. Optionally create a wrapper script for centralised logging and notifications
