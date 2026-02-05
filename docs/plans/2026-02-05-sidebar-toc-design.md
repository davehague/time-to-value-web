# Sidebar TOC Navigation Design

## Overview

Add a sticky sidebar with table of contents navigation to guide and blog pages. The sidebar shows heading hierarchy (H2/H3/H4), highlights the active section during scroll, and collapses to a drawer on mobile.

## Decisions

| Decision | Choice |
|----------|--------|
| Heading levels | H2 + H3 + H4 (full hierarchy) |
| Mobile behavior | Collapsible drawer |
| Active section highlighting | Yes (Intersection Observer) |
| Sidebar position | Left side |
| Implementation | Shared component for guides and blog |
| TOC extraction | Nuxt Content's built-in `body.toc` |

## Component Architecture

### ArticleWithSidebar.vue

Main wrapper component providing two-column layout with sticky sidebar.

**Location:** `/components/ArticleWithSidebar.vue`

**Props:**
```typescript
{
  document: Object  // The Nuxt Content document
  backLink: { to: string, label: string }  // e.g., { to: '/guides', label: 'Back to Guides' }
}
```

**Slots:**
- `header` - For title, metadata, tags (differs between guides and blog)
- `footer` - For CTA and navigation links

**Responsibilities:**
- Extract TOC from `document.body.toc.links`
- Manage active heading state
- Render desktop sidebar and mobile drawer
- Render content via `<ContentRenderer>`

### TocSidebar.vue

Dedicated component for rendering the table of contents.

**Location:** `/components/TocSidebar.vue`

**Props:**
```typescript
{
  links: Array<{ id: string, text: string, depth: number, children?: Array }>
  activeId: string  // Currently visible section
}
```

**Features:**
- Recursive rendering for nested headings
- Indentation via `pl-` classes based on depth
- Active item: `text-brand-blue font-medium`
- Inactive items: `text-gray-600 hover:text-brand-dark`
- Smooth scroll on click

### useActiveHeading.ts

Composable for tracking which heading is currently visible.

**Location:** `/composables/useActiveHeading.ts`

**Implementation:**
- Uses Intersection Observer API
- Watches all heading elements (h2, h3, h4) in the article
- Returns reactive `activeId` ref
- Threshold ~0.1 for early detection

## Layout Structure

### Desktop (lg: and up)

```
┌─────────────────────────────────────────────────────┐
│  NavHeader                                          │
├──────────────┬──────────────────────────────────────┤
│              │                                      │
│   Sidebar    │         Article Content              │
│   (sticky)   │         (max-w-3xl)                  │
│   ~250px     │                                      │
│              │                                      │
│   - H2       │                                      │
│     - H3     │                                      │
│       - H4   │                                      │
│     - H3     │                                      │
│   - H2       │                                      │
│              │                                      │
├──────────────┴──────────────────────────────────────┤
│  FooterSection                                      │
└─────────────────────────────────────────────────────┘
```

### CSS Specifications

- Outer container: `max-w-6xl` (wider than current `max-w-4xl`)
- Sidebar: `sticky top-28`, `w-64`, `max-h-[calc(100vh-8rem)]`, `overflow-y-auto`
- Content area: `flex-1`, maintains readable line length

### Mobile (below lg:)

- Sidebar hidden by default
- Floating button (bottom-right) toggles slide-in drawer from left
- Drawer overlays content with semi-transparent backdrop
- Backdrop click closes drawer

## File Changes

### New Files

1. `components/ArticleWithSidebar.vue` - Main layout wrapper
2. `components/TocSidebar.vue` - TOC rendering component
3. `composables/useActiveHeading.ts` - Intersection Observer logic

### Modified Files

1. `pages/guides/[id].vue` - Refactor to use ArticleWithSidebar
2. `pages/blog/[id].vue` - Refactor to use ArticleWithSidebar

### No Changes Needed

- `content.config.ts` - Nuxt Content already extracts TOC by default
- `nuxt.config.ts` - No config changes required
- Markdown files - Headings already have IDs auto-generated

## Dependencies

None new - all implemented with Vue 3 Composition API and Tailwind CSS.

## Implementation Order

1. Create `useActiveHeading.ts` composable
2. Create `TocSidebar.vue` component
3. Create `ArticleWithSidebar.vue` component
4. Refactor `pages/guides/[id].vue` to use new component
5. Test on guides, verify TOC extraction and active highlighting
6. Refactor `pages/blog/[id].vue` to use new component
7. Test mobile drawer behavior
