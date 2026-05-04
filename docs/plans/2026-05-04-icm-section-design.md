# ICM Section — Design

**Status:** Validated through brainstorming, 2026-05-04. Ready for skeleton-pass writing.

**Goal:** Add a new top-level `/icm/` section to time2value.com that walks a non-technical reader through Interpreted Context Methodology (ICM) in a 5-part series — what it is, why it matters, how it works, what it looks like in practice, and where it's heading. The section is layered to serve three reader outcomes (perspective shift, evaluator confidence, hands-on practitioner), credits Jake Van Clief as the originator while staking out an honest extension into durable execution, and ships with two starter skills so a reader can act on what they've read.

**Source material:** Vault notes in `iCloud~md~obsidian/Documents/DaveHague/Dev Notes/Interpreted Context Methodology/` (eight files) and `…/Durable Execution/` (four files), Jake Van Clief's GitHub repo, paper, YouTube channel, and Skool community, plus David's own ICM workspaces (`~/source/scripts-and-agents/icm-workspaces/meeting-summarizer` and `…/content-to-guide`) and starter skills (`…/Time To Value/Reputation Partners/claude-pivot/icm/skills/icm-workspace-builder` and `…/skill-to-icm-converter`).

---

## 1. Decisions locked in brainstorming

| Decision | Choice |
|---|---|
| Site placement | New top-level section: `/icm/` (not `/guides/`, not `/blog/`) |
| Reader outcome | Layered: perspective shift, evaluator confidence, practitioner adoption |
| Audience | Tech-adjacent professional (consultant, PM, designer, founder, agency owner). Soft drift to soft-technical in Part 5 |
| Series shape | Linear 5-part ladder: Concept → Mechanics → Decision/Stack → Practice → Beyond |
| Per-part format | Recurring scaffold: Hook → Core idea → One visual → Worked example → 3 takeaways. Length 2,500–3,500 words |
| Visuals | Mermaid / HTML / code-block folder trees for v1; iterate to image-generator output after prose locks |
| Attribution | Anchored: prominent credit to Jake on landing + Part 1; inline for specific Jake-isms; Part 5 explicit handoff to David's own forward-looking work |
| PDF artifact | Regenerate from published series after Parts 1–5 ship; not the original PDF |
| Existing PDF (`ICM - A Readers Guide.pdf`) | Retire as public artifact; remains a private thinking artifact and informs writing |
| Humanizer pass | Mandatory per part before publish (per global CLAUDE.md rule) |
| Tools that run ICM | Cowork as marquee; OpenWork as quick mention with honest "haven't tested personally" caveat; AGENTS.md/CLAUDE.md as the durability anchor |
| Starter skills | Both shipped, sanitized: `icm-workspace-builder`, `skill-to-icm-converter` |
| Agent SDK landscape (OpenAI Agents SDK, Pydantic AI, etc.) | Deferred to a separate `/blog/` post; cross-linked from Part 3 only |

### Hard rules (David's, applied throughout)

1. **No fabricated examples.** If we can't cite a source or point at a real artifact, we don't include it. KPMG demo is dropped because it can't be independently verified.
2. **Honest attribution.** Jake gets credit; David's contributions get clean handoff in Part 5.
3. **Honest aspirational framing.** Part 5 says "I'm not running this in production yet" out loud. OpenWork mention says "I haven't tested personally."
4. **Run every published piece through `/humanizer`.**

---

## 2. Site architecture

### Routes added

```
pages/
  icm/
    index.vue              # /icm — landing page (custom layout)
    [id].vue               # /icm/[part-slug] — part detail
content/
  icm/
    01-folders-not-frameworks.md
    02-the-five-room-house.md
    03-the-stack.md
    04-icm-in-the-wild.md
    05-beyond-icm.md
    about-this-series.md           # standalone About + credits page
public/
  icm/
    skills/
      icm-workspace-builder.md     # sanitized
      skill-to-icm-converter.md    # sanitized
      icm-starter-kit.zip          # both bundled
    icm-complete-series.pdf        # generated after Parts 1–5 ship
    diagrams/                      # PNG/SVG exports of finalized visuals
```

### Frontmatter schema for parts

