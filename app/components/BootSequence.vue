<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const bootDone = useState<boolean>('bootDone', () => false)

// Default hidden — never truthy during SSR/hydration
const overlayVisible = ref(false)
const isFading = ref(false)
const visibleCount = ref(0)

const LINES = [
  { text: 'establishing secure session…' },
  { text: 'loading profile: ', accent: 'asad_eisa' },
  { text: 'frontend ', accent: '&&', text2: ' ai' },
]

const STEP_MS = 550   // ms between each line reveal
const HOLD_MS = 700   // ms to hold after last line before fade
const FADE_MS = 380   // ms fade-out transition (must match CSS)

const timers: ReturnType<typeof setTimeout>[] = []

function addTimer(fn: () => void, ms: number) {
  timers.push(setTimeout(fn, ms))
}

function clearAll() {
  timers.forEach(clearTimeout)
  timers.length = 0
}

function cleanupListeners() {
  window.removeEventListener('click', onSkip)
  window.removeEventListener('keydown', onSkip)
}

function markDone() {
  sessionStorage.setItem('akrs_boot_seen', '1')
  bootDone.value = true
}

function dismiss() {
  if (isFading.value) return  // already dismissing
  clearAll()
  cleanupListeners()
  isFading.value = true
  // Wait for CSS fade transition, then unmount
  addTimer(() => {
    overlayVisible.value = false
    markDone()
  }, FADE_MS)
}

function onSkip() {
  dismiss()
}

onMounted(() => {
  // Path 1 — reduced motion: skip entirely, set flags immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    markDone()
    return
  }

  // Path 2 — already seen this session: skip, set flag immediately
  if (sessionStorage.getItem('akrs_boot_seen')) {
    bootDone.value = true
    return
  }

  // Path 3 & 4 — show the overlay (normal flow or user-skipped)
  overlayVisible.value = true

  // Stagger each line reveal
  LINES.forEach((_, i) => {
    addTimer(() => { visibleCount.value = i + 1 }, i * STEP_MS)
  })

  // Auto-dismiss: last line delay + hold time
  addTimer(dismiss, (LINES.length - 1) * STEP_MS + HOLD_MS)

  // Skip listeners — any interaction dismisses immediately
  window.addEventListener('click', onSkip)
  window.addEventListener('keydown', onSkip)
})

onBeforeUnmount(() => {
  clearAll()
  cleanupListeners()
})
</script>

<template>
  <div
    v-if="overlayVisible"
    class="boot-overlay term-prompt"
    :class="{ 'boot-fading': isFading }"
    role="status"
    aria-live="polite"
    aria-label="Loading portfolio"
  >
    <div class="boot-lines">
      <div
        v-for="(line, i) in LINES"
        :key="i"
        v-show="visibleCount > i"
        class="boot-line"
      >
        <span class="boot-prompt">&gt;</span>
        <span class="boot-text"> {{ line.text }}</span>
        <span v-if="line.accent" class="boot-accent">{{ line.accent }}</span>
        <span v-if="line.text2" class="boot-text">{{ line.text2 }}</span>
      </div>
      <span v-if="visibleCount > 0" class="term-caret boot-caret" aria-hidden="true" />
    </div>
    <p class="boot-hint" aria-hidden="true">press any key to skip</p>
  </div>
</template>

<style scoped>
.boot-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--console-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  opacity: 1;
  transition: opacity 0.38s ease;
}

.boot-overlay.boot-fading {
  opacity: 0;
  pointer-events: none;
}

.boot-lines {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  font-size: clamp(0.85rem, 1.5vw, 1.05rem);
}

.boot-line {
  display: flex;
  align-items: center;
}

.boot-prompt {
  color: var(--console-prompt);
  margin-right: 0.45em;
}

.boot-text {
  color: var(--console-accent);
}

.boot-accent {
  color: var(--console-prompt);
}

.boot-caret {
  margin-top: 0.5rem;
}

.boot-hint {
  font-size: 0.72rem;
  color: var(--console-prompt);
  opacity: 0.45;
  letter-spacing: 0.05em;
}
</style>
