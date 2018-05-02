// load Vue library
import Vue from 'vue';

// disable dev msg
Vue.config.productionTip = false;

// define components
const NotFound = { template: '<p>Page not found</p>' };
const Home = { template: '<p>home page</p>' };
const About = { template: '<p>about page</p>' };

// define routes and component names
const routes = {
  '/': Home,
  '/about': About,
};

// launch Vue, pass in data, and mount helpers
new Vue({
  el: 'main',
  // pass in current route name
  data: {
    currentRoute: window.location.pathname,
  },
  // mount helpers
  computed: {
    // mount currentComponent helper
    currentComponent () {
      // if currentRoute is listed in the routes table, return its name, else return default
      return routes[this.currentRoute] || NotFound;
    }
  },
  // render
  render (h) { return h(this.currentComponent) }
});
