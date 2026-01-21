<template>
  <div class="min-h-screen bg-white font-opensans">
    <!-- Navigation -->
    <NavHeader />

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
