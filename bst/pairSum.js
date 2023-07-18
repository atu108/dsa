const root = require("./search");

function hasPair(root, sum, hash = {}) {
  if (!root) return false;
  if (hasPair(root.left, sum, hash)) return true;
  if (hash[sum - root.data]) {
    return true;
  }
  hash[root.data] = true;
  return hasPair(root.right, sum, hash);
}

//            50
//      20          60
// 12       40

console.log(hasPair(root, 80));
