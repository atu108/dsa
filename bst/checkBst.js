//const root = require("./search");
function checkBst(root, low = -Infinity, high = Infinity) {
  if (!root) return true;
  return (
    root.data > low &&
    root.data < high &&
    checkBst(root.left, low, root.data) &&
    checkBst(root.right, root.data, high)
  );
}

let prev = -Infinity;
function checkBst2(root) {
  if (!root) return true;
  if (!checkBst2(root.left)) return false;
  if (root.data <= prev) return false;
  prev = root.data;
  return checkBst2(root.right);
}

//            50
//      40          70
// 30            10

class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(50);
let rootLeft = new Node(40);
let rootLeftLeft = new Node(30);
let rootRight = new Node(70);
let rootRightLeft = new Node(80);

root.left = rootLeft;
root.left.left = rootLeftLeft;
root.right = rootRight;
root.right.left = rootRightLeft;

console.time("m1");
console.log(checkBst2(root));
console.timeEnd("m1");
console.time("m2");
console.log(checkBst(root));
console.timeEnd("m2");
