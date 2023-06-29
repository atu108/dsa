const Queue = require("../queue/qlinkl");
const root = require("./tree");
function levelOrder(root) {
  if (!root) return;
  const q = new Queue();
  q.enqueue(root);
  while (!q.isEmpty()) {
    let front = q.getFront();
    if (front.data) {
      console.log(front.data.data);
      q.enqueue(front.data.left);
      q.enqueue(front.data.right);
    }
    q.dequeue();
  }
}

levelOrder(root);
