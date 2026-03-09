---
title: "Send Email"
description: "A building-block skill for sending emails from Claude. Supports plain text, HTML, and markdown. Designed to be called by other skills as a delivery step."
category: "Utilities"
tags: ["email", "automation", "building-block"]
downloadFile: "/claude-skills/send_email_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## Plumbing that everything needs

This is one of those skills that doesn't do anything exciting on its own. It sends an email. Plain text, HTML, or markdown -- it handles the formatting and delivers it via Mailjet.

Where it gets useful is as a building block. A daily digest skill can generate a summary and then call this skill to deliver it. A meeting summarizer can email the notes to attendees. A monitoring script can alert you when something breaks. Every automation eventually needs a "now tell someone about it" step, and this is that step.

## How it works

The skill wraps a Python script that talks to the Mailjet API. You give it a recipient, a subject, and content in one of four formats (plain text, HTML, inline markdown, or a markdown file). It sends the email and confirms delivery.

The markdown option is the most useful for skill integration. Write your output as markdown, pass it through `--markdown-file`, and the recipient gets a nicely formatted HTML email. No HTML templating required.

## Why Mailjet

Mailjet has a generous free tier (200 emails per day) and the API is straightforward. The skill is written around Mailjet, but the pattern -- a script that accepts command-line arguments and sends an email -- could be adapted to SendGrid, AWS SES, or any transactional email provider. The skill file includes notes on what you'd need to change.

## Setup

1. Download the skill file below
2. Create a directory: `~/.claude/skills/send-email/`
3. Save the file as `SKILL.md` in that directory
4. Set up a Mailjet account and add your credentials to a `.env` file
5. Create or adapt the Python email sender script (the skill describes the expected interface)
6. Update the `YOUR_PATH` placeholders in the skill to match your script location
