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
      { path: "test", component: () => import("pages/AxiosPageTest.vue") },
    ],
  },
  {
    path: "/atract",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      { path: "atr", component: () => import("pages/AtrakcijePage.vue") },
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
