import { createWebHistory, createRouter } from "vue-router";
import AddNewSessionPage from "./pages/AddNewSessionPage.vue";
import QuestionsPage from "./pages/QuestionsPage.vue";
import SessionsPage from "./pages/SessionsPage.vue";
const history = createWebHistory();

const routes = [
    { path: "/", component: SessionsPage },
    { path: "/new-event", name: "new-event", component: AddNewSessionPage },
    { path: "/session/:slug", name: "sessions-single-page", component: QuestionsPage }
];

const router = createRouter({ history, routes });
export default router;
