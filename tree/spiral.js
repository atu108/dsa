const Queue = require("../queue/qlinkl");
const root = require("./tree");

function printSpiral(root) {
  if (!root) return;
  const q = new Queue();
  let stack = new Array();
  q.enqueue(root);
  let isReverse = false;
  while (!q.isEmpty()) {
    const size = q.getSize();
    for (let i = 0; i < size; i++) {
      const front = q.getFront().data;
      q.dequeue();
      if (isReverse) {
        stack.push(front);
      } else {
        process.stdout.write(front.data.toString() + " ");
      }
      if (front.left) q.enqueue(front.left);
      if (front.right) q.enqueue(front.right);
    }
    if (isReverse) {
      while (stack.length) {
        process.stdout.write(stack.pop().data.toString() + " ");
      }
    }
    isReverse = !isReverse;
    console.log("");
  }
}

printSpiral(root);
