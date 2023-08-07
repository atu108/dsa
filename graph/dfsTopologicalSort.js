function dfsRec(node, visited, result) {
  if (visited.has(+node)) return;
  visited.add(+node);
  for (let neighbor of graph[node]) {
    dfsRec(+neighbor, visited, result);
  }
  result.push(node);
}

function topologicalSort(graph) {
  let visited = new Set();
  let result = [];
  for (const node in graph) {
    if (visited.has(+node)) continue;
    dfsRec(+node, visited, result);
  }
  return result.reverse();
}

const graph = {
  5: [0, 2],
  4: [0, 1],
  3: [1],
  2: [3],
  1: [],
  0: [],
};

topologicalSort(graph);
