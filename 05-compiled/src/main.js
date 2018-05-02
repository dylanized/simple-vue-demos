/* eslint-disable no-new */

// load Vue library
import Vue from 'vue';

// load App component
import App from './App';

// ??
Vue.config.productionTip = false;

// launch App
new Vue({
  el: 'main',
  components: { App },
  template: '<App />',
});
