const root = require("./search");

function verticalSum(root, pos = 0, hash = {}) {
  if (!root) return hash;
  if (hash[pos]) {
    hash[pos] = hash[pos] + root.data;
  } else {
    hash[pos] = root.data;
  }
  verticalSum(root.left, pos - 1, hash);
  verticalSum(root.right, pos + 1, hash);
  return hash;
}

console.log(verticalSum(root));

//            50
//      20          60
// 12       40
