import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

createApp(App).mount("#app");

window.addEventListener("DOMContentLoaded", () => updateVariableSize());

window.addEventListener("resize", () => updateVariableSize());

const updateVariableSize = () => {
  const root = document.documentElement;
  const w = window.innerWidth / 100;
  const h = window.innerHeight / 100;
  root.style.setProperty("--1w", w + "px");
  root.style.setProperty("--1h", h + "px");
  root.style.setProperty("--1wh", Math.min(w, h) + "px");
};
