import { trains } from "../data/trains";

export function findDirectRoutes(source, destination) {
  const directRoutes = [];

  trains.forEach((train) => {
    const sourceIndex = train.route.indexOf(source);
    const destinationIndex = train.route.indexOf(destination);

    if (
      sourceIndex !== -1 &&
      destinationIndex !== -1 &&
      sourceIndex < destinationIndex
    ) {
      directRoutes.push({
        trainNo: train.trainNo,
        trainName: train.trainName,
        departure: train.departure[sourceIndex],
        arrival: train.arrival[destinationIndex],
      });
    }
  });

  return directRoutes;
}