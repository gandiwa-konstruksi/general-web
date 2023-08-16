import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/public/HomeView.vue'
import Login from '../views/auth/Login.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/public/AboutView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/public/ServicesView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/public/ProjectsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/public/ContactView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboard
    }
  ]
})

export default router
