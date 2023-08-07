function shortestDistance(graph, start) {
  let vertices = graph.length;
  let finalized = new Array(vertices).fill(false);
  let distance = new Array(vertices).fill(Infinity);
  distance[start] = 0;
  for (let i = 0; i < vertices - 1; i++) {
    //pick smallest distance vertex which is not finalized (u)
    let u = -1;
    for (let j = 0; j < vertices; j++) {
      if (!finalized[j]) {
        if (u == -1 || distance[j] < distance[u]) {
          u = j;
        }
      }
    }
    finalized[u] = true;
    // Now relax every adjacent vertices of u vertex;
    for (let k = 0; k < vertices; k++) {
      if (!finalized[k] && graph[u][k] != 0) {
        if (distance[k] > distance[u] + graph[u][k]) {
          distance[k] = distance[u] + graph[u][k];
        }
      }
    }
  }
  return distance;
}

let graph = [
  [0, 50, 100, 0],
  [50, 0, 30, 200],
  [100, 30, 0, 20],
  [0, 200, 20, 0],
];

console.log(shortestDistance(graph, 3));
