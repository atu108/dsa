function inOrder(root) {
  if (!root) return;
  inOrder(root.left);
  console.log(root.data);
  inOrder(root.right);
}

const root = require("./tree");
inOrder(root);
