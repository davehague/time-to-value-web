<template>
  <nav class="toc-sidebar">
    <h3 class="text-sm font-semibold text-brand-dark uppercase tracking-wider mb-4">
      On this page
    </h3>
    <TocLinks :links="links" :active-id="activeId" :depth="0" />
  </nav>
</template>

<script setup lang="ts">
import type { TocLink } from '~/types/toc'

defineProps<{
  links: TocLink[]
  activeId: string
}>()
</script>
