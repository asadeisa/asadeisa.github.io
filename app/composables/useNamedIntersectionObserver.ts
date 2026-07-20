// composables/useNamedIntersectionObserver.ts
import type { Ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

interface ObserveConfig {
  el: Ref<HTMLElement | null>
  visible: Ref<boolean>
  threshold?: number
}

export function useNamedIntersectionObservers(configs: ObserveConfig[]) {
  configs.forEach(({ el, visible, threshold = 1 }) => {
    useIntersectionObserver(
      el,
      ([entry]) => {
        if (visible.value) return
        visible.value = !!entry?.isIntersecting
      },
      { threshold }
    )
  })
}
