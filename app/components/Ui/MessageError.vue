<script setup lang="ts">
const emit  = defineEmits(['close'])
const close = () => {
emit('close')
}
</script>



<template>
  <transition name="fade">
    <div class="bg-red-100 border border-red-300 text-red-800 text-sm rounded px-4 py-2 flex items-start gap-2 relative">
      <svg class="w-4 h-4 mt-0.5 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M18 10A8 8 0 11.001 10a8 8 0 0117.998 0zM9 4a1 1 0 012 0v4a1 1 0 01-2 0V4zm2 8a1 1 0 10-2 0 1 1 0 002 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="flex-1">
        <slot></slot>
      </span>
      <button @click="close" class="text-red-800 hover:text-red-900 text-sm font-bold absolute top-1 right-2">&times;</button>
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
