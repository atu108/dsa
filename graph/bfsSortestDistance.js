const Queue = require("../queue/qlinkl");

function bfs(graph, start) {
  let q = new Queue();
  let result = {};
  let visited = new Array(Object.keys(graph).length).fill(false);
  q.enqueue(start);
  result[start] = 0;
  visited[start] = true;
  while (!q.isEmpty()) {
    const front = q.getFront().data;
    for (let neighbor of graph[front]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        result[neighbor] = result[front] + 1;
        q.enqueue(neighbor);
      }
    }
    q.dequeue();
  }
  return result;
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B", "E"],
  E: ["B", "D", "F"],
  F: ["C", "E"],
};
console.log(bfs(graph, "F"));
