<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

// ── Types ──────────────────────────────────────────────────────────────────
interface Command {
  id: string
  label: string
  hint: string
  action: () => void
}

// ── State ──────────────────────────────────────────────────────────────────
// Shared so other components (e.g. the Ctrl+K hint chip) can open the palette.
const isOpen = useState<boolean>('cmdPaletteOpen', () => false)
const query  = ref('')
const highlighted = ref(0)
const inputRef = ref<HTMLInputElement | null>(null)
const listRef  = ref<HTMLUListElement | null>(null)
let previousFocus: Element | null = null

// ── Reduced-motion helper (client-only) ────────────────────────────────────
let prefersReducedMotion = false

// ── Commands ───────────────────────────────────────────────────────────────
const GITHUB_URL = 'https://github.com/asadeisa'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })
  close()
}

const COMMANDS: Command[] = [
  { id: 'home',       label: 'goto home',       hint: 'scroll to top',      action: () => scrollTo('home-section') },
  { id: 'about',      label: 'goto about',      hint: 'about me section',   action: () => scrollTo('about-me')     },
  { id: 'skills',     label: 'goto skills',     hint: 'tech stack',         action: () => scrollTo('skills')       },
  { id: 'experience', label: 'goto experience', hint: 'work history',       action: () => scrollTo('experience')   },
  { id: 'work',       label: 'goto work',       hint: 'projects',           action: () => scrollTo('projects')     },
  { id: 'contact',    label: 'goto contact',    hint: 'get in touch',       action: () => scrollTo('contact')      },
  {
    id: 'cv',
    label: 'download CV',
    hint: 'open PDF résumé',
    action: () => { window.open('/assets/files/asad-eisa.pdf', '_blank'); close() },
  },
  {
    id: 'github',
    label: 'open GitHub',
    hint: GITHUB_URL,
    action: () => { window.open(GITHUB_URL, '_blank', 'noopener,noreferrer'); close() },
  },
]

// ── Filtered list ──────────────────────────────────────────────────────────
const filtered = computed<Command[]>(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return COMMANDS
  return COMMANDS.filter(c =>
    c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
  )
})

// Reset highlight to first item whenever the filtered list changes
watch(filtered, () => { highlighted.value = 0 })

// ── Open / close ───────────────────────────────────────────────────────────
// isOpen is shared state; a watcher runs the side-effects so the palette behaves
// the same whether opened via Ctrl+K here or by setting the state elsewhere
// (e.g. the Ctrl+K hint chip).
function open()   { isOpen.value = true }
function close()  { isOpen.value = false }
function toggle() { isOpen.value = !isOpen.value }

watch(isOpen, (openNow) => {
  if (openNow) {
    previousFocus = document.activeElement
    query.value = ''
    highlighted.value = 0
    nextTick(() => inputRef.value?.focus())
  } else {
    query.value = ''
    nextTick(() => {
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
      previousFocus = null
    })
  }
})

// ── Keyboard handlers ──────────────────────────────────────────────────────
function onGlobalKeydown(e: KeyboardEvent) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    toggle()
    return
  }
  if (!isOpen.value) return

  if (e.key === 'Escape') {
    e.preventDefault()
    close()
    return
  }
}

function onDialogKeydown(e: KeyboardEvent) {
  const len = filtered.value.length

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    highlighted.value = (highlighted.value + 1) % len
    scrollHighlightedIntoView()
    return
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    highlighted.value = (highlighted.value - 1 + len) % len
    scrollHighlightedIntoView()
    return
  }
  if (e.key === 'Enter') {
    e.preventDefault()
    runCommand(filtered.value[highlighted.value])
    return
  }
  if (e.key === 'Tab') {
    // Trap focus: with only one focusable element (the input) focus stays there.
    e.preventDefault()
  }
}

function scrollHighlightedIntoView() {
  nextTick(() => {
    const el = listRef.value?.querySelector<HTMLElement>('[data-highlighted="true"]')
    el?.scrollIntoView({ block: 'nearest' })
  })
}

function runCommand(cmd: Command | undefined) {
  if (!cmd) return
  cmd.action()
}

