<script setup lang="ts">
import { skillGroups } from '~/content/skills'
</script>
<template>
  <div>
    <UiPrompt as="h2" text="skills" style="--i:1" class="fade-in font-w-300 text-3xl md:text-4xl xl:text-5xl text-center mb-5 lg:mb-7" typed />
    <p style="--i:2" class="fade-in text-sm md:text-base xl:text-lg text-center max-w-[800px] m-auto text-gray-700 dark:text-gray-200">
      Proficient in modern frontend technologies with a focus on creating scalable and maintainable applications
    </p>
    <div class="skills flex flex-col gap-8 mt-8 md:mt-10 lg:mt-12 max-w-4xl mx-auto">
      <div v-for="(group, groupIndex) in skillGroups" :key="group.name" :style="{ '--i': 3 + groupIndex }" class="fade-in skill-group">
        <h3 class="text-base md:text-lg term-prompt font-medium mb-3" style="color: var(--term-prompt)">
          <span style="color: var(--term-accent)">▹</span> {{ group.name }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="item in group.items" :key="item" class="term-token">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
