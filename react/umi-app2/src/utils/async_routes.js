//基础路由表
export default [
  {
    path: '/app',
    component: require('@/layouts/BaseLayout').default,
    routes: [
      {
        path: '/app',
        redirect: '/app/welcome',
      },
      {
        path: '/app/hello',
        name: 'hello',
        component: '@/pages/Hello',
      },
      {
        path: '/app/welcome',
        name: 'welcome',
        component: '@/pages/Welcome',
      },
      {
        path: '/app/count',
        name: 'count',
        component: '@/pages/Count',
      },
      {
        path: '/app/home',
        name: 'home',
        component: '@/pages/Home',
        routes: [
          {
            path: '/app/home',
            redirect: '/app/home/news'
          },
          {
            path: '/app/home/news',

            name: 'News',
            component: '@/pages/Home/News'
          },
          {
            path: '/app/home/message',

            name: 'Message',
            component: '@/pages/Home/Message',
            routes: [
              {
                path: '/app/home/message',
                component: '@/pages/nullComponent.jsx'
              },
              {
                path: '/app/home/message/detail',
                component: '@/pages/Home/Message/Detail'
              },
              { component: '@/pages/RedirectAs404.jsx' }
            ],
          },
          { component: '@/pages/RedirectAs404.jsx' }
        ]
      },
      {
        path: '/app/extention',
        name: 'extention',
        component: '@/pages/Extention',
      },
      { component: '@/pages/RedirectAs404.jsx' },
    ]
  },
]