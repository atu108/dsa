const Queue = require("../queue/qlinkl");
const root = require("./tree");

let arr = [];
function sTree(root) {
  if (!root) {
    arr.push(-1);
    return;
  }
  arr.push(root.data);
  sTree(root.left);
  sTree(root.right);
}
sTree(root);
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function dsTree(arr, index) {
  if (index.val == arr.length) return null;
  let val = arr[index.val++];
  if (val == -1) return null;
  let root = new Node(val);
  root.left = dsTree(arr, index);
  root.right = dsTree(arr, index);
  return root;
}

console.log(dsTree(arr, { val: 0 }));

//            50
//      20          30
// 5       15            30
//                     30
