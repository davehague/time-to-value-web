---
title: "Meeting Summarizer"
description: "Generate structured meeting notes with action items, follow-ups, and key insights from any transcript. A consistent template that beats ad-hoc summarization."
category: "Productivity"
tags: ["meetings", "transcripts", "notes"]
downloadFile: "/claude-skills/meeting_summarizer_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

## The problem with ad-hoc summarisation

Every time you paste a transcript into Claude and say "summarise this meeting," you get a different format. Sometimes it's bullet points, sometimes prose, sometimes action items are mixed in with notes, sometimes they're separate. The output is fine, but it's never consistent, and you spend time reformatting it every time.

This skill exists to enforce a format. Not because the format is magic, but because having a consistent one means you stop thinking about structure and start thinking about content.

## How it works

The skill runs a 4-step analysis on any meeting transcript:

1. **Meeting notes** -- the main points covered, with participants identified
2. **Action items and follow-ups** -- organised by who's responsible, with deadlines if mentioned
3. **Key insights** -- surprising or important points that emerged, with cleaned-up quotes
4. **Extended notes** -- a second pass over the transcript to catch anything the first pass missed

That fourth step is the one most people skip when summarising manually. Going back through the transcript after you've already extracted the highlights surfaces the subtle points that didn't seem important on first read.

## Why a skill instead of a prompt

A prompt works once. A skill works every time, the same way. The difference matters when you're processing three meetings a week and want all the notes in the same format, in the same place, with the same sections. It also handles large transcripts that exceed context limits by splitting them automatically.

## Setup

1. Download the skill file below
2. Create a directory: `.claude/skills/meeting-summarizer/`
3. Save the file as `SKILL.md` in that directory
4. Feed it a transcript and it'll produce structured notes
