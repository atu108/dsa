const Queue = require("../queue/qlinkl");
const root = require("./tree");

function size(root) {
  if (!root) return 0;
  return size(root.left) + size(root.right) + 1;
}

console.log(size(root));
