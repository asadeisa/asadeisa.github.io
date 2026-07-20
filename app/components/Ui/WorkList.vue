<script setup lang="ts">
import type { Work } from '~/types/global'

defineProps<{ items: Work[] }>()

const openIds = ref(new Set<number>())

function toggle(id: number): void {
  const next = new Set(openIds.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
  }
  openIds.value = next
}

function isOpen(id: number): boolean {
  return openIds.value.has(id)
}

function kindGlyph(kind?: string): string {
  return kind === 'experimental' ? '▸' : '✓'
}

function stackLine(tools: string[]): string {
  return tools.join(' · ')
}
</script>

<template>
  <ul class="work-list" role="list">
    <li v-for="item in items" :key="item.id" class="work-row">

      <!-- Main row: toggle button + independently focusable actions -->
      <div class="row-main">
        <button
          class="row-toggle"
          :aria-expanded="isOpen(item.id)"
          :aria-controls="`work-detail-${item.id}`"
          @click="toggle(item.id)"
        >
          <!-- Combined glyph + kind tag -->
          <span
            :class="[
              'kind-tag',
              item.kind === 'experimental' ? 'tag-exp' : item.kind === 'ai-product' ? 'tag-ai' : 'tag-frontend'
            ]"
          >[{{ kindGlyph(item.kind) }} {{ item.kind ?? 'frontend' }}]</span>

          <!-- Title -->
          <span class="row-title">{{ item.title }}</span>

          <!-- Summary one-liner -->
          <span class="row-summary">{{ item.summary }}</span>
        </button>

        <!-- Actions: siblings to button — independently focusable, do NOT trigger toggle -->
        <div class="row-actions">
          <a
            v-if="item.url"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${item.title} live site (opens in new tab)`"
            class="action-link"
          >▸ live</a>
          <a
            v-if="item.gitUrl"
            :href="item.gitUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${item.title} source repository (opens in new tab)`"
            class="action-link"
          >▸ repo</a>
        </div>
      </div>

      <!-- Expandable detail region -->
      <div
        :id="`work-detail-${item.id}`"
        class="detail"
        :class="{ 'detail-open': isOpen(item.id) }"
        role="region"
        :aria-label="`${item.title} details`"
      >
        <div class="detail-inner">
          <p class="detail-desc">{{ item.description }}</p>
          <p class="detail-stack">
            <span class="detail-key">stack</span>&nbsp;&nbsp;{{ stackLine(item.tools) }}
          </p>
          <div v-if="item.label || item.metric" class="detail-badges">
            <span v-if="item.label" class="badge-exp">{{ item.label }}</span>
            <span v-if="item.metric" class="badge-metric">{{ item.metric }}</span>
          </div>
        </div>
      </div>

    </li>
  </ul>
</template>

<style scoped>
/* ── Base ────────────────────────────────────────────────── */
.work-list {
  font-family: 'JetBrains Mono', monospace;
  list-style: none;
  padding: 0.4rem 1rem;
  margin: 0;
  background: var(--console-bg);
  color: var(--console-text);
  border: 1px solid var(--console-border);
  border-radius: 8px;
  box-shadow: var(--console-shadow);
}

.work-row {
  border-bottom: 1px solid var(--console-border);
}

.work-row:last-child {
  border-bottom: none;
}

/* ── Row layout ──────────────────────────────────────────── */
.row-main {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0;
  flex-wrap: wrap;
}

/* Toggle button occupies leftmost flex area */
.row-toggle {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  padding: 0;
  flex-wrap: wrap;
  font-family: inherit;
}

.row-toggle:hover .row-title {
  color: var(--console-prompt);
}

/* ── Kind tag (glyph + label) ────────────────────────────── */
.kind-tag {
  font-size: 0.72rem;
  white-space: nowrap;
  flex-shrink: 0;
}

.tag-frontend {
  color: var(--console-accent);
}

.tag-ai {
  color: var(--console-prompt);
}

.tag-exp {
  color: var(--console-amber);
}

/* ── Title & summary ─────────────────────────────────────── */
.row-title {
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.15s ease;
  color: var(--console-text);
}

.row-summary {
  font-size: 0.78rem;
  color: var(--console-dim);
  flex: 1;
  min-width: 8rem;
  text-align: left;
}

/* ── Action links ────────────────────────────────────────── */
.row-actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
  align-items: center;
}

.action-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--console-prompt);
  text-decoration: none;
  opacity: 0.85;
  white-space: nowrap;
  transition: opacity 0.15s ease;
}

.action-link:hover {
  opacity: 1;
  text-decoration: underline;
}

/* ── Expandable detail ───────────────────────────────────── */
.detail {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.35s ease, opacity 0.25s ease;
}

.detail.detail-open {
  max-height: 32rem;
  opacity: 1;
}

.detail-inner {
  margin: 0 0 0.75rem 0.4rem;
  padding: 0.6rem 1rem 0.75rem;
  border-left: 2px solid var(--console-accent);
  font-size: 0.8rem;
}

.detail-desc {
  color: var(--console-text);
  opacity: 0.82;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.detail-stack {
  font-size: 0.75rem;
  color: var(--console-dim);
  margin-bottom: 0.4rem;
}

.detail-key {
  color: var(--console-prompt);
}

.detail-badges {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: 0.4rem;
}

.badge-exp {
  font-size: 0.68rem;
  padding: 0.1rem 0.45rem;
  border-radius: 9999px;
  color: var(--console-amber);
  background: rgba(252, 211, 77, 0.1);
}

.badge-metric {
  font-size: 0.68rem;
  padding: 0.1rem 0.45rem;
  border-radius: 9999px;
  color: var(--console-accent);
  background: rgba(74, 222, 128, 0.12);
}

/* ── Reduced motion ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .detail {
    transition: none;
  }
  .row-toggle,
  .action-link {
    transition: none;
  }
}
</style>
