<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue via-blue-600 to-blue-800">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Wireframe Grid Elements -->
      <svg class="absolute top-10 left-10 w-64 h-64 opacity-20 animate-pulse" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" stroke="white" stroke-width="1" fill="none"/>
        <circle cx="100" cy="100" r="60" stroke="white" stroke-width="0.5" fill="none"/>
        <circle cx="100" cy="100" r="40" stroke="white" stroke-width="0.5" fill="none"/>
        <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="0.5"/>
        <line x1="100" y1="20" x2="100" y2="180" stroke="white" stroke-width="0.5"/>
        <g transform="rotate(45 100 100)">
          <line x1="100" y1="20" x2="100" y2="180" stroke="white" stroke-width="0.3"/>
          <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="0.3"/>
        </g>
      </svg>
      
      <svg class="absolute top-20 right-20 w-48 h-48 opacity-15 animate-bounce" style="animation-duration: 6s;" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 100 Q100 20 180 100 Q100 180 20 100" stroke="white" stroke-width="1" fill="none"/>
        <path d="M40 100 Q100 40 160 100 Q100 160 40 100" stroke="white" stroke-width="0.5" fill="none"/>
      </svg>
      
      <svg class="absolute bottom-20 left-20 w-72 h-72 opacity-10" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="300" height="300" fill="url(#grid)"/>
        <circle cx="150" cy="150" r="100" stroke="white" stroke-width="1" fill="none"/>
      </svg>
      
      <!-- Floating Geometric Shapes -->
      <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
      <div class="absolute top-3/4 right-1/4 w-2 h-2 bg-brand-coral/50 rounded-full animate-pulse"></div>
      <div class="absolute top-1/2 left-1/6 w-4 h-4 bg-brand-green/40 rounded-full animate-bounce" style="animation-delay: 2s;"></div>
    </div>
    
    <!-- Content -->
    <div class="container mx-auto px-6 text-center relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Logo -->
        <div class="mb-8">
          <TimeToValueLogo size="xl" variant="white" />
        </div>
        
        <!-- Main Headline -->
        <h1 class="text-5xl md:text-7xl font-inter font-black text-white mb-6 leading-tight">
          TIME TO 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-green">
            VALUE
          </span>
        </h1>
        
        <!-- Tagline -->
        <div class="bg-brand-dark/80 backdrop-blur-sm rounded-full px-8 py-4 mb-8 inline-block">
          <p class="text-white font-inter font-medium text-lg md:text-xl tracking-wide">
            HELPING DAVID BEAT GOLIATH BY LEVERAGING AI
          </p>
        </div>
        
        <!-- Value Proposition -->
        <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-opensans font-light leading-relaxed">
          We live in an unprecedented time where the David's of the world can truly take on the Goliaths by leveraging the game changing power of AI.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink 
            to="#services" 
            class="bg-gradient-to-r from-brand-coral to-red-500 hover:from-red-500 hover:to-brand-coral text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get The Signal in the Noise
          </NuxtLink>
          <NuxtLink 
            to="#about" 
            class="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300"
          >
            Learn More
          </NuxtLink>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
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
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
