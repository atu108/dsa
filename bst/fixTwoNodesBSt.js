class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(18);
let rootLeft = new Node(60);
let rootLeftLeft = new Node(4);
let rootRight = new Node(70);
let rootRightLeft = new Node(20);
let rootRightRight = new Node(80);

root.left = rootLeft;
root.left.left = rootLeftLeft;
root.right = rootRight;
root.right.left = rootRightLeft;
root.right.right = rootRightRight;

function fixNodes(root) {
  if (!root) return;
  let prev = new Node(-Infinity);
  let first = null;
  let second = null;
  findImbalancedNodes(root);
  if (first && second) {
    let temp = first.data;
    first.data = second.data;
    second.data = temp;
  }
  return root;
  function findImbalancedNodes(root) {
    if (!root) return;
    findImbalancedNodes(root.left);
    if (root.data <= prev.data) {
      if (!first) {
        first = prev;
      }
      second = root;
    }
    prev = root;
    findImbalancedNodes(root.right);
  }
}

console.log(fixNodes(root));
