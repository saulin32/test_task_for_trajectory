<template>
  <div class="mb-6">
    <div class="flex gap-1">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >{{ label }}</label
      >
      <span v-if="required" class="text-red-500">*</span>
    </div>
    <input
      v-maska="mask"
      :required="required"
      type="text"
      v-model="modelValue"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
</template>

<script setup>
import { vMaska } from "maska/vue";

let props = defineProps({
  label: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
  mask: String,
});

let modelValue = defineModel();
</script>
