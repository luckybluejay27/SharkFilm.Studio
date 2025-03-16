import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

async function loadRoutes() {
  const modules = import.meta.glob('../views/**/*.vue');

  const routes: RouteRecordRaw[] = (
    await Promise.all(
      Object.entries(modules).map(async ([path, resolver]) => {
        const match = path.match(/\.\/views\/(.+)\.vue$/);
        if (!match) return null;

        const fileName = match[1]
          .replace(/\//g, '-')
          .replace(/[-_](\w)/g, (_, c) => c.toUpperCase());

        // Import the component safely
        const component = await (resolver as () => Promise<{ default: any }>)();
        const name = component.default?.name || fileName;

        // If this is the Home component, set its route path to '/'
        const routePath = name === 'Home' ? '/' : `/${fileName.toLowerCase()}`;

        return {
          path: routePath,
          name,
          component: component.default,
        } as RouteRecordRaw;
      })
    )
  ).filter((route): route is RouteRecordRaw => route !== null);

  // Custom order: Home > Commissions > Contracting > Resources
  const customOrder = ['Home', 'Commissions', 'Contracting', 'Resources'];
  routes.sort((a, b) => {
    const indexA = customOrder.indexOf(a.name as string);
    const indexB = customOrder.indexOf(b.name as string);
    return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
  });

  return routes;
}

// Create router first with empty routes array
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [], // Placeholder, will be updated asynchronously
});

// Load routes asynchronously and update the router
loadRoutes().then((routes) => {
  routes.forEach((route) => router.addRoute(route));

  // If the current route is '/' (initial page load) but Home wasn't loaded then,
  // force a navigation to Home.
  if (router.currentRoute.value.path === '/') {
    const homeRoute = router.getRoutes().find((route) => route.name === 'Home');
    if (homeRoute) {
      router.replace(homeRoute.path);
      console.log("Redirecting '/' to Home:", homeRoute.path);
    }
  }
});

export default router;
