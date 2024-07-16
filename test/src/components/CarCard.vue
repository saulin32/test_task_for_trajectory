<template>
  <div class="border rounded-md shadow-md px-3 py-2">
    <div class="flex w-full gap-3" :class="{ hidden: vehicle.editable }">
      <img
        :src="randomAvatar"
        :alt="vehicle.name + ' ' + vehicle.model"
        class=""
      />
      <div class="w-full">
        <div class="flex">
          <p class="w-full text-center font-semibold">{{ vehicle.name }}</p>
          <div class="flex gap-2">
            <button @click="vehicle.editable = !vehicle.editable">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-3 h-3 fill-orange-400"
              >
                <path
                  d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                />
              </svg>
            </button>
            <button @click="$emit('delete')">
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
        <div class="flex gap-3">
          <div class="w-full">
            <div class="flex justify-between items-center">
              <p>Модель:</p>
              <p class="text-gray-400">{{ vehicle.model }}</p>
            </div>
            <div class="flex justify-between items-center">
              <p>Год выпуска:</p>
              <p class="text-gray-400">{{ vehicle.year }}</p>
            </div>
            <div class="flex justify-between items-center">
              <p>Цвет:</p>
              <p class="text-gray-400">{{ vehicle.color }}</p>
            </div>
          </div>

          <div class="w-full flex flex-col gap-3">
            <div class="flex justify-between gap-3 items-center">
              <p>Стоимость:</p>
              <p class="text-2xl">{{ vehicle.price }} ₽</p>
            </div>
            <button
              class="border border-blue-400 rounded-md p-1 text-blue-400 hover:bg-blue-500 flex items-center justify-center gap-2 group hover:text-white hover:border-blue-700"
              @click="$emit('showLocation')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="h-5 group-hover:fill-white fill-blue-500"
              >
                <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              Посмотреть местоположение
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="vehicle.editable">
      <div class="flex justify-end">
        <button
          @click="vehicle.editable = false"
          class="text-white border bg-blue-800 px-2 py-1 rounded-md"
        >
          Назад
        </button>
      </div>
      <form class="grid grid-cols-2 gap-2" @submit="vehicle.editable = false">
        <Input label="Модель" v-model="vehicle.model" required />
        <Input label="Год выпуска" v-model="vehicle.year" required />
        <Input label="Стоимость" v-model="vehicle.color" required />
        <Input label="Цвет" v-model="vehicle.price" required />
        <button
          type="submit"
          class="text-white border bg-blue-800 px-2 py-1 rounded-md col-span-2"
        >
          Сохранить
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { faker } from "@faker-js/faker";
import Input from "./Input.vue";

const props = defineProps({
  vehicle: {
    type: Object,
  },
});

let emits = defineEmits(["showLocation", "delete"]);

const randomAvatar = new URL(
  `../assets/Vehicle_${faker.number.int({
    min: 1,
    max: 10,
  })}.webp`,
  import.meta.url
).href;

// const randomAvatar = "../assets/Vehicle_1.webp";
</script>
