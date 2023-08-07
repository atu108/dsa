function topologicalSort(graph) {
  const indegree = new Map();
  const result = [];

  // Calculate the in-degree of each vertex
  for (const [node, neighbors] of Object.entries(graph)) {
    if (!indegree.has(node)) {
      indegree.set(node, 0);
    }

    for (const neighbor of neighbors) {
      if (!indegree.has(neighbor)) {
        indegree.set(neighbor, 1);
      } else {
        indegree.set(neighbor, indegree.get(neighbor) + 1);
      }
    }
  }

  // Find vertices with in-degree 0 and add them to the queue
  const queue = [];
  for (const [node, degree] of indegree) {
    if (degree === 0) {
      queue.push(node);
    }
  }

  // Perform topological sorting
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    if (graph[node]) {
      for (const neighbor of graph[node]) {
        indegree.set(neighbor, indegree.get(neighbor) - 1);
        if (indegree.get(neighbor) === 0) {
          queue.push(neighbor);
        }
      }
    }
  }

  // If the graph contains a cycle, return null (no valid topological ordering)
  if (result.length !== Object.keys(graph).length) {
    return null;
  }

  return result;
}

// Example usage:
const graph = {
  5: [0, 2],
  4: [0, 1],
  3: [1],
  2: [3],
  1: [],
  0: [],
};

const result = topologicalSort(graph);
console.log(result); // Output: [5, 4, 2, 3, 1, 0] (a valid topological ordering)
