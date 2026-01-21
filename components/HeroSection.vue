<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern bg-cover bg-center bg-no-repeat pt-20">
    <!-- Dark overlay for text readability -->
    <div class="absolute inset-0 bg-gradient-to-br from-brand-blue/80 via-blue-600/70 to-blue-800/80"></div>
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden z-10">
      <!-- Wireframe Grid Elements -->
      <svg class="absolute top-10 left-10 w-64 h-64 opacity-20 animate-pulse" viewBox="0 0 200 200" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" stroke="white" stroke-width="1" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="white" stroke-width="0.5" fill="none" />
        <circle cx="100" cy="100" r="40" stroke="white" stroke-width="0.5" fill="none" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="0.5" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="white" stroke-width="0.5" />
        <g transform="rotate(45 100 100)">
          <line x1="100" y1="20" x2="100" y2="180" stroke="white" stroke-width="0.3" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="0.3" />
        </g>
      </svg>

      <svg class="absolute top-20 right-20 w-48 h-48 opacity-15 animate-bounce" style="animation-duration: 6s;"
        viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 100 Q100 20 180 100 Q100 180 20 100" stroke="white" stroke-width="1" fill="none" />
        <path d="M40 100 Q100 40 160 100 Q100 160 40 100" stroke="white" stroke-width="0.5" fill="none" />
      </svg>

      <svg class="absolute bottom-20 left-20 w-72 h-72 opacity-10" viewBox="0 0 300 300" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="300" height="300" fill="url(#grid)" />
        <circle cx="150" cy="150" r="100" stroke="white" stroke-width="1" fill="none" />
      </svg>

      <!-- Additional Clean Geometric Elements -->
      <svg class="absolute top-1/3 right-1/3 w-32 h-32 opacity-15" viewBox="0 0 100 100" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="60" height="60" stroke="white" stroke-width="1" fill="none" rx="8" />
        <rect x="35" y="35" width="30" height="30" stroke="white" stroke-width="0.5" fill="none" rx="4" />
      </svg>

      <svg class="absolute bottom-1/3 right-1/4 w-24 h-24 opacity-20 animate-pulse" style="animation-delay: 3s;"
        viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,15 85,75 15,75" stroke="white" stroke-width="1" fill="none" />
        <polygon points="50,30 70,60 30,60" stroke="white" stroke-width="0.5" fill="none" />
      </svg>

      <!-- Floating Geometric Shapes -->
      <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
      <div class="absolute top-3/4 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div class="absolute top-1/2 left-1/6 w-4 h-4 bg-white/25 rounded-full animate-bounce"
        style="animation-delay: 2s;"></div>
      <div class="absolute top-2/3 left-2/3 w-2 h-2 bg-white/30 rounded-full animate-ping" style="animation-delay: 4s;">
      </div>
      <div class="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-pulse"
        style="animation-delay: 1s;"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-6 text-center relative z-20">
      <div class="max-w-4xl mx-auto">
        <!-- Main Headline -->
        <h1 class="text-5xl md:text-7xl font-inter font-black text-white mb-6 leading-tight">
          FROM AI CURIOUS TO
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            AI CAPABLE IN WEEKS
          </span>

        </h1>

        <!-- Value Proposition -->
        <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-opensans font-light leading-relaxed">
          Expert guidance. Custom to you. No hype - just practical, pragmatic AI.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink to="#services"
            class="bg-gradient-to-r from-brand-coral to-red-500 hover:from-red-500 hover:to-brand-coral text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            See How I Can Help
          </NuxtLink>
          <NuxtLink to="#contact"
            class="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300">
            Get In Touch
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Add any interactive animations here if needed
})
</script>

<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
