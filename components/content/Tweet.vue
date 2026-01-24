<script setup lang="ts">
declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (
          id: string,
          container: HTMLElement,
          options?: { theme?: string; dnt?: boolean }
        ) => Promise<HTMLElement>
      }
    }
  }
}

const props = defineProps<{
  id: string
}>()

const tweetContainer = ref<HTMLElement | null>(null)

onMounted(async () => {
  // Load Twitter widgets script if not already loaded
  if (!window.twttr) {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    document.head.appendChild(script)

    await new Promise<void>((resolve) => {
      script.onload = () => resolve()
    })
  }

  // Create the tweet
  if (window.twttr && tweetContainer.value) {
    window.twttr.widgets.createTweet(props.id, tweetContainer.value, {
      theme: 'light',
      dnt: true
    })
  }
})
</script>

<template>
  <div ref="tweetContainer" class="tweet-embed my-4" />
</template>

<style scoped>
.tweet-embed {
  display: flex;
  justify-content: flex-start;
}
</style>
