<template>
    <div class="min-h-screen bg-gray-50">
        <NavHeader />
        <article v-if="post" class="container mx-auto px-6 py-20 pt-28 max-w-4xl">
            <header class="mb-12">
                <NuxtLink to="/blog" class="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors mb-6">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Blog
                </NuxtLink>

                <h1 class="text-4xl md:text-5xl font-inter font-bold text-brand-dark mb-4">
                    {{ post.title }}
                </h1>

                <p class="text-xl text-gray-600 font-opensans leading-relaxed mb-6">
                    {{ post.description }}
                </p>

                <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div v-if="post.author" class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {{ post.author }}
                    </div>

                    <div v-if="post.publishedAt" class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ formatDate(post.publishedAt) }}
                    </div>

                    <div v-if="post.updatedAt && post.updatedAt !== post.publishedAt" class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Updated {{ formatDate(post.updatedAt) }}
                    </div>
                </div>

                <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2 mt-4">
                    <span
                        v-for="tag in post.tags"
                        :key="tag"
                        class="px-3 py-1 bg-brand-blue/10 text-brand-blue text-sm rounded-full"
                    >
                        {{ tag }}
                    </span>
                </div>
            </header>

            <div class="prose prose-lg">
                <ContentRenderer :value="post" />
            </div>

            <!-- Soft CTA -->
            <GuideCTA />

            <!-- Back to blog link -->
            <div class="mt-12 pt-8 border-t border-gray-200">
                <NuxtLink to="/blog" class="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    All Articles
                </NuxtLink>
            </div>
        </article>

        <div v-else class="container mx-auto px-6 py-20 pt-28 text-center">
            <h1 class="text-3xl font-inter font-bold text-brand-dark mb-4">Article Not Found</h1>
            <p class="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <NuxtLink to="/blog" class="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
            </NuxtLink>
        </div>
        <FooterSection />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

// Find the blog post by matching the ID
const { data: post } = await useAsyncData(`blog-${route.params.id}`, async () => {
    // We know the IDs are in the format: blog/blog/[slug].md
    const targetId = `blog/blog/${route.params.id}.md`

    // Get all blog posts and find the matching one
    const allPosts = await queryCollection('blog').all()
    const foundPost = allPosts.find(p => p.id === targetId)

    return foundPost || null
})

if (post.value) {
    useSeoMeta({
        title: `${post.value.title} - Time To Value`,
        description: post.value.description,
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