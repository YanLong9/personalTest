const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/homePage.vue")
  }
]

export default routes