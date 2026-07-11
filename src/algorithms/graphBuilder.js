import { trainNetwork } from "../data/trainNetwork";

export function buildGraph() {
  const graph = {};

  trainNetwork.forEach((train) => {
    for (let i = 0; i < train.stations.length - 1; i++) {
      const from = train.stations[i];
      const to = train.stations[i + 1];

      if (!graph[from]) graph[from] = [];

      graph[from].push({
        station: to,
        train,
      });
    }
  });

  return graph;
}