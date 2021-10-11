const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/App.vue'),
    redirect: '/flvsTest',
    children: [
      {
        path: '/homePage',
        name: 'HomePage',
        component: () => import('@/views/homePage.vue')
      },
      {
        path: '/historyCalendarTest',
        name: 'HistoryCalendarTest',
        component: () => import('@/views/HistoryCalendarTest.vue')
      },
      {
        path: '/flvsTest',
        name: 'FlvsTest',
        component: () => import('@/views/flvsTest.vue')
      }
    ]
  }
]

export default routes
