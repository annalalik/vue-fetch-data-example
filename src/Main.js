import { createApp } from "vue";
import App from "./App.vue";
import List from "./components/List.vue";
import NewEntry from "./components/NewEntry.vue";
import Main from "./components/Main.vue";
import * as VueRouter from "vue-router";

const routes = [
  { path: "/", component: Main },
  { path: "/list", component: List },
  { path: "/new-entry", component: NewEntry },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
