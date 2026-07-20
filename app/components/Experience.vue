<script setup lang="ts">
import { experience } from '~/content/experience'

/**
 * Transform org name to terminal-style slug.
 * E.g., "Albaz Globe (Iraq, Remote)" → "albaz_globe"
 */
const createSlug = (org: string): string => {
  return org
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, '') // remove parenthetical info
    .replace(/[&\s\-]+/g, '_') // replace spaces, ampersands, hyphens with underscores
    .replace(/_+/g, '_') // collapse multiple underscores
    .replace(/^_|_$/g, '') // remove leading/trailing underscores
}
</script>

<template>
  <div class="experience-log space-y-8">
    <article
      v-for="(item, index) in experience"
      :key="index"
      class="log-entry"
    >
      <!-- Terminal header line: prompt + right-aligned period -->
      <div class="log-header">
        <span class="prompt">> {{ createSlug(item.org) }}</span>
        <span class="period">[ {{ item.period }} ]</span>
      </div>

      <!-- Role and organization (semantic heading) -->
      <h3 class="log-title">
        <span class="role">{{ item.role }}</span>
        <span class="separator">·</span>
        <span class="org">{{ item.org }}</span>
      </h3>

      <!-- Highlights as semantic list -->
      <ul class="log-highlights">
        <li v-for="(highlight, i) in item.highlights" :key="i">
          <span class="highlight-dash">-</span>
          <span class="highlight-text">{{ highlight }}</span>
        </li>
      </ul>
    </article>
  </div>
</template>

<style scoped>
.experience-log {
  font-family: 'JetBrains Mono', 'Courier New', monospace;
}

.log-entry {
  padding: 1rem 1.1rem;
  background-color: var(--console-bg);
  color: var(--console-text);
  border-radius: 0.5rem;
  border: 1px solid var(--console-border);
  box-shadow: var(--console-shadow);
}

/* Terminal prompt line with right-aligned period */
.log-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.prompt {
  color: var(--console-prompt);
  font-weight: 600;
  flex-shrink: 0;
}

.period {
  color: var(--console-dim);
  text-align: right;
  flex-shrink: 0;
  white-space: nowrap;
}

/* Role and org metadata line */
.log-title {
  margin: 0 0 0.75rem 0;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--console-text);
  line-height: 1.5;
}

.role {
  font-weight: 600;
}

.separator {
  margin: 0 0.5rem;
  color: var(--console-dim);
}

.org {
  color: var(--console-dim);
}

/* Highlights list styled as terminal output */
.log-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.log-highlights li {
  display: flex;
  gap: 0.5rem;
  color: var(--console-text);
  opacity: 0.9;
  font-size: 0.9375rem;
  line-height: 1.6;
}

.highlight-dash {
  color: var(--console-accent);
  flex-shrink: 0;
  font-weight: 600;
}

.highlight-text {
  flex: 1;
}

/* Responsive: period drops to next line on small screens */
@media (max-width: 640px) {
  .log-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .period {
    width: 100%;
    text-align: left;
  }

  .log-entry {
    padding: 0.875rem;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
