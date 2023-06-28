const mapping: Record<string, string> = {
  dashboards: 'dashboard',
  locations: 'location',
  organizations: 'organization',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
