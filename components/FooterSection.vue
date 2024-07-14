<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto text-center">
      <p>&copy; {{ currentYear }} Time to Value. All rights reserved.</p>
      Photo by <a href="https://unsplash.com/@danist07?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Danist Soh</a> on <a href="https://unsplash.com/photos/low-angle-photography-of-cranes-on-top-of-building-8Gg2Ne_uTcM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
