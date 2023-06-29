function kDistance(root, k) {
  if (!root) return;
  if (k == 0) console.log(root.data);
  else {
    kDistance(root.left, k - 1);
    kDistance(root.right, k - 1);
  }
}

const root = require("./tree");
kDistance(root, 3);
