import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('../views/**/*.vue')

const routes: RouteRecordRaw[] = (
  await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const match = path.match(/\.\/views\/(.+)\.vue$/)
      if (!match) return null

      const fileName = match[1].replace(/\//g, '-').replace(/[-_](\w)/g, (_, c) => c.toUpperCase()) // Convert to PascalCase

      // Import the component to check its `defineOptions`
      const component = (await resolver()) as { default: { name?: string } }
      const name = component.default?.name || fileName

      return {
        path: `/${fileName.toLowerCase()}`,
        name,
        component: component.default,
      } as RouteRecordRaw
    }),
  )
).filter((route): route is RouteRecordRaw => route !== null)

// Custom Order: Home > Commissions > Contracting > Resources
const customOrder = ['Home', 'Commissions', 'Contracting', 'Resources']

routes.sort((a, b) => {
  const indexA = customOrder.indexOf(a.name as string)
  const indexB = customOrder.indexOf(b.name as string)
  return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB)
})

// Ensure Home is the default route
if (!routes.find((route) => route.path === '/')) {
  const homeRoute = routes.find((route) => route.name === 'Home')
  if (homeRoute) {
    routes.push({ path: '/', redirect: homeRoute.path } as RouteRecordRaw)
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
