<script setup lang="ts">
// Discoverability + entry point for the Ctrl+K command palette.
// Sets the shared palette state; CommandPalette.vue reacts to it.
const paletteOpen = useState<boolean>('cmdPaletteOpen', () => false)

function openPalette() {
  paletteOpen.value = true
}
</script>

<template>
  <button
    type="button"
    class="cmd-hint hidden md:inline-flex"
    aria-label="Open command palette (Ctrl K)"
    title="Open command palette"
    @click="openPalette"
  >
    <span class="cmd-hint__keys" aria-hidden="true">
      <kbd>Ctrl</kbd><kbd>K</kbd>
    </span>
    <span class="cmd-hint__label">commands</span>
  </button>
</template>

<style scoped>
.cmd-hint {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 50;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  line-height: 1;
  padding: 0.4rem 0.7rem;
  background: var(--console-bg);
  border: 1px solid color-mix(in srgb, var(--console-prompt) 30%, transparent);
  border-radius: 6px;
  color: var(--console-accent);
  cursor: pointer;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.cmd-hint:hover {
  border-color: var(--console-prompt);
  transform: translateY(-1px);
}

.cmd-hint__keys {
  display: inline-flex;
  gap: 0.2rem;
}

.cmd-hint__keys kbd {
  font-family: inherit;
  font-size: 0.66rem;
  padding: 0.08em 0.34em;
  border: 1px solid color-mix(in srgb, var(--console-prompt) 45%, transparent);
  border-radius: 3px;
  color: var(--console-prompt);
}

.cmd-hint__label {
  opacity: 0.85;
  letter-spacing: 0.02em;
}

@media (prefers-reduced-motion: reduce) {
  .cmd-hint {
    transition: none;
  }
  .cmd-hint:hover {
    transform: none;
  }
}
</style>
