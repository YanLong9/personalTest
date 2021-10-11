const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/layout/index.vue'),
    redirect: '/ugv',
    children: [
      {
        path: '/ugv',
        name: 'UGV',
        component: () => import('@/views/UGV/index.vue')
      }
    ]
  }
]

export default routes
