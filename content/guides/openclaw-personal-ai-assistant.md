---
title: "Set Up Your Personal AI Assistant with OpenClaw"
description: "Get an AI coworker in your Slack that learns about you, searches the web, and works with any model you choose."
category: "Guides"
tags: ["AI", "Docker", "OpenClaw", "Slack", "Productivity"]
publishedAt: "2026-02-05T00:00:00Z"
updatedAt: "2026-02-05T00:00:00Z"
---

**OpenClaw (formerly ClawdBot / Moltbot) is taking the internet by storm.** It's an open-source AI assistant that runs on your own computer: private, powerful, and completely under your control.

OpenClaw is incredibly flexible. You can connect it to different AI providers, integrate it with various chat platforms, and configure it in dozens of ways. That flexibility is great for developers, but it can be overwhelming if you just want something that works.

That's why I created this (opinionated) setup package that makes OpenClaw dead simple to get running. With my configuration, you get:

- **Model flexibility via OpenRouter.** Switch between Claude, ChatGPT, Gemini, and dozens of other AI models on the fly (including recently released models), all through a single API key.
- **Slack as your interface.** Chat with your AI assistant right where you already work, instead of juggling another app.
- **Simple scripts.** Start, stop, and update with simple, singular commands.
- **All local and secure.** Your conversations and files stay on your computer. Only you can talk to the bot.

This guide walks you through the entire setup in about 30 minutes.

---

## What You'll Have When You're Done

By the end of this guide, you'll have a **personal AI assistant living in your Slack**, like having a knowledgeable coworker who's always available.

Your assistant will:

- **Learn about you over time.** It remembers context from your conversations.
- **Access the latest AI models.** Claude, ChatGPT, Gemini, and more, with the ability to switch anytime.
- **Search the web** on your behalf to find current information.
- **Work with your files** (optional). Give it access to specific folders on your computer so it can read, analyze, or help you edit documents.

You'll interact with it through Slack direct messages, just like chatting with a colleague.

---

## Prerequisites

Before we begin, here's what you need:

- **A computer** running Mac or Windows
- **A Slack workspace** where you have permission to add apps
- **Docker Desktop** installed and running, see instructions below
- **An OpenRouter API key**, see instructions below

No coding experience required. I'll explain everything as we go.

### Install Docker Desktop

Docker runs OpenClaw in an isolated container on your computer, like a secure sandbox.

1. Download and install Docker Desktop:
   - <a href="https://docs.docker.com/desktop/setup/install/mac-install/" target="_blank">Install Docker Desktop for Mac</a>
   - <a href="https://docs.docker.com/desktop/setup/install/windows-install/" target="_blank">Install Docker Desktop for Windows</a>

2. Open Docker Desktop and accept the license agreement

3. Verify it's running: look for a whale icon in your menu bar (Mac) or system tray (Windows). If the whale is animating, Docker is still starting. Wait for it to settle.

### Set Up OpenRouter

OpenRouter is your gateway to AI models. Instead of signing up separately with OpenAI, Anthropic, and Google, one OpenRouter account unlocks them all. You pay only for what you use, typically pennies per conversation.

![OpenRouter setup steps](/guides/openclaw/openrouter-setup.png)

1. **Sign up** at <a href="https://openrouter.ai/" target="_blank">openrouter.ai</a>
2. **Add credits** at <a href="https://openrouter.ai/settings/credits" target="_blank">openrouter.ai/settings/credits</a> ($5-10 will last a long time)
3. **Create an API key** at <a href="https://openrouter.ai/settings/keys" target="_blank">openrouter.ai/settings/keys</a>. Give it a name like "OpenClaw" and copy it immediately. It starts with `sk-or-` and you'll only see it once.

Save your API key somewhere safe. You'll need it shortly.

Browse available models: <a href="https://openrouter.ai/models?arch=GPT" target="_blank">ChatGPT</a> | <a href="https://openrouter.ai/models?arch=Claude" target="_blank">Claude</a> | <a href="https://openrouter.ai/models?arch=Gemini" target="_blank">Gemini</a> | <a href="https://openrouter.ai/models" target="_blank">All models</a>

---

## Download the Project

Download <a href="https://github.com/davehague/openclaw-docker/archive/refs/heads/main.zip" target="_blank">openclaw-docker.zip</a>

(Technical users: the <a href="https://github.com/davehague/openclaw-docker" target="_blank">GitHub repository</a> is available if you prefer to clone it.)

### Extract and Place the Files

