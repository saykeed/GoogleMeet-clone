import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Room from '../views/Room.vue'
import Join from '../views/Join.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/room',
    name: 'Room',
    component: Room
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

router.beforeEach(() => {
  
})

export default router
