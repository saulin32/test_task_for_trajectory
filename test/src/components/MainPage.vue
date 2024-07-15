<template>
  <div class="flex flex-col gap-3 w-full">
    <CarCard v-for="vehicle in vehicles" :key="vehicle.id" :vehicle />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import CarCard from "./CarCard.vue";

let vehicles = ref([]);

function getCards() {
  axios
    .get("https://test.tspb.su/test-task/vehicles")
    .then((response) => {
      vehicles.value = response.data || [];
    })
    .catch((error) => console.error(error));
}

getCards();
</script>
