# Public Library: Navigation & Newsletter Signup Design

## Overview

Improve content discoverability by adding shared navigation to all pages, and add a "soft CTA" with newsletter signup at the bottom of guides/blog posts.

## Goals

1. **Shared navigation** - Header appears on all pages (guides, blog, homepage)
2. **Direct content links** - Replace `#content` nav link with direct `/guides` and `/blog` links
3. **Soft CTA** - Non-pushy call-to-action at bottom of content pages
4. **Newsletter signup** - Simple email capture to Mailjet list

## Design Decisions

- **Keep guides and blog separate** - No unified "library" collection
- **Bottom CTA only** - After they've consumed the content
- **Mailjet list only** - No welcome email, just add to list ID `297950`
- **Reuse existing env vars** - `MAILJET_API_KEY` and `MAILJET_API_SECRET`

---

## Implementation

### New Files

#### `components/NavHeader.vue`

Shared navigation header extracted from `pages/index.vue`.

Navigation links:
- About → `/#about` (scrolls on homepage, navigates from other pages)
- Guides → `/guides`
- Blog → `/blog`
- Services → `/#services`
- Get Started → `/#contact`

Must handle:
- Context-aware links (hash scroll vs navigation)
- Mobile responsive (existing hamburger pattern if any)
- Fixed positioning with backdrop blur

#### `components/GuideCTA.vue`

Soft CTA component for bottom of content pages.

Content:
```
This guide was my gift to you. I want everyone to be able to punch
above their weight class by leveraging AI to do more with what they've got.

If this helped and you want to know how I help companies through AI
consulting, mentoring, or workshops — sign up for my email list or
reach out below.

[Email input] [Stay in Touch button]

Or schedule a conversation → (links to /#contact)
```

Features:
- Email input with inline validation
- Success/error states
- Honeypot spam protection
- Link to contact section

#### `server/api/subscribe.post.ts`

Newsletter subscription endpoint.

Request:
```typescript
{ email: string }
```

Response:
```typescript
{ success: true } | { success: false, error: string }
```

Logic:
1. Validate email format
2. Check honeypot field
3. Add contact to Mailjet list 297950 via Mailjet API
4. Return success/error

Mailjet API call:
- Endpoint: `https://api.mailjet.com/v3/REST/contactslist/297950/managecontact`
- Method: POST
- Body: `{ Email: email, Action: "addnoforce" }`

### Modified Files

#### `pages/index.vue`

- Remove inline nav (lines 4-28)
- Add `<NavHeader />` component at top of template

#### `pages/guides/index.vue`

- Add `<NavHeader />` at top of template
- Wrap content in layout div

#### `pages/guides/[id].vue`

- Add `<NavHeader />` at top of template
- Add `<GuideCTA />` before the footer
- Wrap content in layout div

#### `pages/blog/index.vue` (if exists)

- Add `<NavHeader />` at top

#### `pages/blog/[slug].vue` (if exists)

- Add `<NavHeader />` at top
- Add `<GuideCTA />` before footer

---

## File Structure After Implementation

```
components/
├── NavHeader.vue          (new)
├── GuideCTA.vue           (new)
├── ...existing components

server/api/
├── send-email.post.ts     (existing)
├── subscribe.post.ts      (new)

pages/
├── index.vue              (modified - uses NavHeader)
├── guides/
│   ├── index.vue          (modified - adds NavHeader)
│   └── [id].vue           (modified - adds NavHeader + GuideCTA)
├── blog/
│   ├── index.vue          (modified - adds NavHeader)
│   └── [slug].vue         (modified - adds NavHeader + GuideCTA)
```

---

## Not In Scope

- Welcome email automation
- Double opt-in confirmation
- Unsubscribe handling (Mailjet handles this in campaigns)
- Mobile hamburger menu (add later if needed)
- Blog CTA variations (same component for now)
