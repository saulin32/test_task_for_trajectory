<template>
  <div class="border rounded-md shadow-md px-3 py-2">
    <p class="font-semibold text-center">{{ vehicle.name }}</p>
    <div>
      <div class="flex justify-between">
        <p>Модель:</p>
        <p class="text-gray-400">{{ vehicle.model }}</p>
      </div>
      <div class="flex justify-between">
        <p>Год выпуска:</p>
        <p class="text-gray-400">{{ vehicle.year }}</p>
      </div>
      <div class="flex justify-between">
        <p>Цвет:</p>
        <p class="text-gray-400">{{ vehicle.color }}</p>
      </div>
      <div class="flex justify-between">
        <p>Стоимость:</p>
        <p class="text-gray-400">{{ vehicle.price }}</p>
      </div>
    </div>
    <!-- {{ vehicle }} -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  vehicle: {
    type: Object,
  },
});
</script>
