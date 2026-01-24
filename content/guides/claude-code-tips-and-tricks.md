---
title: "Claude Code Tips and Tricks"
description: "Everything you need to get started with Claude Code. Best practices, tips, and tricks from my experience using it. "
category: "Claude Code"
tags: []
publishedAt: "2024-01-15T00:00:00Z"
updatedAt: "2026-01-23T00:00:00Z"
---

Claude Code is a truly amazing agentic manager that can do everything from complex feature work, bug fixes, file management, and more.  It can call APIs, MCP servers, Python tools, command line tools, and more.  Simply use natural language either in the terminal or from a Markdown file that you reference.

# Installing Claude Code

Start with Claude Code by first installing Node and then running the Claude install command

`npm install -g @anthropic-ai/claude-code`

For a more detailed guide, I really like [this page](https://claudecode.io/install) which does platform-based installation instructions.

# Which Anthropic plan should I go for? 

Anthropic currently has three plans:

1. **Pro**: $20/month 
2. **Max 5x**: $100/ month
3. **Max** **20x**: $200/month

You can start with the Pro $20/month plan, but you will likely be rate limited if you are using it in any meaningful way. Which means that you will be shown messages to the effect of "You have no more messages until 1pm."  

I am currently on the $100/month max 5x plan, which gives me a few messages with Claude Opus and then bumps me down to Claude Sonnet. There seems to be essentially unlimited Sonnet usage for me on this plan. I code every single day and use Claude for a number of other tasks as well, including agentic non-coding tasks. I have never run out of Sonnet usage or gotten a message about not having enough messages until a certain time period. 

If you are running heavy agentic workflows in a loop, then the Max 20X plan at $200/month might be for you but I'd say for most agentic engineering common use cases, the $100/month plan is probably the one that you'll end up on. 

# Claude specific files
## CLAUDE.md files

Claude uses a **CLAUDE.md** file, which is a markdown file that instructs Claude how to interact with the files in your project.

CLAUDE.md files can be placed at multiple levels throughout a project’s directory structure—global, project root, and within any subdirectory to provide context or rules that are automatically picked up and merged hierarchically. This allows for highly granular, folder-specific AI behavior (for example, different CLAUDE.md files for backend, frontend, docs, etc.), with the most specific file taking precedence for files in its scope. 

### Create your first CLAUDE.md files

You can have Claude generate an initial version of the CLAUDE.md file by running the command `/init` - this will scan your project and get a general gist of what your project is doing and how it performs certain actions.  I'd highly recommend checking over the file that it creates just to make sure that it didn't misunderstand or misinterpret some patterns that you have.

From that point, I would consider creating CLAUDE.md files for top-level folders, but don't overdo it at the beginning. Add CLAUDE.md files as you need them instead for specific folders.

## Keeping files updated

If I see Claude making the same mistakes more than once, I will consider that a good time to update or have Claude update the CLAUDE.md file.   (Just note that when you have Claude update the CLAUDE.md file, it can be pretty verbose. So I usually give it some guidance, like "add a line" or "add a few lines" to the CLAUDE.md file about the particular topic)

NOTE: Keep an eye on the length of your CLAUDE.md file because that can cause the context window to be overwhelmed and end up being less useful than intended.  You should be especially careful when you have Claude itself make changes to the CLAUDE.md file because it has a tendency to be verbose and it has a tendency to include irrelevant information about a particular feature or bug that you worked through that wouldn't be widely applicable to the codebase in general.

## Using settings.local.json

The `settings.local.json` file allows you to explicitly allow commands.  Each time Claude asks you for permission to use a certain command you allow it to use the command "always" it updates this file.   I've been working on my settings to be permissive without giving full access.  You can review what I've got below and consider if you feel comfortable with each of these commands for Claude Code to run on it's own.

```json
{

  "permissions": {

    "allow": [
      "Read(*)", "Grep(*)", "LS(*)", "Glob(*)",
      "WebSearch(*)", "WebFetch(*)",
      "Bash(ls:*)", "Bash(cat:*)", "Bash(find:*)", "Bash(grep:*)",
      "Bash(npm:*)", "Bash(node:*)",
      "Bash(pip:*)", "Bash(python:*)", "Bash(virtualenv:*)", 
      "Bash(venv:*)", "Bash(pytest:*)",
      "Bash(npx:*)", "Bash(pnpm:*)", "Bash(tsc:*)", "Bash(jest:*)",
      "Bash(eslint:*)", "Bash(prettier:*)"
    ]
  }
}
```

Generally, I am okay with Claude doing things like listing, searching, and doing code linting checks. But I prefer to do my own git commits and git push commands for instance.  You'll need to figure out which commands work best for you to allow Claude to perform actions versus which ones you want to keep control over.  I'd recommend allowing Claude to build this file over time, but keeping an eye on it and modifying it as you see fit. 

## Claude Sub-agents

Claude sub-agents are specialized, pre-configured AI assistants (markdown files) within Claude Code designed to handle distinct tasks—each with its own context window, system prompt, and tool permissions. This structure prevents context pollution (this does not take the context window from your main thread!) , ensures domain-specific expertise, and allows modular workflows.

### Creating Claude subagents

Sub-agents are created via an interface (e.g., the /agents command) or project configuration files, and can be invoked manually or by Claude when their trigger conditions are met. 

You can store agents in two places:

1. Inside the project (`.claude/agents`)
2. Inside your personal home folder (`~/.claude/agents`)

For me personally, I work on a number of different types of projects, so the home personal home folder doesn't always make sense. But I do have a list of agents that I carry around with me from project to project and will modify for that project.

### Format of a Claude sub-agent

A Claude subagent has a front matter which has name-value pairs of its name, description, model, and tools that it can use. Then it has a Markdown section that can be considered like a system prompt of what the agent should do And what tasks it should perform. 

```yaml
---
name: brand-style-validator
description: MUST BE USED for validating UI against branding guidelines. Use PROACTIVELY on code reviews and UI changes, especially Tailwind CSS components.
---
```

In general, I'd suggest using the `/agents` command to initially create the agent and then editing the markdown file yourself afterwards to make sure that it's specific to your use case and that Claude didn't interpret something you asked it to do in an incorrect or unclear way. 

### Agent Examples
- TODO: See agents folder

# Working with Claude Code

## Quick Guide to slash "/" commands

Below is a list of the most common commands that I use.   Check out the full list at the [official Anthropic Docs](https://docs.claude.com/en/docs/claude-code/slash-commands)

| Command    | Usage                                                                                                                                                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/clear`   | Most useful for managing context. Reset the conversation and start fresh. Use this as often as it makes sense.                                                                                                                                                                             |
| `/init`    | Use to initialize a new project, creating a CLAUDE.md file initially for you                                                                                                                                                                                                               |
| `/compact` | Claude will automatically compact the conversation, but you can also have it compact early, so that way you can keep the thread going while cleaning up some subtasks within the thread. I often use this when the job isn't quite done, but we are running up against the context window. |
| `/resume`  | You can find previous conversations by using the resume keyword and using the arrow keys to select the appropriate conversation.                                                                                                                                                           |

## Using the @mention syntax to bring files into context

In Claude Code, the `@mention` syntax is used to reference files, directories, or other resources directly within your prompts. This enables Claude to quickly include relevant content without manually reading files or fetching data each time.

- To reference a single file, use `@` followed by the file path. For example:
  ```
  Explain the logic in @src/utils/auth.js
  ```
- To reference a directory and see its file structure (not the contents), use:
  ```
  What's the structure of @src/components?
  ```
- To reference MCP resources such as issues from GitHub or data from other connected servers, use the format:
  ```
  Show me the data from @github:repos/owner/repo/issues
  ```
### Notes

- File paths can be relative or absolute, you don't need to specify the full path to find the file. 
- Referencing files with `@` automatically adds the corresponding `CLAUDE.md` files in the directory and parent directories to the context.
- You can mention multiple files or resources in a single prompt.

## Using Screenshots
Claude Code is multi-modal, and you should share screenshots with it when it makes sense. These can be for error messages or console logs if you don't want to paste multiple hundreds of lines, or for UI examples or mockups that you want to show it. 

If you're using the command line, you can take screenshots and paste them into the command line using **Control + V*** (*not Command + V*).  Alternatively, you can drag and drop images directly into the Claude Terminal.   

## Context Management

### Speaking with Claude Code while it's working.

You can continue to send commands to Claude Code while it's working, which can sometimes it's a good idea if you don't want to stop it from working and just want to add some refinement or quick guidance.  Note that this guidance will only be seen and acted upon once it is completed with its current to-do list item.  

If it seems to be going down a wrong path, it's usually better to stop or interrupt it (by pressing Esc) and correct it right away than to type while it's working because it will work faster than you can type, which can lead to incorrect work that it will have to redo.

One other thing to be aware of when you type to Claude while it's working is that it can cause the context to get convoluted and have Claude lose the thread that it was in the middle of.  Be sure that the guidance that you're giving it is related to the task that it's currently working on, or give guidance that it should not stop but instead just add a to-do list item to the bottom of its to-do list Instead of stopping what it's doing to work on your suggestion (Which will be its default behavior).  Avoid context switching as much as you can.   Instead, consider moving to another Claude code terminal or just waiting until it's finished to send your command. 

### Compacting and clearing context

Any time you finish a feature, a bug, or some other atomic unit of work, you should consider either clearing or compacting your Claude code session.   This helps to keep Claude on target and focused on the task at hand without muddying up its context window.  You should prefer `/clear` over `/compact` in general, because even compacted conversations can get too long. 

If you need to persist context over a longer period of time, consider creating a Markdown document and placing it in a docs folder or something similar. You can also consider placing guidance into CLAUDE.md files for guidance that is widely applicable across your codebase and is more of a generality than specific to a particular feature or function. 

You will also notice that Claude will auto-compact the conversation as well.  Claude will warn you when it's going to auto-compact, showing you the last 10-15% before it runs in auto-compact.

## Pipelining workflows with multiple Claude terminals.

I often will have multiple Claude terminals running at once.  You do need to be careful with this because if you're working with the same file or potentially the same file that the first terminal is working with, it can cause some conflicts.  So make sure that the second terminal or third terminal is doing something that's *not related to code* (such as planning your next feature,  researching something on the web or in the codebase, or documenting previous features).  

Alternatively, make sure the second or third terminal is very tightly scoped to the area of the codebase that you want it to work on, and you're fairly certain that the other Claude terminals won't be also working in that area.

If you're having the second or third terminal do planning or researching one thing that can help is to have it write down in Markdown files so you can review and come back to them. 

## Read the work!
One thing that's important when you're working with Claude code or any LLM is to make sure that you are **reviewing the output that it gives you**. This can mean reviewing the code changes that it made or it can mean reviewing the documentation or the plans. 

Often I've had trouble with Claude going down the wrong path, but when I go to review the documentation or the plan that it made, it turns out that it had misunderstood what I had intended it to achieve in the first place. 

I could have saved myself a lot of time by simply reviewing the plan or documentation in the first place. 

## Using Think, Think Deeply, and Ultrathink.

*UPDATE: As of early 2026 Claude Code always does ultrathink*


::tweet{id="2013643590849720628"}
::


# MCP with Claude Code

The MCP configuration within Claude Code is not very user-friendly and it's managed through a file at: `/Users/<your-username>/.claude.json`

claude mcp add supabase --scope project "npx -y @supabase/mcp-server-supabase@latest"

This will create a file that looks like this.

```json
{
  "mcpServers": {
      "supabase": {
          "type": "stdio",
          "command": "npx -y @supabase/mcp-server-supabase@latest",
          "args": [],
          "env": {}
      }
  }
}
```

You can then modify this file to include access tokens like this.

```json
{

  "mcpServers": {
    "supabase": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase@latest",
        "--access-token",
        "${SUPABASE_ACCESS_TOKEN}"
      ],
      "env": {}
    }
  }
}
```

# Other Claude Code Use Cases

## Writing helper Python and "agent" markdown files (non-coding tasks)
I often have Claude write quick throw-away Python scripts to do file management or quick tests of APIs.  It's really good with Python and it can do things quickly and efficiently to save you a lot of time outside of coding. 

You can do things like have it search the web and do research for you.  You can connect it to various APIs and MCP servers to do agentic work on your behalf. 

On my computer, I have a whole folder that has a list of "agents" within it that are simply markdown files with a set of instructions inside of them that tell Claude how to do a multi-step workflow. Because Claude is so good at calling tools and creating plans for itself, often all I have to do is open up a Claude terminal, reference the agent file, and tell it to do some work. 

## Calling tools from command line

Because Claude has access to the command line, anything that you can install that has a command line interface.  This makes Claude a versatile assistant for daily, non-development workflows:  

**File Organization and Management**
- Quickly reorganize folders, batch rename files, or move documents across directories with natural language instructions.  
- Generate archive files (like `.zip` or `.tar.gz`) for backups or sending large document groups.  
- Convert file formats using tools like `ffmpeg` (for media) or `pandoc` (for documents) without manually running commands.  

**Information Retrieval**
- Search for keywords across notes, ebooks, or research materials with `grep`, `ripgrep`, or `fd`.  
- Summarize or index large text files, logs, or meeting transcripts that would be tedious to comb through manually.  
- Aggregate metadata about files such as size, dates, or filetypes and compile quick reports.  

**Productivity and Workflows**
- Automate repetitive office tasks, like extracting tables or text from PDFs using tools such as `pdftotext` or `tabula`.  
- Schedule and execute reminder scripts (paired with cron jobs) to help with personal organization.  

**Research and Media Tasks**
- Download, convert, or transcribe media content using tools like `yt-dlp` or `ffmpeg`.  
- Perform quick sentiment or keyword analysis on documents via command-line NLP tools.  

### Some Examples
Here are some examples that you could consider when thinking about the types of things that Claude Code can now do on your behalf: 

1. "Find every PDF from this month in my Documents folder and bundle them into a zip file." 
2. "Search my notes folder for all files containing the word 'project deadline' and display the 
3. "Rename all photos in my vacation folder to include the date they were taken."
4. "Extract all tables from the quarterly report PDFs into CSV files." 
5. "Compress all video files larger than 500MB in my Media folder." 
6. "Search my Downloads folder for audio files and generate a playlist." 
7. "Use yt-dlp to download the latest podcast episode and convert it to MP3." 
8. "Find all text files containing meeting notes from last month and summarize key points." 
9. "Batch resize images in my Presentation folder to 1280x720." 

### Python Library Examples
Python is famous for having a set of powerful advanced libraries, and now that Claude Code can be your concierge to using those libraries, you have access to a wealth of data, image, and document processing capabilities. 

1. "Analyze the sentiment of customer feedback in this CSV file using TextBlob and summarize the overall mood."
2. "Use Pandas to clean and reformat this expense report spreadsheet, filling missing values and generating monthly totals." 
3. "Extract keywords and topics from this collection of blog posts using spaCy and create a summary report." 
4. "Create a word cloud from my book notes using Matplotlib and WordCloud libraries."
5. "Generate a line chart of sales data trends from this Excel file using Matplotlib." 
6. "Convert this directory of JPG images into PNG format and resize them using Pillow library." 
7. "Use OpenCV to detect and blur faces in images for privacy before sharing them." 
8. "Apply language translation on product descriptions using the Googletrans Python package." 
9. "Use scikit-learn to cluster customer profiles from this dataset and identify distinct segments."
10. "Summarize multiple PDF research articles into bullet points using PyMuPDF and NLP libraries." 

# And more...

## Using Talk to Text

I use talk-to-text regularly for Claude Code to make things go even faster.   I started out by using the native Mac talk-to-text, but recently switched to [Wispr Flow](https://ref.wisprflow.ai/david-hague) (affiliate link) which is even better and does some clean up of your speech. I find it to be a lot faster to get things done, especially when I'm working between multiple Claude code terminals.

## See your usage
You can see your token usage and what you would've spent through the API had you not been using your Anthropic subscription by running the following command:

`npx ccusage@latest`

This will show you a detailed day-by-day list of the tokens that you used per day and a monthly summary of the total cost that it would have cost to do the same work through the API.
