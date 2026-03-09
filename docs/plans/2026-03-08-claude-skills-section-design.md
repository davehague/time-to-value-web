# Claude Skills Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a first-class "Skills" section to the website with a listing page, detail pages, and navigation.

**Architecture:** Content-driven pages using @nuxt/content collections (same pattern as guides/blog). Markdown files provide commentary, existing `.txt` files in `/public/claude-skills/` serve downloads. Detail pages fetch and display the raw skill file as a preview.

**Tech Stack:** Nuxt 3, Vue 3 Composition API, @nuxt/content, Tailwind CSS

---

### Task 1: Add Skills Content Collection

**Files:**
- Modify: `content.config.ts`

**Step 1: Add skills collection definition**

Add a `skills` collection alongside the existing `guides` and `blog` collections in `content.config.ts`. Include `downloadFile` and `category` in the schema:

```typescript
skills: defineCollection({
  type: 'page',
  source: 'skills/**/*.md',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    downloadFile: z.string(),
    publishedAt: z.string().datetime().optional(),
    updatedAt: z.string().datetime().optional(),
  })
}),
```

**Step 2: Verify**

Run: `npm run postinstall` to regenerate types.
Expected: No errors.

---

### Task 2: Add Navigation Link

**Files:**
- Modify: `components/NavHeader.vue`

**Step 1: Add Skills link in desktop nav**

In the desktop `<div class="hidden md:flex items-center space-x-8">` section, add a Skills NuxtLink between the Guides and Blog links (after line 25, before line 26):

```vue
<NuxtLink
  to="/skills"
  class="text-brand-dark hover:text-brand-blue transition-colors font-medium"
>
  Skills
</NuxtLink>
```

**Step 2: Add Skills link in mobile nav**

In the mobile `<div class="flex flex-col space-y-4">` section, add a Skills NuxtLink between Guides and Blog (after line 76, before line 78):

```vue
<NuxtLink
  to="/skills"
  class="text-brand-dark hover:text-brand-blue transition-colors font-medium"
  @click="mobileMenuOpen = false"
>
  Skills
</NuxtLink>
```

**Step 3: Verify**

Run dev server, confirm Skills appears in nav between Guides and Blog on both desktop and mobile.

---

### Task 3: Create Skills Listing Page

**Files:**
- Create: `pages/skills/index.vue`

**Step 1: Create the listing page**

Model after `pages/guides/index.vue` but use single-column card layout with two CTAs per card. Key differences from guides:
- Single column (`max-w-3xl`) instead of grid
- Each card has "Read More →" link AND "↓ Download" link
- Cards show: category badge, title, description, tags, both CTAs

```vue
<template>
  <div class="min-h-screen bg-gray-50">
    <NavHeader />
    <div class="container mx-auto px-6 py-20 pt-28">
      <h1 class="text-3xl md:text-4xl font-inter font-bold text-brand-dark mb-6 text-center">
        Claude Skills
      </h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto font-opensans leading-relaxed text-center mb-12">
        Curated skills for Claude Code that I use and recommend. Each one is a drop-in file
        for your <code class="text-sm bg-gray-100 px-2 py-1 rounded">.claude/skills/</code> folder.
      </p>

      <div v-if="skills && skills.length > 0" class="max-w-3xl mx-auto space-y-6">
        <article v-for="skill in skills" :key="skill.id"
          class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div class="p-6 md:p-8">
            <div v-if="skill.category"
              class="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-2">
              {{ skill.category }}
            </div>
            <h2 class="text-2xl font-inter font-bold text-brand-dark mb-3">
              {{ skill.title }}
            </h2>
            <p class="text-gray-600 font-opensans leading-relaxed mb-4">
              {{ skill.description }}
            </p>
            <div v-if="skill.tags && skill.tags.length > 0" class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in skill.tags" :key="tag"
                class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {{ tag }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <NuxtLink
                :to="`/skills/${skill.id.split('/').pop()?.replace('.md', '') || skill.id}`"
                class="text-brand-blue font-semibold text-sm hover:text-brand-dark transition-colors"
              >
                Read More →
              </NuxtLink>
              <a
                :href="skill.downloadFile"
                download="SKILL.md"
                class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors"
              >
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </a>
            </div>
          </div>
        </article>
      </div>

      <div v-else class="mt-10 text-center">
        <p class="text-lg text-gray-700">Loading skills...</p>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
const { data: skills } = await useAsyncData('skills', () =>
  queryCollection('skills').order('publishedAt', 'DESC').all()
)

const siteUrl = 'https://www.time2value.com'
const pageUrl = `${siteUrl}/skills`
const pageTitle = 'Claude Skills - Time To Value'
const pageDescription = 'Curated Claude Code skills that I use and recommend. Drop-in files for your .claude/skills/ folder.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogType: 'website',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: pageUrl,
  ogSiteName: 'Time To Value',
  ogLocale: 'en_US',
  ogImage: `${siteUrl}/og-image.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: `${siteUrl}/og-image.png`,
})

