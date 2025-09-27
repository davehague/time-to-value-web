<template>
    <div class="container mx-auto px-6 py-20">
        <h1 class="text-4xl md:text-5xl font-inter font-bold text-brand-dark mb-6 text-center">
            Practical Guides
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto font-opensans leading-relaxed text-center mb-12">
            The 20% that gets you 80% of the way there. Distilled, actionable guides
            that actually move the needle for your business.
        </p>

        <div v-if="guides && guides.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <NuxtLink v-for="guide in guides" :key="guide.id" :to="`/guides/${guide.id.split('/').pop()?.replace('.md', '') || guide.id}`" class="block group">
                <article
                    class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                    <div class="p-6">
                        <div v-if="guide.category"
                            class="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-2">
                            {{ guide.category }}
                        </div>
                        <h2
                            class="text-2xl font-inter font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                            {{ guide.title }}
                        </h2>
                        <p class="text-gray-600 font-opensans leading-relaxed mb-4">
                            {{ guide.description }}
                        </p>
                        <div class="flex items-center justify-between">
                            <div v-if="guide.tags && guide.tags.length > 0" class="flex flex-wrap gap-2">
                                <span v-for="tag in guide.tags.slice(0, 2)" :key="tag"
                                    class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                    {{ tag }}
                                </span>
                            </div>
                            <span
                                class="text-brand-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                Read more →
                            </span>
                        </div>
                    </div>
                </article>
            </NuxtLink>
        </div>

        <div v-else class="mt-10 text-center">
            <p class="text-lg text-gray-700">Loading guides...</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data: guides } = await useAsyncData('guides', () =>
    queryCollection('guides').order('order', 'ASC').all()
)

useSeoMeta({
    title: 'Practical Guides - Time To Value',
    description: 'Distilled, actionable guides that help you leverage AI to punch above your weight class. Get 80% of the value with 20% of the effort.'
})
</script>

<style scoped>
/* Add specific styles for the guides page here if needed */
</style>