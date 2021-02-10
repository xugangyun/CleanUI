export const getMenuData = [
  // {
  //   category: true,
  //   title: 'Dashboards',
  // },
  // {
  //   title: 'Dashboards',
  //   key: 'dashboards',
  //   icon: 'fe fe-home',
  //   // roles: ['admin'], // set user roles with access to this route
  //   count: 4,
  //   children: [
  //     {
  //       title: 'Dashboard Beta',
  //       key: 'dashboardBeta',
  //       url: '/dashboard/beta',
  //     },
  //   ],
  // },
  {
    title: 'Auth Pages',
    key: 'auth',
    icon: 'fe fe-user',
    children: [
      {
        title: 'Login',
        key: 'authLogin',
        url: '/auth/login',
      },
      {
        title: 'Forgot Password',
        key: 'authForgotPassword',
        url: '/auth/forgot-password',
      },
      {
        title: 'Register',
        key: 'authRegister',
        url: '/auth/register',
      },
      {
        title: 'Lockscreen',
        key: 'authLockscreen',
        url: '/auth/lockscreen',
      },
      {
        title: 'Page 404',
        key: 'auth404',
        url: '/auth/404',
      },
      {
        title: 'Page 500',
        key: 'auth500',
        url: '/auth/500',
      },
    ],
  },
]
