import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
// store가져오기

new Vue({
  render: h => h(App),
  // store넣기.
  store,
}).$mount("#app");

// new Vue({
//   el:"#app",
//   render:h=>h(App)
// })
