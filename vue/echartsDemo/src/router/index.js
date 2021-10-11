import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index/index.vue")
  }, {
    path: "/3dEcharts",
    name: "3dEcharts",
    component: () => import("@/views/3dEcharts/index.vue")
  }, {
    path: "/3dEcharts2",
    name: "3dEcharts2",
    component: () => import("@/views/3dEcharts2/index.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
