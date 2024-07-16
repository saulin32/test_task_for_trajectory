<template>
  <!-- <YandexMap
    v-model="map"
    :settings="{
      location: {
        center: [37.617644, 55.755819],
        zoom: 9,
      },
    }"
    width="100%"
    height="500px"
  >
    <YandexMapDefaultSchemeLayer />
  </YandexMap> -->
  <div id="map" style="width: 600px; height: 400px"></div>
</template>

<script setup>
// import { YandexMap, YandexMapDefaultSchemeLayer } from "vue-yandex-maps";
import axios from "axios";
const apiKey = "c19569d6-82c0-426e-b7e0-00c2bf556d0a";

async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById("map"),

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [37.588144, 55.733842],

        // Уровень масштабирования
        zoom: 10,
      },
    }
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
}

// initMap();

function getMap() {
  axios
    .get(`https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
}

getMap();
</script>
