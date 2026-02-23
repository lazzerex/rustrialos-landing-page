/**
 * Route Definitions for Rustrial OS
 */

export interface NavConfig {
  show: boolean;
  order: number;
  label: string;
}

export interface RouteDefinition {
  path: string;
  nav?: NavConfig;
}

export interface NavRoute {
  path: string;
  label: string;
  order: number;
}

export const routes = {
  home: {
    path: '/',
    nav: { show: false, order: 0, label: 'Home' },
  },
  docs: {
    path: '/docs',
    nav: { show: false, order: 1, label: 'Documentation' },
  },
  download: {
    path: '/download',
    nav: { show: false, order: 2, label: 'Download' },
  },
} as const;

/**
 * Get all routes configured to show in navigation
 */
export function getNavRoutes(): NavRoute[] {
  return Object.values(routes)
    .filter((route) => route.nav?.show)
    .sort((a, b) => (a.nav?.order ?? 0) - (b.nav?.order ?? 0))
    .map((route) => ({
      path: route.path,
      label: route.nav?.label ?? '',
      order: route.nav?.order ?? 0,
    }));
}
