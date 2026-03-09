---
title: "Espanso Manager"
description: "Manage Espanso text expander configurations through Claude. Create, read, update, and delete matches and config files without leaving your terminal."
category: "Productivity"
tags: ["productivity", "text-expansion", "espanso"]
downloadFile: "/claude-skills/espanso_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## What Is Espanso?

[Espanso](https://espanso.org/) is a cross-platform text expander. Type a trigger like `:sig` and it expands to your full email signature. Type `:today` and it inserts today's date. It's free, open source, and endlessly customisable.

The catch: managing Espanso configurations means editing YAML files by hand, remembering the right directory paths, and restarting the service after changes. This skill removes that friction entirely.

## How This Skill Works

With this skill installed, you can ask Claude to manage your Espanso configuration conversationally:

- "Add a new snippet that expands `:meeting` to a meeting template with form fields"
- "Show me all my current triggers"
- "Update my email signature snippet"
- "Create an app-specific config that disables Espanso in Telegram"

Claude knows the directory structure, file formats, validation steps, and platform-specific paths. It handles the YAML correctly and restarts Espanso when needed.

## When to Use It

Any time you want to create, modify, or organise your text expansions. The skill covers simple replacements, dynamic variables (dates, clipboard), shell command output, form inputs, regex triggers, and app-specific configurations.

I wrote a [full guide on Espanso](/guides/text-expanders-espanso) if you want to understand the tool itself before installing this skill.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/espanso-manager/`
3. Save the file as `SKILL.md` in that directory
4. Update the `ESPANSO_CONFIG_DIR` path in the skill to match your system
