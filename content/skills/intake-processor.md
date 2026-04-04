---
title: "Intake Processor"
description: "Process dropped files — transcripts, emails, docs — into a PARA-structured knowledge vault. Extracts knowledge atoms, routes them to the right location, and maintains living documents."
category: "Knowledge Management"
tags: ["knowledge-management", "para", "vault", "ingest"]
downloadFile: "/claude-skills/intake_processor_skill.txt"
publishedAt: "2026-03-27T00:00:00Z"
---

## The problem this solves

You have a meeting transcript. You paste it into Claude and say "pull out the key points." You get a nice summary. Then you do... what with it? Copy it into a doc? Which doc? Where does the action item about the API migration go versus the note about the new hire starting Monday?

Most knowledge work falls apart at the routing step. Extraction is easy — AI is great at pulling out facts, decisions, and action items. The hard part is putting each piece of information in the right place so it's findable later, connected to related context, and kept up to date as things change.

This skill handles that routing automatically using the PARA method.

## How it works

When you drop a file — a transcript, email thread, Slack export, PDF, or raw notes — the skill runs a structured process:

1. **Read the full file** before extracting anything. Context from the end of a document can change how you classify information from the beginning.

2. **Extract knowledge atoms** — discrete pieces of information: facts, decisions, people mentions, action items, and context changes (shifts in strategy, priorities, or timeline).

3. **Route each atom to the correct PARA location** using two questions in order:
   - **Q1: Does it have an end date or deliverable?** → **Projects.** Projects are where momentum lives.
   - **Q2: Would something *suffer* if you ignored it?** → **Areas.** Client relationships, engineering standards, health — if it would suffer, it's your responsibility.
   - **Neither?** → **Resources.** Just useful knowledge. You'd only be less informed without it.
   - **Done?** → **Archive.**

4. **Update living documents** rather than appending. Every document should reflect the latest known truth and stand alone for someone reading it cold.

5. **Log and link** — changelog entries on every updated file, source-log entries for audit trail, and wikilinks connecting related documents.

## Why PARA

Tiago Forte's PARA method works well here because it maps to how knowledge actually gets used. Projects have deadlines and deliverables. Areas are ongoing responsibilities. Resources are things you look up. Archive is where completed work goes.

The distinction that matters most: Projects end, Areas don't. A 12-week client SOW is a Project. The engineering standards you maintain for that client are an Area. Same client, different PARA categories. If an Area has no active Projects, something's probably off — Areas should regularly spawn Projects.

The other distinction that trips people up: Areas vs Resources. The test is responsibility, not interest. If you stopped paying attention and something in your life would suffer, it's an Area. If you'd just be less informed, it's a Resource. Client-specific platform docs you maintain are Areas. Generic tech references you consult are Resources.

## Client subfolders

When a client or domain accumulates two or more files in Projects or Areas, the skill groups them into a subfolder. The rule is simple: `acme-voice-agent.md` and `acme-sow1.md` both start with `acme-`, so they go in `1-Projects/acme/`. A standalone file stays flat until a second file with the same prefix shows up.

The skill uses the Obsidian CLI (`obsidian move`, `obsidian rename`) for all file operations inside the vault. This keeps wikilinks intact automatically. See the [PARA Vault Management guide](/guides/para-vault-obsidian-cli) for the full rationale and workflow.

## What makes this different from "just summarise it"

A summary gives you one blob of text. This skill puts each piece of information where it belongs, connected to everything else you already know about that topic. That's the big difference — routing, not summarizing.

It also updates existing documents rather than creating new ones. Most note-taking produces a graveyard of timestamped entries nobody reads again. This skill modifies the current-state sections of your living docs so they always reflect what's true now, with a changelog at the bottom for the audit trail.

It handles transitions — when a project completes, the skill archives it, updates backlinks, and checks whether the parent area needs a new project spun up.

And if you maintain a pipeline dashboard (a table tracking deals, proposals, and warm leads), the skill updates it whenever incoming content changes an opportunity's status. New prospect mentioned in a transcript? It adds a row. Deal closed? It moves the entry. This keeps your pipeline view current without you having to manually maintain it.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/intake-processor/`
3. Save the file as `SKILL.md` in that directory
4. Create your vault structure (the skill will guide you if it doesn't exist yet)

You'll also want a drop zone — a folder where you put raw files for processing. I use `sources/drop/` but any convention works as long as you're consistent.