useHead({
  link: [
    { rel: 'canonical', href: pageUrl }
  ]
})
</script>
```

**Step 2: Verify**

Navigate to `/skills` in dev server. Should show empty/loading state until content files are created.

---

### Task 4: Create Skills Detail Page

**Files:**
- Create: `pages/skills/[id].vue`

**Step 1: Create the detail page**

Model after `pages/guides/[id].vue`. Uses `ArticleWithSidebar` component. Adds a skill preview section and download CTA box after the content. Fetches the raw `.txt` file content client-side using `useFetch`.

```vue
<template>
  <ArticleWithSidebar
    :document="skill"
    :back-link="{ to: '/skills', label: 'Back to Skills' }"
  >
    <template #header>
      <div v-if="skill?.category" class="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
        {{ skill.category }}
      </div>

      <h1 class="text-3xl md:text-4xl font-inter font-bold text-brand-dark mb-4">
        {{ skill?.title }}
      </h1>

      <p class="text-lg text-gray-600 font-opensans leading-relaxed mb-6">
        {{ skill?.description }}
      </p>

      <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
        <div v-if="skill?.publishedAt" class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ formatDate(skill.publishedAt) }}
        </div>

        <div v-if="skill?.updatedAt && skill.updatedAt !== skill.publishedAt" class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Updated {{ formatDate(skill.updatedAt) }}
        </div>
      </div>

      <div v-if="skill?.tags && skill.tags.length > 0" class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="tag in skill.tags"
          :key="tag"
          class="px-3 py-1 bg-brand-blue/10 text-brand-blue text-sm rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </template>

    <template #footer>
      <!-- Skill Preview -->
      <section v-if="skillContent" class="mt-12 pt-8 border-t border-gray-200">
        <h2 class="text-2xl font-inter font-bold text-brand-dark mb-4">Skill Preview</h2>
        <p class="text-gray-600 mb-4">This is the raw skill file you'll be downloading:</p>
        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <div class="flex items-center justify-between px-4 py-2 bg-gray-800">
            <span class="text-gray-400 text-sm font-mono">SKILL.md</span>
          </div>
          <pre class="p-4 overflow-x-auto text-sm text-gray-300 font-mono leading-relaxed"><code>{{ skillContent }}</code></pre>
        </div>
      </section>

      <!-- Download CTA -->
      <section v-if="skill?.downloadFile" class="mt-8">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 class="text-xl font-inter font-bold text-brand-dark mb-2">Ready to use this skill?</h3>
          <p class="text-gray-600 mb-6">
            Drop it into your <code class="text-sm bg-white/80 px-2 py-1 rounded">.claude/skills/</code> folder and you're ready.
          </p>
          <a
            :href="skill.downloadFile"
            download="SKILL.md"
            class="inline-flex items-center bg-brand-blue hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Skill File
          </a>
        </div>
      </section>

      <!-- Soft CTA -->
      <GuideCTA />

      <!-- Back to skills link -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <NuxtLink to="/skills" class="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          All Skills
        </NuxtLink>
      </div>
    </template>

    <template #not-found>
      <h1 class="text-3xl font-inter font-bold text-brand-dark mb-4">Skill Not Found</h1>
      <p class="text-gray-600 mb-8">The skill you're looking for doesn't exist or has been moved.</p>
      <NuxtLink to="/skills" class="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Skills
      </NuxtLink>
    </template>
  </ArticleWithSidebar>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: skill } = await useAsyncData(`skill-${route.params.id}`, async () => {
  const targetId = `skills/skills/${route.params.id}.md`
  const allSkills = await queryCollection('skills').all()
  return allSkills.find(s => s.id === targetId) || null
})

// Fetch the raw skill file content for preview
const { data: skillContent } = await useFetch(() => skill.value?.downloadFile || '', {
  immediate: !!skill.value?.downloadFile,
  default: () => '',
})

const siteUrl = 'https://www.time2value.com'
const pageUrl = `${siteUrl}/skills/${route.params.id}`

