<script setup lang="ts">
const { buttonType = 'button' } = defineProps<{
  buttonType?: 'button' | 'link'
}>()

</script>
<template>
  <button v-if="buttonType == 'button'" class="duration-300 transition-all bg-black  text-white  font-medium text-lg py-1 md:py-2  xl:py-2.5  px-4 md:px-5 lg:px-8  rounded-full hover:shadow-blue-500/50 hover:scale-x-105 dark:text-black dark:bg-white">
    <slot/>
  </button>
  <a v-else class="duration-300 transition-all bg-black  text-white  font-medium text-lg py-1 md:py-2  xl:py-2.5  px-4 md:px-5 lg:px-8  rounded-full hover:shadow-blue-500/50 hover:scale-x-105 dark:text-black dark:bg-white">
    <slot/>
    </a>
</template>