//基础路由表
export default [
  {
    path: '/',
    redirect: '/user',
  },
  //用户模块
  {
    path: '/user',
    component: require('@/pages/user').default,
    routes: [
      {
        path: '/user',
        component: require('@/pages/nullComponent.jsx').default
      },
      {
        path: '/user/login',
        component: "@/pages/user/login"
      },
      {
        path: '/user/register',
        component: require("@/pages/user/register").default
      },
      { component: require('@/pages/RedirectAs404.jsx').default }
    ]
  },
  // 404页面
  {
    path: "/404",
    component: require('@/pages/404').default
  },
  { component: require('@/pages/RedirectAs404.jsx').default }
]