//library//
export const bus = new Vue ();

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Nav from './components/Nav.vue'
import Book from './components/Book.vue'
import Footer from './components/Footer.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//Http Requests
Vue.use(VueResource)

//Components
Vue.component('Nav', Nav)
Vue.component('Book', Book)
Vue.component('Footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})


