import Vue from 'vue';
import Autocomplete from '@trevoreyre/autocomplete-vue';
import App from './App.vue';

Vue.use(Autocomplete);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
