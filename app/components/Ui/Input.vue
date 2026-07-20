<script setup lang="ts">
const {placeholder =""  , type ='text', modelValue=''} = defineProps<{placeholder?:string , type?:string ,modelValue?:string}>()



const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    v-if="type !== 'textarea'"
    class="bg-w z-20 border  border-gray-300 bg-gray-50 dark:border-gray-800 dark:bg-gray-600 rounded-sm placeholder:text-gray-500 outline-primary-800 text-sm xl:placeholder:text-base  xl:text-base p-2 xl:p-2.5 "
    :type="type || 'text'"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
  />

  <textarea
    v-else
    class="border bg-w z-20 h-20 sm:h-24 p-1.5  resize-none  border-gray-300 bg-gray-50 dark:border-gray-800 dark:bg-gray-600 rounded-sm placeholder:text-gray-500  text-sm xl:placeholder:text-base  xl:text-base lg:p-2 xl:p-2.5"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
  ></textarea>
</template>
