---
title: "NotebookLM Query"
description: "Get better results from NotebookLM through Claude Code. A skill that improves on the default MCP/CLI experience with smarter query handling and follow-up chains."
category: "Research"
tags: ["notebooklm", "research", "querying"]
downloadFile: "/claude-skills/notebooklm_query_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## The Problem With the Default Experience

NotebookLM has an MCP server and a CLI tool (`nlm`). You can connect them to Claude Code and query your notebooks. In theory, this is great — your curated knowledge base, accessible from the terminal.

In practice, the out-of-the-box experience is underwhelming. Claude tends to restructure your natural language question into something more "formal" before sending it to NotebookLM, and the backend actually responds worse to that. Follow-up queries are treated as isolated questions instead of building on previous context. Source filtering is possible but not obvious.

## What This Skill Fixes

Three things:

**Pass queries verbatim.** The single biggest improvement. NotebookLM's backend is tuned for natural language. When Claude rewrites "What does the McKinsey report say about AI adoption?" into a structured query, the results get worse. This skill instructs Claude to pass your question as-is.

**Chain follow-up queries.** Instead of treating each query as independent, the skill builds context from previous answers into follow-up questions. "Tell me more about the adoption barriers" becomes "Based on the McKinsey report's mention of three adoption barriers — skills gaps, data quality, and integration complexity — which of these does the Gartner source also discuss?" Much better results.

**Filter by source.** When a notebook has many sources and you want information from a specific one, the skill knows how to target it. Mention the source by name and the query narrows appropriately.

## The Tool Exists; This Skill Makes It Useful

This is a pattern worth recognising: many MCP tools and CLI integrations work technically but produce mediocre results because Claude doesn't know the quirks of the backend. A skill file that encodes those quirks — "pass queries verbatim", "chain follow-ups", "the API rate-limits rapid queries" — turns a functional tool into a genuinely useful one.

The skill doesn't replace the `nlm` CLI. It teaches Claude how to use it well.

## Setup

1. Install the `nlm` CLI tool and authenticate
2. Download the skill file below
3. Create a directory: `.claude/skills/notebooklm-query/`
4. Save the file as `SKILL.md` in that directory
5. Ensure you have at least one NotebookLM notebook with sources added
