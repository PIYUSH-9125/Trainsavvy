import { calculateScore } from "./routeScorer";

export function findBestRoutes(routes) {
  const scoredRoutes = routes.map((route) => ({
    ...route,
    score: calculateScore(route),
  }));

  scoredRoutes.sort((a, b) => b.score - a.score);

  return scoredRoutes;
}