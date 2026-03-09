---
title: "Newsletter Digest"
description: "Cut through newsletter overload with a personalised AI digest. Searches your email, cross-references against your personal context, and surfaces only what matters to you."
category: "Productivity"
tags: ["email", "newsletters", "personalisation"]
downloadFile: "/claude-skills/newsletter_digest_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## The Problem

You subscribe to fifteen AI newsletters because each one occasionally has something genuinely useful. But "occasionally" means you're reading (or guilt-scrolling past) fourteen newsletters of noise to find one signal. Multiply that by every domain you follow — industry news, developer tooling, business strategy — and your inbox becomes a part-time job.

## The Key Insight: Personalisation

The skill's trick isn't just summarising newsletters. Any LLM can do that. The trick is the personal context file.

You maintain a simple markdown file that describes your current projects, professional interests, quarterly goals, and topics you can skip. The skill reads this file first, then filters and prioritises every piece of newsletter content against it.

"AI adoption is growing" becomes "AI adoption in [your specific domain] grew 40% year-over-year, which is directly relevant to [your current project]." Or it gets skipped entirely because it's about a domain you don't work in. The context file is the difference between a generic summary and a useful one.

## Synthesise, Don't Summarise

The output isn't fifteen mini-summaries stacked on top of each other. The skill groups information by theme across all newsletters. If three newsletters mention the same trend, you get one section about that trend with perspectives from all three, not three separate sections saying the same thing.

Each theme section includes a "Why this matters to you" paragraph that connects the information to your specific context. This is the personalisation layer that makes the digest worth reading.

## The Pattern Works for Any Domain

The original version of this skill was built for AI newsletters, but the pattern is domain-agnostic. Swap the newsletter senders and update your personal context file, and the same skill works for:

- Industry news in any sector
- Developer tooling updates
- Business and strategy newsletters
- Research digests
- Community updates

Whatever you subscribe to, the same structure applies: load context, search email, triage, read, synthesise by theme, write digest.

## Setup

1. Create a personal context markdown file describing your projects, interests, and goals
2. Download the skill file below
3. Create a directory: `.claude/skills/newsletter-digest/`
4. Save the file as `SKILL.md` in that directory
5. Update the `CONTEXT_FILE` path to point to your personal context file
6. Configure your email search tool (Gmail MCP, email CLI, etc.)
