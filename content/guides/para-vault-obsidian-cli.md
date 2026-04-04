---
title: "Managing a PARA Vault with the Obsidian CLI"
description: "How to organize a knowledge vault for consulting work using PARA methodology, client subfolders, and Obsidian's new CLI for safe moves and renames"
category: "Obsidian"
tags: ["obsidian", "para", "knowledge-management", "cli", "consulting"]
publishedAt: "2026-04-04T00:00:00Z"
---

I run a consulting business with multiple clients. Each client has active projects, ongoing responsibilities, and a web of interlinked notes. For the past few months I've been managing all of it in a single Obsidian vault using Tiago Forte's PARA method. It works well until you have 30+ files in your Projects folder and you're scrolling past eight `acme-` files to find the one `beacon-` file you need.

This guide covers three things I've figured out through trial and error: when to create subfolders inside PARA categories, how to think about Projects vs Areas when you're juggling client work, and how to use Obsidian's official CLI (shipped in v1.12) to move and rename files without breaking every wikilink in your vault.

## The subfolder rule: two or more, group them

Flat structure is the default. One file per topic, all sitting in `1-Projects/` or `2-Areas/`. Prefixes on filenames carry context: `acme-voice-agent.md`, `nimbus-engineering.md`, `beacon-interview.md`.

This works until a client accumulates enough files that the folder becomes hard to scan. The threshold I've landed on: **when you have two or more files sharing a prefix, create a subfolder.**

Before:
```
1-Projects/
├── acme-voice-agent.md
├── acme-sow1-platform-stability.md
├── acme-sow2-growth-discovery.md
├── acme-staging-environment.md
├── beacon-interview.md
├── beacon-demo-prep.md
├── nimbus-bank-statement-analysis.md
├── linkedin-content-strategy.md
└── rental-properties-sale.md
```

After:
```
1-Projects/
├── acme/
│   ├── acme-voice-agent.md
│   ├── acme-sow1-platform-stability.md
│   ├── acme-sow2-growth-discovery.md
│   └── acme-staging-environment.md
├── beacon/
│   ├── beacon-interview.md
│   └── beacon-demo-prep.md
├── nimbus-bank-statement-analysis.md      ← only one file, stays flat
├── linkedin-content-strategy.md
└── rental-properties-sale.md
```

The standalone files stay at the top level. `nimbus-bank-statement-analysis.md` doesn't get a subfolder until a second Nimbus project shows up. No empty folders, no preemptive structure.

The same rule applies to `2-Areas/`. A client with five area docs (engineering, product strategy, client relationship, dashboard, product overview) gets a subfolder there too. A client can have subfolders in both Projects and Areas at the same time, because those are different PARA categories serving different purposes.

## Projects vs Areas for client work

I kept getting this wrong. A client engagement feels like one thing, so I'd put everything in Projects or everything in Areas. Neither worked. The engagement is actually two things mixed together:

The SOW with a deadline and deliverables? That's a Project. It ends. The engineering standards doc you maintain for that client, the relationship notes you keep current, their product strategy? Those are Areas. They persist as long as you're working with the client.

A single client will often have both:
```
1-Projects/acme/           ← SOWs, launches, specific deliverables
2-Areas/acme/              ← engineering docs, product strategy, relationship notes
```

When the entire engagement ends, you move both subfolders to `4-Archive/` and you're done.

**Personal products** are a special case. If you're building something yourself (a SaaS tool, a side project), it's an Area, not a Project. The product is an ongoing responsibility. But specific launches, betas, and marketing campaigns underneath it are Projects. The product persists; the launch ends.

```
2-Areas/my-saas/                   ← the product (ongoing)
1-Projects/my-saas/
├── my-saas-marketing-site.md      ← shipped, will archive
└── my-saas-beta-launch.md         ← active, has an end goal
```

The test I keep coming back to: "If this succeeds, does it end?" If yes, it's a Project. If it just continues, it's an Area.

### Areas vs Resources

This is the other distinction that tripped me up. The test: **if you stopped paying attention to it, would something in your life suffer?** If yes, it's an Area. If you'd just be less informed, it's a Resource.

Client-specific platform docs you maintain (a Supabase schema, a ClickUp workflow, engineering standards) are Areas — they're your responsibility. Generic tech references you just consult (PARA best practices, agent design patterns, a third-party API doc) are Resources. I had a bunch of client-specific docs sitting in `3-Resources/topics/` when they should have been in `2-Areas/client-name/`. Once I moved them, my agent started routing new information to the right place.

