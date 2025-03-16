import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

async function loadRoutes() {
  const modules = import.meta.glob('../views/**/*.vue');

  const routes: RouteRecordRaw[] = (
    await Promise.all(
      Object.entries(modules).map(async ([path, resolver]) => {
        const match = path.match(/\.\/views\/(.+)\.vue$/);
        if (!match) return null;

        const fileName = match[1].replace(/\//g, '-').replace(/[-_](\w)/g, (_, c) => c.toUpperCase());

        // Import the component safely
        const component = await (resolver as () => Promise<{ default: any }>)();
        const name = component.default?.name || fileName;

        return {
          path: `/${fileName.toLowerCase()}`,
          name,
          component: component.default,
        } as RouteRecordRaw;
      }),
    )
  ).filter((route): route is RouteRecordRaw => route !== null);

  return routes;
}

// ✅ Create router first with empty routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [], // Placeholder, will be updated later
});

// ✅ Load routes asynchronously and update the router
loadRoutes().then((routes) => {
  routes.forEach((route) => router.addRoute(route));
});

export default router;
