import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '@/layouts/Auth'
import Auth2Layout from '@/layouts/Auth2'

import MainLayout from '@/layouts/Main'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  // mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: 'dashboard/beta',
      component: MainLayout,
      meta: {
        authRequired: true,
        hidden: true,
      },
      children: [
        // Dashboards
        {
          path: '/dashboard/beta',
          meta: {
            title: 'Dashboard Beta' + process.env.BASE_URL,
          },
          component: () => import('./views/dashboard/beta'),
        },
      ],
    },

    // System Pages
    {
      path: '/auth',
      component: Auth2Layout,
      redirect: 'auth/login',
      children: [
        {
          path: '/auth/login',
          meta: {
            title: 'Sign In',
          },
          component: () => import('./views/auth/login'),
        },
      ],
    },

    {
      path: '/auth',
      component: AuthLayout,
      redirect: 'auth/login',
      children: [
        {
          path: '/auth/404',
          meta: {
            title: 'Error 404',
          },
          component: () => import('./views/auth/404'),
        },
        {
          path: '/auth/500',
          meta: {
            title: 'Error 500',
          },
          component: () => import('./views/auth/500'),
        },
        {
          path: '/auth/register',
          meta: {
            title: 'Sign Up',
          },
          component: () => import('./views/auth/register'),
        },
        {
          path: '/auth/forgot-password',
          meta: {
            title: 'Forgot Password',
          },
          component: () => import('./views/auth/forgot-password'),
        },
        {
          path: '/auth/lockscreen',
          meta: {
            title: 'Lockscreen',
          },
          component: () => import('./views/auth/lockscreen'),
        },
      ],
    },

    // Redirect to 404
    {
      path: '*', redirect: 'auth/404', hidden: true,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.user.authorized) {
      next({
        path: '/auth/login',
        query: { redirect: to.fullPath },
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
