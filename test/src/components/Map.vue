<template>
  <div class="h-full">
    <div id="map" style="width: 100%; height: 700px"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const apiKey = "c19569d6-82c0-426e-b7e0-00c2bf556d0a";

let props = defineProps({
  latitude: {},
  longitude: {},
});

function initMap() {
  if (typeof ymaps === "undefined") {
    console.error("Yandex Maps script not loaded");
    return;
  }

  ymaps.ready(() => {
    const map = new ymaps.Map("map", {
      center: [props.latitude, props.longitude],
      zoom: 10,
    });

    const placemark = new ymaps.Placemark(
      [props.latitude, props.longitude],
      {}
    );

    map.geoObjects.add(placemark);
  });
}

onMounted(() => {
  const script = document.createElement("script");
  script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
  script.onload = initMap;
  script.onerror = () => console.error("Yandex Maps script loading error");
  document.head.appendChild(script);
});
</script>
