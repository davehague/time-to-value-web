<template>
  <div class="relative" :class="containerClass">
    <!-- Main Logo Circle -->
    <div class="relative w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden" :style="containerStyle">
      <!-- Gradient Border -->
      <div class="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue via-purple-500 to-brand-coral p-0.5">
        <div class="w-full h-full rounded-full bg-white"></div>
      </div>
      
      <!-- Logo Content -->
      <div class="relative z-10 flex items-center justify-center w-full h-full">
        <!-- Clock/Timer Design -->
        <svg :width="iconSize" :height="iconSize" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Clock Circle -->
          <circle cx="50" cy="50" r="45" stroke="url(#logoGrad)" stroke-width="3" fill="none"/>
          
          <!-- Clock Markers -->
          <g stroke="#3d3d4e" stroke-width="2" stroke-linecap="round">
            <line x1="50" y1="8" x2="50" y2="15" />
            <line x1="92" y1="50" x2="85" y2="50" />
            <line x1="50" y1="92" x2="50" y2="85" />
            <line x1="8" y1="50" x2="15" y2="50" />
          </g>
          
          <!-- Main Hands forming "T" and "V" -->
          <!-- T hand (vertical) -->
          <line x1="50" y1="50" x2="50" y2="20" stroke="#3d3d4e" stroke-width="6" stroke-linecap="round"/>
          
          <!-- V hand (angled) -->
          <line x1="50" y1="50" x2="35" y2="75" stroke="#3d3d4e" stroke-width="6" stroke-linecap="round"/>
          
          <!-- Center dot -->
          <circle cx="50" cy="50" r="3" fill="#3d3d4e"/>
          
          <!-- Gradient Definition -->
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#2d6cdf"/>
              <stop offset="50%" style="stop-color:#a6e3c6"/>
              <stop offset="100%" style="stop-color:#ff6b5d"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
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

const iconSizes = {
  sm: 24,
  md: 36,
  lg: 48,
  xl: 72
}

const containerClass = computed(() => sizeClasses[props.size])
const iconSize = computed(() => iconSizes[props.size])

const containerStyle = computed(() => {
  if (props.variant === 'white') {
    return { backgroundColor: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }
  } else if (props.variant === 'dark') {
    return { backgroundColor: '#3d3d4e' }
  }
  return {}
})
</script>
