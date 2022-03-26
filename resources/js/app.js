/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import { createApp } from "vue";
import router from "./router";
import HomeComponent from "./components/HomeComponent";
import mitt from "mitt";

const emitter = mitt();

const app = createApp({
    components: {
        HomeComponent,
    },
}).use(router);

// emitter
app.config.globalProperties.emitter = emitter;
app.mount("#app");
