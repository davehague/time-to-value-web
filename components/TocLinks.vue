<template>
  <ul class="space-y-2">
    <li v-for="link in links" :key="link.id">
      <a
        :href="`#${link.id}`"
        :class="[
          'block text-sm transition-colors duration-150',
          depthClasses[depth] || depthClasses[2],
          link.id === activeId
            ? 'text-brand-blue font-medium'
            : 'text-gray-600 hover:text-brand-dark'
        ]"
        @click.prevent="scrollToHeading(link.id)"
      >
        {{ link.text }}
      </a>
      <TocLinks
        v-if="link.children && link.children.length > 0"
        :links="link.children"
        :active-id="activeId"
        :depth="depth + 1"
        class="mt-2"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TocLink } from '~/types/toc'

defineProps<{
  links: TocLink[]
  activeId: string
  depth: number
}>()

const depthClasses: Record<number, string> = {
  0: 'pl-0',
  1: 'pl-3',
  2: 'pl-6'
}

const scrollToHeading = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 100 // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>
