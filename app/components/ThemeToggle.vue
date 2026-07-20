<template>
  <ClientOnly>
    <div >
      <button @click="()=>toggleTheme()"
      :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        class="p-2 md:p-2.5 lg:p-3 xl:p-3.5 rounded-full focus:outline-none border border-border dark:border-gray-700 bg-gray dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors dark:hover:bg-gray-700 dark:hover:border-gray-500">

        <span v-if="isDark" class="hover:rotate-360">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-sun w-5 h-5 text-yellow-400">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        </span>
        <span v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-moon w-5 h-5 text-slate-700">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </span>
      </button>
    </div>
<template #fallback>
      <div aria-hidden="true">
        <button
          class="p-2 md:p-2.5 lg:p-3 xl:p-3.5 rounded-full border border-border bg-gray text-gray-800 opacity-0 pointer-events-none"
          style="visibility: hidden;">
          <span>
            <svg width="24" height="24"></svg>
          </span>
        </button>
      </div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
  storageKey: 'theme',
  valueDark: 'dark',
  valueLight: 'light',
  initialValue: 'dark', // default to dark on first load
})

const toggleTheme = useToggle(isDark);
</script>
