---
title: "The Obsidian Symlink Pattern: Sharing Documentation Between You and Claude"
description: "A simple filesystem trick that lets you and your AI agent co-maintain product documentation in real time"
category: "Claude Code"
tags: []
publishedAt: "2026-01-27T00:00:00Z"
updatedAt: "2026-01-27T00:00:00Z"
---

Every developer knows documentation drifts. You ship a feature, update the README if you're disciplined, and within two weeks the docs describe a product that no longer exists. Here is a pattern I've found that makes documentation a natural byproduct of development rather than a separate chore.

The trick is a symlink. One filesystem command that bridges two worlds: your code editor (where Claude Code works) and your markdown editor (where you read and think). The result is a shared workspace where you and Claude are genuinely co-maintaining the same documents, each in the format that works best.

## The Problem: Three Layers, One You

When you're building a product, documentation exists at three levels:

1. **Technical docs** - Implementation details, API specs, architecture decisions. Lives close to the code.
2. **Project context docs** - The 30,000-foot view. How features work, what they do, how they connect. Written for humans, not compilers.
3. **Customer-facing docs** - Marketing copy, help pages, onboarding guides. Polished and user-focused.

The first layer stays current because it's adjacent to the code. The third layer gets attention because it's customer-visible. The second layer - the one that describes how your product actually works at a human level - is the one that rots. And it's the most important one for AI-assisted development, because it's what gives Claude the high-level context it needs to build features that fit the whole product, not just the ticket.

Without that middle layer, Claude is working from code alone. Code tells you *what* exists and *how* it works, but not *why* it exists or *how it relates* to everything else. That's where edge cases hide.

## The Pattern: A Symlink as a UI Adapter

A symlink (symbolic link) is a filesystem shortcut. It makes a file or folder appear to exist in two places at once. The actual files live in one location; the symlink is just a pointer.

Here's the setup:

```
your-project/
├── src/
├── docs/
│   ├── plans/              # Implementation plans
│   ├── tech/               # Technical documentation
│   └── project-context/    # ← This is a symlink
└── ...
```

The `project-context/` directory isn't a real folder in your repo. It's a symlink pointing to a folder in your Obsidian vault (or any markdown-based knowledge tool). The files physically live in Obsidian, but Claude Code sees them as local project files.

Creating it is one command:

```bash
ln -s /path/to/your/obsidian/vault/project-name/project-context docs/project-context
```

That's it. No sync service, no plugin, no build step. Just the filesystem doing what it's designed to do.

### What this gives you

**For Claude Code**: Direct read/write access to your product documentation as if it were part of the codebase. When a skill or prompt says "read the project context docs," Claude opens files from your Obsidian vault without knowing or caring that they're symlinked.

**For you**: The same files rendered beautifully in Obsidian with full markdown support, wiki-style linking, search, and whatever plugins you use. You're reading and editing the same bytes Claude is reading and editing, just through a different interface.

**The key insight**: This isn't a sync mechanism. It's a UI adapter. You and Claude are literally co-working on the same document. You see it in Obsidian; Claude sees it as a project file. Edits from either side are instantly visible to the other because there's only one copy of each file.

## What Lives in Project Context

The project context folder contains one markdown file per feature area. Each file describes what the feature does, how users interact with it, and how it connects to other features. This is documentation written for humans - no code snippets, no API schemas, just clear descriptions of how the product works.

Example structure:

```
project-context/
├── overview.md
├── authentication.md
├── dashboard.md
├── search.md
├── settings.md
├── notifications.md
└── CHANGELOG.md
```

The `CHANGELOG.md` tracks user-facing changes. The feature docs explain how things work. Together, they form a picture of the product that's readable by both you and Claude.

This is the documentation layer that feeds into other workflows. In my [spec-driven development guide](/guides/spec-driven-development-claude-skills), I describe a Feature Impact Analysis skill that reads these docs before a new feature is built, systematically checking for edge cases at intersections between the new feature and existing ones. Without current project context docs, that analysis has nothing to work with.

## The Automation: Keeping Docs Current

Documentation that requires manual updates will always drift. The solution is to make updates part of the development workflow itself.

I use a Claude skill that runs after committing a feature. It scans what changed in the codebase and updates three layers:

