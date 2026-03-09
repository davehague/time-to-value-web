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
