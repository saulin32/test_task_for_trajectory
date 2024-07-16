import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import { createYmaps } from "vue-yandex-maps";

const app = createApp(App);

// app.use(
//   createYmaps({
//     apikey: "c19569d6-82c0-426e-b7e0-00c2bf556d0a",
//     lang: "ru_RU",
//   })
// );

app.mount("#app");
