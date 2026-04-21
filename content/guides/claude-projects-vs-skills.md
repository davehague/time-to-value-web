---
title: "Claude Projects vs. Skills: When to Use Each (and How They Work Together)"
description: "A practical mental model for Claude's two most-confused building blocks, with a worked agency example and tips for keeping your work portable."
category: "Claude"
tags: []
publishedAt: "2026-04-21T00:00:00Z"
updatedAt: "2026-04-21T00:00:00Z"
---

If you've been using Claude for a while, you've probably gotten comfortable with **Projects**. They're the natural next step up from a one-off chat, a place to stash instructions and reference files so you don't paste the same context every time. If you've used Custom GPTs or Gemini Gems, you already have the mental model.

**Skills** are newer, and conceptually similar.  You might have seen them and understand them conceptually but not sure what to put in a skill vs what to put in a project. This guide will help you with the mental model of what goes where. It's aimed at people who've already tried Projects and are wondering where Skills fit in.

## The one-line mental model

> **Projects hold context. Skills hold capability.**

A Project is a workspace with reference material, instructions, and memory about *a specific thing*: a client, a product, a research topic. Every chat you start inside it inherits that context.

A Skill is a reusable procedure, a little file that teaches Claude *how to do something*, your way. Once installed, Claude can use it in any chat, inside any Project.

