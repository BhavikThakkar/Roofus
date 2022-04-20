
const routes = [
  {
    path: '/',
    component: () => import('pages/LoginPage.vue'),
    // children: [
    //   { path: '/login', component: () => import('pages/LoginPage.vue') }
    // ],

  },
  {
    path: '/header',
    component: () => import('layouts/HeaderLayout.vue'),
    children: [
      { path: 'overview', component: () => import('pages/OverViewPage.vue') },
      { path: 'payments', component: () => import('pages/PaymentsPage.vue') },
      { path: 'lease', component: () => import('pages/LeasePage.vue') },
      { path: 'maintenance', component: () => import('pages/MaintenancePage.vue') },
      { path: 'profile', component: () => import('pages/ProfilePage.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