```yaml
---
title: "The Stack — Chat, Skills, ICM, Frameworks"
description: "How to know which tool fits the job before you build."
order: 3
part: "Part 3 of 5"
readingTime: "14 min"
audience: "Evaluator"          # Perspective | Evaluator | Practitioner | Forward-looking
publishedAt: "2026-05-..."
tags: ["ICM", "AI agents", "context engineering"]
---
```

### Component reuse + new components

- Reuse: `NavHeader`, `FooterSection` as-is
- Add: `NavHeader` gets a top-level "ICM" link (gated behind `v-if="seriesPublished"` until Part 1 ships)
- Add: `ICMSeriesLayout.vue` — wraps each part with part-number header, reading-progress bar, prev/next nav. No sidebar (keeps mobile read clean)
- Landing page (`pages/icm/index.vue`) is custom layout, not the existing cards grid

### Content collection

`content.config.ts` gets a new `icm` collection alongside `guides`, `blog`, `skills` — schema mirrors guides plus the part-specific fields (`order`, `part`, `readingTime`, `audience`).

---

## 3. The five parts — outlines

Each follows the recurring scaffold: **Hook → Core idea → One visual → Worked example → 3 takeaways.**

### Part 1 — Folders, not Frameworks
*Audience: Perspective shift*

- **Hook:** The LangChain backlash. Octomind's documented "we ripped it out" post; the HN thread that piled on; the recent Reddit thread (BuildwithVignesh, Nov 2025) showing the sentiment has hardened, not softened. Lead with the Octomind quote: *"LLM application patterns are still in too much flux to be locked behind opinionated abstractions."*
- **Core idea:** Agent orchestration is fundamentally a file-organization problem, not a code problem. Frameworks are solving something the file system already does — they're operating at the wrong abstraction layer. The 60/30/10 rule (60% traditional code, 30% rule-based logic, 10% AI calls). The Book/Movie/Video Game framing for what to invest in.
- **Visual:** Side-by-side — same workflow as a LangChain Python graph vs. a folder tree. *"Spot the orchestration."*
- **Worked example:** Deferred to Part 4. Part 1 ends on the insight, not on a triumphant win. Honest framing: *"We'll see what this actually looks like in Part 4."*
- **Takeaways:** (1) Frameworks operate at the wrong abstraction layer for most agent work. (2) The 60/30/10 rule. (3) The Book/Movie/Video Game test for what to invest in.
- **Sources to cite:** [Octomind blog](https://www.octomind.dev/blog/why-we-no-longer-use-langchain-for-building-our-ai-agents), [HN thread](https://news.ycombinator.com/item?id=40739982), [Reddit/BuildwithVignesh](https://www.reddit.com/r/AI_Agents/comments/1p227ra/i_deleted_400_lines_of_langchain_and_replaced_it/), Jake's repo and paper for the 60/30/10 rule.

### Part 2 — The Five-Room House
*Audience: Mechanics — both evaluators and practitioners*

- **Hook:** Why dumping everything into ChatGPT produces *worse* output than feeding it less. Counter-intuitive: more context ≠ better. Cite the [MorphLLM context engineering piece](https://www.morphllm.com/context-engineering) and [Augment Code "junk drawer"](https://www.augmentcode.com/blog/your-agents-context-is-a-junk-drawer).
- **Core idea:** The five-layer context model, taught through Jake's "map / rooms / workspace" analogy.
  - Layer 0: CLAUDE.md (always loaded — the map)
  - Layer 1: Workspace CONTEXT.md (where do I go)
  - Layer 2: Stage CONTEXT.md (what do I do)
  - Layer 3: Reference material (what rules apply)
  - Layer 4: Working artifacts (what am I working with)
  - Total per stage: 2,000–8,000 tokens vs. 30,000–50,000 tokens monolithic
- **Visual:** Annotated diagram of the five layers with token budgets, captioned in plain English.
- **Worked example:** A real stage CONTEXT.md walked through line by line — Inputs / Process / Checkpoints / Audit / Outputs. Pull from David's `meeting-summarizer/stages/01-meeting-notes/CONTEXT.md` (real, his, no fabrication).
- **Takeaways:** (1) Less context, better output. (2) CONTEXT.md is routing only — never instructions. (3) Stage contracts are how you keep two different agents producing similar work.

### Part 3 — The Stack — Chat, Skills, ICM, Frameworks
*Audience: Evaluator (the load-bearing decision piece)*

- **Hook:** *"I keep seeing teams use ICM for tasks a skill could do, and frameworks for tasks ICM could do. The waste is in the mismatch."*
- **Core idea:** The Bitter Lesson (Sutton, 2019) as philosophical anchor — bespoke layers get eaten by general intelligence, so you want to be on the layer that doesn't get eaten. The full stack as the practical decision tool:

| Layer | What it does | Examples | Fits when |
|---|---|---|---|
| 1. Chat | One-off exploration | Bare ChatGPT, Claude | "I'm thinking out loud" |
| 2. Projects / Gems / Custom GPTs | Persistent context | Claude Projects, Gemini Gems, Custom GPTs | "I want the same context every chat" |
| 3. Skills | Atomic capabilities | Claude Skills, AGENTS.md skills | "I want it to do this one thing my way" |
| 4. Projects + Skills | Context + capabilities | (combined) | The natural combo for ad-hoc work |
| 5. ICM | Multi-step workflows | folders + CLAUDE.md / AGENTS.md | "I want a sequenced process with checkpoints" |
| 6. ICM + durable execution | Production-grade reliability | ICM + DBOS / LangGraph / Temporal | "I want it reliable without babysitting" |
| 7. Frameworks | Real-time, concurrent, dynamic | LangChain, LangGraph, Temporal | "Files-as-source-of-truth breaks down at scale" |

  Important nuance: ICM doesn't replace projects or skills; it sits above them. *"Projects + skills is the natural combo for ad-hoc work; ICM is a step up when you have multiple steps with handoffs."*
- **Visual:** A layered ladder diagram of the 7-tier stack, with projects+skills shown as a horizontal merge between tiers 2 and 3.
- **Worked example:** **The skill→ICM promotion story David actually walked.** Both `meeting-summarizer` and `content-to-guide` started as skills and got promoted. Walk through `meeting-summarizer`'s promotion: started as a skill (transcribe → summarize), grew action-items extraction, then key-insights, then optional extended notes only on request. By 5 things + 1 human checkpoint, it was too tangled for one skill — got promoted on 2026-05-04 (the workspace's own CLAUDE.md says "Promoted from the meeting-summarizer skill on 2026-05-04"). One-liner: *"Content-to-guide grew the same way."*
- **Takeaways:** (1) Skills for 1–3 atomic steps. (2) ICM for sequential, reviewed workflows. (3) Frameworks aren't wrong — they're often the wrong layer for the work *most* teams do.
- **Cross-links:** to existing `/guides/claude-projects-vs-skills.md` for projects-vs-skills deep dive; to deferred `/blog/` post on the SDK landscape (placeholder — *"For technical readers curious about the lightweight SDK landscape, see [link]"*); to `skill-to-icm-converter` skill download.
- **Sources to cite:** [Sutton's Bitter Lesson, incompleteideas.net](http://www.incompleteideas.net/IncIdeas/BitterLesson.html), Jake's Book/Movie/Video Game framing, David's own workspaces.

### Part 4 — ICM in the Wild
*Audience: Practitioner on-ramp*

- **Hook:** What a real ICM workspace looks like when you open it. Screenshots over speculation.
- **Core idea:** Two real workspaces from David's own work, simpler-first.
  1. **`meeting-summarizer`** — 5 stages (one gated, one human checkpoint at delivery). Show the whole stage list at once. Walk the gated-stage pattern (extended notes only on explicit user request) and the delivery checkpoint (folder confirm before write).
  2. **`content-to-guide`** — 7 stages, source-type config, two checkpoints, bundled skills. Use as the contrasting *"this is what it looks like at scale"* example.
- **Visual:** Annotated folder-tree screenshots of both workspaces, with arrows showing data flow.
- **Worked example:** *"How meeting-summarizer actually runs."* Pointing Cowork at the folder; Cowork reads CLAUDE.md, walks 01 → 02 → 03 (no pause), runs 04 only if the user asked for extended notes, pauses at 05 for the folder-confirm. No code, no terminal.
- **Takeaways:** (1) Stages are optional; routing tables drive the work. (2) Specs define WHAT, never HOW. (3) Anti-patterns kill more workspaces than missing features.
- **Convention-layer beat:** one paragraph explicitly noting that the workspace can have both a `CLAUDE.md` and an `AGENTS.md` (open standard read by Cursor, Codex CLI, Windsurf, Copilot, Devin). *"The convention is open. When the next harness ships, your folder is ready."*
- **Cross-link:** to `icm-workspace-builder` skill download — *"Want to build one yourself? This skill walks you through it."*

### Part 5 — Beyond ICM — Where We're Going
*Audience: Forward-looking. Voice drifts soft-technical with explicit warning at top.*

- **Hook (with warning):** *"This part gets a notch more technical because we're talking about what's missing from ICM today and what we want to build toward. It's also the most honest part of the series — I'm not running any of this in production yet. This is the direction, not the destination."*
- **Core idea:** ICM is a workflow specification language with no runtime semantics. The five workflow concepts you need to layer on for production reliability: deterministic replay, step-boundary checkpoints, idempotency, compensations, signals/timers. The path to add them as YAML frontmatter on stage CONTEXT.md plus a workspace-level `workflow.yaml` — the spec stays readable; a thin compiler renders it onto whichever durable runtime fits (DBOS Transact, LangGraph, Temporal).
- **Visual:** A diagram of the same workflow as ICM markdown, then as a renderable durable workflow — same source, different runtime. Show that workflows survive when the runtime swaps.
- **Worked example:** **NOT a "we ran civic-pulse on DBOS" claim.** Instead: walk through what `workflow.yaml` would look like for `meeting-summarizer` — declaring the state schema, naming the human checkpoint, marking side-effects (the file write at stage 05). Frame as *"Here's what the next layer of writing for this workspace would look like."* Honest aspirational tone.
- **Takeaways:** (1) ICM is the spec; the runtime is a renderer. (2) You don't need a runtime to start writing the contracts — they prevent incidents on their own. (3) The phased path: workflow.yaml → DBOS → LangGraph → Temporal, only as you outgrow each.

---

## 4. Landing page (`pages/icm/index.vue`)

Custom layout, not the existing cards grid. Eight stacked sections:

1. **Hero**
   - Title: *Interpreted Context Methodology*
   - Subhead: *"AI tools are moving fast. ICM is a way to build your AI work as folders and markdown — portable across the next agent harness, readable to humans, runnable without writing code. A 5-part series."*
   - Primary CTA: *Start with Part 1 →*
   - Secondary CTA: *Or pick your path below*

2. **90-second "What is ICM"**
   - Three plain-English paragraphs. Establishes (a) the problem, (b) the core idea, (c) what the series gives you. No diagrams here — that's Part 1's job.

3. **Audience splitter — three cards**
   - *Got 5 minutes?* → *Read Part 1* (perspective)
   - *Evaluating an AI project or vendor?* → *Read Parts 1–3* (evaluator)
   - *Ready to build?* → *Read all 5* (practitioner)
   - Each card is a clickable shortcut to the right starting point.

4. **The series — table of contents**
   - Linear list of all 5 parts. Each row: number, title, one-line description, reading time, audience tag.

5. **Tools that can run an ICM workspace**
   - **Cowork (recommended):** Mac/Windows desktop app. File-system-native. Reads CLAUDE.md. Designed for non-developers.
   - **OpenWork (quick mention, honest caveat):** *"MIT-licensed open-source alternative if you'd rather not be locked into Anthropic. I haven't personally tested it but I like the no-lock-in posture."*
   - **The convention layer:** *"An ICM workspace can include an AGENTS.md alongside its CLAUDE.md so it also runs on Cursor, Codex CLI, Windsurf, Copilot, and Devin. Those are developer tools — but the point is portability. When a new non-tech harness ships, your folder is ready."*
   - **Honest note about the rest:** *"ChatGPT Workspace Agents and Microsoft Copilot are powerful but connect to cloud apps rather than local folders — different shape of tool."*

6. **Get started — starter skills**
   - **icm-workspace-builder** — interview-driven scaffolding for new workspaces
   - **skill-to-icm-converter** — promote skills that have grown to 3+ steps
   - Single-zip download for both

7. **About this series + attribution**
   - Short paragraph crediting Jake Van Clief
   - Links: Jake's GitHub repo, paper, YouTube, Skool community, rtk-ai SQLite writeup
   - *"This series synthesizes Jake's methodology for a non-technical audience and extends it with a forward-looking chapter on durable execution."*
   - Link to `/icm/about-this-series` (fuller version)

8. **PDF download — placeholder until series ships**
   - `v-if="seriesComplete"`. For v1, either renders nothing or a *"Full series PDF coming when Part 5 ships"* note.

---

## 5. Tone & voice

- **Steady-state:** tech-adjacent professional. Knows what an API is in passing; doesn't code; can evaluate vendors.
- **Voice drift:** Part 5 is a notch more technical, with an explicit warning at top.
- **Humanizer-friendly:** no em-dash overuse, no "here's the thing nobody's talking about," no rule-of-three flourishes, no "it is worth noting that…" Avoid the AI-tells the humanizer skill scrubs.
- **Match the existing site:** see `content/guides/claude-projects-vs-skills.md` for tone reference. Plain, declarative, occasional dry wit. Not chatty. Not academic.

---

## 6. Writing & publishing pipeline

### Order of work

1. **Skeleton pass — all 5 parts at once.** Per part: hook sentence, core idea in two paragraphs, hand-off line to next part, takeaway bullets. ~1 day total. Forces the arc to hold together before prose lock-in.
2. **Landing page next.** Build `/icm/index.vue`, audience splitter, TOC, tools section, starter-skills section, attribution block. Landing exists as the target the parts are written to fit.
3. **Flesh-out pass — Parts 1 → 5 in order.** ~2,500–3,500 words each. Visuals as code-block folder trees, mermaid diagrams, or simple HTML tables for v1. Image-generator polish *after* prose locks.
4. **Skill sanitization** alongside Part 3 (where the converter skill is referenced). Both skills share voice with Part 3.
5. **Final pass — humanizer + source verification.** Each part runs through `/humanizer` before publish. Source-verification queue cleared.
6. **PDF generation.** Only after all 5 parts publish.

### Per-part writing loop

```
draft → self-review against scaffold → /humanizer pass →
verify cited sources still resolve → check no fabricated examples →
add visual (v1 mermaid/code) → publish as draft → read on mobile →
publish as live → cross-link prev/next
```

### Publishing sequence

- **Phase 1:** Skeletons + landing page exist. NavHeader's ICM link gated until Part 1 ships.
- **Phase 2:** Part 1 ships → ICM nav link goes live → soft launch (no promotion).
- **Phase 3:** Parts 2–5 ship at David's pace.
- **Phase 4:** PDF generated, lead-magnet section on landing page activates, optional full-series LinkedIn announcement.

### PDF generation

Use the OpenClaw pattern (`/public/guides/openclaw/`). Combine Parts 1–5 markdown into a single document, run through pandoc with styled CSS, output to `/public/icm/icm-complete-series.pdf`. Email-gating decision parked until then.

---

## 7. Source-verification queue (track during writing)

| Source | Use | Verify |
|---|---|---|
| Octomind blog post | Part 1 hook | Re-fetch URL, confirm quote |
| HN thread on LangChain | Part 1 hook | Re-fetch URL |
| Reddit thread (BuildwithVignesh, Nov 2025) | Part 1 hook | Re-fetch URL |
| Sutton's Bitter Lesson | Part 3 anchor | Fetch from incompleteideas.net, quote directly |
| Workspace Agent vs Custom GPT framing | Part 3 stack discussion | Find attribution OR paraphrase confidently without quote |
| MorphLLM context engineering | Part 2 hook | Re-fetch URL |
| Augment Code "junk drawer" | Part 2 hook | Re-fetch URL |
| Cowork product pages | Landing tools section | Re-fetch URLs |
| OpenWork GitHub | Landing tools section | Re-fetch URL |
| AGENTS.md standard | Landing convention layer + Part 4 | Re-fetch agents.md homepage |
| Jake's repo / paper / YouTube / Skool | Attribution block | Re-fetch all |
| rtk-ai SQLite writeup | Attribution block | Re-fetch URL |

Workflow: any source that fails to resolve at writing time gets either replaced with a working alternative or removed (no broken links).

---

## 8. Quality gates

Three hard rules applied throughout:

1. **No fabricated examples.** If we can't cite a source or point at a real artifact, we don't include it. Already cost us KPMG demo. Will likely cost us more during writing — accept the loss.
2. **Voice consistency across the 5 parts.** Tech-adjacent reader, soft drift in Part 5. Humanizer scrubs AI-tells.
3. **Stay-honest markers.** Part 5 says "I'm not running this in production yet" out loud. OpenWork mention says "I haven't tested personally." Part 1 ends on insight, not a triumph it can't document. Lower the trust ceiling deliberately and gain it back in the parts that earned it.

---

## 9. Open items / decisions deferred

- **Workspace Agent vs Custom GPT framing source.** Web search interrupted; will resolve during Part 3 writing pass.
- **Email-gated PDF lead magnet.** Decision deferred until Part 5 ships and the PDF exists.
- **Part 3 cross-link to a future SDK-landscape blog post.** Reserved a linking spot; the blog post itself is out of scope for this design.
- **Image-generator iteration on visuals.** v1 ships with mermaid/code-block visuals; image polish is a follow-on.

---

## 10. Out of scope (explicit)

- The Agent SDK landscape post (OpenAI Agents SDK, Pydantic AI, Google ADK, etc.). Will live in `/blog/`, cross-linked from Part 3, written separately.
- Productionizing David's own workspaces on DBOS / LangGraph / Temporal. Part 5 frames the direction; the actual build is its own project.
- A community / comments layer on the ICM section. v1 is read-only.
- Translations or non-English versions.

---

## Appendix A: Source notes location reference

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/DaveHague/
  Dev Notes/
    Interpreted Context Methodology/
      ICM Overview.md
      ICM Five-Layer Context Model.md
      ICM Stage Contracts.md
      ICM Conventions Reference.md
      ICM Workspace Examples.md
      ICM vs Framework Approaches.md
      ICM Practical Patterns and Anti-Patterns.md
      ICM Related Patterns and Research.md
    Durable Execution/
      Durable Execution (Workflows).md
      Durable Execution Options.md
      ICM to Durable Execution Path.md
      DBOS Durable Execution POC.md

~/source/scripts-and-agents/icm-workspaces/
  meeting-summarizer/         # Real, used in Parts 2, 3, 4
  content-to-guide/           # Real, used in Part 4

~/Library/Mobile Documents/iCloud~md~obsidian/Documents/DaveHague/
  Time To Value/Reputation Partners/claude-pivot/icm/skills/
    icm-workspace-builder/SKILL.md      # Sanitize + ship
    skill-to-icm-converter/SKILL.md     # Sanitize + ship

~/Downloads/ICM-30pg-Paper/
  ICM - A Readers Guide.pdf   # Private thinking artifact, not shipped
```

## Appendix B: Reference Q&A (decisions and reasoning)

The full brainstorming dialogue captured these decisions in real time. Key moments:

- *Why a top-level section, not /guides/*: ICM is a methodology, not a tip. It deserves its own brand on the site.
- *Why linear ladder, not story-first*: David's preference; concept-builds-cleanly suits this material.
- *Why Part 3 absorbs the framework-positivity ask*: a standalone "where frameworks fit" piece would read apologetic. Putting framework-positivity inside the decision-shaped Part 3 presents the whole stack as one coherent picture.
- *Why drop KPMG demo*: David couldn't independently verify it. No-fabrication rule.
- *Why drop ChatGPT Workspace Agents and Microsoft Copilot from the tools lineup*: research confirmed they're cloud-app-shaped, not folder-native. Including them would mislead the reader.
- *Why ship the starter skills*: they're the natural action a reader takes after finishing the series; without them, the series is theory.
