<template>
    <div class="min-h-screen bg-gray-50">
        <NavHeader />
        <article v-if="guide" class="container mx-auto px-6 py-20 pt-28 max-w-4xl">
            <header class="mb-12">
                <NuxtLink to="/guides" class="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors mb-6">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Guides
                </NuxtLink>

                <div v-if="guide.category" class="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
                    {{ guide.category }}
                </div>

                <h1 class="text-3xl md:text-4xl font-inter font-bold text-brand-dark mb-4">
                    {{ guide.title }}
                </h1>

                <p class="text-lg text-gray-600 font-opensans leading-relaxed mb-6">
                    {{ guide.description }}
                </p>

                <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div v-if="guide.publishedAt" class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ formatDate(guide.publishedAt) }}
                    </div>

                    <div v-if="guide.updatedAt && guide.updatedAt !== guide.publishedAt" class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Updated {{ formatDate(guide.updatedAt) }}
                    </div>
                </div>

                <div v-if="guide.tags && guide.tags.length > 0" class="flex flex-wrap gap-2 mt-4">
                    <span
                        v-for="tag in guide.tags"
                        :key="tag"
                        class="px-3 py-1 bg-brand-blue/10 text-brand-blue text-sm rounded-full"
                    >
                        {{ tag }}
                    </span>
                </div>
            </header>

            <div class="prose prose-base max-w-none">
                <ContentRenderer :value="guide" />
            </div>

            <!-- Soft CTA -->
            <GuideCTA />

            <!-- Back to guides link -->
            <div class="mt-12 pt-8 border-t border-gray-200">
                <NuxtLink to="/guides" class="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    All Guides
                </NuxtLink>
            </div>
        </article>

        <div v-else class="container mx-auto px-6 py-20 pt-28 text-center">
            <h1 class="text-3xl font-inter font-bold text-brand-dark mb-4">Guide Not Found</h1>
            <p class="text-gray-600 mb-8">The guide you're looking for doesn't exist or has been moved.</p>
            <NuxtLink to="/guides" class="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Guides
            </NuxtLink>
        </div>
        <FooterSection />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

// Find the guide by matching the ID
const { data: guide } = await useAsyncData(`guide-${route.params.id}`, async () => {
    // We know the IDs are in the format: guides/guides/[slug].md
    const targetId = `guides/guides/${route.params.id}.md`

    // Get all guides and find the matching one
    const allGuides = await queryCollection('guides').all()
    const foundGuide = allGuides.find(g => g.id === targetId)

    return foundGuide || null
})

if (guide.value) {
    useSeoMeta({
        title: `${guide.value.title} - Time To Value`,
        description: guide.value.description,
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