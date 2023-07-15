const Queue = require("../queue/qlinkl");
const root = require("./tree");

function leftCount(root) {
  if (!root) return 0;
  return 1 + leftCount(root.left);
}

function rightCount(root) {
  if (!root) return 0;
  return 1 + rightCount(root.right);
}

function diameter(root) {
  if (!root) return 0;
  let dia = 1;
  const q = new Queue();
  q.enqueue(root);
  while (!q.isEmpty()) {
    const front = q.getFront().data;
    dia = Math.max(dia, leftCount(front.left) + rightCount(front.right) + 1);
    if (front.left) q.enqueue(front.left);
    if (front.right) q.enqueue(front.right);
    q.dequeue();
  }
  return dia;
}

function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

function dia(root) {
  if (!root) return 0;
  let d1 = 1 + height(root.left) + height(root.right);
  let d2 = diameter(root.left);
  let d3 = diameter(root.right);
  return Math.max(d1, d2, d3);
}

let res = 0;
function diaEfficient(root) {
  if (!root) return 0;
  let left = diaEfficient(root.left);
  let right = diaEfficient(root.right);
  res = Math.max(res, 1 + left + right);
  return 1 + Math.max(left, right);
}
diaEfficient(root);
console.log(res);

//            50
//      20          30
// 5       15            30
//                    30
