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

3. **Route each atom to the correct PARA location:**
   - **Projects** — active efforts with a goal and deadline. "Would neglecting this stall a deliverable?"
   - **Areas** — ongoing responsibilities with standards to maintain. "Would neglecting this cause harm to something we're responsible for?"
   - **Resources** — people profiles and reference material you'd look up
   - **Archive** — completed or inactive items

4. **Update living documents** rather than appending. Every document should reflect the latest known truth and stand alone for someone reading it cold.

5. **Log and link** — changelog entries on every updated file, source-log entries for audit trail, and wikilinks connecting related documents.

## Why PARA

Tiago Forte's PARA method works well here because it maps to how knowledge actually gets used. Projects have deadlines and deliverables. Areas are ongoing responsibilities. Resources are things you look up. Archive is where completed work goes.

The key distinction the skill enforces: Projects are sprints (they end), Areas are marathons (they persist). If an Area has no active Projects, something's probably off — Areas should regularly spawn Projects. This heuristic alone catches a lot of stale knowledge.

## What makes this different from "just summarise it"

Three things:

**Routing over summarising.** A summary gives you one blob of text. This skill puts each piece of information where it belongs, connected to everything else you already know about that topic.

**Living documents over append-only notes.** Most note-taking creates a graveyard of timestamped entries nobody reads again. This skill updates existing documents to reflect current truth, with a changelog for the audit trail.

**Lifecycle awareness.** When a project completes, the skill archives it, updates backlinks, and checks whether the parent area needs a new project. Knowledge doesn't just accumulate — it transitions.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/intake-processor/`
3. Save the file as `SKILL.md` in that directory
4. Create your vault structure (the skill will guide you if it doesn't exist yet)

You'll also want a drop zone — a folder where you put raw files for processing. I use `sources/drop/` but any convention works as long as you're consistent.
