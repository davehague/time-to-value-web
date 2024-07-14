<template>
  <section ref="heroRoot" class="relative h-screen flex items-center justify-center bg-cover bg-center text-white" :style="heroStyle">
    <div class="absolute inset-0 bg-black opacity-60"></div> <!-- Changed opacity from 50 to 40 -->
    <div class="container mx-auto text-center relative z-10">
      <h1 class="text-5xl font-bold mb-4">Time To Value</h1>
      <p class="text-xl mb-8">Building innovative products using AI</p>
      <NuxtLink to="#portfolio" class="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">
        View Our Portfolio
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const heroRoot = ref(null);

defineExpose({ heroRoot });

const heroStyle = {
  backgroundImage: "url('/danist-soh-8Gg2Ne_uTcM-unsplash.jpg')",
};
</script>
