const root = require("./search");

function findFloor(root, val) {
  if (!root) return null;
  if (root.data == val) {
    return root.data;
  }
  if (root.data > val) {
    return findFloor(root.left, val);
  }

  const rightFloor = findFloor(root.right, val);
  if (rightFloor && rightFloor <= val) {
    return rightFloor;
  } else {
    return root.data;
  }
}

console.log(findFloor(root, 21));

//            50
//      20          60
// 10       40
