import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores'
import { getTokenFromLocalStorage } from '@/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/UsuarioView.vue'),
      children: [
        { path: '', component: () => import('../components/usuario/UsuarioList.vue') },
        { path: 'crear', component: () => import('../components/usuario/UsuarioCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/usuario/UsuarioEdit.vue')
        }
      ]
    },
    {
      path: '/empleados',
      name: 'empleados',
      component: () => import('../views/EmpleadoView.vue'),
      children: [
        { path: '', component: () => import('../components/empleado/EmpleadoList.vue') },
        { path: 'crear', component: () => import('../components/empleado/EmpleadoCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/empleado/EmpleadoEdit.vue')
        }
      ]
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: () => import('../views/ProveedoreView.vue'),
      children: [
        { path: '', component: () => import('../components/proveedore/ProveedoreList.vue') },
        { path: 'crear', component: () => import('../components/proveedore/ProveedoreCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/proveedore/ProveedoreEdit.vue')
        }
      ]
    },
    {
      path: '/ladrillos',
      name: 'ladrillos',
      component: () => import('../views/LadrilloView.vue'),
      children: [
        { path: '', component: () => import('../components/ladrillo/LadrilloList.vue') },
        { path: 'crear', component: () => import('../components/ladrillo/LadrilloCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/ladrillo/LadrilloEdit.vue')
        }
      ]
    },
    {
      path: '/materiaprimas',
      name: 'materiaprimas',
      component: () => import('../views/MateriaprimaView.vue'),
      children: [
        { path: '', component: () => import('../components/materiaprima/MateriaprimaList.vue') },
        {
          path: 'crear',
          component: () => import('../components/materiaprima/MateriaprimaCreate.vue')
        },
        {
          path: 'editar/:id',
          component: () => import('../components/materiaprima/MateriaprimaEdit.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout()
    authStore.returnUrl = to.fullPath
    return '/login'
  }
})

export default router
