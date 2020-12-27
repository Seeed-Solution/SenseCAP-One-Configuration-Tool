import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Settings from '../views/Settings.vue'
// import FirmwareUpdate from '../views/FirmwareUpdate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: Settings //() => import('../views/Settings.vue')
  // },
  // {
  //   path: '/firmwareupdate',
  //   name: 'FirmwareUpdate',
  //   component: () => import('../views/FirmwareUpdate.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash', //histroy mode not work for electron-builder production pack
  base: process.env.BASE_URL,
  routes
})

export default router
