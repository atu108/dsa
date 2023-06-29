const Queue = require("../queue/qlinkl");
const root = require("./tree");

function max(root) {
  if (!root) return 0;
  return Math.max(
    root.data,
    Math.max(max(root.left)),
    Math.max(max(root.right))
  );
}

console.log(max(root));
