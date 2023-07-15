const Queue = require("../queue/qlinkl");
const root = require("./tree");

function lca(root, n1, n2) {
  if (!root) return null;
  if (root.data == n1) {
    return root;
  }
  if (root.data == n2) {
    return root;
  }
  const lcaLeft = lca(root.left, n1, n2);
  const lcaRight = lca(root.right, n1, n2);
  if (lcaLeft && lcaRight) {
    return root;
  }
  if (lcaLeft) {
    return lcaLeft;
  } else {
    return lcaRight;
  }
}
