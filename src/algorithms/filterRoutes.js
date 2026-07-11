export function filterRoutes(routes, priority) {
  const filtered = [...routes];

  switch (priority) {
    case "Fastest Journey":
      filtered.sort((a, b) => a.totalDuration - b.totalDuration);
      break;

    case "Cheapest Journey":
      filtered.sort((a, b) => a.totalFare - b.totalFare);
      break;

    case "Least Train Changes":
      filtered.sort(
        (a, b) =>
          (a.changes || 1) - (b.changes || 1)
      );
      break;

    case "Confirmed Seat":
      filtered.sort((a, b) => {
        const seatRank = {
          Available: 3,
          RAC: 2,
          Waiting: 1,
        };

        const aSeat =
          seatRank[a.firstTrain?.seat] || 0;

        const bSeat =
          seatRank[b.firstTrain?.seat] || 0;

        return bSeat - aSeat;
      });

      break;

    default:
      break;
  }

  return filtered;
}