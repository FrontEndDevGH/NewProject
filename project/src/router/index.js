import Vue from 'vue'
import VueRouter from 'vue-router'
import CardsPage from '../components/cards-page/CardsPage.vue'
import CreateCardPage from '../components/create-card-page/CreateCardPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CardsPage',
    component: CardsPage
  },
  {
    path: '/create-card',
    name: 'CreateCardPage',
    component: CreateCardPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
