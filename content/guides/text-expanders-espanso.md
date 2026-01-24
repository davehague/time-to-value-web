---
title: "Managing Text Expanders with AI: A Claude Skill for Espanso"
description: "Get started with text expanders you can use anywhere on your system"
category: "Guides"
tags: []
publishedAt: "2026-01-23T00:00:00Z"
updatedAt: "2026-01-23T00:00:00Z"
---

This week I demoed [PromptBlocks](https://promptblocks.app) to a business group I'm a part of. We were talking about the prompt library feature for storing your prompts.  One thing that's great about PromptBlocks is that you can inject your prompts directly into your chat.  However, what if you're not in PromptBlocks?  This reminded me of something I'd researched before but hadn't returned to: text expanders.

A text expander is a tool that you install on you computer that then allows you to type shortcuts and get text snippets.  Example:  you type `:sig` and it expands into your email signature.  Pretty useful, but I'd never really integrated them into my workflow.  With the proliferation of LLMs, it naturally got me thinking: "what if I could use a text expander to manage my prompts system-wide, across every input field on my computer"?

## Text Expanders vs. PromptBlocks: Different Problems, Complementary Solutions

Here's how I'm thinking about how this fits in with PromptBlocks.

As I've used the product more, it's become apparent to me that **PromptBlocks'** primary benefit is setting  the right context at the right time during an LLM conversation. It's your context layer - projects, memories, compositions, prompt libraries - all scoped to specific work domains. When you're having a conversation, PromptBlocks ensures the AI already knows what you're working on, who you are, and what you're trying to accomplish.  The ability to inject actual text prompts is... honestly kind of just a bonus to all that. 

Much as Iove it, PromptBlocks isn't the only way I interact with LLMs.  I still find myself using Perplexity for search, Claude Code for more in-depth work that requires access to my filesystem, APIs, Python scripts (and of course, code!), plus a handful of other specialized AI tools.  **Text expanders** inject your commonly used text anywhere on your system. Any input field. Web browsers, Notepad, Obsidian, Notion, you name it.  You type the trigger, it expands. No context awareness, just fast text insertion wherever you need it.

They're complementary. PromptBlocks sets the stage for better AI conversations. Text expanders give you shortcuts everywhere else. 

## Enter Espanso: Powerful but Not Accessible

I looked into options and landed on [Espanso](https://espanso.org/), an open-source text expander that works across Mac, Windows, and Linux. It's configurable, extensible, and free. The only catch: it requires YAML configuration files stored on your local drive.

Here's what a basic match file looks like:


    matches:
      - trigger: ":sig"
        replace: "Best regards,\nDavid Hague"
  
      - trigger: ":check"
        replace: "✅"


If you're technical, this isn't a huge barrier (but it is still annoying). If you're not comfortable editing YAML by hand, managing trigger conflicts, or navigating nested directory structures, Espanso becomes inaccessible. Even if you are comfortable, it's still tedious - you have to open files, maintain proper indentation, restart the service, and validate your syntax manually.

## The Solution: Let Claude Manage It

Like so many things these days, the answer is Claude Code.  I created a Claude skill that manages Espanso configuration files through natural language. You tell Claude what you want - "add a trigger for my email signature" or "create a match file for this consulting prompt" - and it handles the YAML editing, file management, and validation.

The skill works anywhere you have Claude with filesystem access:
- **Claude Code** (my primary use case)
- **Claude Desktop with MCP** (filesystem access through Model Context Protocol)
- **Claude Cowork** (basically just Claude Code but now with a UI around it, more accessible to non-technical folks)
- Or any LLM with CLI access to your filesystem

You don't need to know YAML syntax. You don't need to remember where the config files live. You just describe what you want, and the AI does the rest.

## How It Works

The skill understands Espanso's directory structure:

    espanso/
    ├── config/          # HOW Espanso behaves
    │   └── default.yml
    └── match/           # WHAT Espanso does
        └── base.yml

You can ask Claude to:
- **Create new triggers**: "Add a trigger `:meeting` that expands to my Zoom link"
- **Organize by category**: "Create a match file called `emails.yml` for all my email-related shortcuts"
- **Update existing triggers**: "Change my `:sig` trigger to include my phone number"
- **List what's configured**: "Show me all my current triggers"
- **Delete matches**: "Remove the `:old` trigger from base.yml"

Claude handles the file I/O, maintains proper YAML formatting, and can even validate syntax before saving.

## Example: Adding a Prompt Library Trigger

Let's say you have a prompt you use constantly: "Analyze this from a business strategy perspective, then give me 3 actionable next steps."

You could ask Claude:

> "Create a new trigger `:strategy` that expands to my business strategy analysis prompt as follows: ..."

Claude would:
1. Determine the appropriate match file (or create one)
2. Add the YAML entry with proper formatting
3. Save the file
4. Tell you it's ready to use

Once you've set up a trigger, you can use the expander anywhere on your system - Google Docs, Notion, Slack, an LLM chat interface - you type `:strategy` and get your full prompt instantly.

## Future: PromptBlocks + Espanso Sync

Here's where I'm headed: a tool that syncs your PromptBlocks library to Espanso automatically. You build your prompts in PromptBlocks (which already has a nice interface with search and filter organization), then push them to Espanso as text expansion triggers.

That way you maintain one library, but you can inject prompts either through PromptBlocks (with full context awareness) or through Espanso (system-wide, anywhere). Best of both worlds.

## Get The Skill

I'm sharing the Claude skill below. To use it:

1. **Find your Espanso config path**: Run `espanso path` in your terminal
2. **Copy the skill**: [Link to skill file or embed below]
3. **Update the config path** in the skill to match your system
4. **Use it**: Open Claude Code, Claude Desktop / Cowork, or any LLM with filesystem access and start managing your text expansions through conversation

The skill includes:
- Full CRUD operations (create, read, update, delete)
- Match file management
- Config file editing
- Common patterns and examples
- Validation commands

### Get the file
*Place this into your Claude folder `.claude/skillls/espanso-manager/SKILL.MD`*

<a href="/espanso_skill.txt" download="SKILL.MD" target="_blank">Download Link</a> 


---

## Try It and Let Me Know

I'm exploring this workflow in real-time. If you use the skill, run into issues, or find clever ways to extend it, I'd love to hear about it. You can reach me by connecting on [LinkedIn](https://www.linkedin.com/in/david-hague-developer/).

And if you're interested in managing AI context (not just text expansion), check out what I'm building at [PromptBlocks](https://promptblocks.app).