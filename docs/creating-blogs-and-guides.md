# Creating Blog Posts and Guides

This guide explains how to add new content to the Time To Value website.

## Quick Start

1. Create a new `.md` file in the appropriate folder:
   - **Guides**: `content/guides/your-guide-slug.md`
   - **Blog posts**: `content/blog/your-post-slug.md`

2. Add the required frontmatter (see templates below)

3. Write your content in Markdown

4. Run `npm run dev` to preview locally

## File Location

```
content/
├── guides/
│   └── your-guide-slug.md
└── blog/
    └── your-post-slug.md
```

The filename becomes the URL slug:
- `content/guides/ai-basics.md` → `/guides/ai-basics`
- `content/blog/my-first-post.md` → `/blog/my-first-post`

## Guide Template

```markdown
---
title: "Your Guide Title"
description: "A brief description that appears in the card and SEO meta (1-2 sentences)"
category: "Category Name"
tags: ["tag1", "tag2"]
order: 1
publishedAt: "2026-01-21T00:00:00Z"
updatedAt: "2026-01-21T00:00:00Z"
---

Your guide content goes here...

## Section Heading

More content...
```

### Guide Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | The guide title |
| `description` | Yes | Short description for cards and SEO |
| `category` | No | Category label (e.g., "Claude Code", "AI Strategy") |
| `tags` | No | Array of tags for filtering |
| `order` | No | Sort order on the guides listing page (lower = first) |
| `publishedAt` | No | ISO 8601 date string |
| `updatedAt` | No | ISO 8601 date string (shows "Updated" badge if different from publishedAt) |

## Blog Post Template

```markdown
---
title: "Your Blog Post Title"
description: "A brief description for the card and SEO meta"
author: "David Hague"
tags: ["ai", "strategy"]
publishedAt: "2026-01-21T00:00:00Z"
updatedAt: "2026-01-21T00:00:00Z"
---

Your blog post content goes here...
```

### Blog Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | The post title |
| `description` | Yes | Short description for cards and SEO |
| `author` | No | Author name |
| `tags` | No | Array of tags |
| `publishedAt` | No | ISO 8601 date string |
| `updatedAt` | No | ISO 8601 date string |

## Markdown Features

Standard Markdown is supported, including:

- **Bold** and *italic* text
- [Links](https://example.com)
- `inline code`
- Code blocks with syntax highlighting
- Lists (ordered and unordered)
- Blockquotes
- Tables
- Images

### Code Blocks

Use triple backticks with a language identifier:

````markdown
```javascript
const greeting = "Hello, world!";
console.log(greeting);
```
````

### Images

Place images in `public/images/` and reference them:

```markdown
![Alt text](/images/your-image.png)
```

## Tips

1. **Use descriptive slugs** - `claude-code-tips-and-tricks` is better than `guide-1`

2. **Keep descriptions concise** - They appear on cards, so 1-2 sentences max

3. **Set the order field for guides** - Controls the display order on `/guides`

4. **Update the `updatedAt` field** - When you make significant changes to existing content

5. **Preview locally** - Always run `npm run dev` to check your content before deploying
