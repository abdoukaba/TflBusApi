import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import '@/assets/styles/tailwind.css';
import Routes from '@/routes.js'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({routes: Routes, mode: 'history'})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
