const Queue = require("../queue/qlinkl");
const root = require("./tree");

class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}
let prev = null;
function treeToLL(root) {
  if (!root) return root;
  let head = treeToLL(root.left);
  if (!prev) {
    head = root;
  } else {
    root.left = prev;
    prev.right = root;
  }
  prev = root;
  treeToLL(root.right);
  return head;
}

//            10
//      20          30
// 40       50            60
//                     70
console.log(treeToLL(root));
