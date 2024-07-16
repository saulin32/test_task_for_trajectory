<template>
  <div class="mb-3 flex gap-3">
    <div class="flex gap-2 items-center rounded-md shadow-md pr-2">
      <button
        class="flex gap-2 items-center !w-full !h-full py-1 px-2"
        @click="
          sort.year === 'ask' ? (sort.year = 'desk') : (sort.year = 'ask')
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          class="h-5"
        >
          <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
          />
        </svg>
        <p>По году выпуска</p>
      </button>
      <button @click="sort.year = null" v-if="sort.year">
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

    <div class="flex gap-2 items-center rounded-md shadow-md pr-2">
      <button
        class="flex gap-2 items-center !w-full !h-full py-1 px-2"
        @click="
          sort.price === 'ask' ? (sort.price = 'desk') : (sort.price = 'ask')
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          class="h-5"
        >
          <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
          />
        </svg>
        <p>По цене</p>
      </button>
      <button @click="sort.price = null" v-if="sort.price">
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
  </div>
  <div class="grid grid-cols-2 gap-8 w-full">
    <CarCard
      v-for="vehicle in filteredVehicles"
      :key="vehicle.id"
      :vehicle
      @showLocation="showModalLocation = true"
      @delete="deleteVehicle(vehicle)"
    />
  </div>
  <Modal v-model="showModalLocation">
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        Местоположение
      </h3>
    </template>
    <template #body> </template>
  </Modal>
  <Map />
</template>

<script setup>
import axios from "axios";
import { computed, ref, watch, reactive } from "vue";
import CarCard from "./CarCard.vue";
import Modal from "./Modal.vue";
import Input from "./Input.vue";
import { orderBy } from "lodash";
import Map from "./Map.vue";

let vehicles = ref([]);
let showModalLocation = ref(false);

let sort = reactive({
  year: null,
  price: null,
});

function getCards() {
  axios
    .get("https://test.tspb.su/test-task/vehicles")
    .then((response) => {
      vehicles.value = response.data || [];
    })
    .catch((error) => console.error(error));
}

let filteredVehicles = computed(() => {
  //   console.log(orderBy(vehicles.value, ["year"], ["desc"]));

  //   let ordered = sort.byYear.ask ? orderBy(vehicles.value, ["year"], ["ask"]) :

  const sortFields = [];
  const sortOrders = [];
  ["year", "price"].forEach((field) => {
    if (sort[field]) {
      sortFields.push(field);
      sortOrders.push(sort[field] === "ask" ? "asc" : "desc");
    }
  });
  return orderBy(vehicles.value, sortFields, sortOrders);
});

// watch(
//   () => sort.byYear,
//   (newVal) => {
//     console.log(newVal);
//     vehicles.value = orderBy(
//       vehicles.value,
//       ["year"],
//       [newValue.desc ? "desc" : "asc"]
//     );
//   }
// );

function deleteVehicle(vehicle) {
  if (confirm("Вы действительно хотите удалить карточку?"))
    vehicles.value = vehicles.value.filter((i) => i.id !== vehicle.id);
}

getCards();
</script>
