<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="item in items" :key="item.id" class="w-full flex-shrink-0">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">{{ item.name }}</h3>
            <p class="text-lg mb-4">{{ item.description }}</p>
            <NuxtLink
              :to="item.link"
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Explore {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <button
      @click="prev"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full"
    >
      &lt;
    </button>
    <button
      @click="next"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full"
    >
      &gt;
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  items: Array<{
    id: number;
    name: string;
    description: string;
    link: string;
  }>;
}>();

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length;
};
</script>
