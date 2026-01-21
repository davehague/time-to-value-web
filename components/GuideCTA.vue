<template>
  <section class="mt-16 pt-12 border-t border-gray-200">
    <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
      <div class="max-w-2xl mx-auto text-center">
        <p class="text-lg md:text-xl text-gray-700 font-opensans leading-relaxed mb-6">
          This guide was my gift to you. I want everyone to be able to punch above their weight
          class by leveraging AI to do more with what they've got.
        </p>

        <p class="text-gray-600 font-opensans leading-relaxed mb-8">
          If this helped and you want to know how I help companies through AI consulting,
          mentoring, or workshops — sign up for my email list or reach out below.
        </p>

        <!-- Email Signup Form -->
        <form @submit.prevent="handleSubscribe" class="mb-6">
          <!-- Honeypot field - hidden from users -->
          <input type="text" v-model="honeypot" class="absolute -left-[9999px]" tabindex="-1" autocomplete="off" />

          <div class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input v-model="email" type="email" placeholder="Enter your email"
              :disabled="status === 'loading' || status === 'success'"
              class="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed" />
            <button type="submit" :disabled="status === 'loading' || status === 'success'"
              class="bg-brand-blue hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap">
              <span v-if="status === 'loading'">Subscribing...</span>
              <span v-else-if="status === 'success'">Subscribed!</span>
              <span v-else>Stay in Touch</span>
            </button>
          </div>

          <!-- Status Messages -->
          <p v-if="status === 'success'" class="mt-3 text-green-600 font-medium">
            Thanks for subscribing! You'll get notified when new blog posts or guides arrive.
          </p>
          <p v-if="status === 'error'" class="mt-3 text-red-600">
            {{ errorMessage }}
          </p>
        </form>

        <!-- Secondary CTA -->
        <p class="text-gray-500">
          Or
          <NuxtLink to="/#contact" class="text-brand-blue hover:text-blue-700 font-medium transition-colors">
            schedule a conversation →
          </NuxtLink>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')
const honeypot = ref('')
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')
const formLoadTime = ref(Date.now())

onMounted(() => {
  formLoadTime.value = Date.now()
})

async function handleSubscribe() {
  if (!email.value) {
    status.value = 'error'
    errorMessage.value = 'Please enter your email address'
    return
  }

  status.value = 'loading'
  errorMessage.value = ''

  try {
    const response = await $fetch('/api/subscribe', {
      method: 'POST',
      body: {
        email: email.value,
        _hp: honeypot.value,
        _ts: formLoadTime.value,
      },
    })

    if (response.success) {
      status.value = 'success'
    } else {
      status.value = 'error'
      errorMessage.value = response.error || 'Something went wrong. Please try again.'
    }
  } catch (error) {
    status.value = 'error'
    errorMessage.value = 'Something went wrong. Please try again.'
  }
}
</script>
