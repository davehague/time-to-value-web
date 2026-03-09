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
