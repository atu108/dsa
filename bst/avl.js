// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

// AVLTree class
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Get the height of a node
  getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // Get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Rotate left at the given node
  rotateLeft(node) {
    const newRoot = node.right;
    const temp = newRoot.left;

    // Perform rotation
    newRoot.left = node;
    node.right = temp;

    // Update heights
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height =
      Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

    return newRoot;
  }

  // Rotate right at the given node
  rotateRight(node) {
    const newRoot = node.left;
    const temp = newRoot.right;

    // Perform rotation
    newRoot.right = node;
    node.left = temp;

    // Update heights
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height =
      Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

    return newRoot;
  }

  // Insert a new node into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    // Perform standard BST insertion
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in AVL tree
      return node;
    }

    // Update height of the current node
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // Check the balance factor and rebalance if necessary
    const balanceFactor = this.getBalanceFactor(node);

    // Left Left Case
    if (balanceFactor > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balanceFactor < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    // Left Right Case
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Left Case
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // In-order traversal of the AVL tree
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// Example usage:
const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

console.log("In-order traversal of the AVL tree:");
avlTree.inOrderTraversal(avlTree.root);
