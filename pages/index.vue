<template>
  <div class="min-h-screen bg-white font-opensans">
    <!-- Navigation -->
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
            <NuxtLink to="#about" class="text-brand-dark hover:text-brand-blue transition-colors font-medium">About
            </NuxtLink>
            <NuxtLink to="#content" class="text-brand-dark hover:text-brand-blue transition-colors font-medium">Content
            </NuxtLink>
            <NuxtLink to="#services" class="text-brand-dark hover:text-brand-blue transition-colors font-medium">
              Services</NuxtLink>
            <NuxtLink to="#contact"
              class="bg-brand-blue hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all">Get
              Started</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <HeroSection />

    <!-- Value Proposition Section -->
    <ValuePropositionSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Content Section -->
    <ContentSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
// Set page metadata
useHead({
  title: 'Time To Value - Helping David Beat Goliath by Leveraging AI',
  meta: [
    { name: 'description', content: 'AI consulting and content creation to help you punch above your weight class. Get the signal in the noise with AI agents and proactive AI solutions.' }
  ]
})
</script>
