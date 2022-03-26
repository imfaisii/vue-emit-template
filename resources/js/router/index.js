import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../components/HomeComponent";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeComponent,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
