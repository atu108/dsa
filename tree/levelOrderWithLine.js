const Queue = require("../queue/qlinkl");
const root = require("./tree");
function levelOrder(root) {
  if (!root) return;
  const q = new Queue();
  q.enqueue(root);
  q.enqueue(null);
  while (q.getSize() > 1) {
    let front = q.getFront();
    if (front.data == null) {
      console.log();
      q.enqueue(null);
    } else {
      process.stdout.write(front.data.data.toString() + " ");
      if (front.data.left) q.enqueue(front.data.left);
      if (front.data.right) q.enqueue(front.data.right);
    }
    q.dequeue();
  }
  console.log();
}

levelOrder(root);
