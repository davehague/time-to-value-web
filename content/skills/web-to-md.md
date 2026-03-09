---
title: "Web to Markdown"
description: "Smart web-to-markdown fetcher that tries a free service first, then falls back to a paid one for JS-heavy sites. Saves money without sacrificing capability."
category: "Utilities"
tags: ["web-scraping", "markdown", "automation"]
downloadFile: "/claude-skills/web_to_md_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## The "why pay when you don't have to" approach

This skill started with Firecrawl. Firecrawl is excellent but the free credits run out fast. Next was WebcrawlerAPI -- pay-per-use, credits don't expire, solid JS rendering. But most of the sites I fetch are blogs and documentation pages that don't need JS rendering at all.

Then I found [defuddle.md](https://defuddle.md), a free service that works well for static content. The logical next step was obvious: try the free one first, fall back to paid only when the free one returns insufficient content.

That's what this skill does. It fetches via defuddle.md, checks whether the response has more than 500 bytes of actual content (after stripping frontmatter), and only falls back to WebcrawlerAPI if the content looks empty or too short. For most URLs, the free service works fine and the paid fallback never fires.

## When the fallback matters

JavaScript-heavy single-page apps (Meetup event pages, dashboards), Cloudflare-protected sites, and dynamic content like booking calendars all return empty or near-empty responses from defuddle.md. That's when the paid fallback earns its keep. WebcrawlerAPI spins up a real browser, renders the JS, and returns the content.

The skill is transparent about which backend it used -- status messages go to stderr so you can see the routing decisions without them polluting the markdown output.

## Using it without the paid tier

You don't need WebcrawlerAPI at all. The skill works fine with just the free defuddle.md service. If it encounters a site that needs JS rendering, it'll warn you and return whatever it got. You can always set up the paid fallback later if you find yourself hitting that wall often enough.

## Setup

1. Download the skill file below
2. Create a directory: `~/.claude/skills/web-to-md/`
3. Save the file as `SKILL.md` in that directory
4. The included fetch script handles everything -- make it executable with `chmod +x`
5. Optionally set up WebcrawlerAPI for the paid fallback and update the script path