1. **CHANGELOG.md** in project-context - What changed, written from the user's perspective
2. **Feature docs** in project-context - Updated descriptions of how affected features now work
3. **Technical docs** in `docs/tech/` - Implementation details, API changes, architecture notes

The skill uses a mapping table that connects types of changes to specific docs. When you add an authentication feature, it knows to update `authentication.md`. When you change the settings page, it updates `settings.md`. You customize these mappings for your project.

The result: after each feature ships, your project context docs reflect reality. Claude updated them. You can open Obsidian and read exactly how the product works right now - then use that understanding to write marketing copy, plan the next feature, or onboard a collaborator.

You can <a href="/claude-skills/update_docs_skill.txt" download="SKILL.md" target="_blank">download the skill here</a>.

## The Feedback Loop

Here's why this matters beyond just having nice docs. The pattern creates a compounding feedback loop:

```
Build feature → Docs auto-update → Next feature uses docs for context → Better feature → Docs auto-update → ...
```

When you build a new feature, Claude reads the project context docs to understand how the product works holistically. The Feature Impact Analysis skill uses these docs to find edge cases. After the feature ships, the Documentation Update skill refreshes the docs. The next feature starts with better context.

Each iteration makes the docs more complete, which makes the next feature better planned, which produces fewer bugs, which means less rework. That's the compounding effect - not from any single tool, but from the system working together.

## The Intermediate Layer

One thing worth being explicit about: project context docs are an *intermediate* layer. They sit between code and customer-facing content.

| Layer | Always current? | Audience | Purpose |
|-------|----------------|----------|---------|
| Code | Yes | Machines + developers | Source of truth for implementation |
| Project context | Mostly | You + Claude | Understanding how features work together |
| Customer docs | When polished | End users | Marketing, help, onboarding |

Project context docs can occasionally drift if you skip running the update skill. That's fine. They're a working document, not a published artifact. When you need to write customer-facing docs or marketing copy, you start from the project context layer (which is close to current) rather than from the code (which requires translation from implementation to human language).

Think of it this way: the code is the system of record. Project context is the human-readable translation. Customer docs are the polished version of that translation. The symlink pattern keeps the translation step cheap and mostly automated.

## Setup

Getting this running for a new project is straightforward:

### 1. Create your docs structure

```bash
mkdir -p docs/tech docs/plans
```

### 2. Create the Obsidian folder

In your Obsidian vault, create a folder for the project's context docs. If you use iCloud or Google Drive to sync your vault, you get cloud backup and mobile access for free.

### 3. Create the symlink

```bash
ln -s /path/to/obsidian/vault/your-project/project-context docs/project-context
```

Or just ask Claude Code to create it - tell it where your Obsidian vault lives and it'll set up the link.

### 4. Add to .gitignore

The symlinked folder shouldn't be committed to the repo (the target is outside the project):

```
docs/project-context
```

### 5. Seed your initial docs

Create `overview.md` and a doc per major feature area. These don't need to be comprehensive at first - even a few sentences per feature gives Claude something to work with. The update skill will flesh them out over time.

### 6. Install the update-docs skill

<a href="/claude-skills/update_docs_skill.txt" download="SKILL.md" target="_blank">Download the update-docs skill</a> and customize the mapping tables for your project.

## Tips

**Any markdown editor works.** I use Obsidian because it renders markdown beautifully and I already live in it. But this pattern works with any tool that reads markdown files from disk - Typora, iA Writer, even VS Code with a markdown preview. The symlink doesn't care what's on the other end.

**Cloud sync is a bonus.** If your Obsidian vault (or markdown folder) lives in iCloud or Google Drive, you get automatic backup and can read your project docs from your phone. Not essential, but nice.

**Don't over-structure.** Start with one doc per major feature area and a changelog. Let the structure emerge as the project grows. The update skill will tell you when a new doc is needed.

**The symlink is two-way.** When you edit a file in Obsidian (fix a typo, add context, restructure a section), Claude sees those changes immediately the next time it reads the file. Use this - your manual edits improve the quality of what Claude works with going forward.

---

## Try It and Let Me Know

This pattern has changed how I think about documentation. It went from a post-shipping chore to something that happens automatically as part of building. If you try it, I'd love to hear how it works for your setup. Connect with me on [LinkedIn](https://www.linkedin.com/in/david-hague-developer/).
