---
title: "Send Slack Message"
description: "A building-block skill for posting formatted messages to Slack channels. Handles markdown-to-Slack conversion and channel resolution. Designed to be called by other skills."
category: "Utilities"
tags: ["slack", "automation", "building-block"]
downloadFile: "/claude-skills/send_slack_message_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## Another piece of plumbing

Like the [Send Email](/skills/send-email) skill, this is a building block. It posts a formatted message to a Slack channel. On its own, that's not very interesting. Composed with other skills, it becomes the notification layer for everything.

A daily digest skill generates a summary, then calls this skill to post it to a channel. A scheduled job finishes, then posts a status update. A monitoring check finds something wrong, then alerts the team. The pattern is always the same: do the work, then tell someone about it.

## What it handles

The tricky part of posting to Slack from a script isn't the API call -- it's the formatting. Slack uses its own markup format ("mrkdwn") that's similar to markdown but different in irritating ways. Bold is `*text*` instead of `**text**`, links are `<url|text>` instead of `[text](url)`, and headings don't exist (you just bold them).

This skill handles that conversion so other skills can write standard markdown and not worry about Slack-specific formatting. It also handles channel name resolution (you say "post to my-channel" and it looks up the channel ID from a config file) and JSON escaping (which breaks silently if you get it wrong).

## Where this is heading

With Claude Code's scheduling features, having a reliable "post to Slack" primitive means any skill can add notifications as a final step. Schedule a job to run every morning, have it fetch data, summarise it, and post the summary to a Slack channel -- all without writing a single line of integration code beyond this skill.

## Setup

1. Download the skill file below
2. Create a directory: `~/.claude/skills/send-slack-message/`
3. Save the file as `SKILL.md` in that directory
4. Create a Slack bot at https://api.slack.com/apps with `chat:write` permission
5. Add your bot token and channel IDs to `~/.claude/slack-config.env`
6. Invite the bot to each channel you want it to post to
