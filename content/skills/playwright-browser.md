---
title: "Playwright Browser Automation"
description: "Control browsers from Claude Code using either the Playwright MCP server for quick tasks or CDP-connected Node.js scripts for complex multi-step workflows with authenticated sessions."
category: "Automation"
tags: ["playwright", "browser", "automation", "web-scraping"]
downloadFile: "/claude-skills/playwright_browser_skill.txt"
publishedAt: "2026-04-01T00:00:00Z"
---

## Two modes, one skill

Browser automation comes in two flavours: quick one-off interactions (navigate here, click that, screenshot this) and complex multi-step workflows (log into an app, fill out a form across three pages, extract data from a table, repeat for a list of inputs). Trying to force both into the same approach doesn't work well.

This skill gives Claude two options and lets it pick the right one. For simple tasks, it uses the Playwright MCP server -- tools like `browser_navigate`, `browser_click`, and `browser_screenshot` that handle browser lifecycle automatically. For anything more complex, it writes a Node.js script that connects to an existing Chrome session via the Chrome DevTools Protocol (CDP).

## The CDP pattern is the interesting part

The MCP server is straightforward. The CDP approach is where this skill earns its keep.

The common scenario: you have a web app that requires authentication -- maybe it's behind SSO, maybe it needs MFA, maybe it uses session cookies that are painful to replicate programmatically. Instead of trying to automate the login (which is fragile and often blocked by security measures), you launch a separate Chrome instance, log in manually once, then let Claude connect to that running browser and drive it.

This means Claude can automate workflows inside authenticated apps without ever seeing your credentials. The browser session persists across script runs, so you log in once and run multiple automations against it.

## Patterns that took trial and error

The skill includes several patterns that came from hitting walls:

**Contenteditable fields** -- Modern web apps love `contenteditable` divs instead of proper `<input>` elements. Playwright's `type()` method is unreliable with these. The workaround is clipboard paste: write to the clipboard via `navigator.clipboard.writeText()`, then simulate Cmd+V / Ctrl+V.

**SPA navigation** -- Single-page apps keep loading resources indefinitely, so `waitUntil: 'networkidle'` hangs forever. Using `domcontentloaded` with a manual delay is more reliable.

**Dynamic content polling** -- Instead of fixed `waitForTimeout` calls (which are either too short or waste time), the skill polls for a loading indicator to disappear and waits for it to stay gone for a settle period. More robust than guessing timeouts.

**Scrolling screenshots** -- When content is taller than the viewport, the skill captures it in overlapping chunks. It scrolls to the bottom first to force lazy-loaded content to render, then scrolls back up and captures sections with overlap to avoid cutting text mid-line.

## Cross-platform

The skill handles Mac and Linux differences (Chrome binary paths, keyboard modifiers for paste). It uses `process.platform` detection so the same scripts work on either.

## Setup

1. Download the skill file below
2. Create a directory: `~/.claude/skills/playwright-browser/`
3. Save the file as `SKILL.md` in that directory
4. Install the Playwright MCP server: `claude mcp add -s user playwright -- npx @anthropic-ai/mcp-server-playwright@latest`
5. For CDP scripts, install Playwright: `cd /tmp && npm init -y && npm install playwright`