That's it.  If you stop reading here, you've got 80% of it (but please don't)!

## The two flavors of Skills

Anthropic calls out two useful categories, and the distinction matters when you're deciding whether something should *be* a skill.

**Capability uplift.** Teaches Claude something it couldn't do on its own. Example: "build a PowerPoint using the company template," "pull last month's data from the analytics API and return a cleaned CSV," "convert this HEIC image to a cropped black-and-white PDF."

**Encoded preference.** Sequences things Claude already knows how to do, but *your* way. Example: "when drafting a campaign brief, pull the client voice doc first, then draft, then run the quality checklist, then list the hallucination risks at the bottom."

Most of the skills you'll end up building are the second kind. They're not teaching Claude anything new. They're locking in the order and the checkpoints so you don't have to re-explain your process every time.

## Where each one actually lives

This is the part people miss, and it's the biggest practical difference.

**Projects are a Claude.ai / Claude Desktop thing.** They live in that UI. You open the app, click into the Project, chat. If you move to a different tool (Claude Code in the terminal, the API, Cowork writing real files to a folder), your Projects don't come with you. They're similar to Custom GPTs or Gemini Gems that way: useful, but locked to the ecosystem that created them.

**Skills are portable.** Underneath, a skill is just a Markdown file with some metadata. Claude discovers it, reads the description, and loads it when relevant. That portability means the same skill can run in a regular chat, inside a Project, inside Cowork when Claude is writing real Excel and PowerPoint files, and inside Claude Code when you're doing deeper work. Same file, multiple surfaces.

If you're building something you want to rely on for a while, this matters. A Project is an investment in one ecosystem. A skill is a piece of content you own.

## A worked example: Acme Communications

Let's make this concrete. Acme Communications is a marketing agency with a number of clients. Like any agency, they have two kinds of context living side by side:

- **Client-specific stuff**: brand voice, audience, product lines, approved messaging, ongoing campaigns. Totally different per client.
- **Firm-wide stuff**: how Acme writes a campaign brief, how they build a monthly performance report, how they run invoicing. The same across clients.

This maps almost one-to-one onto Projects and Skills.

**Projects, one per client.** Acme creates a Project for each client. Inside each Project: the client's brand voice doc, style guide, product info, audience personas, active campaign briefs. On a Team plan, these Projects are shared across the firm, so any account person can start a chat and have the full client context instantly.

**Skills, firm-wide.** Acme builds skills for the things they do the same way every time, regardless of client:
- a `campaign-brief-drafting` skill that encodes the Acme house format and QC checklist,
- a `monthly-performance-report` skill that pulls from connected analytics sources and formats the output,
- an `invoice-rollup` skill that reads a time-tracking export and produces a client-ready invoice note.

Because skills are portable, the same `campaign-brief-drafting` skill works whether someone is chatting inside Client A's Project, Client B's Project, or a one-off chat outside any Project at all.

**Per-client skill variants when you need them.** A few clients have strong opinions about format. Client A wants their monthly reports in a specific layout. So Acme keeps the generic `monthly-performance-report` skill, and adds a `monthly-performance-report-client-a` variant that inherits the general approach but formats to that client's preferences. You don't need one skill per client, only where the workflow genuinely differs.

The shape of the system: **clients are Projects, repeatable work is Skills, and the two compose at chat time.**

## Break problems into atomic skills, then compose

One of the things I see people do when they first build a skill is make it too big. They take a whole workflow ("run our client onboarding") and cram it into a single skill that's three pages long. It sort of works, until you want to reuse half of it somewhere else and can't.

A better move: think about the workflow as a sequence of smaller, named steps, and ask which of those steps are *independently* reusable. Often you'll find the same sub-step (drafting a summary, humanizing AI-written text, generating a social description) shows up across multiple workflows. That's a signal it wants to be its own skill.

Skills can also call other skills. A parent skill sequences the workflow and hands each step to a smaller skill that does one thing well. Same principle as breaking a big function into smaller functions.

The balance: **don't skill-ify everything**. If a piece of a workflow isn't repeatable across at least a couple of situations, it doesn't need to be a skill. A one-off sequence of instructions can just live in a prompt, or in a Project's instructions, and that's fine. Skills earn their keep when you use them more than once.

## Common mistakes

A few patterns to watch for as you start using both:

**Stuffing workflow into Project instructions.** If your Project's "custom instructions" section has grown into a multi-step recipe, that recipe probably wants to be a skill. Then it can ride along into *other* Projects too.

**Copy-pasting the same instructions across Projects.** The classic signal. If you're repeating yourself across Project setup, extract it once as a skill.

**Making a skill that's really just context.** Less common, but it happens. "Everything about Acme Co" shouldn't be a skill. That's the Project. A skill is a verb; a Project is a noun.

**Trusting any skill or plugin you find on the web.** Anything you install has access to everything your Claude instance can see: connected inboxes, documents, calendars. Same rule as browser extensions. Read before you install, and prefer official sources until you know what you're doing.

**One giant skill instead of a few small ones.** Covered above. Atomic skills compose; monolith skills don't.

## Don't lock yourself in

Projects are an ecosystem asset. They live in Claude. If Anthropic changes direction, or your team moves to a different tool, or you want the same context running against a different model, the Project doesn't come with you. That's the same trade-off you make with Custom GPTs or Gemini Gems: useful, but rented.

Skills are different. They're Markdown files with structured frontmatter. You can store them *anywhere*. Drop your skills folder into Dropbox, Google Drive, OneDrive, or whatever shared storage your team already uses. You now own the capability library, independent of the tool that runs it.

A few habits worth considering:

- **Keep a canonical folder.** One spot where your skills live, synced to cloud storage. When you build a new skill, it lands there first.
- **Version the big ones.** When you meaningfully change a skill that you or your team rely on, save the previous version before you overwrite. A skill that works today isn't guaranteed to work after a rewrite.
- **Treat skills as company IP.** If you're building real workflow value, those Markdown files are the artifact. They outlast the specific chat, the specific Project, and even the specific AI tool you started with.

You can also save exports of your important Project instructions the same way, and probably should. Projects themselves can't move ecosystems yet, but the *instructions* you wrote for them are text, and that text is yours.

## Let Claude build the skill for you

You don't have to hand-write a skill from scratch. Anthropic ships a `skill-creator` skill whose whole job is to interview you and produce a properly-formatted SKILL.md. Just tell Claude something like "let's build a skill that drafts our monthly client performance report" and it'll pick up the skill-creator automatically, ask clarifying questions, and generate a draft. (That's how skills work: Claude reads the descriptions of every skill you have installed and loads the relevant one. You don't have to remember any special syntax.)

In practice this is the fastest path from "I keep retyping these instructions" to "I have a working skill." Let Claude build the first draft, then edit the Markdown yourself once you see what it looks like.

## Where to start

If you're new to skills and looking for a first move:

1. **Look at a Project whose instructions have grown long.** Find the part that's a procedure (steps, checks, formatting rules) rather than context. That's your first skill candidate.
2. **Build one small skill, not five big ones.** Something you do weekly. Ask Claude to help you build it (the skill-creator will do the heavy lifting), then tune the Markdown yourself.
3. **Notice the moments you'd retype the same instructions.** Those are the skills you haven't built yet.

The short version: Projects for "who and what." Skills for "how." And keep the skills somewhere you can carry them.

Sources:
- [Skills explained — Claude blog](https://claude.com/blog/skills-explained)
- [Extend Claude with skills — Claude Code Docs](https://code.claude.com/docs/en/skills)
- [Skill Creator plugin — Anthropic](https://claude.com/plugins/skill-creator)
- [anthropics/skills — GitHub](https://github.com/anthropics/skills)
- [Use Skills in Claude — Support](https://support.claude.com/en/articles/12512180-use-skills-in-claude)
- [Claude Skills: A First Principles Deep Dive](https://leehanchung.github.io/blogs/2025/10/26/claude-skills-deep-dive/)
