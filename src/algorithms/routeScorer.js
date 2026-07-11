export function calculateScore(route) {
  let score = 100;

  // More train changes reduce score
  score -= route.changes * 15;

  // Longer waiting time reduces score
  score -= Math.floor(route.waitingTime / 10);

  // Higher fare reduces score
  score -= Math.floor(route.totalFare / 200);

  // Reward confirmed seats
  if (route.seat === "Available") {
    score += 20;
  }

  // Reward fastest journeys
  if (route.totalDuration <= 480) {
    score += 15;
  }

  return Math.max(0, Math.min(100, score));
}