1. Find the downloaded ZIP file and extract it
2. You'll get a folder called `openclaw-docker-main`. Rename it to `openclaw-docker`
3. Move the folder somewhere permanent:
   - **Mac:** Your home folder (e.g., `/Users/YourName/openclaw-docker`)
   - **Windows:** Your user folder (e.g., `C:\Users\YourName\openclaw-docker`)

---

## Set Up the Project

Now we'll configure everything before running the setup scripts.

### Create and Open Your Configuration File

1. Open your `openclaw-docker` folder
2. Find the file called `.env.example`
   - **Mac:** Files starting with `.` are hidden by default. Press `Cmd+Shift+.` to show hidden files.
   - **Windows:** Files starting with `.` may be hidden. In File Explorer, click **View** → **Show** → **Hidden items**.
3. Make a copy of it and rename the copy to `.env`
4. Open the `.env` file in a text editor (Notepad on Windows, TextEdit on Mac)

This file stores your API key and Slack tokens. Keep it open - we'll add values as we go.

### Add Your OpenRouter API Key

In your `.env` file, find this line:
```
OPENROUTER_API_KEY=sk-or-your-key-here
```

Replace `sk-or-your-key-here` with your OpenRouter API key.

Also find the Slack section (the lines may be commented out with `#`, so remove the `#`):
```
SLACK_APP_TOKEN=xapp-your-token-here
SLACK_BOT_TOKEN=xoxb-your-token-here
SLACK_ALLOWED_USERS=YOUR_MEMBER_ID
```

We'll fill these in as we create the Slack app.

### Create a Slack App

1. Go to <a href="https://api.slack.com/apps" target="_blank">api.slack.com/apps</a>
2. Click **Create New App**

![Create New App button](/guides/openclaw/slack-create-app.png)

3. Choose **From an app manifest**

![From an app manifest option](/guides/openclaw/slack-create-from-manifest.png)

4. Select your Slack workspace and click **Next**

![Workspace selection](/guides/openclaw/slack-pick-workspace.png)

5. Delete everything in the manifest editor
6. On your computer, open the `slack-manifest.json` file from your openclaw-docker folder
7. Copy the entire contents and paste it into the manifest editor
8. (Optional) Here you can name your slack bot if you prefer something other than "OpenClaw" - simply update "name" and "display_name"
9. Click **Next**
10. Review summary for the app and click **Create**

### Get Your App Token

1. You should be on your app's **Basic Information** page
2. Scroll down to **App-Level Tokens**
3. Click **Generate Token and Scopes**
4. Name it "Socket"
5. Click **Add Scope** and select `connections:write`
6. Click **Generate**

![Generate app-level tokens](/guides/openclaw/slack-generate-app-level-tokens.png)

7. Copy the token that appears (starts with `xapp-`)

![Copy xapp token](/guides/openclaw/slack-xapp-token.png)

8. Paste it into your `.env` file as the value for `SLACK_APP_TOKEN`

### Install the App and Get Your Bot Token

1. In the left sidebar, click **Install App**
2. Click **Install to Workspace**

![Install to Workspace](/guides/openclaw/slack-install-to-workspace.png)

3. Review the permissions and click **Allow**

![Allow access to workspace](/guides/openclaw/slack-allow-access-to-workspace.png)

4. Copy the **Bot User OAuth Token** (starts with `xoxb-`)

![Copy xoxb token](/guides/openclaw/slack-xoxb-token.png)

5. Paste it into your `.env` file as the value for `SLACK_BOT_TOKEN`

### Find Your Slack User ID

This lets you DM your bot without an approval process:

1. In Slack, click on your own profile picture
2. Click **Profile**
3. Click the three dots **⋮** menu
4. Click **Copy member ID**

![Copy member ID from profile](/guides/openclaw/slack-profile.png)

5. Paste it into your `.env` file as the value for `SLACK_ALLOWED_USERS`
6. Save and close the `.env` file

![.env file with Slack tokens filled in](/guides/openclaw/slack-tokens-filled-env.png)

---

## Run the Setup

Now we need to run some commands. You can click the copy icon on any code block to copy commands to your clipboard.

### Open a Terminal

**Mac:**
1. Open **Terminal** (find it in Applications → Utilities, or search with Spotlight)
2. Drag your `openclaw-docker` folder onto the Terminal icon in the Dock, or type `cd ` (with a space) and drag the folder into the Terminal window, then press Enter

**Windows:**
1. Open **File Explorer** and navigate to your `openclaw-docker` folder
2. Click in the address bar at the top
3. Type `powershell` and press Enter

