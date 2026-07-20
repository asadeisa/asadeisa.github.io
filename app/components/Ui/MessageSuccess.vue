<script setup lang="ts">
const emit  = defineEmits(['close'])
const close = () => {
emit('close')
}
</script>


<template>
  <transition name="fade">
    <div class="bg-green-100 border border-green-300 text-green-800 text-sm rounded px-4 py-2 flex items-start gap-2 relative">
      <svg class="w-4 h-4 mt-0.5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="flex-1 text-green-800"><slot></slot></span>
      <button @click="close" class="text-green-800 hover:text-green-900 text-xs font-bold absolute top-1 right-2">&times;</button>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
