export default [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/hello',
    component: '@/pages/hello'
  },
  {
    path: "/welcome",
    component: "@/pages/Welcome"
  },
  {
    path: '/home',
    component: '@/pages/home'
  },
  {
    path: "/count",
    component: "@/pages/Count"
  }
];