/*
    construct a tre using in order and pre order traversal
*/

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

let preIndex = 0;
function ctree(preArr, inArr, s, e) {
  if (s > e) return null;
  let root = new Node(preArr[preIndex]);
  preIndex = preIndex + 1;
  let i = s;
  for (; i <= e; i++) {
    if (inArr[i] == root.data) {
      break;
    }
  }

  root.left = ctree(preArr, inArr, s, i - 1);
  root.right = ctree(preArr, inArr, i + 1, e);
  return root;
}

const inArr = [20, 10, 40, 30, 50];
const preArr = [10, 20, 30, 40, 50];
ctree(preArr, inArr, 0, 4);
