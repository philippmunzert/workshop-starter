import { createWebHistory, createRouter } from "vue-router";
const history = createWebHistory();

const routes = [
    // { path: "/", component: Home }
];

const router = createRouter({ history, routes });
export default router;
