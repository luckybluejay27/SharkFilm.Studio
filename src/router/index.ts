// src/router/index.ts
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

// 1) Auto-register top-level views (e.g., HomeView.vue, CommissionsView.vue, …)
const viewModules = import.meta.glob('../views/*View.vue') // adjust if you use subfolders

function pascalToKebab(s: string) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

const viewRoutes: RouteRecordRaw[] = Object.entries(viewModules).map(([filePath, loader]) => {
  const file = filePath.split('/').pop()!.replace('.vue', '')               // e.g. "CommissionsView"
  const name = file.replace(/View$/, '')                                     // "Commissions"
  const path = name === 'Home' ? '/' : `/${pascalToKebab(name)}`             // "/commissions"

  return {
    path,
    name,
    component: loader as any,                                                // lazy-loaded
    meta: { title: name, showInNav: true },
  }
})

// 2) Add Terms route from components (kept out of the navbar)
const extraRoutes: RouteRecordRaw[] = [
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../components/TermsOfService.vue'),
    meta: { title: 'Terms of Service', showInNav: false },
  },
]

// 3) Optional: custom ordering for navbar-visible routes
const customOrder = ['Home', 'Commissions', 'Contracting', 'Resources']
const routes = [...viewRoutes, ...extraRoutes].sort((a, b) => {
  const ia = customOrder.indexOf((a.name as string) || '')
  const ib = customOrder.indexOf((b.name as string) || '')
  return (ia === -1 ? Number.POSITIVE_INFINITY : ia) -
         (ib === -1 ? Number.POSITIVE_INFINITY : ib)
})

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
