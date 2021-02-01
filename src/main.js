import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import './index.css'

// use router
// createApp(App).use(router).mount("#app");

// use store and router
createApp(App).use(router).use(store).mount("#app");

// createApp(App).mount("#app");
