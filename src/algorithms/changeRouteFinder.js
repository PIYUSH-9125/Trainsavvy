import { trainNetwork } from "../data/trainNetwork";

export function findOneChangeRoute(source, destination) {
  const routes = [];

  trainNetwork.forEach((firstTrain) => {
    const sourceIndex = firstTrain.stations.indexOf(source);

    if (sourceIndex === -1) return;

    for (let i = sourceIndex + 1; i < firstTrain.stations.length; i++) {
      const changeStation = firstTrain.stations[i];

      trainNetwork.forEach((secondTrain) => {
        if (firstTrain.trainNo === secondTrain.trainNo) return;

        const changeIndex = secondTrain.stations.indexOf(changeStation);
        const destinationIndex = secondTrain.stations.indexOf(destination);

        if (
          changeIndex !== -1 &&
          destinationIndex !== -1 &&
          changeIndex < destinationIndex
        ) {

          const totalFare = firstTrain.fare + secondTrain.fare;
          const totalDuration =
            firstTrain.duration +
            secondTrain.duration +
            30; // 30 min average waiting time

          let score = 100;

          score -= totalFare / 100;
          score -= totalDuration / 60;

          routes.push({
            firstTrain,
            secondTrain,

            source,
            destination,

            changeStation,

            totalFare,
            totalDuration,
            waitingTime: 30,

            score: Math.round(score),
          });
        }
      });
    }
  });

  routes.sort((a, b) => b.score - a.score);

  return routes;
}