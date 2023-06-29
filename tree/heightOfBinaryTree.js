function height(root) {
  if (!root) return 0;
  return Math.max(height(root.left), height(root.right)) + 1;
}

const root = require("./tree");
console.log(height(root));
