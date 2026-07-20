<script setup lang="ts">
import { featuredProjects, secondaryProjects } from '~/content/projects'
</script>

<template>
  <div>
    <slot></slot>

    <!-- Flavor command line -->
    <p class="term-prompt text-xs opacity-40 mb-4 mt-2" aria-hidden="true" style="color: var(--term-prompt)">
      ▸ render ./work --list
    </p>

    <!-- Featured projects run-log -->
    <UiWorkList :items="featuredProjects" />

    <!-- Secondary "more work" block — only renders when secondaryProjects is non-empty -->
    <template v-if="secondaryProjects.length">
      <UiPrompt as="h2" text="more_work" class="font-mono font-normal text-2xl md:text-3xl xl:text-4xl text-center my-8 xl:my-12" typed />
      <UiWorkList :items="secondaryProjects" />
    </template>
  </div>
</template>
