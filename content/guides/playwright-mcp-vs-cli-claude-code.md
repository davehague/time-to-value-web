---
title: "Playwright MCP vs CLI for Claude Code"
description: "What Playwright MCP and Playwright CLI are, how they work, and when to use one over the other for browser automation in Claude Code."
category: "Claude Code"
tags: ["playwright", "mcp", "browser automation", "cli"]
publishedAt: "2026-04-11T00:00:00Z"
updatedAt: "2026-04-13T00:00:00Z"
---

Claude Code can automate browsers through Playwright. Fill out a form, click through a workflow, scrape a page — if it's in Chrome, Claude can drive it. There are two tools for this: Playwright MCP and the Playwright CLI. Both let Claude see and interact with web pages, but they work differently and suit different situations.

Both use the same thing underneath: Chrome DevTools Protocol (CDP).

## What is CDP?

Chrome DevTools Protocol is the interface Chrome exposes when you open the inspector (F12, Dev Tools, or right click and Inspect). External programs can connect to a running Chrome instance over CDP and control it — navigate, click, read the DOM, intercept requests. It's the same protocol whether you're using DevTools manually or automating with Playwright.

```
Claude → Playwright (MCP or CLI) → CDP → Chrome
```

Playwright is the automation library. CDP is the wire protocol it speaks. The difference between MCP and CLI is how Claude talks to Playwright, not how Playwright talks to Chrome.

## Playwright MCP

Playwright MCP is a server that runs alongside Claude Code and manages its own Chrome instance. Claude interacts with the browser by calling tool functions — `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_fill_form` — one action per call, each a round-trip between Claude and the server.

The core concept is the snapshot. Before acting on a page, Claude takes a snapshot and gets back a structured accessibility tree:

```yaml
- button "Advanced" [ref=e447]
- textarea "Write some lyrics..." [ref=e507]
- button "Create song" [ref=e633]
```

Claude reads the tree, picks the element ref it needs, and acts on it. No CSS selector guessing. No checking whether a field is an `<input>` or a `<textarea>`. The accessibility tree handles that.

Because MCP manages its own browser, there's less setup on your end. It handles browser lifecycle, keeps a continuous session alive within a conversation, and persists a profile to disk at `~/Library/Caches/ms-playwright/` (on Mac) so login state survives between sessions. Each project gets its own profile automatically. You can also point it at a custom profile with `--user-data-dir` if you want to control where it lives or share one across projects.

The cost is tokens. Every snapshot returns the full accessibility tree inline into Claude's context window. Navigate, snapshot, click, snapshot, fill, snapshot — each one adds to the token count. The MCP tool schema alone loads ~3,600 tokens on every connection. For a 20-step workflow, practitioners report using around 114,000 tokens for tasks that could cost far fewer.

## Playwright CLI

The Playwright CLI (`@playwright/cli`) launched in early 2026, purpose-built for AI coding agents. It's a standalone command-line tool — like `git` or `npm` — that Claude calls through the shell.

The CLI uses snapshots too, but handles them differently. Instead of returning the accessibility tree inline into Claude's context window, it saves the snapshot as a YAML file on disk. Claude reads only the parts it needs — grepping a 13,000-token snapshot for the 10 lines that mention "lyrics" or "button" — and acts using the element refs, same as MCP. Screenshots save as PNG files to disk too. Everything that can live on the filesystem does.

This makes a real difference in token cost. Practitioners report roughly 27,000 tokens for the same tasks that cost 114,000 with MCP — about a 4x reduction. The CLI skill description is ~68 tokens versus MCP's ~3,600 token tool schema.

Element refs survive across commands within a session, so Claude can fill the same field multiple times without re-snapshotting. Commands can be chained with `&&`. The CLI supports `click`, `fill`, `type`, `select`, `hover`, `drag`, `screenshot`, `goto`, `reload`, tab management, cookie and localStorage access, console output, JavaScript evaluation, and more. Named sessions let you run parallel browser instances with independent state, and `state-save` / `state-load` persist auth across sessions.

The tradeoff is that the CLI doesn't manage its own browser. It needs to connect to a Chrome instance that's already running with debugging enabled. And each command is stateless — it executes and exits, with no persistent server maintaining a model of the page between calls.

## The automation profile

Since the CLI connects to an existing Chrome rather than managing its own, you need a browser running with a debugging port. You can't add this flag to an already-running Chrome — it gets silently ignored. And you don't want to restart your daily browser just to automate something.

The solution is a dedicated Chrome profile for automation:

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --remote-debugging-port=9223 \
  --user-data-dir=/tmp/chrome-playwright \
  --no-first-run \
  "https://your-target-site.com" &
```

This opens a completely separate Chrome window. Your main browser stays untouched. The `/tmp/chrome-playwright` profile persists cookies and sessions across runs (until reboot), so once you log into a site in the automation browser you stay logged in for future sessions. Use port 9223 instead of the default 9222, since some tools and extensions already claim that port.

MCP handles this automatically — it manages its own browser with a persistent profile per project. But you can point it at a custom `--user-data-dir` if you want more control.

## Side by side

| | MCP | CLI |
|---|---|---|
| Token cost | Higher (~114k typical) | Lower (~27k typical) |
| Can see the page | Yes, snapshots inline | Yes, snapshots to disk |
| Browser management | Manages its own Chrome + auto profile | Connects to your automation profile |
| Statefulness | Persistent server | Stateless commands |
| Setup | Install MCP server | Install CLI + launch automation profile |
| Best for | Exploring unknown sites, long sessions | Known workflows, token-conscious tasks |

## When to use which

The CLI is the better default for most tasks. It gives Claude the same ability to see the page via snapshots, at a fraction of MCP's token cost. When you know what site you're working with and what you need done, the CLI gets it done efficiently.

MCP is better when you're exploring a site you've never automated before, or when you expect a longer, more iterative session. The persistent browser state and richer introspection help when Claude needs to poke around, try things, and reason about what it sees over many steps.

## Using them together

In practice, you'll use both. MCP to explore a site and figure out how it works. CLI once you know the workflow and want to run it without burning tokens on exploration.

Once you've found a pattern that works reliably, you can ask Claude to capture it as a standalone Node.js script. That script bakes in the selectors and steps Claude figured out interactively, and you can schedule it to run on its own. Even then, you'll probably have your agent execute the script rather than running it by hand. The difference is that a saved script costs one shell call instead of a whole interactive session.

When a script breaks because the site changed, reach for MCP or the CLI to figure out what moved, update the selectors, and fix the script.
