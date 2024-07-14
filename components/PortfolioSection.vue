<template>
  <section id="portfolio" class="py-16">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-center">Our Portfolio</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-md p-6">
          <img :src="product.logo" :alt="product.name" class="w-24 h-24 mx-auto mb-4">
          <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-gray-600">{{ product.description }}</p>
          <NuxtLink :to="product.link" class="mt-4 inline-block text-blue-500 hover:underline">
            Learn More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="mt-16 bg-gray-900 text-white py-16">
      <div class="container mx-auto">
        <SimpleCarousel :items="products" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SimpleCarousel from './SimpleCarousel.vue';

const products = [
  {
    id: 1,
    name: 'Job Scout',
    logo: '/job-scout.svg',
    description: 'Get job postings that match your skills, experience, and preferences and take the guesswork out of your job search with our intelligent job search tool.',
    link: 'https://jobs.timetovalue.org',
  },
  {
    id: 2,
    name: 'Prompt Blocks',
    logo: '/promptblocks.png',
    description: 'Prompt like a pro with no prior experience',
    link: 'https://www.promptblocks.app/',
  },
  // Add more products as needed
];
</script>
