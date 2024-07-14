<template>
  <div ref="observer"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  sectionId: string;
  onIntersect: (isIntersecting: boolean) => void;
}>();

const observer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const intersectionObserver = new IntersectionObserver(([entry]) => {
    props.onIntersect(entry.isIntersecting);
  }, options);

  const targetElement = document.getElementById(props.sectionId);
  if (targetElement && observer.value) {
    intersectionObserver.observe(targetElement);
    observer.value.style.height = '1px';
    observer.value.style.width = '1px';
    targetElement.appendChild(observer.value);
  }

  onUnmounted(() => {
    if (targetElement && observer.value) {
      intersectionObserver.unobserve(targetElement);
      targetElement.removeChild(observer.value);
    }
  });
});
</script>