![Windows address bar with powershell typed](/guides/openclaw/windows-powershell-address-bar.png)

### Run the Setup Wizard

**Mac:**
```
./first-run.sh
```

**Windows:**
```
.\first-run.ps1
```

![Terminal showing first-run](/guides/openclaw/terminal-first-run.png)

The wizard will ask several questions. Here's how to answer:

| Question | What to Choose |
|----------|----------------|
| "Understand this is powerful and risky?" | **Yes** |
| "Onboarding mode" | **QuickStart** |
| "Model/auth provider" | **OpenRouter** |
| "OpenRouter auth method" | **OpenRouter API key** |
| "Use existing OPENROUTER_API_KEY?" | **Yes** |
| "Default model" | **Keep current** |
| "Select channel" | **Skip for now** |
| "Configure skills now?" | **No** |

![Terminal with choices](/guides/openclaw/terminal-with-choices.png)

The setup will download some files. This may take a few minutes depending on your internet speed.

### Start OpenClaw

Once the wizard completes, start OpenClaw:

**Mac:**
```
./start.sh
```

**Windows:**
```
.\start.ps1
```

![Terminal showing start results](/guides/openclaw/terminal-start-results.png)

OpenClaw is now running and connected to Slack!

---

## Start Chatting!

1. Open Slack
2. Look for **OpenClaw** in the Apps section of your sidebar
   - If you don't see it, click **Apps** → **Manage** → **Browse apps** and search for "OpenClaw" (or the name you gave it)
3. Click on the bot to start a direct message
4. Say hello!

![Initial conversation with OpenClaw in Slack](/guides/openclaw/slack-initial-conversation.png)

**Congratulations, you now have a personal AI assistant in Slack!**

---

## Share Folders with Your AI (Optional)

By default, your AI can only access its own internal files. If you want it to work with documents on your computer (reading files, analyzing data, or helping you edit), you'll need to share specific folders.

### Why Share Folders?

With folder access, your AI can:
- **Read and summarize documents.** "Summarize the report in my Documents folder"
- **Analyze data files.** "What trends do you see in this CSV?"
- **Help edit files.** "Add a new section to my notes"

### Create the Shared Folders File

1. In your `openclaw-docker` folder, find the file called `shared-folders.txt.example`
2. Make a copy of it and rename the copy to `shared-folders.txt`
3. Open `shared-folders.txt` in a text editor

### Add Your Folders

Add the folders you want to share, one per line:

**Mac example:**
```
# Read-only (AI can read but not modify)
/Users/YourName/Documents

# Read-write (AI can read AND modify, use carefully)
/Users/YourName/Projects:rw
```

**Windows example:**
```
C:\Users\YourName\Documents
C:\Users\YourName\Projects:rw
```

Save and close the file.

![shared-folders.txt with example paths](/guides/openclaw/shared-folders-file.png)

### Restart to Apply Changes

**Mac:**
```
./restart.sh
```

**Windows:**
```
.\restart.ps1
```

### Security Note

Only share folders you're comfortable with your AI accessing. **Never share:**
- Password or credential files
- SSH keys or certificates
- Sensitive financial documents

When in doubt, use read-only access (no `:rw` suffix).

---

## Daily Use: Quick Reference

Here are the commands you'll use to manage OpenClaw:

| What You Want to Do | Mac | Windows |
|---------------------|-----------|---------|
| **Start OpenClaw** | `./start.sh` | `.\start.ps1` |
| **Stop OpenClaw** | `./stop.sh` | `.\stop.ps1` |
| **Restart** (after config changes) | `./restart.sh` | `.\restart.ps1` |
| **View logs** | `./logs.sh` | `.\logs.ps1` |
| **Update to latest version** | `./upgrade.sh` | `.\upgrade.ps1` |

Remember: **OpenClaw needs to be running for your Slack bot to work.** By default, if you restart your computer, you'll need to run the start command again.

---

## What's Next?

Now that your AI assistant is set up, here are some things to try:

- **Ask it to search the web.** "What's the latest news about [topic]?"
- **Share a folder** and ask it to summarize a document.
- **Change AI models.** Edit the `OPENCLAW_MODEL` line in `.env` to try Claude, GPT-4, or Gemini.
- **Explore skills.** Check out the <a href="https://docs.openclaw.ai/tools/skills" target="_blank">OpenClaw skills documentation</a> to see available plugins.

Enjoy your new AI coworker!
