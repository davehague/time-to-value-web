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
const siteUrl = 'https://www.time2value.com'

// Set page metadata with SEO enhancements
useHead({
  title: 'Time To Value - Helping David Beat Goliath by Leveraging AI',
  meta: [
    { name: 'description', content: 'AI consulting and content creation to help you punch above your weight class. Get the signal in the noise with AI agents and proactive AI solutions.' }
  ],
  link: [
    { rel: 'canonical', href: siteUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'Time To Value',
            url: siteUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/favicon/apple-touch-icon.png`
            },
            description: 'AI consulting and content creation to help small teams punch above their weight class.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Columbus',
              addressRegion: 'OH',
              addressCountry: 'US'
            }
          },
          {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: 'Dave Hague',
            jobTitle: 'AI Consultant',
            worksFor: { '@id': `${siteUrl}/#organization` },
            url: siteUrl
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Time To Value',
            publisher: { '@id': `${siteUrl}/#organization` }
          },
          {
            '@type': 'WebPage',
            '@id': `${siteUrl}/#webpage`,
            url: siteUrl,
            name: 'Time To Value - Helping David Beat Goliath by Leveraging AI',
            description: 'AI consulting and content creation to help you punch above your weight class. Get the signal in the noise with AI agents and proactive AI solutions.',
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: { '@id': `${siteUrl}/#organization` }
          }
        ]
      })
    }
  ]
})
</script>
