//尝试去使用一个一级路由的方式去制作这个路由系统
export default [
  {
    path: "/index/hello",
    icon: 'testicon',
    name: 'Hello',
    component: "@/pages/Hello"
  },
  {
    path: "/index/welcome",
    icon: 'testicon',
    name: 'Welcome',
    component: "@/pages/Welcome"
  },
  {
    path: "/index/todoList",
    icon: 'testicon',
    name: 'TodoList',
    component: "@/pages/TodoList"
  },
  {
    path: "/index/gitSearch",
    icon: 'testicon',
    name: 'GitSearch',
    component: "@/pages/GitSearch"
  },
  {
    path: "/index/home",
    icon: 'testicon',
    name: 'Home',
    component: "@/pages/Home",
    routes: [
      {
        path: "/index/home",
        icon: 'testicon',
        name: 'home',
        redirect: '/index/home/news'
      },
      {
        path: '/index/home/news',
        icon: 'testicon',
        name: 'News',
        component: '@/pages/Home/News'
      },
      {
        path: '/index/home/message',
        icon: 'testicon',
        name: 'Message',
        component: '@/pages/Home/Message',
        routes: [
          {
            path: '/index/home/message',
            icon: 'testicon',
            name: 'nullComponent',
            component: '@/pages/nullComponent.jsx'
          },
          {
            path: '/index/home/message/detail',
            icon: 'testicon',
            name: 'Detail',
            component: '@/pages/Home/Message/Detail'
          },
          { component: '@/pages/RedirectAs404.jsx' }
        ]
      },
      { component: '@/pages/RedirectAs404.jsx' }
    ]
  },
  {
    path: "/index/count",
    icon: 'testicon',
    name: 'Count',
    component: "@/pages/Count"
  },
  {
    path: "/index/extention",
    icon: 'testicon',
    name: 'Extention',
    component: "@/pages/Extention"
  },
  {
    path: "/index/countDva",
    icon: 'testicon',
    name: 'CountDva',
    component: "@/pages/CountDva"
  },
  {
    path: "/404",
    name: '404',
    component: '@/pages/404'
  },
];