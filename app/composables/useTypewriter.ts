import { ref, toValue, onScopeDispose, type Ref, type MaybeRefOrGetter } from 'vue'

export function useTypewriter(
  fullText: MaybeRefOrGetter<string>,
  options?: { speed?: number; startDelay?: number }
): { displayed: Ref<string>; isTyping: Ref<boolean>; start: () => void } {
  const speed = options?.speed ?? 28
  const startDelay = options?.startDelay ?? 0

  // Initialize with full text to avoid hydration mismatch and layout shift
  const displayed = ref<string>(toValue(fullText))
  const isTyping = ref<boolean>(false)

  let typingTimeout: ReturnType<typeof setTimeout> | null = null
  let typingInterval: ReturnType<typeof setInterval> | null = null

  const start = () => {
    // SSR-safe check
    if (!import.meta.client) {
      return
    }

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      displayed.value = toValue(fullText)
      isTyping.value = false
      return
    }

    // Clear any existing timers/intervals
    if (typingTimeout !== null) {
      clearTimeout(typingTimeout)
      typingTimeout = null
    }
    if (typingInterval !== null) {
      clearInterval(typingInterval)
      typingInterval = null
    }

    // Re-resolve the latest full text value
    const text = toValue(fullText)

    // Reset and start typing
    displayed.value = ''
    isTyping.value = true

    // Set up delay before typing starts
    typingTimeout = setTimeout(() => {
      typingTimeout = null

      let currentIndex = 0

      // Type out one character at a time
      typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          displayed.value = text.substring(0, currentIndex + 1)
          currentIndex++
        } else {
          // Typing complete
          if (typingInterval !== null) {
            clearInterval(typingInterval)
            typingInterval = null
          }
          displayed.value = text
          isTyping.value = false
        }
      }, speed)
    }, startDelay)
  }

  // Clean up on scope disposal
  onScopeDispose(() => {
    if (typingTimeout !== null) {
      clearTimeout(typingTimeout)
    }
    if (typingInterval !== null) {
      clearInterval(typingInterval)
    }
  })

  return {
    displayed,
    isTyping,
    start,
  }
}
