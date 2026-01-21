<template>
    <div class="min-h-screen bg-gray-50">
        <NavHeader />
        <div class="container mx-auto px-6 py-20 pt-28">
        <h1 class="text-3xl md:text-4xl font-inter font-bold text-brand-dark mb-6 text-center">
            Written Analysis
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto font-opensans leading-relaxed text-center mb-12">
            Big picture insights that help you see the forest, not just the trees.
            Understand where AI is heading and how to position yourself.
        </p>

        <div v-if="pending" class="mt-10 text-center">
            <p class="text-lg text-gray-700">Loading articles...</p>
        </div>

        <div v-else-if="posts && posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <NuxtLink
                v-for="post in posts"
                :key="post.id"
                :to="`/blog/${post.id.split('/').pop()?.replace('.md', '') || post.id}`"
                class="block group"
            >
                <article class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                    <div class="p-6">
                        <h2 class="text-2xl font-inter font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                            {{ post.title }}
                        </h2>
                        <p class="text-gray-600 font-opensans leading-relaxed mb-4">
                            {{ post.description }}
                        </p>
                        <div class="flex items-center justify-between">
                            <div v-if="post.publishedAt" class="text-sm text-gray-500">
                                {{ formatDate(post.publishedAt) }}
                            </div>
                            <span class="text-brand-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                Read more →
                            </span>
                        </div>
                        <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2 mt-3">
                            <span
                                v-for="tag in post.tags.slice(0, 2)"
                                :key="tag"
                                class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </article>
            </NuxtLink>
        </div>

        <div v-else class="mt-10 text-center">
            <p class="text-lg text-gray-700">No articles found. Check back soon for insights!</p>
        </div>
        </div>
        <FooterSection />
    </div>
</template>

<script setup lang="ts">
const { data: posts, pending } = await useAsyncData('blog-posts', () =>
    queryCollection('blog').all()
)

const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

useSeoMeta({
    title: 'Written Analysis - Time To Value',
    description: 'Big picture insights that help you see the forest, not just the trees. Understand where AI is heading and how to position yourself.'
})
</script>

<style scoped>
/* Add specific styles for the blog page here if needed */
</style>