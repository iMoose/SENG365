import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.http.options.emulateJSON = true;

const routes = [
  {
    path: '/',
    component: Auctions // Default page redirect to auctions? Would simplify life but idk
  },
  {
    path: '/auction/:auctionId',
    name: "auction",
    component: Auction  // Page for single auction
  },
  {
    path: '/user',
    name: "user",
    component: User // For viewing a single user profile? No explicit story about being able to search users
  }
];

const router = new VueRouter({
  routes:routes,
  mode: 'history'
});


new Vue({
  el: '#app',
  render: h => h(App)
})
