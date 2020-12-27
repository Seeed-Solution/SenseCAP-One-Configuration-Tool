import Vue from 'vue'
import VueRouter from 'vue-router'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Settings',
    component: Settings
  },
]

const router = new VueRouter({
  mode: 'hash', //histroy mode not work for electron-builder production pack
  base: process.env.BASE_URL,
  routes
})

export default router
