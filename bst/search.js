class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this.root;
    }
    let current = this.root;
    while (current) {
      if (current.data < value) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
      if (current.data > value) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      }
    }
    return this.root;
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (current.data == value) return true;
      if (current.data > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

const bst = new BST();
bst.insert(50);
bst.insert(20);
bst.insert(12);
bst.insert(40);
const root = bst.insert(60);
module.exports = root;

//            50
//      20          60
// 10       40
