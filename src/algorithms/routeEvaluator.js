export function evaluateRoutes(routes, priority) {
  return routes
    .map((route) => {
      let score = 100;

      // Number of train changes
      const changes = new Set(route.trains.map(t => t.trainNo)).size - 1;

      score -= changes * 10;

      // Travel time
      score -= route.totalDuration / 60;

      // Fare
      score -= route.totalFare / 100;

      // User preference
      if (priority === "Fastest Journey")
        score += 15;

      if (priority === "Cheapest Journey")
        score += 15;

      if (priority === "Least Train Changes")
        score += 20;

      if (priority === "Confirmed Seat")
        score += 10;

      return {
        ...route,
        score: Math.round(score)
      };
    })
    .sort((a, b) => b.score - a.score);
}