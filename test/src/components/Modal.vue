<template>
  <div
    v-if="modelValue"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-screen md:inset-0 min-h-screen py-10 px-20"
  >
    <div class="h-full w-full flex justify-center items-center" ref="target">
      <div class="bg-white rounded-lg shadow dark:bg-gray-700 h-full w-full">
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <slot name="header"></slot>

          <button
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="modelValue = false"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
let modelValue = defineModel({
  type: Boolean,
  default: false,
});

const target = ref(null);

onClickOutside(target, (event) => {
  modelValue.value = false;
});
</script>
