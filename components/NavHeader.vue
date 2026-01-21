<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
    <div class="container mx-auto px-4 md:px-6 py-3 md:py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 md:space-x-3">
          <TimeToValueLogo size="sm" variant="white" class="md:hidden" />
          <TimeToValueLogo size="md" variant="white" class="hidden md:block" />
          <span class="text-lg md:text-xl font-inter font-bold text-brand-dark">Time To Value</span>
        </NuxtLink>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            :to="getLink('about')"
            class="text-brand-dark hover:text-brand-blue transition-colors font-medium"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/guides"
            class="text-brand-dark hover:text-brand-blue transition-colors font-medium"
          >
            Guides
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="text-brand-dark hover:text-brand-blue transition-colors font-medium"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            :to="getLink('services')"
            class="text-brand-dark hover:text-brand-blue transition-colors font-medium"
          >
            Services
          </NuxtLink>
          <NuxtLink
            :to="getLink('contact')"
            class="bg-brand-blue hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all"
          >
            Get Started
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-brand-dark hover:text-brand-blue transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
        <div class="flex flex-col space-y-4">
          <NuxtLink
            :to="getLink('about')"
            class="text-brand-dark hover:text-brand-blue transition-colors font-medium"
            @click="mobileMenuOpen = false"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/guides"
            class="text-brand-dark hover:text-brand-blue transition-colors font-medium"
            @click="mobileMenuOpen = false"
          >
            Guides
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="text-brand-dark hover:text-brand-blue transition-colors font-medium"
            @click="mobileMenuOpen = false"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            :to="getLink('services')"
            class="text-brand-dark hover:text-brand-blue transition-colors font-medium"
            @click="mobileMenuOpen = false"
          >
            Services
          </NuxtLink>
          <NuxtLink
            :to="getLink('contact')"
            class="bg-brand-blue hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all text-center"
            @click="mobileMenuOpen = false"
          >
            Get Started
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileMenuOpen = ref(false)

const isHomePage = computed(() => route.path === '/')

function getLink(section: string): string {
  if (isHomePage.value) {
    return `#${section}`
  }
  return `/#${section}`
}
</script>
