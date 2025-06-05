<template>
  <div class="relative" :class="containerClass">
    <img 
      :src="logoSrc"
      :alt="logoAlt"
      :class="imageClasses"
      :style="imageStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'white' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default'
})

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12', 
  lg: 'w-16 h-16',
  xl: 'w-24 h-24'
}

const containerClass = computed(() => sizeClasses[props.size])

const logoSrc = computed(() => {
  // Use the actual TTV logo
  return '/TTV-Logo.png'
})

const logoAlt = computed(() => 'Time To Value Logo')

const imageClasses = computed(() => {
  const baseClasses = 'object-contain transition-transform duration-300 hover:scale-105'
  
  // Add any variant-specific classes if needed
  switch (props.variant) {
    case 'white':
      return `${baseClasses} drop-shadow-sm`
    case 'dark':
      return `${baseClasses}`
    default:
      return baseClasses
  }
})

const imageStyle = computed(() => {
  const style: Record<string, string> = {
    width: '100%',
    height: '100%'
  }
  
  // Add any variant-specific styles if needed
  if (props.variant === 'white') {
    style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
  }
  
  return style
})
</script>
