import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import vuetify from "./plugins/vuetify";

import { useRegisterSW } from "virtual:pwa-register/vue";

const intervalMS = 60 * 1000;

useRegisterSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
      }, intervalMS);
  },
});

const app = createApp(App);

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