if (skill.value) {
  useSeoMeta({
    title: `${skill.value.title} - Time To Value`,
    description: skill.value.description,
    ogType: 'article',
    ogTitle: skill.value.title,
    ogDescription: skill.value.description,
    ogUrl: pageUrl,
    ogSiteName: 'Time To Value',
    ogLocale: 'en_US',
    ogImage: `${siteUrl}/og-image.png`,
    twitterCard: 'summary_large_image',
    twitterTitle: skill.value.title,
    twitterDescription: skill.value.description,
    twitterImage: `${siteUrl}/og-image.png`,
    articlePublishedTime: skill.value.publishedAt,
    articleModifiedTime: skill.value.updatedAt || skill.value.publishedAt,
  })

  useHead({
    link: [
      { rel: 'canonical', href: pageUrl }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: skill.value.title,
          description: skill.value.description,
          url: pageUrl,
          datePublished: skill.value.publishedAt,
          dateModified: skill.value.updatedAt || skill.value.publishedAt,
          author: {
            '@type': 'Person',
            name: 'Dave Hague',
            url: siteUrl
          },
          publisher: {
            '@type': 'Organization',
            name: 'Time To Value',
            url: siteUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/favicon/apple-touch-icon.png`
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': pageUrl
          },
          keywords: skill.value.tags?.join(', '),
          articleSection: skill.value.category
        })
      }
    ]
  })
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
```

**Step 2: Verify**

Navigate to `/skills/feature-impact-analysis` after content files exist. Should show article layout with skill preview and download CTA.

---

### Task 5: Create Content Files

**Files:**
- Create: `content/skills/feature-impact-analysis.md`
- Create: `content/skills/architectural-decision-record.md`
- Create: `content/skills/espanso-manager.md`
- Create: `content/skills/update-docs.md`

**Step 1: Create all four content files**

Each file needs frontmatter with `title`, `description`, `category`, `tags`, `downloadFile`, and `publishedAt`. The body contains editorial commentary — placeholder content for now that the author will replace with their own writing.

See the content for each file below.

**feature-impact-analysis.md:**
```markdown
---
title: "Feature Impact Analysis"
description: "Find edge cases before you code. A 6-question framework that systematically identifies how new features intersect with existing functionality."
category: "Planning"
tags: ["planning", "quality", "edge-cases"]
downloadFile: "/claude-skills/feature_impact_analysis_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

TODO: Add your commentary about this skill. Why you built it, when it shines, tips for getting the most out of it.
```

**architectural-decision-record.md:**
```markdown
---
title: "Architectural Decision Record"
description: "Document significant technical decisions with context, rationale, and alternatives considered. Never re-litigate a settled decision again."
category: "Documentation"
tags: ["documentation", "architecture", "decisions"]
downloadFile: "/claude-skills/architectural_decision_record_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

TODO: Add your commentary about this skill.
```

**espanso-manager.md:**
```markdown
---
title: "Espanso Manager"
description: "Manage Espanso text expander configurations through Claude. Create, read, update, and delete matches and config files without leaving your terminal."
category: "Productivity"
tags: ["productivity", "text-expansion", "espanso"]
downloadFile: "/claude-skills/espanso_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

TODO: Add your commentary about this skill.
```

**update-docs.md:**
```markdown
---
title: "Documentation Update"
description: "Keep documentation in sync with code changes. Automatically updates changelogs, feature docs, and technical docs after every commit."
category: "Documentation"
tags: ["documentation", "changelog", "automation"]
downloadFile: "/claude-skills/update_docs_skill.txt"
publishedAt: "2026-03-08T00:00:00Z"
---

TODO: Add your commentary about this skill.
```

**Step 2: Verify**

Run dev server, navigate to `/skills`. All four skills should appear as cards. Click through to each detail page. Verify download links work.

---

### Task 6: End-to-End Verification

**Step 1: Verify navigation**

- Desktop: Skills link appears between Guides and Blog
- Mobile: Skills link appears between Guides and Blog in hamburger menu
- Clicking Skills navigates to `/skills`

**Step 2: Verify listing page**

- All 4 skills appear as cards
- Each card shows category, title, description, tags
- "Read More →" links to detail page
- "Download" triggers file download

**Step 3: Verify detail pages**

- `/skills/feature-impact-analysis` loads with ArticleWithSidebar
- Skill preview shows raw `.txt` file content in code block
- Download CTA box appears with working download link
- Back to Skills link works
- TOC sidebar populates from content headings

**Step 4: Verify existing links**

- `/guides/spec-driven-development-claude-skills` still works
- Download links in that guide still work

**Step 5: Run typecheck**

Run: `npm run typecheck`
Expected: No type errors

---

### Task 7: Commit

```bash
git add content.config.ts components/NavHeader.vue pages/skills/ content/skills/
git commit -m "feat: add Claude Skills section with listing and detail pages

Add a first-class Skills section to the website with top-level navigation,
a catalog listing page, and individual detail pages with skill previews
and download CTAs."
```