### People subfolders

The same subfolder rule works for `3-Resources/people/`. People exclusively tied to one engagement go in a client subfolder (`people/acme/`, `people/beacon/`). People with cross-cutting relationships — friends, multi-client contacts, people you know from multiple contexts — stay at the top level. The distinction matters because when an engagement ends and you archive the client subfolder, you don't want to accidentally archive people you're still in touch with.

## The wikilink problem (and the CLI solution)

Obsidian's wikilinks resolve by filename, not path. `[[acme-voice-agent]]` finds `acme-voice-agent.md` whether it's in `1-Projects/` or `1-Projects/acme/`. This means moving files into subfolders is safe. Your links don't break.

Renaming is a different story. Change `old-project-name.md` to `new-project-name.md` and every `[[old-project-name]]` link across your vault is now broken. In a vault with 200+ files, that means grepping, reading each match, and manually updating references. Tedious and error-prone.

I was doing this manually for a while — grepping the vault for the old filename, reading each match, editing each file. It took 20 minutes and I'd still miss one. Then I found out Obsidian shipped an official CLI in v1.12 that handles all of this automatically.

### Obsidian CLI basics

The CLI talks to the running Obsidian Desktop app, so all operations go through Obsidian's internal engine. Link updates, backlink resolution, indexing — it all happens the same way as if you'd renamed the file in the GUI.

**Move a file** (updates all wikilinks):
```bash
obsidian move file="acme-voice-agent" to="1-Projects/acme/" vault="My-Vault"
```

**Rename a file** (updates all wikilinks):
```bash
obsidian rename file="old-project-name" name="new-project-name" vault="My-Vault"
```

**Find broken links**:
```bash
obsidian unresolved vault="My-Vault"
```

**Search the vault**:
```bash
obsidian search query="keyword" vault="My-Vault"
```

**Check backlinks** to a file:
```bash
obsidian backlinks file="new-project-name" vault="My-Vault"
```

The `file=` parameter resolves by name (like wikilinks do). The `path=` parameter uses exact folder paths. The `vault=` parameter targets a specific vault if you have more than one.

### Don't use `mv`

**Do not use `mv` for vault files.** The shell command moves bytes on disk but Obsidian's link index doesn't know about it. Use `obsidian move` and `obsidian rename` for anything inside a vault. They're slower (they talk to the running app), but they keep your links intact.

The one exception: creating folders. The CLI doesn't have a `mkdir` command. Use `mkdir -p` for new folders, then `obsidian move` to move files into them.

### Practical workflow: reorganizing a vault

Here's the actual sequence I use when grouping files into a new client subfolder:

```bash
# 1. Create the subfolder (CLI can't do this)
mkdir -p "/path/to/vault/1-Projects/acme"

# 2. Move each file using the CLI (links update automatically)
obsidian move file="acme-voice-agent" to="1-Projects/acme/" vault="My-Vault"
obsidian move file="acme-sow1-platform-stability" to="1-Projects/acme/" vault="My-Vault"

# 3. If renaming too, do it after the move
obsidian rename file="old-project-name" name="new-project-name" vault="My-Vault"

# 4. Audit for anything broken
obsidian unresolved vault="My-Vault"
```

### Prerequisite

The CLI requires Obsidian Desktop to be running (it auto-launches on first command). Enable it in Settings > General > Command line interface. It's free for all users as of v1.12.4.

## Teaching AI agents the same rules

If you use Claude Code (or any AI coding agent) to manage your vault, the agent needs to know these conventions too. I keep a `CLAUDE.md` file at the vault root that describes the structure, the subfolder rule, and the requirement to use `obsidian move/rename` instead of `mv`. That file is the first thing the agent reads when it touches the vault.

Beyond that, a Claude skill handles the routing work. The [Intake Processor](/skills/intake-processor) routes new information into the vault — it uses a two-question decision tree (end date? → Project. Something suffers if ignored? → Area. Neither? → Resource), checks for existing client subfolders, and updates a pipeline dashboard when opportunity statuses change. It uses the CLI for all file operations.

If you want to bridge your Obsidian vault directly into your code editor so Claude Code can read and write vault files as if they were project files, the [Obsidian Symlink Pattern](/guides/obsidian-symlink-documentation-pattern) guide covers that setup.