// ── Lifecycle ──────────────────────────────────────────────────────────────
onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.addEventListener('keydown', onGlobalKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onGlobalKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="palette">
      <div
        v-if="isOpen"
        class="cp-backdrop"
        aria-hidden="true"
        @click.self="close"
      >
        <div
          class="cp-dialog term-prompt"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          :aria-activedescendant="filtered[highlighted] ? `cp-item-${filtered[highlighted].id}` : undefined"
          @keydown="onDialogKeydown"
        >
          <!-- Input row -->
          <div class="cp-input-row">
            <span class="cp-prompt-char" aria-hidden="true">&gt;</span>
            <input
              ref="inputRef"
              v-model="query"
              class="cp-input"
              type="text"
              placeholder="type a command…"
              autocomplete="off"
              spellcheck="false"
              aria-label="Command search"
            />
          </div>

          <!-- Command list -->
          <ul
            ref="listRef"
            class="cp-list"
            role="listbox"
            aria-label="Commands"
          >
            <li
              v-for="(cmd, idx) in filtered"
              :id="`cp-item-${cmd.id}`"
              :key="cmd.id"
              class="cp-item"
              :class="{ 'cp-item--active': idx === highlighted }"
              :data-highlighted="idx === highlighted ? 'true' : 'false'"
              role="option"
              :aria-selected="idx === highlighted"
              @mouseenter="highlighted = idx"
              @click="runCommand(cmd)"
            >
              <span class="cp-item-label">{{ cmd.label }}</span>
              <span class="cp-item-hint">{{ cmd.hint }}</span>
            </li>

            <li v-if="filtered.length === 0" class="cp-empty" role="option" aria-selected="false">
              no commands match
            </li>
          </ul>

          <!-- Footer hint -->
          <div class="cp-footer" aria-hidden="true">
            <span><kbd>↑↓</kbd> navigate</span>
            <span><kbd>↵</kbd> run</span>
            <span><kbd>esc</kbd> close</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Backdrop ─────────────────────────────────────────────────────────────── */
.cp-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: clamp(4rem, 15vh, 10rem);
}

/* ── Dialog ───────────────────────────────────────────────────────────────── */
.cp-dialog {
  width: min(640px, calc(100vw - 2rem));
  background: var(--console-bg);
  color: var(--console-text);
  border: 1px solid var(--console-accent);
  border-radius: 6px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 70vh;
}

/* ── Input row ────────────────────────────────────────────────────────────── */
.cp-input-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid color-mix(in srgb, var(--console-accent) 30%, transparent);
}

.cp-prompt-char {
  color: var(--console-prompt);
  font-size: 1rem;
  line-height: 1;
  user-select: none;
  flex-shrink: 0;
}

.cp-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: inherit;
  font-family: inherit;
  font-size: 0.95rem;
  caret-color: var(--console-prompt);
}

.cp-input::placeholder {
  color: color-mix(in srgb, currentColor 40%, transparent);
}

/* ── List ─────────────────────────────────────────────────────────────────── */
.cp-list {
  list-style: none;
  margin: 0;
  padding: 0.25rem 0;
  overflow-y: auto;
  flex: 1;
}

.cp-item {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.55rem 1rem;
  cursor: pointer;
  border-radius: 0;
  transition: background 0.1s ease;
}

.cp-item:hover,
.cp-item--active {
  background: color-mix(in srgb, var(--console-accent) 12%, transparent);
}

.cp-item--active .cp-item-label {
  color: var(--console-accent);
}

.cp-item-label {
  font-size: 0.9rem;
  color: inherit;
  flex-shrink: 0;
}

.cp-item-hint {
  font-size: 0.75rem;
  color: color-mix(in srgb, currentColor 50%, transparent);
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cp-empty {
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  color: color-mix(in srgb, currentColor 50%, transparent);
  text-align: center;
}

/* ── Footer ───────────────────────────────────────────────────────────────── */
.cp-footer {
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem 1rem;
  border-top: 1px solid color-mix(in srgb, var(--console-accent) 20%, transparent);
  font-size: 0.7rem;
  color: color-mix(in srgb, currentColor 45%, transparent);
}

kbd {
  display: inline-block;
  padding: 0.05em 0.3em;
  border: 1px solid color-mix(in srgb, var(--console-prompt) 50%, transparent);
  border-radius: 3px;
  font-family: inherit;
  font-size: 0.7rem;
  color: var(--console-prompt);
  line-height: 1.4;
}

/* ── Transition ───────────────────────────────────────────────────────────── */
.palette-enter-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.palette-leave-active {
  transition: opacity 0.1s ease, transform 0.1s ease;
}
.palette-enter-from,
.palette-leave-to {
  opacity: 0;
}
.palette-enter-from .cp-dialog,
.palette-leave-to .cp-dialog {
  transform: scale(0.96) translateY(-8px);
}
.palette-enter-to .cp-dialog,
.palette-leave-from .cp-dialog {
  transform: scale(1) translateY(0);
}

/* ── Reduced motion ───────────────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .palette-enter-active,
  .palette-leave-active {
    transition: none;
  }
}
</style>
