# Content Management System Guide

This guide explains how to use the Nuxt Content v3 system set up for this project.

## Overview

The content system manages two types of content:
- **Guides** (`/content/guides/`) - Practical how-to content displayed at `/guides`
- **Blog Posts** (`/content/blog/`) - Analysis and insights displayed at `/blog`

Both use Markdown files with frontmatter metadata and are automatically processed and displayed.

## Creating New Content

### 1. Guides

Create a new `.md` file in `/content/guides/`:

```markdown
---
title: "Your Guide Title"
description: "Brief description that appears on the guides page"
category: "Implementation" # Optional: groups guides by category
order: 4 # Optional: controls display order (lower numbers first)
tags: ["tag1", "tag2"] # Optional: displayed as pills on the guide
publishedAt: "2024-01-30T00:00:00Z" # Optional: ISO date string
updatedAt: "2024-01-30T00:00:00Z" # Optional: ISO date string
---

# Your Guide Title

Your markdown content goes here...

## Section Heading

- Bullet points
- Work great

### Subsection

Code blocks are supported:

```python
def example():
    return "Hello World"
```

> Blockquotes look great too

**Bold text** and *italic text* are styled automatically.
```

### 2. Blog Posts

Create a new `.md` file in `/content/blog/`:

```markdown
---
title: "Your Article Title"
description: "Brief description for the blog listing page"
author: "Author Name" # Optional: displayed on article pages
tags: ["strategy", "analysis"] # Optional: shown as pills
publishedAt: "2024-01-30T00:00:00Z" # Optional: shown on listing and detail
updatedAt: "2024-01-30T00:00:00Z" # Optional: "Updated" timestamp
---

# Your Article Title

Your markdown content...
```

## File Naming

- Use lowercase with hyphens: `ai-cost-optimization.md`
- The filename becomes the URL slug: `/guides/ai-cost-optimization`
- Don't include dates in filenames - use frontmatter instead

## Markdown Styling

All markdown content is styled using the global CSS file `/assets/css/prose.css`. This file controls the appearance of all content elements.

### Supported Elements

| Markdown | Result | Styling Location |
|----------|--------|------------------|
| `# Heading 1` | Large page heading | `.prose h1` in prose.css |
| `## Heading 2` | Section heading | `.prose h2` in prose.css |
| `### Heading 3` | Subsection heading | `.prose h3` in prose.css |
| `**bold**` | **Bold text** | `.prose strong` in prose.css |
| `*italic*` | *Italic text* | `.prose em` in prose.css |
| `[link](url)` | Clickable link | `.prose a` in prose.css |
| `` `code` `` | Inline code | `.prose code:not(pre code)` in prose.css |
| `> Quote` | Blockquote | `.prose blockquote` in prose.css |
| `- List item` | Bullet list | `.prose ul`, `.prose li` in prose.css |
| `1. Numbered` | Numbered list | `.prose ol`, `.prose li` in prose.css |

### Code Blocks

````markdown
```python
def hello():
    return "World"
```
````

Code blocks get syntax highlighting and are styled with `.prose pre` and `.prose pre code` in prose.css.

## Customizing Styles

### Method 1: Edit Global CSS (Recommended)

Edit `/assets/css/prose.css` to change how elements appear across all content:

```css
/* Make headings bigger */
.prose h1 {
  @apply text-5xl; /* Change from text-4xl */
}

/* Change link colors */
.prose a {
  @apply text-brand-coral; /* Use coral instead of blue */
}

/* Adjust paragraph spacing */
.prose p {
  @apply mb-6; /* More space between paragraphs */
}
```

### Method 2: Tailwind Classes (For specific pages)

In your Vue components, wrap content with additional classes:

```vue
<div class="prose prose-lg prose-blue">
  <ContentRenderer :value="content" />
</div>
```

### Method 3: Custom CSS Classes

Add custom styles in component `<style>` blocks for page-specific styling:

```vue
<style scoped>
.prose h2 {
  @apply border-b border-gray-200 pb-2;
}
</style>
```

## Content Structure

```
content/
├── guides/
│   ├── ai-agents-quick-start.md
│   ├── llm-cost-optimization.md
│   └── proactive-ai-systems.md
└── blog/
    └── ai-disruption-2024.md
```

## URLs and Routing

- **Guides List**: `/guides` - Shows all guides in a card grid
- **Guide Detail**: `/guides/[filename]` - Individual guide pages
- **Blog List**: `/blog` - Shows all blog posts in a card grid
- **Blog Detail**: `/blog/[filename]` - Individual blog post pages

The filename (without `.md`) becomes the URL slug automatically.

## Advanced Features

### Image Support

```markdown
![Alt text](/images/my-image.jpg)
```

Images are automatically styled with rounded corners and shadows via `.prose img` in prose.css.

### Table Support

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Data 1   | Data 2   |
```

Tables are styled with `.prose table`, `.prose th`, `.prose td` in prose.css.

### Internal Links

Link between content:

```markdown
[See our guides](/guides)
[Read more about AI costs](/guides/llm-cost-optimization)
```

## Development Workflow

1. **Create content**: Add `.md` file to appropriate folder
2. **Add frontmatter**: Include required metadata at the top
3. **Write markdown**: Use standard markdown syntax
4. **Preview**: Content appears automatically on the site
5. **Style**: Edit `/assets/css/prose.css` if needed

## Content Collections Configuration

The collections are defined in `/content.config.ts`:

```typescript
export default defineContentConfig({
  collections: {
    guides: defineCollection({
      type: 'page',
      source: 'guides/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string().optional(),
        order: z.number().optional(),
        // ... other fields
      })
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string().optional(),
        // ... other fields
      })
    })
  }
})
```

## Troubleshooting

### Content Not Appearing
- Check frontmatter syntax (YAML format)
- Ensure required fields are present (`title`, `description`)
- Restart dev server: `npm run dev`

### Styling Issues
- Check `/assets/css/prose.css` for relevant selectors
- Use browser dev tools to inspect generated HTML
- Remember: changes to prose.css affect all content

### Invalid Query Errors
- Verify frontmatter fields match schema in `content.config.ts`
- Check for special characters in content
- Ensure dates are in ISO format: `"2024-01-30T00:00:00Z"`

## Quick Reference

**New Guide**: Create `/content/guides/my-guide.md` → Appears at `/guides/my-guide`
**New Blog Post**: Create `/content/blog/my-post.md` → Appears at `/blog/my-post`
**Style Changes**: Edit `/assets/css/prose.css`
**Schema Changes**: Edit `/content.config.ts`

All content uses the same styling system, so changes to prose.css affect both guides and blog posts consistently.