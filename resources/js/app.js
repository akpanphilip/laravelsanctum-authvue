import "./bootstrap";
import Router from "@/router";
// import store from "@/store";
import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// toast
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const vuetify = createVuetify({
    components,
    directives,
});

// createApp(App).use(vuetify).mount('#app')

const app = createApp({});
app.use(Vue3Toasity, { autoClose: 3000 });
app.use(Router);
// app.use(store);
app.use(vuetify);
app.mount("#app");
