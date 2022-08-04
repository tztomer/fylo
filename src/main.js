import { createApp } from 'vue';
import './assets/styles/main.scss';
import App from './App.vue';
import { router } from './router.js';

const app = createApp(App);
app.directive('font-size', {
  beforeMount: (el, binding) => {
    el.style.fontSize = 20 + 'px';
  },
  updated: (el, binding) => {
    el.style.fontSize = 20 + 'px';
  },
});
app.use(router);
app.mount('#app');
