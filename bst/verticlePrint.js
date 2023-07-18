const root = require("./search");
const Queue = require("../queue/qlinkl");

function verticalTraversal(root) {
  if (!root) return;
  const hash = {};
  const q = new Queue();
  q.enqueue([root, 0]);
  while (!q.isEmpty()) {
    let size = q.getSize();
    for (let i = 0; i < size; i++) {
      let current = q.getFront().data;
      if (hash[current[1]]) {
        hash[current[1]].push(current[0].data);
      } else {
        hash[current[1]] = [current[0].data];
      }
      if (current[0].left) q.enqueue([current[0].left, current[1] - 1]);
      if (current[0].right) q.enqueue([current[0].right, current[1] + 1]);
      q.dequeue();
    }
  }
  return hash;
}

console.log(verticalTraversal(root));
