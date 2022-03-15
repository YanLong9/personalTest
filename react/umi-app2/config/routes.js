//尝试去使用一个一级路由的方式去制作这个路由系统
export default [
  {
    path: '/',
    redirect: '/app',
  },
  {
    path: '/user',
    component: '@/pages/user',
    // layout: false,
    routes: [
      {
        path: '/user',
        component: '@/pages/nullComponent.jsx'
      },
      {
        path: '/user/login',
        component: "@/pages/user/login"
      },
      {
        path: '/user/register',
        component: "@/pages/user/register"
      },
      { component: '@/pages/RedirectAs404.jsx' }
    ]
  },
  // {
  //   path: '/app',
  //   component: '@/layouts/BaseLayout',
  //   routes: [
  //     {
  //       path: '/app',
  //       redirect: '/app/welcome',
  //     },
  //     {
  //       path: '/app/hello',
  //       name: 'hello',
  //       icon: 'yunshuzhongwuliu-xianxing',
  //       component: '@/pages/Hello',
  //     },
  //     {
  //       path: '/app/welcome',
  //       name: 'welcome',
  //       icon: 'cangkucangchu-xianxing',
  //       component: '@/pages/Welcome',
  //     },
  //     {
  //       path: '/app/count',
  //       name: 'count',
  //       icon: 'cangkucangchu-xianxing',
  //       component: '@/pages/Count',
  //     },
  //     {
  //       path: '/app/home',
  //       name: 'home',
  //       icon: 'cangkucangchu-xianxing',
  //       component: '@/pages/Home',
  //       routes: [
  //         {
  //           path: '/app/home',
  //           redirect: '/app/home/news'
  //         },
  //         {
  //           path: '/app/home/news',
  //           icon: 'cangkucangchu-xianxing',
  //           name: 'News',
  //           component: '@/pages/Home/News'
  //         },
  //         {
  //           path: '/app/home/message',
  //           icon: 'cangkucangchu-xianxing',
  //           name: 'Message',
  //           component: '@/pages/Home/Message',
  //           routes: [
  //             {
  //               path: '/app/home/message',
  //               component: '@/pages/nullComponent.jsx'
  //             },
  //             {
  //               path: '/app/home/message/detail',
  //               component: '@/pages/Home/Message/Detail'
  //             },
  //             { component: '@/pages/RedirectAs404.jsx' }
  //           ],
  //         },
  //         { component: '@/pages/RedirectAs404.jsx' }
  //       ]
  //     },
  //     {
  //       path: '/app/extention',
  //       name: 'extention',
  //       icon: 'cangkucangchu-xianxing',
  //       component: '@/pages/Extention',
  //     },
  //     { component: '@/pages/RedirectAs404.jsx' },
  //   ]
  // },
  {
    path: "/404",
    component: '@/pages/404',
    // layout: false
  },
  { component: '@/pages/RedirectAs404.jsx' }
];