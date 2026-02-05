import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useActiveHeading(containerRef: Ref<HTMLElement | null>) {
  const activeId = ref<string>('')
  let observer: IntersectionObserver | null = null
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const setupObserver = () => {
    if (!containerRef.value) return

    const headings = containerRef.value.querySelectorAll('h1[id], h2[id]')
    if (headings.length === 0) return

    // Track which headings are currently visible
    const visibleHeadings = new Map<string, IntersectionObserverEntry>()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id')
          if (!id) return

          if (entry.isIntersecting) {
            visibleHeadings.set(id, entry)
          } else {
            visibleHeadings.delete(id)
          }
        })

        // Find the topmost visible heading
        if (visibleHeadings.size > 0) {
          let topmost: { id: string; top: number } | null = null
          visibleHeadings.forEach((entry, id) => {
            const top = entry.boundingClientRect.top
            if (!topmost || top < topmost.top) {
              topmost = { id, top }
            }
          })
          if (topmost) {
            activeId.value = topmost.id
          }
        }
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0.1
      }
    )

    headings.forEach((heading) => {
      observer?.observe(heading)
    })
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    timeoutId = setTimeout(setupObserver, 100)
  })

  onUnmounted(() => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  return {
    activeId
  }
}
