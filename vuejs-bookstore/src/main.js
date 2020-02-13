//library//
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Nav from './components/Nav.vue'
import Book from './components/Book.vue'
import Footer from './components/Footer.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import './custom.scss'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.use(VueResource)
Vue.component('Nav', Nav)
Vue.component('Book', Book)
Vue.component('Footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})


