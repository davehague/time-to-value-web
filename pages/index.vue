<template>
  <div class="min-h-screen flex flex-col">
    <header ref="headerRef" :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', 
    isHeaderSolid ? 'bg-blue-950' : 'bg-transparent']">
      <nav class="container mx-auto py-4">
        <ul class="flex justify-center space-x-6">
          <li v-for="link in navLinks" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="text-white hover:text-gray-300 transition-colors"
              :class="{ 'font-bold': link.active }"
            >
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <HeroSection ref="heroRef" />
      <AboutUsSection />
      <PortfolioSection />
      <TeamSection />
      <ContactUsSection />
    </main>

    <FooterSection />

    <ScrollSpy
      v-for="link in navLinks.filter(l => l.href !== '/')"
      :key="link.href"
      :section-id="link.href.substring(1)"
      :onIntersect="(isIntersecting) => updateActiveLink(link.href, isIntersecting)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const headerRef = ref<HTMLElement | null>(null);
const heroRef = ref<HTMLElement | null>(null);
const isHeaderSolid = ref(false);

onMounted(() => {
  watch(() => heroRef.value?.heroRoot, (heroRoot) => {
    if (!heroRoot) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isHeaderSolid.value = !entry.isIntersecting;
      },
      { threshold: 0 }
    );

    observer.observe(heroRoot);
  }, { immediate: true });
});

const navLinks = ref([
  { href: '/', text: 'Home', active: true },
  { href: '#about', text: 'About Us', active: false },
  { href: '#portfolio', text: 'Portfolio', active: false },
  { href: '#team', text: 'Team', active: false },
  { href: '#contact', text: 'Contact Us', active: false },
]);

const updateActiveLink = (href: string, isIntersecting: boolean) => {
  navLinks.value = navLinks.value.map(link => ({
    ...link,
    active: link.href === href ? isIntersecting : link.active,
  }));
};
</script>

<style scoped>
header {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
</style>
