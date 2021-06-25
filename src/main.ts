import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify'
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required, email, max, min, digits, regex } from "vee-validate/dist/rules";
import './assets/scss/base.scss'
import './assets/scss/custom.scss'

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

extend("required", required);
extend("email", email);
extend("required", required);
extend("min", min);
extend("max", max);
extend("max", max);
extend("digits", digits);
extend("regex", regex);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
