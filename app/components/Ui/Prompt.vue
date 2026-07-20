<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  text: string
  as?: string
  typed?: boolean
}>(), {
  as: 'h2',
  typed: false
})

const el = ref<HTMLElement | null>(null)

const { displayed, isTyping, start } = useTypewriter(() => props.text)

if (props.typed) {
  let hasStarted = false
  useIntersectionObserver(
    el,
    ([entry]) => {
      if (hasStarted) return
      if (entry?.isIntersecting) {
        hasStarted = true
        start()
      }
    },
    { threshold: 0.4 }
  )
}
</script>

<template>
  <component
    :is="props.as"
    ref="el"
    class="term-prompt"
    v-bind="$attrs"
  >
    <span style="color: var(--term-prompt); font-family: 'JetBrains Mono', monospace;">&gt;</span>
    {{ typed ? (' ' + displayed) : (' ' + props.text) }}
    <span v-if="typed && isTyping" class="term-caret" aria-hidden="true"></span>
  </component>
</template>
