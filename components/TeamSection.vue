<template>
  <section id="team" class="py-16 bg-gray-100">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-center">Our Team</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a 
          v-for="member in teamMembers" 
          :key="member.id" 
          :href="member.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          @click="goToLinkedIn(member.linkedin)"
          class="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
        >
          <img :src="member.photo" :alt="member.name" class="w-32 h-32 rounded-full mx-auto mb-4">
          <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
          <p class="text-gray-600 mb-2">{{ member.title }}</p>
          <p class="text-sm">{{ member.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    id: 1,
    name: 'David Hague',
    photo: '/davehague.jfif',
    title: 'Tech',
    description: 'AI Enthusiast / Continuous Learner / Software Developer / Good guy to have around',
    linkedin: 'https://www.linkedin.com/in/david-hague-developer/',
  },
  {
    id: 2,
    name: 'Rebecca Favorito',
    photo: '/rebeccafavorito.jfif',
    title: 'UX',
    description: 'SaaS product designer adept at understanding complex problems and synthesizing data to create user-centered solutions | Always learning',
    linkedin: 'https://www.linkedin.com/in/rebecca-favorito/',
  },
];

const goToLinkedIn = (url: string) => {
  window.open(url, '_blank');
};
</script>
