<script setup lang="ts">
const { buttonType = 'button' } = defineProps<{
  buttonType?: 'button' | 'link'
}>()
</script>


<template>

  <button v-if="buttonType === 'button'"
    class="duration-300 transition-all shadow-blue-500/25 shadow-2xl text-white font-medium text-lg py-2  xl:py-2.5  px-5 lg:px-8 to-teal-600 from-blue-600 bg-gradient-to-r  whitespace-nowrap hover:shadow-blue-500/50 hover:scale-x-105">
    <slot />
  </button>
  <a v-else
    class="duration-300 transition-all shadow-blue-500/25 shadow-2xl text-white font-medium text-lg py-2  xl:py-2.5  px-5 lg:px-8 to-teal-600 from-blue-600 bg-gradient-to-r whitespace-nowrap hover:shadow-blue-500/50 hover:scale-x-105 cursor-pointer">
    <slot />
  </a>


</template>