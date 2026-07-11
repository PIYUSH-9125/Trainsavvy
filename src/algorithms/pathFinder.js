import { buildGraph } from "./graphBuilder";

export function findAllRoutes(source, destination) {
  const graph = buildGraph();
  const routes = [];

  function dfs(current, path, trains, visited) {
    if (current === destination) {
      routes.push({
        stations: [...path],
        trains: [...trains],
      });
      return;
    }

    if (!graph[current]) return;

    for (const edge of graph[current]) {
      if (!visited.has(edge.station)) {
        visited.add(edge.station);

        dfs(
          edge.station,
          [...path, edge.station],
          [...trains, edge.train],
          visited
        );

        visited.delete(edge.station);
      }
    }
  }

  dfs(source, [source], [], new Set([source]));

  return routes;
}