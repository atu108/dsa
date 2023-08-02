const Queue = require("./qlinkl");
const q = new Queue();
q.enqueue("34");
q.enqueue("2");
q.enqueue("34");
// q.enqueue("90");
function reverseQ(q) {
  if (q.isEmpty()) {
    return;
  }
  let ele = q.getFront();
  q.dequeue();
  reverseQ(q);
  q.enqueue(ele);
}

reverseQ(q);
console.log(q);

// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
