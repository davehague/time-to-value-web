<template>
  <div class="min-h-screen bg-gray-50">
    <NavHeader />

    <!-- Mobile TOC Toggle Button -->
    <button
      v-if="document && tocLinks.length > 0"
      class="xl:hidden fixed bottom-6 right-6 z-40 bg-brand-blue text-white p-3 rounded-full shadow-lg hover:bg-brand-dark transition-colors"
      @click="isMobileDrawerOpen = true"
      aria-label="Open table of contents"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    </button>

    <!-- Mobile Drawer Backdrop -->
    <Transition name="fade">
      <div
        v-if="isMobileDrawerOpen"
        class="xl:hidden fixed inset-0 bg-black/50 z-40"
        @click="isMobileDrawerOpen = false"
      />
    </Transition>

    <!-- Mobile Drawer -->
    <Transition name="slide">
      <div
        v-if="isMobileDrawerOpen"
        class="xl:hidden fixed left-0 top-0 bottom-0 w-72 bg-white z-50 shadow-xl overflow-y-auto p-6 pt-20"
      >
        <button
          class="absolute top-4 right-4 p-2 text-gray-500 hover:text-brand-dark"
          @click="isMobileDrawerOpen = false"
          aria-label="Close table of contents"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <TocSidebar
          :links="tocLinks"
          :active-id="activeId"
          @click="isMobileDrawerOpen = false"
        />
      </div>
    </Transition>

    <!-- Desktop Sidebar - aligned with header container, only on xl+ screens -->
    <aside
      v-if="document && tocLinks.length > 0"
      class="hidden xl:block fixed top-28 z-30 sidebar-position"
    >
      <div class="w-56 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
        <TocSidebar :links="tocLinks" :active-id="activeId" />
      </div>
    </aside>

    <div v-if="document" class="container mx-auto px-6 xl:pl-96 py-20 pt-28 max-w-6xl">
      <!-- Main Content -->
      <article class="max-w-4xl" ref="contentRef">
          <header class="mb-12">
            <NuxtLink
              :to="backLink.to"
              class="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors mb-6"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              {{ backLink.label }}
            </NuxtLink>

            <slot name="header" />
          </header>

          <div class="prose prose-base max-w-none">
            <ContentRenderer :value="document" />
          </div>

          <slot name="footer" />
        </article>
    </div>

    <!-- Not Found State -->
    <div v-else class="container mx-auto px-6 py-20 pt-28 text-center">
      <slot name="not-found">
        <h1 class="text-3xl font-inter font-bold text-brand-dark mb-4">Not Found</h1>
        <p class="text-gray-600 mb-8">The content you're looking for doesn't exist or has been moved.</p>
        <NuxtLink
          :to="backLink.to"
          class="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          {{ backLink.label }}
        </NuxtLink>
      </slot>
    </div>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useActiveHeading } from '~/composables/useActiveHeading'
import type { TocLink } from '~/types/toc'

interface ContentDocument {
  body?: {
    toc?: {
      links?: TocLink[]
    }
  }
}

const props = defineProps<{
  document: ContentDocument | null
  backLink: {
    to: string
    label: string
  }
}>()

const contentRef = ref<HTMLElement | null>(null)
const isMobileDrawerOpen = ref(false)

// Filter TOC links to only include H1 (depth 1) and H2 (depth 2)
const filterLinks = (links: TocLink[]): TocLink[] => {
  return links
    .filter(link => link.depth <= 2)
    .map(link => ({
      ...link,
      children: link.children ? filterLinks(link.children) : undefined
    }))
}

// Extract TOC links from the document (filtered to H1/H2 only)
const tocLinks = computed<TocLink[]>(() => {
  if (!props.document?.body?.toc?.links) {
    return []
  }
  return filterLinks(props.document.body.toc.links)
})

// Track active heading
const { activeId } = useActiveHeading(contentRef)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* Position sidebar to align with container edge (max-w-6xl = 1152px, px-6 = 1.5rem) */
.sidebar-position {
  left: max(1.5rem, calc((100vw - 1152px) / 2 + 1.5rem));
}
</style>
