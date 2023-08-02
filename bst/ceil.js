const root = require("./search");

function findCeil(root, val) {
  let res = null;
  let current = root;
  while (current) {
    if (current.data == val) {
      return current;
    }
    if (current.data < val) {
      current = current.right;
    } else {
      res = current;
      current = current.left;
    }
  }
  return res.data;
}

function findCeilRec(root, val) {
  if (!root) return null;
  if (root.data == val) {
    return root.data;
  }
  if (root.data < val) {
    return findCeilRec(root.right, val);
  }
  let leftCeil = findCeilRec(root.left, val);
  if (leftCeil && leftCeil.data >= val) {
    return leftCeil.data;
  } else {
    return root.data;
  }
}

console.log(findCeil(root, 45), findCeilRec(root, 42));

//            50
//      20          60
// 12       40
