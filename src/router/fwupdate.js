import Vue from 'vue'
import VueRouter from 'vue-router'
import FirmwareUpdate from '../views/FirmwareUpdate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: FirmwareUpdate
  },
]

const router = new VueRouter({
  mode: 'hash', //histroy mode not work for electron-builder production pack
  base: process.env.BASE_URL,
  routes
})

export default router
