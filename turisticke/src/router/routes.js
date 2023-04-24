const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/auth",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LoginPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      { path: "axo", component: () => import("pages/AxiosPageTest.vue") },
    ],
  },
  {
    path: "/one_atraction",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      {name: "one_atraction", path: ":id", component: () => import("pages/AtrakcijePage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
